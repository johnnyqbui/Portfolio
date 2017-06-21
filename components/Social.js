const Social = ({menuOpen}) => {
    const socialActive = menuOpen ? 'social socialActive' : 'social';
    return (
        <div className={socialActive}>
            <ul>
                <a href="https://github.com/johnnyqbui" target="_blank">
                    <li>
                        <img src="/static/github.png"/>
                    </li>
                </a>
                <a href="https://www.linkedin.com/in/johnnyqbui/" target="_blank">
                    <li>
                        <img src="/static/linkedin.png"/>
                    </li>
                </a>
                <a href="https://www.instagram.com/jqbui/" target="_blank">
                    <li>
                        <img src="/static/instagram.png"/>
                    </li>
                </a>
                <a href="https://codepen.io/jbui/" target="_blank">
                    <li>
                        <img src="/static/codepen.png"/>
                    </li>
                </a>
            </ul>
          </div>
    )
}


export default Social