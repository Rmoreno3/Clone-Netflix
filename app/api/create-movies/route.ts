import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	const { movies } = await req.json();

	if (!movies || !Array.isArray(movies) || movies.length === 0) {
		return NextResponse.json(
			{ error: 'Movies data is required' },
			{ status: 400 }
		);
	}

	try {
		const createdMovies = await Promise.all(
			movies.map(async movie => {
				const {
					id,
					title,
					thumbnailUrl,
					genre,
					age,
					duration,
					trailerVideo,
					movieVideo,
				} = movie;

				if (
					!title ||
					!thumbnailUrl ||
					!genre ||
					!age ||
					!duration ||
					!trailerVideo ||
					!movieVideo
				) {
					throw new Error(`Missing data for movie ${title}`);
				}

				return await db.movie.create({
					data: {
						id,
						title,
						thumbnailUrl,
						genre,
						age,
						duration,
						trailerVideo,
						movieVideo,
						createdAt: new Date(),
					},
				});
			})
		);

		return NextResponse.json(createdMovies, { status: 201 });
	} catch (error) {
		console.log(error);
		return new NextResponse('Internal Error', { status: 500 });
	}
}
