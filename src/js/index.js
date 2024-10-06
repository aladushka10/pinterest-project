window.addEventListener("storage", () => {})

document.addEventListener("DOMContentLoaded", () => {
  loadAndDisplayCards()
  createHeaderAndMain()
})

let hiddenIds = getFromLocalStorage()
let cardItems = []

let allBoardsData = []
let currentBoard = []
let board1 = []
let board2 = []
let board3 = []

function getFromLocalStorage() {
  if (localStorage.getItem("hiddenIds")) {
    return JSON.parse(localStorage.getItem("hiddenIds"))
  }
  return []
}

function setInLocalStorage(hiddenIds) {
  localStorage.setItem("hiddenIds", JSON.stringify(hiddenIds))
}

function loadAndDisplayCards() {
  fetch(
    "https://66f58852436827ced974485e.mockapi.io/api/pinterest_project/cards"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
      }
      return response.json()
    })
    .then((json) => {
      allBoardsData = json
      board1 = json.slice(0, 10)
      board2 = json.slice(10, 20)
      board3 = json.slice(20, 30)

      currentBoard = allBoardsData
      cardItems = json.filter((card) => !hiddenIds.includes(card.id))
      removeElementsByClass("card")
      showAllCards(cardItems)
    })
    .catch((error) => {
      console.error(`Fetch error: ${error.message}`)
    })
}

function createHeaderAndMain() {
  const pinterest = document.getElementById("pinterest")
  pinterest.append(header, mainBoard)
  header.append(containerHeader)
  containerHeader.append(wrapperHeader)
  wrapperHeader.append(logo, inputSearch, formSelectBoard)
  logo.append(logoImg)
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

  mainBoard.append(containerMainBoard)
  containerMainBoard.append(wrapperMainBoard)
}

function formCardsArray(cards) {
  cardItems = []

  cards.forEach((card) => {
    if (!hiddenIds.includes(card.id)) {
      cardItems.push(card)
    }
  })
  removeElementsByClass("card")
  showAllCards(cardItems)
}

//header
const header = document.createElement("header")
header.className = "header"

//контейнер для header
const containerHeader = document.createElement("div")
containerHeader.className = "container"

//обертка для header
const wrapperHeader = document.createElement("div")
wrapperHeader.className = "wrapperHeader"

//лого
const logo = document.createElement("div")
logo.className = "logo"
const logoImg = document.createElement("img")
logoImg.src =
  "https://upload.wikimedia.org/wikipedia/commons/3/35/Pinterest_Logo.svg"
logoImg.className = "logoImg"

//строка поиска
const form = document.createElement("form")
form.setAttribute("id", "form1")
const inputSearch = document.createElement("input")
inputSearch.setAttribute("id", "search")
inputSearch.setAttribute("type", "text")
inputSearch.setAttribute("placeholder", "Поиск")

inputSearch.addEventListener("input", searchCards)

function removeElementsByClass(className) {
  const elements = document.getElementsByClassName(className)
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0])
  }
}
function normalizeString(str) {
  return str
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s+/g, "")
    .toLowerCase()
}

function clearSearchInput() {
  inputSearch.value = ""
}

function searchCards() {
  const searchValue = normalizeString(inputSearch.value)
  const filteredCards = currentBoard.filter((card) =>
    normalizeString(card.description).includes(searchValue)
  )
  removeElementsByClass("card")
  showAllCards(filteredCards)
}

inputSearch.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (inputSearch.value == "") {
      searchCards()
    }
    e.preventDefault()
    clearSearchInput()
  }
})

// form.addEventListener("submit", (e) => {
//   e.preventDefault()
//   removeElementsByClass("card")
//   searchCards()
// })

//меню Выбрать доску
const formSelectBoard = document.createElement("form")
formSelectBoard.className = "formSelectBoard"

const selectBoard = document.createElement("select")
selectBoard.setAttribute("class", "selectBoard")

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
  if (event.target.value === "boardOne") {
    currentBoard = board1
    showAllCards(board1)
  } else if (event.target.value === "boardTwo") {
    currentBoard = board2
    showAllCards(board2)
  } else if (event.target.value === "boardThree") {
    currentBoard = board3
    showAllCards(board3)
  } else if (event.target.value === "allBoards") {
    currentBoard = allBoardsData
    showAllCards(allBoardsData)
  }
})

//основной блок с карточками
const mainBoard = document.createElement("div")
mainBoard.className = "mainBoard"

