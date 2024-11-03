import { Movie } from '@prisma/client';

export type CarrouselMovieProps = {
	movies: Movie[];
	isMyList: boolean;
};
