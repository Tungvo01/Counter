var count = document.getElementById("count")

const increase = document.getElementById("increase")
const decrease = document.getElementById("decrease")

increase.addEventListener("click", () => {
    count.innerText = ~~count.textContent+1;
})

decrease.addEventListener("click", () => {
    count.innerText = ~~count.textContent-1;
})
