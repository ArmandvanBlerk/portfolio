import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';
import ReactGA from 'react-ga';

const BaseLayout = (props) => {
  const { className, children, isAuthenticated, user, isSiteOwner, cannonical } = props;
  const headerType = props.headerType || 'default';
  const title = props.title || 'Armand van Blerk Portfolio';

  function initializeReactGA() {
    ReactGA.initialize('UA-154165321-1');
    ReactGA.pageview('/index', '/about', '/portfolios', '/cv', '/blog');
}

  return (
    <React.Fragment>
      <Head>
      {/* GOOGLE TRACKING SCRIPT */}
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-154165321-1"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', 'UA-154165321-1');
          </script> */}

        <title>{title}</title>
        <meta name="description" content="My name is Armand van Blerk and I am a Full stack Developer whom specializes in the MERN stack." />
        <meta name="keywords" content="armand portfolio, armand developer, armand freelancing, armand programming"/>
        <meta property="og:title" content="Armand van Blerk - programmer, developer, bloger" />
        <meta property="og:locale" content="en_EU" />
        <meta property="og:url" content={`${process.env.BASE_URL}`}/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="My name is Armand van Blerk and I am an experienced software engineer and freelance developer."/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"/>
        {cannonical && <link rel="cannonical" href={`${process.env.BASE_URL}${cannonical}`}/>}
        <link rel="icon" type="image/ico" href="/static/favicon.ico"/>
      </Head>
      <div className="layout-container" >
        <Header className={`port-nav-${headerType}`}
                isAuthenticated={isAuthenticated}
                user={user}
                isSiteOwner={isSiteOwner}/>
        <main className={`cover ${className}`}>
          <div className="wrapper">
            {children}
          </div>
        </main>
      </div>
    </React.Fragment>
  )
}

export default BaseLayout;

