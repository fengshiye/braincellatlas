import React from 'react';

const HTMLPage = () => {
  const html = `
  <html lang="en">
    <head><meta charset="utf-8"/>
    <link rel="shortcut icon" href="./favicon.ico"/>
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"/>
    <meta name="theme-color" content="#000000"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
    <link rel="manifest" href="{{ site.url }}{{ site.baseurl }}/cirro/manifest.json"/>
    <title>Cirro</title>
    <script defer="defer" src="{{ site.url }}{{ site.baseurl }}/cirro/static/js/main.2da683ed.js"></script>
    </head>
    <style>body{margin:0}.cirro-active{fill:rgb(220,0,78)!important;color:#dc004e!important}.cirro-chart-legend{padding:10px;vertical-align:top;overflow:auto;font-size:14px;font-family:"Roboto Condensed",Helvetica,Arial,sans-serif}.cirro-condensed{font-size:14px;font-family:"Roboto Condensed",Helvetica,Arial,sans-serif}</style>
    <body><noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    </body>
    </html>
  `;
  
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default HTMLPage;