'use client';
import { Button } from '@/components/ui/button';
import { trendingMovies } from './TrendingMovies.data';
import axios from 'axios';
import { useState } from 'react';
import { Upload } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export default function TrendingMovies() {
	const [isLoading, setIsLoading] = useState(false);
	const uploadTrendingMovies = async () => {
		setIsLoading(true);
		try {
			await axios.post('/api/create-popular-movies', {
				movies: trendingMovies,
			});
			toast({ title: '¡Peliculas subidas correctamente!✅' });
			setIsLoading(false);
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	};
	return (
		<div className="border rounded-lg border-white-400 p-6 hover:bg-slate-500 transition-all duration-300 ">
			<h1 className="text-xl font-bold mb-4">Subir Peliculas Populares</h1>
			<Button
				className='w-full variant=["outline"]'
				onClick={uploadTrendingMovies}
				disabled={isLoading}
			>
				Subir Peliculas
				<Upload className="w-4 h-4 ml-2" />
			</Button>
		</div>
	);
}
