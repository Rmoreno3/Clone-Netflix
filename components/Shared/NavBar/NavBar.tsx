import NavBarDesktop from './NavBarDesktop/NavBarDesktop';
import NavBarMobile from './NavBarMobile/NavBarMobile';

function NavBar() {
	return (
		<nav>
			<div className="hidden mx-auto md:block">
				<NavBarDesktop />
			</div>
			<div className="md:hidden">
				<NavBarMobile />
			</div>
		</nav>
	);
}

export { NavBar };
