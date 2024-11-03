'use client';
import { SelectorProfileProps } from './SelectorProfile.types';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useCurrentNetflixUser } from '@/hooks/use-current-user';
import { UserNetflix } from '@prisma/client';
import Image from 'next/image';
import { ChevronDown, LogOut, Pencil } from 'lucide-react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export function SelectorProfile(props: SelectorProfileProps) {
	const { users } = props;

	const router = useRouter();
	const { changeCurrentUser, currentUser } = useCurrentNetflixUser();

	const onChangeUser = (userNetflix: UserNetflix) => {
		changeCurrentUser(userNetflix);

		router.refresh();
	};
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className="flex gap-1 items-center">
					<Image
						src={currentUser?.avatarUrl ?? '/profiles/profile-1.png'}
						alt="Profile image"
						width={40}
						height={40}
					/>
					<ChevronDown />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56 p-2 bg-black/80 border-transparent">
				{users.map(user => (
					<DropdownMenuItem
						key={user.id}
						onClick={() => onChangeUser(user)}
						className="flex gap-2 mb-3 group cursor-pointer"
					>
						<Image
							src={user.avatarUrl ?? '/profiles/profile-1.png'}
							alt="Profile image"
							width={30}
							height={30}
						/>
						<p className="text-white group-hover:text-black">
							{user.profileName}
						</p>
					</DropdownMenuItem>
				))}
				<DropdownMenuItem
					className="flex gap-2 mb-3 text-white cursor-pointer"
					onClick={() => router.push('/profiles')}
				>
					<Pencil className="w-4 h-4" />
					Administrar Perfiles
				</DropdownMenuItem>
				<DropdownMenuItem
					className="flex gap-2 mb-3 text-white cursor-pointer"
					onClick={() => signOut()}
				>
					<LogOut className="w-4 h-4" />
					Cerrar Sesión
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
