const main = document.querySelector("#main")
const cursor = document.querySelector("#cursor")
main.addEventListener("mousemove", function (dets) {
    cursor.style.left = (dets.x + 20) + "px"
    cursor.style.top = (dets.y + 20) + "px"
})