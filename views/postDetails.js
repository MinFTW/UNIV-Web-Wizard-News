const html = require('html-template-tag');

const postDetails = (post) => html `<DOCTYPE html>
  <html>
    <head>
      <title>Wizard News</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <div class="news-list">
        <header><img src="/logo.png"/>Wizard News</header>
          <p class="news-item">
            </span>${post.title}
            <small>(by ${post.name})</small>
          </p>
          <p class="news-item">
            ${post.content}
          </p>
      </div>
    </body>
  </html> 
`;

module.exports = { postDetails };
