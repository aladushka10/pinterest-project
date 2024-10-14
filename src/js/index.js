import { createHeader } from "./createHeader"
import { createMain } from "./createMain"
import { loadAndDisplayCards } from "./loadAndDisplayCards"
import { updateBoard } from "./selectBoard"

document.addEventListener("DOMContentLoaded", async () => {
  await loadAndDisplayCards()
  createHeader()
  createMain()
  updateBoard()
})
