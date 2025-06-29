function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  /* \\ O que esse código faz? //  
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  */
  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/Marca-dagua-light.jpg")
    img.setAttribute("alt", "Foto do avatar do Hugo Andrade, de oculos escuros")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Marca-dagua.jpg")
    img.setAttribute("alt", "Foto do avatar do Hugo Andrade, de oculos e olhos verdes")
  }
}
