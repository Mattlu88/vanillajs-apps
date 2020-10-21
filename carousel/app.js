import people from './data.js'

const nextItem = (currIdx, arr) => {
  if (!arr || !arr.length) {
    return undefined
  }

  if (currIdx > arr.length) {
    return undefined
  }

  const idx = currIdx === arr.length - 1 ? 0 : currIdx + 1
  return arr[idx]
}

const prevItem = (currIdx, arr) => {
  if (!arr || !arr.length) {
    return undefined
  }

  const idx = currIdx === 0 ? arr.length - 1 : currIdx - 1
  return arr[idx]
}

const showReview = (review) => {
  const img = document.querySelector('.img')
  img.setAttribute('src', review.img)

  const name = document.querySelector('.name')
  name.textContent = review.name

  const title = document.querySelector('.title')
  title.textContent = review.job

  const text = document.querySelector('.text')
  text.textContent = review.text
}


let currentIndex = 0
showReview(people[currentIndex])

const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')

nextBtn.addEventListener("click", () => {
  const item = nextItem(currentIndex, people)
  if (!item) {
    return
  }
  showReview(item)
  currentIndex = people.indexOf(item)
})

prevBtn.addEventListener("click", () => {
  const item = prevItem(currentIndex, people)
  if (!item) {
    return
  }
  showReview(item)
  currentIndex = people.indexOf(item)
})