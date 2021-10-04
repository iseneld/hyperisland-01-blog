// FOOTER
function footer() {
  let newFooter = document.createElement("footer");
  let newAnchor = document.createElement("a");
  newAnchor.setAttribute("href", "https://www.linkedin.com/in/micheliseneld/");
  newAnchor.setAttribute("target", "_blank");
  newAnchor.innerHTML = "Coded by Michel Iseneld";
  newFooter.append(newAnchor);

  document.querySelector("body").append(newFooter);
}

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
      <img src="${post.previewImage}" alt="A randomly generated image" />
      <div>
        <h2>${post.title}</h2>
      </div>
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
  document.querySelector(".blog__post h5").innerHTML = post.fullSummary;
  let content = post.content;

  for (let i = 0; i < content.length; i++) {
    document.querySelector(".blog__post article").innerHTML += content[i];
  }

  let backLink = `
  <p>
    <a href="./blog.html">Back to blog page</a>
  </p>
  `;
  document.querySelector(".blog__post article").innerHTML += backLink;
}

// QUERY URL STRING

function findQuery(param) {
  var urlParams = new URLSearchParams(window.location.search, param);
  return urlParams.get(param);
}

// FUN STUFF

//BIRTH CALCULATOR

let birth = "October 20, 1988 04:40:00 GMT";
let born = new Date(birth);
let now = new Date();
let elapsed = now - born;

var daysSinceBorn = Math.floor(elapsed / (1000 * 3600 * 24));

function birthdayCalculator() {
  document.querySelector("#elapsed-days").innerHTML = daysSinceBorn;
}

function birthCalculatorYears() {
  let yearsSinceBorn = parseFloat(daysSinceBorn / 365).toFixed(2);

  document.querySelector("#elapsed-years").innerHTML = yearsSinceBorn;
}

// DARK MODE

let root = document.documentElement;

function darkMode() {
  console.log("Dark Mode");
  document.querySelector("body").classList.toggle("dark-mode");
}
