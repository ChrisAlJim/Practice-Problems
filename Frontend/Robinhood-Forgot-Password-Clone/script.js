let px = 200
let direction = "left"

const setPosition = () => {
  const spinny = document.getElementById("spinny")
  if (px === 200) {
    direction = "right"
  } else if (px === 400) {
    direction = "left"
  }

  (direction === "left") ? px -- : px ++

  spinny.style.left = px + "px"
}

setInterval(setPosition, 16)