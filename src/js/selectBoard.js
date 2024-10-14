import { getFromLocalStorage, setInLocalStorage } from "./localStorage"
import { showAllCards } from "./createCards"
import { removeElementsByClass } from "./search"
import { cardItems, currentBoard } from "./loadAndDisplayCards"

export let selectedBoard = getFromLocalStorage("selectedBoard") || "allBoards"
export const formSelectBoard = document.createElement("form")
export const selectBoard = document.createElement("select")

export function updateBoard() {
  const select = document.getElementById("select-board")
  select.value = selectedBoard
  selectBoard.dispatchEvent(new Event("change"))
}

export function createSelectBoard() {
  formSelectBoard.className = "form-select-board"

  selectBoard.setAttribute("class", "select-board")
  selectBoard.id = "select-board"

  const optionSelectBoard = document.createElement("option")
  optionSelectBoard.value = "allBoards"
  const optionSelectBoardText = document.createTextNode("Выбрать доску")

  const optionSelectBoardOne = document.createElement("option")
  optionSelectBoardOne.value = "boardOne"
  const optionSelectBoardTextOne = document.createTextNode("Доска 1")

  const optionSelectBoardTwo = document.createElement("option")
  optionSelectBoardTwo.value = "boardTwo"
  const optionSelectBoardTextTwo = document.createTextNode("Доска 2")

  const optionSelectBoardThree = document.createElement("option")
  optionSelectBoardThree.value = "boardThree"
  const optionSelectBoardTextThree = document.createTextNode("Доска 3")

  selectBoard.addEventListener("change", (event) => {
    removeElementsByClass("card")
    const visibleCards = cardItems.filter((card) => !card.hide)
    let actualBoard = currentBoard
    if (event.target.value === "boardOne") {
      actualBoard = visibleCards.filter((card) => card.board.includes("board1"))
      selectedBoard = "boardOne"
    } else if (event.target.value === "boardTwo") {
      actualBoard = visibleCards.filter((card) => card.board.includes("board2"))
      selectedBoard = "boardTwo"
    } else if (event.target.value === "boardThree") {
      actualBoard = visibleCards.filter((card) => card.board.includes("board3"))
      selectedBoard = "boardThree"
    } else if (event.target.value === "allBoards") {
      actualBoard = visibleCards
      selectedBoard = "allBoards"
    }
    setInLocalStorage("selectedBoard", selectedBoard)
    showAllCards(actualBoard)
  })

  formSelectBoard.append(selectBoard)
  selectBoard.append(
    optionSelectBoard,
    optionSelectBoardOne,
    optionSelectBoardTwo,
    optionSelectBoardThree
  )
  optionSelectBoard.append(optionSelectBoardText)
  optionSelectBoardOne.append(optionSelectBoardTextOne)
  optionSelectBoardTwo.append(optionSelectBoardTextTwo)
  optionSelectBoardThree.append(optionSelectBoardTextThree)
}
