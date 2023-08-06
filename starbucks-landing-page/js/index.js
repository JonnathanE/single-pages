/**
 * The imgSlider function updates the source attribute of an image element with the provided parameter.
 * @param anything - The "anything" parameter is a placeholder for the image source that will be passed
 * into the function. It can be any valid image source, such as a URL or a file path.
 */
function imgSlider(anything) {
  document.querySelector(".starbucks").src = anything;
}

/**
 * The function changes the background color of a circle element.
 * @param color - The `color` parameter is a string that represents the color you want to change the
 * circle to. It can be any valid CSS color value, such as "red", "#FF0000", or "rgb(255, 0, 0)".
 */
function changeCircleColor(color) {
  const circle = document.querySelector(".circle");
  circle.style.background = color;
}

/**
 * The toggleMenu function toggles the "active" class on the menuToggle and navigation elements.
 */
function toggleMenu() {
  let menuToggle = document.querySelector(".toggle");
  let navigation = document.querySelector(".navigation");

  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}
