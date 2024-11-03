'use client';
import dynamic from 'next/dynamic';
import { InfoExtraFilmProps } from './InfoExtraFilm.types';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
export default function InfoExtraFilm(props: InfoExtraFilmProps) {
	const { movie } = props;
	return (
		<div
			className="opacity-0 absolute top-0 transition-all duration-300 z-10 invisible sm:visible delay-300 w-full bg-zinc-900 rounded-lg scale-0 
  group-hover:lgs:scale-150 group-hover:md:scale-150 group-hover:-translate-y-[5vw] group-hover:opacity-100"
		>
			<div className="aspect-video">
				<ReactPlayer
					url={movie.trailerVideo}
					loop={true}
					width="100%"
					height="100%"
					playing={true}
					muted={true}
					controls={false}
				/>
			</div>

			<div className="p-4 shadow-lg"></div>
		</div>
	);
}
