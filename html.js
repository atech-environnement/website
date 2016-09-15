import React from 'react';
import DocumentTitle from 'react-document-title';

import { prefixLink } from 'gatsby-helpers';

const BUILD_TIME = new Date().getTime();

module.exports = React.createClass({
  propTypes () {
    return {
      title: React.PropTypes.string,
    }
  },
  render () {
    const title = DocumentTitle.rewind();

    let css;
    if (process.env.NODE_ENV === 'production') {
      css = <link rel="stylesheet" href={prefixLink(`/styles.css?t=${BUILD_TIME}`)} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 maximum-scale=1.0"
          />
          <title>{title}</title>
          <meta name="description"
                content="Investigations des sols, gaz du sol et eaux souterrainnes dans des zones à accès difficile." />
          <meta property="og:title" content={title} />
          <meta property="og:type" content="website" />

          <link rel="shortcut icon" href={this.props.favicon} />
          <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css' />
          <link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css' />
          <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css' rel='stylesheet' type='text/css' />
          {css}

          <script dangerouslySetInnerHTML={{ __html: `
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-83770119-1', 'auto');
            ga('send', 'pageview');
          ` }}></script>
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    )
  },
});
