'use server';

import { signIn } from '@/auth';
import { signInSchema } from '@/lib/zod';
import { AuthError } from 'next-auth';
import { z } from 'zod';

export const login = async (values: z.infer<typeof signInSchema>) => {
	const validateFields = signInSchema.safeParse(values);

	if (!validateFields.success) {
		return { error: 'Invalids fields' };
	}

	const { email, password } = validateFields.data;

	try {
		await signIn('credentials', {
			email,
			password,
			redirectTo: '/profiles',
		});
		return { success: true };
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case 'CredentialsSignin':
					return { error: 'Invalid credentials' };
				default:
					return { error: 'Something went wrong' };
			}
		}
	}
};
