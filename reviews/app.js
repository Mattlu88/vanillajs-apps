// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let currentReviewIndex = 0;

const showReview = (review) => {
  const personImg = document.querySelector("#person-img");
  const author = document.querySelector("#author");
  const job = document.querySelector("#job");
  const info = document.querySelector("#info");

  personImg.src = review.img;
  author.innerText = review.name;
  job.innerText = review.job;
  info.innerText = review.text;
};

const bindEvents = () => {
  const preBtn = document.querySelector("#pre-btn");
  preBtn.addEventListener("click", handleClickPreBtn);

  const nextBtn = document.querySelector("#next-btn");
  nextBtn.addEventListener("click", handleClickNextBtn);

  const supriseBtn = document.querySelector("#suprise-btn");
  supriseBtn.addEventListener("click", handleClickSupriseBtn);
};

const getPreReviewIndex = (currentIndex) => {
  if (currentIndex === 0) {
    return reviews.length - 1;
  } 
  
  return currentIndex - 1;
}

const getNextReviewIndex = (currentIndex) => {
  if (currentIndex === reviews.length - 1) {
    return 0;
  }
  return currentIndex + 1;
}

const handleClickPreBtn = () => {
  currentReviewIndex = getPreReviewIndex(currentReviewIndex);
  showReview(reviews[currentReviewIndex]);
}

const handleClickNextBtn = () => {
  currentReviewIndex = getNextReviewIndex(currentReviewIndex);
  showReview(reviews[currentReviewIndex]);
}
const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * max + min);
}

const handleClickSupriseBtn = () => {
  let randomNum;
  do {
    randomNum = getRandomNum(0, reviews.length)
  } while (currentReviewIndex === randomNum);

  currentReviewIndex = randomNum;
  showReview(reviews[currentReviewIndex]);
}

window.addEventListener('DOMContentLoaded', () => {
  showReview(reviews[currentReviewIndex]);
  bindEvents();
});