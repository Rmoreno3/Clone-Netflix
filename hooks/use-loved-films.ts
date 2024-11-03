import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { Movie } from '@prisma/client';
import { toast } from './use-toast';
import { useCurrentNetflixUser } from './use-current-user';

interface UseAddFilmMyList {
	lovedFilmsByUser: { [userId: string]: Movie[] };
	addLovedFilm: (data: Movie) => void;
	removeLovedFilm: (id: string) => void;
}

export const useLovedFilms = create(
	persist<UseAddFilmMyList>(
		(set, get) => ({
			lovedFilmsByUser: {},
			addLovedFilm: (data: Movie) => {
				const { currentUser } = useCurrentNetflixUser.getState(); // Get the current user

				if (!currentUser) {
					return toast({ title: 'Ningun usuario seleccionado ❌' });
				}

				const currentLovedItems = get().lovedFilmsByUser[currentUser.id] || [];
				const existingItem = currentLovedItems.find(
					item => item.id === data.id
				);

				if (existingItem) {
					return toast({
						title: 'Pelicula ya agregada 👀',
						variant: 'destructive',
					});
				}

				set({
					lovedFilmsByUser: {
						...get().lovedFilmsByUser,
						[currentUser.id]: [...currentLovedItems, data],
					},
				});

				toast({
					title: 'Pelicula agregada a tu lista✅',
				});
			},

			removeLovedFilm: (id: string) => {
				const { currentUser } = useCurrentNetflixUser.getState(); // Get the current user

				if (!currentUser) {
					return toast({
						title: 'Ningun usuario seleccionado ❌',
						variant: 'destructive',
					});
				}

				const currentLovedItems = get().lovedFilmsByUser[currentUser.id] || [];

				set({
					lovedFilmsByUser: {
						...get().lovedFilmsByUser,
						[currentUser.id]: currentLovedItems.filter(item => item.id !== id),
					},
				});

				toast({
					title: 'Pelicula eliminada de tu lista ✅',
				});
			},
		}),
		{
			name: 'add-loved-films-by-user',
			storage: createJSONStorage(() => localStorage),
		}
	)
);
