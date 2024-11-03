import { db } from '@/lib/db';
import { redirect } from 'next/navigation';
import { NavBarFilm } from './components/NavBarFilm';
import { MovieVideo } from './components/MovieVideo';
export default async function MovieIdPage({
	params,
}: {
	params: { movieId: string };
}) {
	const movieFilm = await db.movie.findUnique({
		where: {
			id: params.movieId,
		},
	});

	const popularMovie = await db.popularMovie.findUnique({
		where: {
			id: params.movieId,
		},
	});

	if (!movieFilm && !popularMovie) {
		return redirect('/');
	}

	const currentMovie = movieFilm
		? movieFilm.movieVideo
		: popularMovie
		? popularMovie.movieVideo
		: '';

	const titleMovie = movieFilm
		? movieFilm.title
		: popularMovie
		? popularMovie.title
		: '';
	return (
		<div className="h-full w-full">
			<NavBarFilm titleMovie={titleMovie} />
			<MovieVideo currentMovie={currentMovie} />
		</div>
	);
}
