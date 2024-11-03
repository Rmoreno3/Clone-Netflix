'use client';
import { Button } from '@/components/ui/button';
import { ActionsButtonsProps } from './ActionsButtons.types';
import { ChevronDown, Play, ThumbsDown, ThumbsUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useLovedFilms } from '@/hooks/use-loved-films';

export function ActionsButtons(props: ActionsButtonsProps) {
	const { movieId, movie, isMyList } = props;
	const { addLovedFilm, removeLovedFilm } = useLovedFilms();

	const router = useRouter();

	const onPlayButton = () => {
		router.push(`/movie/${movieId}`);
	};

	const onAddToMyList = () => {
		addLovedFilm(movie);
	};

	const onRemoveFromMyList = () => {
		removeLovedFilm(movieId);
	};

	return (
		<div className="flex justify-between mb-5">
			<div className="flex gap-2 ">
				<Button
					size="icon"
					variant="ghost"
					className="bg-slate-50 rounded-full flex itemns-center justify-center h-7 w-7 "
					onClick={onPlayButton}
				>
					<Play className="text-zinc-900 h-3 w-3 fill-zinc-900" />
				</Button>

				{isMyList ? (
					<Button
						size="icon"
						variant="ghost"
						className="bg-zinc-900 border-2 border-gray-400 rounded-full flex items-center justify-center w-7 h-7"
						onClick={onRemoveFromMyList}
					>
						<ThumbsDown
							className="text-slate-50 fill-zinc-900 h-3 w-3 hover:text-zinc-900"
							width={10}
							height={10}
						/>
					</Button>
				) : (
					<Button
						size="icon"
						variant="ghost"
						className="bg-zinc-900 border-2 border-gray-400 rounded-full flex items-center justify-center h-7 w-7"
						onClick={onAddToMyList}
					>
						<ThumbsUp className="text-slate-50 fill-zinc-900 h-3 w-3" />
					</Button>
				)}
			</div>

			<Button
				size="icon"
				variant="ghost"
				className="bg-zinc-900 border-2 border-gray-400 rounded-full flex items-center justify-center w-7 h-7 hover:bg-transparent hover:border-slate-50"
			>
				<ChevronDown width={10} height={10} className="text-slate-50 h-3 w-3" />
			</Button>
		</div>
	);
}
