import { db } from '@/lib/db';

export const getUserByEmail = async (email: string) => {
	if (!email) return null;

	try {
		const user = await db.user.findUnique({
			where: {
				email,
			},
		});
		return user;
	} catch (error) {
		console.error(error);
		return null;
	}
};

// Con esta funccion recibimos el email y validamos en db si existe o no el usuario
