import Navbar from './Navbar'
import Footer from './Footer'

const Layout = props => (
    <div>
        <Navbar />
            <div className='content'>{props.children}</div>
        <Footer />
    </div>
)

export default Layout