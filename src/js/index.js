window.addEventListener("storage", () => {})

let hiddenIds = getFromLocalStorage()
let cardItems = []

document.addEventListener("DOMContentLoaded", async () => {
  await loadAndDisplayCards()
  createHeaderAndMain()
  updateBoard()
})

let selectedBoard = getSelectedBoardFromLocalStorage()
let currentBoard = []
let board1 = getBoard1FromLocalStorage()
let board2 = getBoard2FromLocalStorage()
let board3 = getBoard3FromLocalStorage()

function updateBoard() {
  const $select = document.querySelector("select")
  $select.value = selectedBoard
  selectBoard.dispatchEvent(new Event("change"))
}

function getFromLocalStorage() {
  if (localStorage.getItem("hiddenIds")) {
    return JSON.parse(localStorage.getItem("hiddenIds"))
  }
  return []
}
function getBoard1FromLocalStorage() {
  if (localStorage.getItem("board1")) {
    return JSON.parse(localStorage.getItem("board1"))
  }
  return []
}
function getBoard2FromLocalStorage() {
  if (localStorage.getItem("board2")) {
    return JSON.parse(localStorage.getItem("board2"))
  }
  return []
}
function getBoard3FromLocalStorage() {
  if (localStorage.getItem("board3")) {
    return JSON.parse(localStorage.getItem("board3"))
  }
  return []
}
function getSelectedBoardFromLocalStorage() {
  if (localStorage.getItem("selectedBoard")) {
    return JSON.parse(localStorage.getItem("selectedBoard"))
  }
  return "allBoards"
}
function setInLocalStorage(hiddenIds) {
  localStorage.setItem("hiddenIds", JSON.stringify(hiddenIds))
}

function setBoard1InLocalStorage(board1) {
  localStorage.setItem("board1", JSON.stringify(board1))
}

function setBoard2InLocalStorage(board2) {
  localStorage.setItem("board2", JSON.stringify(board2))
}
function setBoard3InLocalStorage(board3) {
  localStorage.setItem("board3", JSON.stringify(board3))
}

function setSelectedBoardInLocalStorage(selectedBoard) {
  localStorage.setItem("selectedBoard", JSON.stringify(selectedBoard))
}

async function loadAndDisplayCards() {
  try {
    const response = await fetch(
      "https://66f58852436827ced974485e.mockapi.io/api/pinterest_project/cards"
    )
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }

    const json = await response.json()

    cardItems = json.filter((card) => !hiddenIds.includes(card.id))

    let partition = cardItems.length / 5
    if (board1.length == 0) {
      board1 = json.slice(partition, 2 * partition)
      setBoard1InLocalStorage(board1)
    }
    if (board2.length == 0) {
      board2 = json.slice(2 * partition, 3 * partition)
      setBoard2InLocalStorage(board2)
    }
    if (board3.length == 0) {
      board3 = json.slice(3 * partition, 4 * partition)
      setBoard3InLocalStorage(board3)
    }

    currentBoard = cardItems

    removeElementsByClass("card")
    showAllCards(cardItems)
  } catch (error) {
    console.error(`Fetch error: ${error.message}`)
  }
}

function createHeaderAndMain() {
  const pinterest = document.getElementById("pinterest")
  pinterest.append(header, mainBoard)
  header.append(containerHeader)
  containerHeader.append(wrapperHeader)
  wrapperHeader.append(logo, inputSearch, formSelectBoard)
  logo.append(logoImg, logoImgMob)
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

//header
const header = document.createElement("header")
header.className = "header"

//контейнер для header
const containerHeader = document.createElement("div")
containerHeader.className = "container"

//обертка для header
const wrapperHeader = document.createElement("div")
wrapperHeader.className = "header-wrapper"

//лого
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

//меню Выбрать доску
const formSelectBoard = document.createElement("form")
formSelectBoard.className = "form-select-board"

const selectBoard = document.createElement("select")
selectBoard.setAttribute("class", "select-board")

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
    selectedBoard = "boardOne"
    setSelectedBoardInLocalStorage(selectedBoard)
    showAllCards(board1)
  } else if (event.target.value === "boardTwo") {
    currentBoard = board2
    selectedBoard = "boardTwo"
    setSelectedBoardInLocalStorage(selectedBoard)
    showAllCards(board2)
  } else if (event.target.value === "boardThree") {
    currentBoard = board3
    selectedBoard = "boardThree"
    setSelectedBoardInLocalStorage(selectedBoard)
    showAllCards(board3)
  } else if (event.target.value === "allBoards") {
    currentBoard = cardItems
    selectedBoard = "allBoards"
    setSelectedBoardInLocalStorage(selectedBoard)
    showAllCards(cardItems)
  }
})

