import Outer from '../components/Outer-Container'

export default () => (
	<Outer>
        <header className="title">
            <h1>
                <span>J</span>
                <span>o</span>
                <span>h</span>
                <span>n</span>
                <span>n</span>
                <span>y</span> <span>B</span>
                <span>u</span>
                <span>i</span>
            </h1>
            <h2>Front End Web Developer</h2>
            <h3>Bringing Ideas to Life</h3>
        </header>
        <style jsx>{`
            .title {
                text-align: center;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            .title h1 {
                margin: 0 0 5px 0;
                letter-spacing: 5px;
            }
            .title h2 {
                margin: 0 0 5px 0;
                letter-spacing: 2px;
                font-size: 1.2em;
            }
            .title h3 {
                margin: 0 0 5px 0;
                letter-spacing: 2px;
            }
        `}</style>
	</Outer>
)