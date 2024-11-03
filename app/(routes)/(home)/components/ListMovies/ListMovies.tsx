'use client';
import { BlockMovies } from '@/components/Shared/BlockMovies';
import { ListMoviesProps } from './ListMovies.types';
import { useLovedFilms } from '@/hooks/use-loved-films';
import { useCurrentNetflixUser } from '@/hooks/use-current-user';

export function ListMovies(props: ListMoviesProps) {
	const { movies } = props;
	const { lovedFilmsByUser } = useLovedFilms();
	const { currentUser } = useCurrentNetflixUser();

	const userNetflix = currentUser?.id;
	const lovedFilms = userNetflix ? lovedFilmsByUser[userNetflix] : [];

	return (
		<div>
			<BlockMovies
				title="Peliculas Favoritas"
				movies={lovedFilms}
				isMyList={true}
			/>
			<BlockMovies
				title="Peliculas Mas Recientes"
				movies={movies}
				isMyList={false}
			/>
		</div>
	);
}
