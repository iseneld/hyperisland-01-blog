// THUMBNAILS

function getThumbnails() {
  fetch("../data/posts.json")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        createThumbnail(data[i]); // Funcion call >>
      }
    });
}

function createThumbnail(post) {
  let thumbnail = `
 <article> 
    <a href="../pages/blog-post.html?id=${post.id}">
      <img src="${post.previewImage}" alt="image" />
      <h2>${post.title}</h2>
      <p>${post.shortSummary}</p>
    </a>
  </article>
  `;
  document.querySelector(".blog__thumbnails").innerHTML += thumbnail;
}

// BLOG POST

function getPostFromId() {
  var id = JSON.parse(findQuery("id")); // Funcion call >>

  fetch("../data/posts.json")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
          createPost(data[i]); // Funcion call >>
        }
      }
    });
}

function createPost(post) {
  document.querySelector(".blog__post h2").innerHTML = post.title;
  document.querySelector(".blog__post h3").innerHTML = post.fullSummary;
  let content = post.content;

  for (let i = 0; i < content.length; i++) {
    document.querySelector(".blog__post article").innerHTML += content[i];
  }

  let backLink = `
  <a href="./blog.html">Back to blog page</a>
  `;
  document.querySelector(".blog__post article").innerHTML += backLink;
}

// QUERY URL STRING

function findQuery(param) {
  var urlParams = new URLSearchParams(window.location.search, param);
  return urlParams.get(param);
}
