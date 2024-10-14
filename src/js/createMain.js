export const wrapperMainBoard = document.createElement("div")

export function createMain() {
  const pinterest = document.getElementById("pinterest")

  const mainBoard = document.createElement("div")
  mainBoard.className = "main-board"

  const containerMainBoard = document.createElement("div")
  containerMainBoard.className = "container"

  wrapperMainBoard.className = "main-board-wrapper"

  pinterest.append(mainBoard)
  mainBoard.append(containerMainBoard)
  containerMainBoard.append(wrapperMainBoard)
}
