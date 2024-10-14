import { removeElementsByClass } from "./search"
import { showAllCards } from "./createCards"

export let cardItems = []
export let currentBoard = []
export async function loadAndDisplayCards() {
  try {
    const response = await fetch(
      "https://66f511569aa4891f2a23ba1d.mockapi.io/src/cards"
    )
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }

    const json = await response.json()

    cardItems = json

    cardItems = cardItems.filter((card) => !card.hide)

    currentBoard = cardItems

    removeElementsByClass("card")
    showAllCards(cardItems)
  } catch (error) {
    console.error(`Fetch error: ${error.message}`)
  }
}