//контейнер для mainBoard
const containerMainBoard = document.createElement("div")
containerMainBoard.className = "container"

//обертка для mainboard
const wrapperMainBoard = document.createElement("div")
wrapperMainBoard.className = "wrapperMainBoard"

let lastComplainIdClicked = -1

function showAllCards(cards) {
  cards.forEach((card) => {
    //карточки
    //Card 1np
    const card1 = document.createElement("div")
    card1.id = card.id
    card1.className = "card"
    //видимая часть карточки
    const partOneOfCard1 = document.createElement("div")
    partOneOfCard1.className = "partOneOfCard1"
    const imgCard1Wrap = document.createElement("div")
    imgCard1Wrap.className = "imgCardWrap"
    const imgCard1 = document.createElement("img")
    imgCard1.src = card.img
    imgCard1.className = "imgCard"
    const descriptionCard1 = document.createElement("div")
    descriptionCard1.className = "descriptionCard1"
    const avatarCard1 = document.createElement("div")
    avatarCard1.className = "avatarCard1"
    const imgAvatarCard1 = document.createElement("img")
    imgAvatarCard1.className = "imgAvatarCard1"
    imgAvatarCard1.src = card.avatar
    const textCard1Wrap = document.createElement("div")
    textCard1Wrap.className = "textCardWrap"
    const textCard1 = document.createElement("p")
    textCard1.className = "textCard"
    const textPCard1 = document.createTextNode(`${card.description}`)
    wrapperMainBoard.append(card1)
    card1.append(partOneOfCard1)
    partOneOfCard1.append(imgCard1Wrap, descriptionCard1)

    descriptionCard1.append(avatarCard1, textCard1Wrap)
    textCard1Wrap.append(textCard1)
    textCard1.append(textPCard1)
    avatarCard1.append(imgAvatarCard1)

    // часть карточки при наведении
    const partTwoOfCard1 = document.createElement("div")
    partTwoOfCard1.className = "partTwoOfCard1"
    // Кнопка Добавить на доску
    const addBtn = document.createElement("button")
    addBtn.id = "addBtn"
    addBtn.className = "btn"
    const addBtnText = document.createTextNode("Добавить на доску")
    addBtn.append(addBtnText)
    addBtn.addEventListener("click", () => {
      modalBackgroundBoards.style.display = "block"
      document.body.style.overflow = "hidden"
    })

    // Кнопка Скрыть со страницы
    const hideBtn = document.createElement("button")
    hideBtn.id = "hideBtn"
    hideBtn.className = "btn"
    const hideBtnText = document.createTextNode("Скрыть со страницы")
    hideBtn.append(hideBtnText)
    hideBtn.addEventListener("click", () => {
      card1.style.filter = "blur(8px)"
      partTwoOfCard1.style.display = "none"
      hiddenIds.push(card.id)
      setInLocalStorage(hiddenIds)
    })

    // Кнопка Пожаловаться
    const complainBtn = document.createElement("button")
    complainBtn.id = "complainBtn"
    complainBtn.className = "btn"
    const complainBtnText = document.createTextNode("Пожаловаться")
    complainBtn.append(complainBtnText)
    complainBtn.addEventListener("click", () => {
      lastComplainIdClicked = card.id
      modalBackgroundComplaint.style.display = "block"
      complainForm.style.display = "block"
      document.body.style.overflow = "hidden"
    })

    // меню при нажатии на кнопку Добавить на доску
    const addToBoard = document.createElement("div")
    addToBoard.className = "addToBoard"
    // Кнопка Доска 1
    const addToBoard1 = document.createElement("button")
    addToBoard1.className = "addToBoard1"
    const addToBoard1Text = document.createTextNode("Доска 1")
    addToBoard1.append(addToBoard1Text)

    // Кнопка Доска 2
    const addToBoard2 = document.createElement("button")
    addToBoard2.className = "addToBoard2"
    const addToBoard2Text = document.createTextNode("Доска 2")
    addToBoard2.append(addToBoard2Text)
    // Кнопка Доска 3
    const addToBoard3 = document.createElement("button")
    addToBoard3.className = "addToBoard3"
    const addToBoard3Text = document.createTextNode("Доска 3")
    addToBoard3.append(addToBoard3Text)

    imgCard1Wrap.append(imgCard1, partTwoOfCard1)
    partTwoOfCard1.append(addBtn, hideBtn, complainBtn, addToBoard)
    addToBoard.append(addToBoard1, addToBoard2, addToBoard3)
  })
}

