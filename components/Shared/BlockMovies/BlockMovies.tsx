import { BlockMoviesProps } from './BlockMovies.types';
import { CarrouselMovie } from './CarrouselMovie';

export function BlockMovies(proops: BlockMoviesProps) {
	const { title, movies, isMyList } = proops;

	if (!movies || movies.length === 0) {
		return null;
	}

	return (
		<div className="overflow-hidden -top-16 relative px-[4%] md:pt-20 md:pb-20  bg-[#171717]">
			<h3 className="text-2xl font-semibold mb-3">{title}</h3>
			<CarrouselMovie movies={movies} isMyList={isMyList} />
		</div>
	);
}
