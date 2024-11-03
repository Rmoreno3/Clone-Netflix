import { FilmGenresProps } from './FilmGenres.types';

export function FilmGenres(props: FilmGenresProps) {
	const { genres } = props;

	return (
		<div className="flex gap-2 text-[10px] text-white">
			{genres.map(genre => (
				<p
					className="font-semibold border-[1px] border-white px-2 rounded-xl"
					key={genre}
				>
					{genre}
				</p>
			))}
		</div>
	);
}
