const Social = () => (
  <div className="social">
    <ul>
        <a href="https://github.com/johnnyqbui" target="_blank">
            <li className="github">
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
    <style>{`
        .social {
            position: fixed;
            top: 50%;
            transform: translateY(-50%);
            z-index: 2;
            margin: 0 30px;
        }

        .social ul {
            margin: 0;
            padding: 0;
        }

        .social li {
            list-style-type: none;
            padding: 10px;
            margin: 30px 0;
        }

        .social img {
            width: 25px;
        }
    `}</style>
  </div>
)


export default Social