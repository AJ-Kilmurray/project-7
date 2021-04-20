// Array of all reviewer profiles.
const profiles = [
  {
    id: 1,
    name: "John Smith",
    job: "Junior Web Designer",
    picture: ("./assets/images/id_1-min.jpeg"),
    text: "For oil spots on the floor, nothing beats parking a motorbike in the lounge. Unless you've got a car. It's difficult to understand the lengths he'd go to remain short.",
  },
  {
    id: 2,
    name: "Jimmy Jones",
    job: "Front-End Web Developer",
    picture: "./assets/images/id_2-min.jpg",
    text: "The tears of a clown make my lipstick run, but my shower cap is still intact. When motorists sped in and out of traffic, all she could think of was those in need of a transplant.",
  },
  {
    id: 3,
    name: "Rob Clark",
    job: "UI Designer",
    picture: "./assets/images/id_3-min.jpg",
    text: "I thought red would have felt warmer in summer but I didn't think about the equator. He said he was not there yesterday; however, many people saw him there.",
  },
  {
    id: 4,
    name: "Graham Thomson",
    job: "Full-Stack Developer",
    picture: "./assets/images/id_4-min.jpg",
    text: "Everyone says they love nature until they realize how dangerous she can be. The fact that there's a stairway to heaven and a highway to hell explains life well.",
  },
  {
    id: 5,
    name: "Lissandra Evans",
    job: "Software Engineer",
    picture: "./assets/images/id_5-min.jpg",
    text: "After fighting off the alligator, Brian still had to face the anaconda. He realized there had been several deaths on this road, but his concern rose when he saw the exact number.",
  }
];

// Variables for each review ID property
let profilePicture = document.getElementById("image");
let profileName = document.getElementById("name");
let profileJob = document.getElementById("job");
let reviewText = document.getElementById("review-text");

// Slider Button Variables
const sliderLeft = document.querySelector("#left-slider");
const sliderRight = document.querySelector("#right-slider");

// Resets the current slider to 0 upon page reload.
let currentSlider = 0;

// Updates the the page upon loading/refreshing to set the textcontent of each variable.
window.addEventListener('DOMContentLoaded', function() {
  const currentReviewer = profiles[currentSlider];
  profilePicture.src = currentReviewer.picture;
  profileName.textContent = currentReviewer.name;
  profileJob.textContent = currentReviewer.job;
  reviewText.textContent = currentReviewer.text;
});

// Function to update each profile upon clicking next or previous.
function currentProfile(profile) {
  const currentReviewer = profiles[profile];
  profilePicture.src = currentReviewer.picture;
  profileName.textContent = currentReviewer.name;
  profileJob.textContent = currentReviewer.job;
  reviewText.textContent = currentReviewer.text;
}

// Watches for input on the left button (prev), also makes sure to loop going past the first profile.
sliderLeft.addEventListener('click', function() {
  currentSlider--;
  if (currentSlider < 0) {
    currentSlider = profiles.length - 1;
  }
  currentProfile(currentSlider);
});

// Watches for input on the right button (next), also makes sure to loop going past the last profile.
sliderRight.addEventListener('click', function() {
  currentSlider++;
  if (currentSlider > profiles.length - 1) {
    currentSlider = 0;
  }
  currentProfile(currentSlider);
});
