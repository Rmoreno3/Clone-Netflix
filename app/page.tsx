import { NavBar } from '@/components/Shared/NavBar';
import { SliderVideo } from './(routes)/(home)/components/SliverVideo/SliderVideo';

export default function Home() {
	return (
		<div className="relative bg-zinc-900">
			<NavBar />
			<SliderVideo />
		</div>
	);
}