//модальное окно пожаловаться

const modalBackgroundComplaint = document.createElement("div")
modalBackgroundComplaint.className = "modal-background"
modalBackgroundComplaint.id = "modal-background"

const modalWindowComplaint = document.createElement("div")
modalWindowComplaint.className = "modal-window"
modalWindowComplaint.id = "modal-window"

const modalContentComplaint = document.createElement("div")
modalContentComplaint.className = "modal-content"
modalContentComplaint.id = "modal-content"

const modalTitleComplaint = document.createElement("div")
modalTitleComplaint.className = "modal-title"
const pTitleComplaint = document.createElement("p")
pTitleComplaint.className = "modal-title-text"
const pTitleTextComplaint = document.createTextNode("Меню жалоб")
pTitleComplaint.append(pTitleTextComplaint)
modalTitleComplaint.append(pTitleComplaint)

const complainForm = document.createElement("form")
complainForm.className = "complainForm"
complainForm.id = "complainForm"

const complaints = [
  { id: "spam", value: "spam", label: "Спам" },
  {
    id: "false information",
    value: "false information",
    label: "Ложная информация",
  },
  { id: "agressive", value: "agressive", label: "Агрессивные действия" },
  { id: "dangerous", value: "dangerous", label: "Опасные товары" },
  { id: "critics", value: "critics", label: "Преследование или критика" },
  {
    id: "violation of confidentiality",
    value: "violation of confidentiality",
    label: "Нарушение конфиденциальности",
  },
  {
    id: "my intellectual property",
    value: "my intellectual property",
    label: "Это моя интеллектуальная собственность",
  },
]

complaints.forEach((complaint, index) => {
  const radioItem = document.createElement("div")
  const radio = document.createElement("input")
  radio.id = complaint.id
  radio.type = "radio"
  radio.name = "complaint"
  radio.value = complaint.value
  if (index === 0) {
    radio.checked = true
  }
  const label = document.createElement("label")
  label.setAttribute("for", radio.id)
  label.textContent = complaint.label

  radioItem.append(radio, label)
  complainForm.append(radioItem)
  //   console.log(complainForm)
})

const buttonContainer = document.createElement("div")
buttonContainer.className = "modal-buttons"

const modalCancelButton = document.createElement("button")
const cancelBtnText = document.createTextNode("Отмена")
modalCancelButton.className = "modal-button"
modalCancelButton.id = "modalCancelBtn"
modalCancelButton.append(cancelBtnText)
modalCancelButton.addEventListener("click", () => {
  modalBackgroundComplaint.style.display = "none"
  document.body.style.overflow = "auto"
})

const modalSendButton = document.createElement("button")
const sendBtnText = document.createTextNode("Отправить")
modalSendButton.className = "modal-button"
modalSendButton.id = "modalSendBtn"
modalSendButton.append(sendBtnText)
modalSendButton.type = "submit"
modalSendButton.addEventListener("click", () => {
  hiddenIds.push(lastComplainIdClicked)
  setInLocalStorage(hiddenIds)
  modalBackgroundComplaint.style.display = "none"
  document.body.style.overflow = "auto"
  formCardsArray(cardItems)
})

buttonContainer.append(modalCancelButton, modalSendButton)
modalContentComplaint.append(modalTitleComplaint, complainForm, buttonContainer)
modalWindowComplaint.append(modalContentComplaint)
modalBackgroundComplaint.append(modalWindowComplaint)
document.body.append(modalBackgroundComplaint)

//модальное окно добавить на доску

const modalBackgroundBoards = document.createElement("div")
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

boards.forEach((board) => {
  const radioItem = document.createElement("div")
  const label = document.createElement("label")
  const radio = document.createElement("input")
  radio.id = board.id
  radio.type = "radio"
  radio.name = "complaint"
  radio.value = board.value
  label.setAttribute("for", board.id)
  label.textContent = board.label

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
modalAddBtn.addEventListener("click", () => {})

modalContentBoards.append(
  boardsCancelBtn,
  modalTitleBoards,
  boardForm,
  modalAddBtnDiv
)
modalWindowBoards.append(modalContentBoards)
modalBackgroundBoards.append(modalWindowBoards)
document.body.append(modalBackgroundBoards)
