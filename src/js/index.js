const pinterest = document.getElementById("pinterest")

fetch("https://66f58852436827ced974485e.mockapi.io/api/pinterest_project/cards")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }
    return response.json()
  })
  .then((json) => showAllCards(json))
  .catch((err) => console.error(`Fetch problem: ${err.message}`))

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
logoImg.src = "./img/card1.jpg"
logoImg.className = "logoImg"

//строка поиска
const inputSearch = document.createElement("input")
inputSearch.value = "Поиск"
inputSearch.id = "inputSearch"

//меню Выбрать доску
const formSelectBoard = document.createElement("form")
formSelectBoard.className = "formSelectBoard"
const selectBoard = document.createElement("select")
selectBoard.className = "selectBoard"
const opinionSelectBoard = document.createElement("option")
opinionSelectBoard.value = ""
const opinionSelectBoardText = document.createTextNode("Выбрать доску")
const opinionSelectBoardOne = document.createElement("option")
opinionSelectBoardOne.value = "boardOne"
const opinionSelectBoardTextOne = document.createTextNode("Доска 1")
const opinionSelectBoardTwo = document.createElement("option")
opinionSelectBoardTwo.value = "boardTwo"
const opinionSelectBoardTextTwo = document.createTextNode("Доска 2")
const opinionSelectBoardThree = document.createElement("option")
opinionSelectBoardThree.value = "boardThree"
const opinionSelectBoardTextThree = document.createTextNode("Доска 3")

//основной блок с карточками
const mainBoard = document.createElement("div")
mainBoard.className = "mainBoard"

//контейнер для mainBoard
const containerMainBoard = document.createElement("div")
containerMainBoard.className = "container"

//обертка для mainboard
const wrapperMainBoard = document.createElement("div")
wrapperMainBoard.className = "wrapperMainBoard"

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
    // Кнопка Скрыть со страницы
    const hideBtn = document.createElement("button")
    hideBtn.id = "hideBtn"
    hideBtn.className = "btn"
    const hideBtnText = document.createTextNode("Скрыть со страницы")
    hideBtn.append(hideBtnText)
    hideBtn.addEventListener("click", () => {
      card1.style.display = "none"
    })

    // Кнопка Пожаловаться
    const complainBtn = document.createElement("button")
    complainBtn.id = "complainBtn"
    complainBtn.className = "btn"
    const complainBtnText = document.createTextNode("Пожаловаться")
    complainBtn.append(complainBtnText)
    complainBtn.addEventListener("click", () => {
      modalBackground.style.display = "block"
      complainForm.style.display = "block"
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

const modalBackground = document.createElement("div")
modalBackground.className = "modal-background"
modalBackground.id = "modal-background"

const modalWindow = document.createElement("div")
modalWindow.className = "modal-window"
modalWindow.id = "modal-window"

const modalContent = document.createElement("div")
modalContent.className = "modal-content"
modalContent.id = "modal-content"

const modalTitle = document.createElement("div")
modalTitle.className = "modal-title"
const pTitle = document.createElement("p")
pTitle.className = "modal-title-text"
const pTitleText = document.createTextNode("Menu complain")
pTitle.append(pTitleText)
modalTitle.append(pTitle)

const complainForm = document.createElement("form")
complainForm.className = "complainForm"
complainForm.id = "complainForm"

const complaints = [
  { id: 1, value: "Service is too slow", label: "Service is too slow" },
  { id: 2, value: "Product is defective", label: "Product is defective" },
  { id: 3, value: "Staff was rude", label: "Staff was rude" },
]

complaints.forEach((complaint) => {
  //   console.log(complaint)
  const radioItem = document.createElement("div")
  const label = document.createElement("label")
  const radio = document.createElement("input")
  radio.id = complaint.id
  radio.type = "radio"
  radio.name = "complaint"
  radio.value = complaint.value
  label.setAttribute("for", complaint.id)
  label.textContent = complaint.label

  radioItem.append(radio, label)
  complainForm.append(radioItem)
  //   console.log(complainForm)
})

const buttonContainer = document.createElement("div")
buttonContainer.className = "modal-buttons"

const modalCancelButton = document.createElement("button")
const cancelBtnText = document.createTextNode("Cancel")
modalCancelButton.className = "modal-button"
modalCancelButton.id = "modalCancelBtn"
modalCancelButton.append(cancelBtnText)
modalCancelButton.addEventListener("click", () => {
  modalBackground.style.display = "none"
})

const modalSendButton = document.createElement("button")
const sendBtnText = document.createTextNode("Send")
modalSendButton.className = "modal-button"
modalSendButton.id = "modalSendBtn"
modalSendButton.append(sendBtnText)
modalSendButton.type = "submit"

buttonContainer.append(modalCancelButton, modalSendButton)
// complainForm.append(buttonContainer)
modalContent.append(modalTitle, complainForm, buttonContainer)
modalWindow.append(modalContent)
modalBackground.append(modalWindow)
document.body.append(modalBackground)

// function createComplain(complain) {}

// //Жалоба 1
// const complain1 = document.createElement("div")
// complain1.className = "complain"
// const radioComplain1 = document.createElement("input")
// radioComplain1.className = "radioComplain1"
// radioComplain1.type = "radio"
// const complain1Value = document.createTextNode("Спам")

// //Жалоба 2
// const complain2 = document.createElement("div")
// complain2.className = "complain"
// const radioComplain2 = document.createElement("input")
// radioComplain2.className = "radioComplain"
// radioComplain2.type = "radio"
// const complain2Value = document.createTextNode("Ложная информация")

// //Жалоба 3
// const complain3 = document.createElement("div")
// complain3.className = "complain"
// const radioComplain3 = document.createElement("input")
// radioComplain3.className = "radioComplain"
// radioComplain3.type = "radio"
// const complain3Value = document.createTextNode("Нарушение конфиденциальности")

// //Жалоба 4
// const complain4 = document.createElement("div")
// complain4.className = "complain"
// const radioComplain4 = document.createElement("input")
// radioComplain4.className = "radioComplain"
// radioComplain4.type = "radio"
// const complain4Value = document.createTextNode(
//   "Это моя интеллектуальная собственность"
// )

pinterest.append(header, mainBoard)
header.append(containerHeader)
containerHeader.append(wrapperHeader)
wrapperHeader.append(logo, inputSearch, formSelectBoard)
logo.append(logoImg)
formSelectBoard.append(selectBoard)
selectBoard.append(
  opinionSelectBoard,
  opinionSelectBoardOne,
  opinionSelectBoardTwo,
  opinionSelectBoardThree
)
opinionSelectBoard.append(opinionSelectBoardText)
opinionSelectBoardOne.append(opinionSelectBoardTextOne)
opinionSelectBoardTwo.append(opinionSelectBoardTextTwo)
opinionSelectBoardThree.append(opinionSelectBoardTextThree)

mainBoard.append(containerMainBoard)
containerMainBoard.append(wrapperMainBoard)

// complainForm.append(
//   /*complainTitle,*/ complain1,
//   complain2,
//   complain3,
//   complain4
// )
// complain1.append(radioComplain1, complain1Value)
// complain2.append(radioComplain2, complain2Value)
// complain3.append(radioComplain3, complain3Value)
// complain4.append(radioComplain4, complain4Value)
