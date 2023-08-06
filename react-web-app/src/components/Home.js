import "../styles/app.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* <Helmet>
        <html lang={site.lang} />
        <style type="text/css">{`${site.codeinjection_styles}`}</style>
        <body className={bodyClass} />
      </Helmet> */}

      <div className="viewport">
        <div className="viewport-top">
          <header
            className="site-head"
            // style={{
            //     ...(site.cover_image && {
            //         backgroundImage: `url(${site.cover_image})`,
            //     }),
            // }}
          >
            <div className="container">
                <div className="site-mast">
                    <div className="site-mast-left">
                        <Link to="/">
                          <img
                            className="site-logo"
                            src='/images/pokemon_title.png'
                            alt='logo'
                          />
                        </Link>
                    </div>
                    <div className="site-mast-right">
                        {/* {site.twitter && (
                            <a
                                href={twitterUrl}
                                className="site-nav-item"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="site-nav-icon"
                                    src="/images/icons/twitter.svg"
                                    alt="Twitter"
                                />
                            </a>
                        )} */}
                        {/* {site.facebook && (
                            <a
                                href={facebookUrl}
                                className="site-nav-item"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="site-nav-icon"
                                    src="/images/icons/facebook.svg"
                                    alt="Facebook"
                                />
                            </a>
                        )} */}
                        <a
                            className="site-nav-item"
                            // href={`https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="site-nav-icon"
                                src="/images/icons/rss.svg"
                                alt="RSS Feed"
                            />
                        </a>
                    </div>
                </div>
                {/* {isHome ? (
                  <div className="site-banner">
                    <h1 className="site-banner-title">
                      {site.title}
                    </h1>
                    <p className="site-banner-desc">
                      {site.description}
                    </p>
                  </div>
                ) : null} */}
              <nav className="site-nav">
                <div className="site-nav-left">
                  {/* The navigation items as setup in Ghost */}
                  {/* <Navigation
                      data={site.navigation}
                      navClass="site-nav-item"
                  /> */}
                </div>
                <div className="site-nav-right">
                  {/* <Link
                      className="site-nav-button"
                      to="/about"
                  >
                      About
                  </Link> */}
                </div>
              </nav>
            </div>
          </header>

          <main className="site-main">
            {/* All the main content gets inserted here, index.js, post.js */}
            {/* {children} */}
          </main>
        </div>

        <div className="viewport-bottom">
          {/* The footer at the very bottom of the screen */}
          <footer className="site-foot">
            <div className="site-foot-nav container">
              <div className="site-foot-nav-left">
                {/* <Link to="/">{site.title}</Link> © 2021 &mdash; */}
                Published with{" "}
                <a
                    className="site-foot-nav-item"
                    href="https://ghost.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ghost
                </a>
              </div>
              <div className="site-foot-nav-right">
                {/* <Navigation
                    data={site.navigation}
                    navClass="site-foot-nav-item"
                /> */}
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
