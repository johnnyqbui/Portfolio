import Head from 'next/head'
import stylesheet from '../styles/stylesheet.css'

const Header = () => (
    <Head>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="description" content="Johnny Bui's Portolio, a Front End Web Developer looking to bring
        the next beautiful, creative, and functional web sites and apps to life."/>
        <meta name="author" content="Johnny Bui"/>
        <title>Johnny Bui | Front End Web Developer Portfolio</title>
        <link rel="canonical" href="https://johnnyqbui.com"/>
        <meta name="google-site-verification" content="9rPONvBGFupjc1fXfLNbAPLC1-ka3UyFxw5pHzuwac4"/>
        <link href="https://fonts.googleapis.com/css?family=Raleway:200,300,500" rel="stylesheet"/>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
)

export default Header