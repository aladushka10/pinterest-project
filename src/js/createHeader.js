import { createSearch, inputSearch } from "./search"
import { createSelectBoard, formSelectBoard } from "./selectBoard"

export function createHeader() {
  const pinterest = document.getElementById("pinterest")

  const header = document.createElement("header")
  header.className = "header"

  const containerHeader = document.createElement("div")
  containerHeader.className = "container"

  const wrapperHeader = document.createElement("div")
  wrapperHeader.className = "header-wrapper"

  const logo = document.createElement("div")
  logo.className = "logo"
  const logoImg = document.createElement("img")
  logoImg.src =
    "https://upload.wikimedia.org/wikipedia/commons/3/35/Pinterest_Logo.svg"
  logoImg.className = "logo-img"
  const logoImgMob = document.createElement("img")
  logoImgMob.src =
  "https://pngimg.com/uploads/pinterest/pinterest_PNG66.png"
  logoImgMob.className = "logo-img-mob"

  createSearch()
  createSelectBoard()

  pinterest.append(header)
  header.append(containerHeader)
  containerHeader.append(wrapperHeader)
  wrapperHeader.append(logo, inputSearch, formSelectBoard)
  logo.append(logoImg, logoImgMob)
}
