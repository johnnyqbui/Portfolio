const Layout = ({menuOpen, children}) => {
	const pageScale = menuOpen ? 'pageWrap pageWrapActive' : 'pageWrap'
	return (
		<div className={pageScale}>
	        {children}
	    </div>
	)
}

export default Layout