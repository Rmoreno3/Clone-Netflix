'use client';
import { ArrowLeft } from 'lucide-react';
import { NavBarFilmProps } from './NavBarFilm.types';
import { useRouter } from 'next/navigation';
export function NavBarFilm(props: NavBarFilmProps) {
	const { titleMovie } = props;
	const router = useRouter();

	const backToHome = () => {
		router.back();
	};
	return (
		<nav className="fixed flex gap-2 p-5 cursor-pointer items-center z-10 bg-zinc-900/70 ">
			<ArrowLeft className="h-5 w-5" onClick={backToHome} />
			<p>
				Estas viendo: <span className="font-bold">{titleMovie}</span>
			</p>
		</nav>
	);
}