//основной блок с карточками
const mainBoard = document.createElement("div")
mainBoard.className = "main-board"

//контейнер для mainBoard
const containerMainBoard = document.createElement("div")
containerMainBoard.className = "container"

//обертка для mainboard
const wrapperMainBoard = document.createElement("div")
wrapperMainBoard.className = "main-board-wrapper"

let lastComplainIdClicked = -1
let lastAddCardClicked = null

function showAllCards(cards) {
  cards.forEach((card) => {
    //карточки
    //Card 1np
    const cardPinterest = document.createElement("div")
    cardPinterest.id = card.id
    cardPinterest.className = "card"
    //видимая часть карточки
    const cardVisible = document.createElement("div")
    cardVisible.className = "card-visible"
    const cardImgWrap = document.createElement("div")
    cardImgWrap.className = "card-img-wrapper"
    const cardImg = document.createElement("img")
    cardImg.src = card.img
    cardImg.className = "card-img"
    
    // меню для планшетов
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

    // часть карточки при наведении
    const cardHover = document.createElement("div")
    cardHover.className = "card-hover"
    // Кнопка Добавить на доску
    const addBtn = document.createElement("button")
    addBtn.id = "addBtn"
    addBtn.className = "btn"
    const addBtnText = document.createTextNode("Добавить на доску")
    addBtn.append(addBtnText)
    addBtn.addEventListener("click", () => {
      if (
        board1.includes(card) &&
        board2.includes(card) &&
        board3.includes(card)
      ) {
        alert("Эта карточка уже есть на всех досках")
      } else {
        modalBackgroundBoards.style.display = "block"
        document.body.style.overflow = "hidden"
        lastAddCardClicked = card
      }
    })

    // Кнопка Скрыть со страницы
    const hideBtn = document.createElement("button")
    hideBtn.id = "hideBtn"
    hideBtn.className = "btn"
    const hideBtnText = document.createTextNode("Скрыть со страницы")
    hideBtn.append(hideBtnText)
    hideBtn.addEventListener("click", () => {
      cardPinterest.style.filter = "blur(8px)"
      cardHover.style.display = "none"
      hiddenIds.push(card.id)
      setInLocalStorage(hiddenIds)
      board1 = board1.filter((card) => !hiddenIds.includes(card.id))
      setBoard1InLocalStorage(board1)
      board2 = board2.filter((card) => !hiddenIds.includes(card.id))
      setBoard2InLocalStorage(board2)
      board3 = board3.filter((card) => !hiddenIds.includes(card.id))
      setBoard3InLocalStorage(board3)
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
    cardImgWrap.append(cardImg, cardHover, cardHoverBtnTablet, cardHoverBtnXTablet)
    cardHover.append(addBtn, hideBtn, complainBtn)
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
  board1 = board1.filter((card) => !hiddenIds.includes(card.id))
  setBoard1InLocalStorage(board1)
  board2 = board2.filter((card) => !hiddenIds.includes(card.id))
  setBoard2InLocalStorage(board2)
  board3 = board3.filter((card) => !hiddenIds.includes(card.id))
  setBoard3InLocalStorage(board3)
  cardItems = cardItems.filter((card) => !hiddenIds.includes(card.id))
  selectBoard.dispatchEvent(new Event("change"))
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
      addCardToBoard(selectedBoardId)
      break
    }
  }
  modalBackgroundBoards.style.display = "none"
  document.body.style.overflow = "auto"
})

function addCardToBoard(boardId) {
  if (boardId == "board1") {
    if (!board1.find((card) => card.id == lastAddCardClicked.id)) {
      board1.push(lastAddCardClicked)
      setBoard1InLocalStorage(board1)
    } else {
      alert("Эта карточка уже есть на этой доске")
    }
  }
  if (boardId == "board2") {
    if (!board2.find((card) => card.id == lastAddCardClicked.id)) {
      board2.push(lastAddCardClicked)
      setBoard2InLocalStorage(board2)
    } else {
      alert("Эта карточка уже есть на этой доске")
    }
  }
  if (boardId == "board3") {
    if (!board3.find((card) => card.id == lastAddCardClicked.id)) {
      board3.push(lastAddCardClicked)
      setBoard3InLocalStorage(board3)
    } else {
      alert("Эта карточка уже есть на этой доске")
    }
  }
}

modalContentBoards.append(
  boardsCancelBtn,
  modalTitleBoards,
  boardForm,
  modalAddBtnDiv
)
modalWindowBoards.append(modalContentBoards)
modalBackgroundBoards.append(modalWindowBoards)
document.body.append(modalBackgroundBoards)
