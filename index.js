//  date setup
const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();

//close links
const menu = document.querySelector(".menu-toggle");
const links = document.querySelector(".links");
const linksContainer = document.querySelector(".links-container");

const containerHeight = linksContainer.getBoundingClientRect().height;
const navbar = document.getElementById("nav");
const navHeight = navbar.getBoundingClientRect().height;
// elements.getBoundingClientRect() method returns the size of an element and its position relative to the viewport
menu.addEventListener("click", () => {
  // linksContainer.classList.toggle("show-links");
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
// setting scroll and scroll button

const topLink = document.querySelector(".top-link");
// fixed-nav
window.addEventListener("scroll", () => {
  const scrollHeight = window.scrollY;

  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// smooth scroll
/* select links*/
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent dafault
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // calculate the heights
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }

    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
