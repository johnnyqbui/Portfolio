import Head from 'next/head'
import stylesheet from '../styles/stylesheet.scss'

const Header = () => (
    <div>
        <Head>
            <title>Johnny Bui | Front End Web Developer</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link href="https://fonts.googleapis.com/css?family=Raleway:200" rel="stylesheet"/>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
    </div>
)

export default Header