export function getFromLocalStorage(key) {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key))
  }
  return []
}
export function setInLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}
