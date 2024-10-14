import { lastComplainCardClicked, updateCardInfo } from "./createCards"
import { selectBoard } from "./selectBoard"

export const modalBackgroundComplaint = document.createElement("div")
export const complainForm = document.createElement("form")

export function createModalComplaint() {
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
    modalBackgroundComplaint.style.display = "none"
    document.body.style.overflow = "auto"
    lastComplainCardClicked.hide = true
    updateCardInfo(lastComplainCardClicked)
    selectBoard.dispatchEvent(new Event("change"))
  })

  buttonContainer.append(modalCancelButton, modalSendButton)
  modalContentComplaint.append(
    modalTitleComplaint,
    complainForm,
    buttonContainer
  )
  modalWindowComplaint.append(modalContentComplaint)
  modalBackgroundComplaint.append(modalWindowComplaint)
  document.body.append(modalBackgroundComplaint)
}
