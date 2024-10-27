'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { formSchema } from './LoginForm.form';
import { useState } from 'react';
import FormError from './FormError/FormError';

export function LoginForm() {
	const [error, setError] = useState<string | undefined>('');

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		// TODO: put set error
		console.log(values);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col w-full gap-4"
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder="example@example.com"
									{...field}
									className="h-14 text-white"
									type="email"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder="password"
									{...field}
									type="password"
									className="h-14 text-white"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormError message={error} />
				<Button type="submit" className="w-full bg-[#E50914]">
					Iniciar Sesión
				</Button>
			</form>
		</Form>
	);
}
