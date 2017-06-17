import Canvas from './Canvas'

const Title = () => (
    <div>
        <div className="title">
            <h1>Johnny Bui</h1>
            <h2>Front End Web Developer</h2>
        </div>
        <Canvas />
        <style jsx>{`
            .title {
                text-align: center;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 2;
                color: white;
            }

            .title h1 {
                margin: 0 0 5px 0;
                letter-spacing: 5px;
            }
            .title h2 {
                margin: 0;
                letter-spacing: 2px;
                font-size: 1.2em;
            }
        `}</style>
    </div>
)

export default Title