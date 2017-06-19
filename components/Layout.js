import Header from './Header'
import Social from './Social'

const Layout = (props) => (
    <div className="page-wrap">
        <Header />
        {props.children}
        <Social />
    </div>
)

export default Layout