export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="bg-zinc-900">
				<h1>Layout login</h1>
				{children}
			</body>
		</html>
	);
}
