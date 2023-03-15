const bg = document.querySelector('.bg')
const loadText = document.querySelector('.loading-text')

let load = 0

let interval = setInterval(blurring, 30)

function blurring(){
    load++
    loadText.innerText = `${load}%`
    if (load == 100) {
        clearInterval(interval)
    }

    bg.style.filter = `blur(${30 - 0.3*load}px) `
    loadText.style.opacity = `${1 - load/100} `
}