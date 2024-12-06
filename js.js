const t1 = document.querySelector(".t1")
const t2 = document.querySelector(".t2")
const t3 = document.querySelector(".t3")

t1.addEventListener("input", iput)
t2.addEventListener("input", iput)
t3.addEventListener("input", iput)

function iput(params) {
    const t1value = t1.value
    const t2value = t2.value
    const t3value = t3.value
    console.log(t1value, t2value, t3value)

    let input = Math.max(t1value, t2value, t3value)
    console.log(input)

const t4 = document.querySelector(".t4")
w
    t4.textContent = input 

}




