import Nav from './Nav'

const Menu = ({menuOpen, onCloseMenu, onToggleMenu}) => {
    const morph = menuOpen ? 'menu morphClose' : 'menu morphOpen';
    const overlay = menuOpen ? 'overlay overlay--active' : 'overlay delayed-Z';
    return (
        <div className='rightMenu'>
            <div className='background__menu'></div>
            <div onClick={onCloseMenu.bind(this)} className={overlay}></div>
            <div onClick={onToggleMenu.bind(this)} className={morph}>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
            <Nav menuOpen={menuOpen}/>
        </div>
    )
}


export default Menu