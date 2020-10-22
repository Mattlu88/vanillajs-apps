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

const setActiveSlide = (slideElement) => {
  slideElement.className = 'slide'
  slideElement.classList.add('active')
}

const addSlideToContainer = (slideElement) => {
  const slideConatiner = document.querySelector('.slide-container')
  slideConatiner.appendChild(slideElement)
}

const setLastSlide = (slideElement) => {
  slideElement.className = 'slide'
  slideElement.classList.add('last')
}

const setNextSlide = (slideElement) => {
  slideElement.className = 'slide'
  slideElement.classList.add('next')
}

const createSlide = (item) => {
  let article = document.createElement('article')
  article.innerHTML = ` 
    <img src=${item.img} class='img' alt=${item.name} />
    <h4>${item.name}</h4>
    <p>${item.job}</p>
    <p>${item.text}</p>
  `
  return article
}

let currentIndex = 0

const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')

const initSlide = () => {
  currentIndex = 0
  createLastSlide(people[people.length - 1])
  const activeSlide = createSlide(people[0])
  addSlideToContainer(activeSlide)
  setActiveSlide(activeSlide)

  const item = nextItem(currentIndex, people)
  if (!item) {
    return
  }
  const nextSlide = createSlide(item)
  setNextSlide(nextSlide)
  addSlideToContainer(nextSlide)
}

const removeLastSlide = () => {
  const slide = document.querySelector('.last')
  if (!slide) {
    return
  }
  slide.remove()
}

const removeNextSlide = () => {
  const slide = document.querySelector('.next')
  if (!slide) {
    return
  }
  slide.remove()
}

const createNextSlide = (item) => {
  const slide = createSlide(item)
  setNextSlide(slide)
  addSlideToContainer(slide)
}

const createLastSlide = (item) => {
  const slide = createSlide(item)
  setLastSlide(slide)
  const slideConatiner = document.querySelector('.slide-container')
  slideConatiner.prepend(slide)
}

const getNextSlide = () => {
  const slide = document.querySelector('.next')
  return slide
}

const setSlideActive = (slideElement) => {
  slideElement.className = 'slide'
  slideElement.classList.add('active')
}

nextBtn.addEventListener('click', () => {
  if (currentIndex === people.length - 1) {
    //return
  }
  removeLastSlide()
  const activeSlide = document.querySelector('.active')
  setLastSlide(activeSlide)

  const slide = getNextSlide()
  setSlideActive(slide)
  currentIndex = currentIndex === people.length - 1 ? 0 : currentIndex + 1

  const item = nextItem(currentIndex, people)
  if (!item) {
    return
  }
  createNextSlide(item)

})

prevBtn.addEventListener('click', () => {
  if (currentIndex === 0) {
    // return
  }

  removeNextSlide()
  const slide = document.querySelector('.active')
  setNextSlide(slide)

  const prevSlide = document.querySelector('.last')
  if (!prevSlide) {
    return
  }
  setSlideActive(prevSlide)
  currentIndex = currentIndex === 0 ? people.length - 1 : currentIndex - 1

  const item = prevItem(currentIndex, people)
  if (!item) {
    return
  }
  createLastSlide(item)
})

window.onload = () => {
  initSlide()
}