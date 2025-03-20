const menuIcon = document.querySelector("#menu-icon")
const navbar = document.querySelector(".navbar")
const themeToggle = document.querySelector("#theme-toggle")

// Theme toggle functionality
function loadTheme() {
  // Check if user has a saved theme preference
  const savedTheme = localStorage.getItem("theme")

  if (savedTheme === "light") {
    document.body.classList.add("light-mode")
  } else {
    document.body.classList.remove("light-mode")
  }
}

// Toggle theme when button is clicked
themeToggle.onclick = () => {
  document.body.classList.toggle("light-mode")

  // Save user preference to localStorage
  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light")
  } else {
    localStorage.setItem("theme", "dark")
  }
}

// Load saved theme when page loads
document.addEventListener("DOMContentLoaded", loadTheme)

// Existing menu functionality
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x")
  navbar.classList.toggle("active")
}

const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll("header nav a")

window.onscroll = () => {
  const top = window.scrollY

  sections.forEach((sec) => {
    const offset = sec.offsetTop - 100
    const height = sec.offsetHeight
    const id = sec.getAttribute("id")

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active")
      })
      document.querySelector("header nav a[href*=" + id + "]").classList.add("active")
      sec.classList.add("show-animate")
    } else {
      sec.classList.remove("show-animate")
    }
  })

  const header = document.querySelector("header")
  header.classList.toggle("sticky", window.scrollY > 100)

  const footer = document.querySelector("footer")
  const footerOffset = footer.offsetTop
  const footerHeight = footer.offsetHeight

  if (window.innerHeight + window.scrollY >= footerOffset) {
    footer.classList.add("show-animate")
  } else {
    footer.classList.remove("show-animate")
  }

  // Remove active class from navbar when a link is clicked
  menuIcon.classList.remove("bx-x")
  navbar.classList.remove("active")
}
