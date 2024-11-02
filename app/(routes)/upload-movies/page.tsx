import { Logo } from '@/components/Shared/Logo';
import NormalMovie from './components/NormalMovie/NormalMovie';
import TrendingMovies from './components/TrendingMovies/TrendingMovies';

export default function UploadMoviesPage() {
	return (
		<div className="h-full flex flex-col justify-center items-center">
			<Logo />
			<h1 className="text-2xl my-8 font-semibold">
				Sube tus peliculas favoritas 🎬
			</h1>
			<div className="max-w-2xl mx-auto grid grid-cols-2 gap-4">
				<NormalMovie />
				<TrendingMovies />
			</div>
		</div>
	);
}
