import { BlockMovies } from '@/components/Shared/BlockMovies';
import { ListMoviesProps } from './ListMovies.types';

export function ListMovies(props: ListMoviesProps) {
	const { movies } = props;
	return (
		<div>
			<BlockMovies
				title="Peliculas Mas Recientes"
				movies={movies}
				isMyList={false}
			/>
		</div>
	);
}
