
const themeButton = document.getElementById("theme-button");
const body = document.querySelector("body")
const imgThemeButton = document.querySelector(".sun-moon")

themeButton.addEventListener("click", () => {

  const activeDarkMode = body.classList.contains("dark-mode")

  body.classList.toggle("dark-mode")

  if (activeDarkMode) {

    // mudar para o sol
    imgThemeButton.setAttribute("src", "./images/sun.png")

  } else {

     // mudar para a lua
     imgThemeButton.setAttribute("src", "./images/moon.png")

  }
})