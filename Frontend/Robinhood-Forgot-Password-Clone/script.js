let px = 25
let py = 50
let dirx = "left"
let diry = "down"

const setPosition = () => {
  const spinny = document.getElementById("spinny")
  if (px === 25) {
    dirx = "right"
  } else if (px === 75) {
    dirx = "left"
  }
  if (py === 25) {
    diry = "down"
  } else if (py === 75) {
    diry = "up"
  }

  (dirx === "left") ? px -- : px ++
  (diry === "up") ? py -- : py ++

  spinny.style.left = px + "%"
  spinny.style.bottom = py + "%"
}

setInterval(setPosition, 16)