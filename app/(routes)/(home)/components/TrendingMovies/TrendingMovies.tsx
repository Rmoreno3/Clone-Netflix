import Image from 'next/image';
import { TrendingMoviesProps } from './TrendingMovies.types';
import InfoExtraFilm from './InfoExtraFilm/InfoExtraFilm';

export async function TrendingMovies(props: TrendingMoviesProps) {
	const { movies } = props;
	return (
		<div className="pt-11 md:pt-0 md:-top-24 lg:-top-28 relative px-[4%]">
			<h3 className="text-2xl font-semibold mb-3">
				Las Series Mas Populares de hoy en: Venezuela
			</h3>

			<div>
				<div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
					{movies.map(movie => (
						<div
							key={movie.id}
							className="cursor-pointer transition delay-300 hover:h-[14vh] group relative"
						>
							<div className="flex transition group-hover:opacity-90 delay-300 w-full justify-center">
								<Image
									src={`https://raw.githubusercontent.com/ratasi/images-netflix-clone/refs/heads/main/ranking/${movie.ranking}.png`}
									alt="number"
									width={116}
									height={150}
									className="h-auto w-auto lg:max-w-full"
								/>
								<Image
									src={movie.thumbnailUrl}
									alt="Image movie"
									width={116}
									height={150}
									className="h-auto w-auto md:max-w-[180px] lg:max-h-full"
								/>
							</div>
							<InfoExtraFilm movie={movie} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
