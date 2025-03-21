// Function to change the background color of each select element
function changeSelectBgColor(event) {
  var selectElement = event.target; // The select element that triggered the event
  var selectedOption = selectElement.options[selectElement.selectedIndex];
  // Set the background color of the select element to match the selected option
  selectElement.style.backgroundColor = selectedOption.style.backgroundColor;
}

// Attach the event listener to each select element
document.querySelectorAll(".row").forEach((select) => {
  select.addEventListener("change", changeSelectBgColor);
});

//For Perspective buttons
let isAnimationPaused = false;

// Function to change the background color of each select element
function rotateCubeTo(face) {
  const cube = document.getElementById("cube");
  let rotationX = 0;
  let rotationY = 0;

  // Define the rotations for each face
  switch (face) {
    case "front":
      rotationX = -30;
      rotationY = 45;
      break;
    case "back":
      rotationX = -30;
      rotationY = -135; // Rotate to the back face
      break;
    case "left":
      rotationX = -30;
      rotationY = -225; // Rotate to the left face
      break;
    case "right":
      rotationX = -30;
      rotationY = 135; // Rotate to the right face
      break;
    case "top":
      rotationX = 60; // Rotate to the top face
      rotationY = 45;
      break;
    case "bottom":
      rotationX = -90; // Rotate to the bottom face
      rotationY = 45;
      break;
  }
  // Apply the transformation to rotate the cube to the selected face
  cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

  // Stop the animation when a button is clicked
  stopAnimation();
}
function rotateCubeToTop() {
    const cube = document.getElementById("cube");
    cube.style.transform = "rotateX(60deg) rotateY(45deg)";
    stopAnimation();
}
// Function to stop the animation
function stopAnimation() {
  const cube = document.getElementById("cube");
  cube.style.animationPlayState = "paused"; // Stop the animation
  isAnimationPaused = true;
}
// Function to resume the animation
function resumeAnimation() {
  const cube = document.getElementById("cube");
  cube.style.animationPlayState = "running"; // Resume the animation
  isAnimationPaused = false;
}
