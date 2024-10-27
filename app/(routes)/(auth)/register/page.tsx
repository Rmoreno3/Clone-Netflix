import Link from 'next/link';
import React from 'react';
import { Terms } from '../components/Terms';
import { RegisterForm } from './RegisterForm/RegisterForm';

export default function RegisterPage() {
	return (
		<div>
			<p className="text-3xl font-bold text-left mb-7">Registro de usuario</p>

			<RegisterForm />

			<div className="mt-4 flex gap-1">
				<p className="text-white opacity-70">ya tienes cuenta?</p>
				<Link href="/login" className="opacity-1 text-white">
					Inicia Sesion Aqui
				</Link>
			</div>

			<Terms />
		</div>
	);
}
