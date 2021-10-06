// DOM

const newAnchor = document.createElement("a");
const newFooter = document.createElement("footer");
const newHeader = document.createElement("header");
const newSection = document.createElement("section");
const newLi = document.createElement("li");
const newUl = document.createElement("ul");

function header() {
  let headerContent = `
    <a href="../index.html">Michel Iseneld</a>
    <nav>
      <ul>
        <li><a href="../pages/blog.html">Blog</a></li>
      </ul>
    </nav>
    `;
  newHeader.innerHTML = headerContent;

  document.querySelector("body").prepend(newHeader);
}

const listItems = [
  {
    title: "SVG Animation",
    url: "./pages/svg.html",
    img: "",
  },
  {
    title: "Hypnus Records",
    url: "./pages/hypnus.html",
    img: "../images/hypnus.jpg",
  },
  {
    title: "Kabalion Records (empty)",
    url: "./pages/hypnus.html",
    img: "../images/kabalion.jpg",
  },
  {
    title: "Aedi Records (empty)",
    url: "#",
    img: "../images/aedi.jpg",
  },
  {
    title: "The Memoir (empty)",
    url: "#",
    img: "../images/thememoir.jpg",
  },
  {
    title: "Aether Mechanics (empty)",
    url: "#",
    img: "../images/aethermechanics.jpg",
  },
  {
    title: "Ntogn (empty)",
    url: "#",
    img: "../images/ntogn.jpg",
  },
  {
    title: "Slink (empty)",
    url: "#",
    img: "../images/slink.jpg",
  },
  {
    title: "Photography (empty)",
    url: "#",
    img: "../images/photography.jpg",
  },
];

function landingList(x) {
  document.querySelector("main").append(newSection);
  newSection.className = "landing-list";
  newSection.append(newUl);
  for (let i = 0; i < x.length; i++) {
    newUl.innerHTML += `
    <li class="landing-list__hypnus" style="background-image: url(${x[i].img});"> 
      <h2>  
        <a href="${x[i].url}">
          ${x[i].title}
        </a>
      </h2>
    </li>`;
  }
}

function indexHeader() {
  let headerContent = `
    <a href="./index.html">Michel Iseneld</a>
    <nav>
      <ul>
        <li><a href="./pages/blog.html">Blog</a></li>
      </ul>
    </nav>
    `;
  newHeader.innerHTML = headerContent;

  document.querySelector("body").prepend(newHeader);
}

function footer() {
  newAnchor.setAttribute("href", "https://www.linkedin.com/in/micheliseneld/");
  newAnchor.setAttribute("target", "_blank");
  newAnchor.innerHTML = "Coded by Michel Iseneld";
  newFooter.append(newAnchor);

  document.querySelector("body").append(newFooter);
}

// Loads header and footer for all pages.
// index.html has a separate function for correct link path.

function loadDOM(x) {
  if (x === "index") {
    indexHeader();
    footer();
    landingList(listItems);
  } else {
    header();
    footer();
  }
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
  let h2 = document.createElement("h2");
  let h5 = document.createElement("h5");

  h2.innerHTML = post.title;
  h5.innerHTML = post.fullSummary;

  let blogSection = document.querySelector(".blog__post");

  blogSection.append(h2);
  blogSection.append(h5);

  let content = post.content;
  for (let i = 0; i < content.length; i++) {
    blogSection.innerHTML += content[i];
  }

  let backLink = `
    <p>
      <a href="./blog.html">Back to blog page</a>
    </p>
  `;

  blogSection.innerHTML += backLink;
}

// QUERY URL STRING

function findQuery(param) {
  var urlParams = new URLSearchParams(window.location.search, param);
  return urlParams.get(param);
}

// FUN STUFF

// BIRTH CALCULATOR
function birthdayCalculators() {
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

  birthdayCalculator();
  birthCalculatorYears();
}

// DARK MODE

let root = document.documentElement;

function darkMode() {
  console.log("Dark Mode");
  document.querySelector("body").classList.toggle("dark-mode");
}
