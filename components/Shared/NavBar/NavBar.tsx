import { NavBarProps } from './Navbar.types';
import NavBarDesktop from './NavBarDesktop/NavBarDesktop';
import NavBarMobile from './NavBarMobile/NavBarMobile';

function NavBar(props: NavBarProps) {
	const { users } = props;

	return (
		<nav>
			<div className="lg:block mx-auto md:hidden max-sm:hidden">
				<NavBarDesktop users={users} />
			</div>
			<div className="lg:hidden">
				<NavBarMobile users={users} />
			</div>
		</nav>
	);
}

export { NavBar };
