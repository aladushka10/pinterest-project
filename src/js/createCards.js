import { wrapperMainBoard } from "./createMain"
import {
  createModalComplaint,
  modalBackgroundComplaint,
  complainForm,
} from "./modalComplaint"
import { createModalAddBoard, modalBackgroundBoards } from "./modalAddBoard"
import { currentBoard } from "./loadAndDisplayCards"

export let lastComplainCardClicked = null
export let lastAddCardClicked = null

export function showAllCards(cards) {
  cards.forEach((card) => {
    const cardPinterest = document.createElement("div")
    cardPinterest.id = card.id
    cardPinterest.className = "card"

    const cardVisible = document.createElement("div")
    cardVisible.className = "card-visible"
    const cardImgWrap = document.createElement("div")
    cardImgWrap.className = "card-img-wrapper"
    const cardImg = document.createElement("img")
    cardImg.src = card.img
    cardImg.className = "card-img"
    const cardHoverBtnTablet = document.createElement('button')
    cardHoverBtnTablet.className = 'card-hover-btn-tablet'
    const cardHoverBtnTabletText = document.createTextNode('...')

    const cardHoverBtnXTablet = document.createElement('button')
    cardHoverBtnXTablet.className = 'card-hover-btn-x-tablet'
    const cardHoverBtnXTabletText = document.createTextNode('x')
    cardHoverBtnTablet.addEventListener("click", () => {
        cardHover.style.opacity = '1'
        cardHover.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
        cardHoverBtnXTablet.style.display = 'block'
        cardHoverBtnTablet.style.opacity = '0'

    })
    cardHoverBtnXTablet.addEventListener("click", () => {
        cardHover.style.opacity = '0'
        cardHoverBtnXTablet.style.display = 'none'
        cardHoverBtnTablet.style.opacity = '1'
    })
    const cardDescription = document.createElement("div")
    cardDescription.className = "card-description-wrapper"
    const cardAvatarWrap = document.createElement("div")
    cardAvatarWrap.className = "card-avatar-wrapper"
    const cardAvatar = document.createElement("img")
    cardAvatar.className = "card-avatar"
    cardAvatar.src = card.avatar
    const cardTextWrap = document.createElement("div")
    cardTextWrap.className = "card-text-wrapper"
    const cardText = document.createElement("p")
    cardText.className = "card-text"
    const cardTextP = document.createTextNode(`${card.description}`)

    wrapperMainBoard.append(cardPinterest)
    cardPinterest.append(cardVisible)
    cardVisible.append(cardImgWrap, cardDescription)
    cardHoverBtnTablet.append(cardHoverBtnTabletText)
    cardHoverBtnXTablet.append(cardHoverBtnXTabletText)

    cardDescription.append(cardAvatarWrap, cardTextWrap)
    cardTextWrap.append(cardText)
    cardText.append(cardTextP)
    cardAvatarWrap.append(cardAvatar)

    const cardHover = document.createElement("div")
    cardHover.className = "card-hover"

    const addBtn = document.createElement("button")
    addBtn.id = "addBtn"
    addBtn.className = "btn"
    const addBtnText = document.createTextNode("Добавить на доску")
    addBtn.append(addBtnText)
    addBtn.addEventListener("click", () => {
      if (
        card.board.includes("board1") &&
        card.board.includes("board2") &&
        card.board.includes("board3")
      ) {
        alert("Эта карточка уже есть на всех досках")
      } else {
        modalBackgroundBoards.style.display = "block"
        document.body.style.overflow = "hidden"
        lastAddCardClicked = card
      }
    })

    const hideBtn = document.createElement("button")
    hideBtn.id = "hideBtn"
    hideBtn.className = "btn"
    const hideBtnText = document.createTextNode("Скрыть со страницы")
    hideBtn.append(hideBtnText)
    hideBtn.addEventListener("click", () => {
      cardPinterest.style.filter = "blur(8px)"
      cardHover.style.display = "none"
      card.hide = true
      updateCardInfo(card)
    })

    const complainBtn = document.createElement("button")
    complainBtn.id = "complainBtn"
    complainBtn.className = "btn"
    const complainBtnText = document.createTextNode("Пожаловаться")
    complainBtn.append(complainBtnText)
    complainBtn.addEventListener("click", () => {
      lastComplainCardClicked = card
      modalBackgroundComplaint.style.display = "block"
      complainForm.style.display = "block"
      document.body.style.overflow = "hidden"
    })
    cardImgWrap.append(cardImg, cardHover, cardHoverBtnTablet, cardHoverBtnXTablet)
    cardHover.append(addBtn, hideBtn, complainBtn)
  })
}

createModalComplaint()
createModalAddBoard()

export function updateCardInfo(card) {
  fetch(`https://66f511569aa4891f2a23ba1d.mockapi.io/src/cards/${card.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error)
    })
}

export function addCardToBoard(boardId) {
  if (!lastAddCardClicked.board.includes(boardId)) {
    lastAddCardClicked.board.push(boardId)
    updateCardInfo(lastAddCardClicked)
  } else {
    alert("Эта карточка уже есть на этой доске")
  }
}
