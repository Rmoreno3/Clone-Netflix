import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { getUserByEmail } from './data/user';
import bcryptjs from 'bcryptjs';
import { signInSchema } from './lib/zod';

export default {
	providers: [
		Credentials({
			async authorize(credentials) {
				// Validamos el email y la contraseña
				const validateFields = signInSchema.safeParse(credentials);

				// Si no es exitoso, devolvemos null
				if (!validateFields.success) {
					return null;
				}
				if (validateFields.success) {
					const { email, password } = validateFields.data;
					const user = await getUserByEmail(email);
					// Si no existe el usuario o la contraseña es incorrecta, devolvemos null
					if (!user || !user.password) return null;

					// comparamos la contrasena del formulario con la contraseña en la base de datos
					const passwordMatch = await bcryptjs.compare(password, user.password);

					if (passwordMatch) return user;
				}
				return null;
			},
		}),
	],
} satisfies NextAuthConfig;
