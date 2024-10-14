import { addCardToBoard } from "./createCards"

export const modalBackgroundBoards = document.createElement("div")

export function createModalAddBoard() {
  modalBackgroundBoards.className = "modal-background"
  modalBackgroundBoards.id = "modal-background"

  const modalWindowBoards = document.createElement("div")
  modalWindowBoards.className = "modal-window-boards"
  modalWindowBoards.id = "modal-window-boards"

  const modalContentBoards = document.createElement("div")
  modalContentBoards.className = "modal-content-boards"
  modalContentBoards.id = "modal-content-boards"

  const boardsCancelBtn = document.createElement("button")
  const boardsCancelBtnText = document.createTextNode("X")
  boardsCancelBtn.append(boardsCancelBtnText)
  boardsCancelBtn.className = "modal-window-cancel"
  boardsCancelBtn.id = "modal-window-cancel"
  boardsCancelBtn.addEventListener("click", () => {
    modalBackgroundBoards.style.display = "none"
    document.body.style.overflow = "auto"
  })

  const modalTitleBoards = document.createElement("div")
  modalTitleBoards.className = "modal-title"
  const pTitleBoards = document.createElement("p")
  pTitleBoards.className = "modal-title-text"
  const pTitleTextBoards = document.createTextNode(
    "Выберите доску на которую хотите добавить"
  )
  pTitleBoards.append(pTitleTextBoards)
  modalTitleBoards.append(pTitleBoards)

  const boardForm = document.createElement("form")
  boardForm.className = "boardForm"
  boardForm.id = "boardForm"

  const boards = [
    { id: "board1", value: "board1", label: "Доска 1" },
    { id: "board2", value: "board2", label: "Доска 2" },
    { id: "board3", value: "board3", label: "Доска 3" },
  ]

  boards.forEach((board, index) => {
    const radioItem = document.createElement("div")
    const label = document.createElement("label")
    const radio = document.createElement("input")
    radio.id = board.id
    radio.type = "radio"
    radio.name = "complaint"
    radio.value = board.value
    label.setAttribute("for", board.id)
    label.textContent = board.label

    if (index === 0) {
      radio.checked = true
    }

    radioItem.append(radio, label)
    boardForm.append(radioItem)
  })

  const modalAddBtnDiv = document.createElement("div")
  modalAddBtnDiv.className = "modal-add-button-div"
  const modalAddBtn = document.createElement("button")
  const modalAddBtnText = document.createTextNode("Добавить")
  modalAddBtn.className = "modal-add-button"
  modalAddBtn.id = "modal-add-button"
  modalAddBtn.append(modalAddBtnText)
  modalAddBtnDiv.append(modalAddBtn)
  modalAddBtn.type = "submit"
  modalAddBtn.addEventListener("click", () => {
    const boardFormElements = boardForm.elements

    for (let element of boardFormElements) {
      if (element.checked) {
        const selectedBoardId = element.value
        console.log(selectedBoardId)
        addCardToBoard(selectedBoardId)
        break
      }
    }
    modalBackgroundBoards.style.display = "none"
    document.body.style.overflow = "auto"
  })

  modalContentBoards.append(
    boardsCancelBtn,
    modalTitleBoards,
    boardForm,
    modalAddBtnDiv
  )
  modalWindowBoards.append(modalContentBoards)
  modalBackgroundBoards.append(modalWindowBoards)
  document.body.append(modalBackgroundBoards)
}
