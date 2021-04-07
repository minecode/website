import Navbar from './Navbar';
import Footer from './Footer';

const Layout = props => (
	<>
		<main>
			<Navbar />
			<div className='content'>{props.children}</div>
		</main>
		<Footer />
	</>
);

export default Layout;