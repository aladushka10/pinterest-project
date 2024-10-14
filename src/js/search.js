import { currentBoard } from "./loadAndDisplayCards"
import { showAllCards } from "./createCards"

export const inputSearch = document.createElement("input")

export function createSearch() {
  const form = document.createElement("form")
  form.setAttribute("id", "form1")

  inputSearch.setAttribute("id", "search")
  inputSearch.setAttribute("type", "text")
  inputSearch.setAttribute("placeholder", "Поиск")

  inputSearch.addEventListener("input", searchCards)

  inputSearch.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      if (inputSearch.value == "") {
        searchCards()
      }
      e.preventDefault()
      clearSearchInput()
    }
  })

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
}

export function removeElementsByClass(className) {
  const elements = document.getElementsByClassName(className)
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0])
  }
}
