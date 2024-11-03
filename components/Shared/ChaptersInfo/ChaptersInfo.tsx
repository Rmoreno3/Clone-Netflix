import { cn } from '@/lib/utils';
import { ChaptersInfoProps } from './ChaptersInfo.types';

export function ChaptersInfo(props: ChaptersInfoProps) {
	const { age, duration } = props;

	const colorByAge = (age: string) => {
		if (age === '0') {
			return 'bg-green-500';
		}
		if (age === '12') {
			return 'bg-yellow-400 text-black';
		}
		if (age === '16') {
			return 'bg-orange-500';
		}
		if (age >= '18') {
			return 'bg-red-600';
		}
	};

	return (
		<div className="flex gap-1 mb-3 items-center">
			<p
				className={cn(
					'bg-orange-500 text-white w-fit rounded-md font-semibold text-[10px] h-fit py-0.5 px-1',
					colorByAge(age)
				)}
			>
				+{age}
			</p>
			<p className="text-slate-50 text-[12px] flex itemns-center">{duration}</p>
			<p className="border-[1px] border-gray-400 px-2 text-[0.5rem] text-gray-400 flex items-center justify-center rounded-md h-[15px]">
				HD 4k
			</p>
		</div>
	);
}
