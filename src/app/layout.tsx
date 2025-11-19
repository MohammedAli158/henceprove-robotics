import { Bricolage_Grotesque } from 'next/font/google';
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  weight: '400', // Or your desired weight
  subsets: ['latin'],
});


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${bricolage.className} antialiased`}>{children}</body>
		</html>
	);
}
