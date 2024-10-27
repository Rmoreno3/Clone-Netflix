'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { z } from 'zod';
import { formSchema } from './RegisterForm.form';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export function RegisterForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
			repeatPassword: '',
		},
	});

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input
									placeholder="Correo electronico"
									{...field}
									type="email"
									className="h-14 text-white"
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
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									placeholder="Password"
									{...field}
									type="password"
									className="h-14 text-white"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="repeatPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Repeat Password</FormLabel>
							<FormControl>
								<Input
									placeholder="Repeat Password"
									{...field}
									type="password"
									className="h-14 text-white"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="w-full bg-[#E50914]">
					Registrarse
				</Button>
			</form>
		</Form>
	);
}
