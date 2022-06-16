const addText1 = document.querySelector(".questions-child__left1")
const addText2 = document.querySelector(".questions-child__left2")
const addText3 = document.querySelector(".questions-child__left3")

const paragraphs1 = document.querySelector(".question-paragraph1")
const paragraphs2 = document.querySelector(".question-paragraph2")
const paragraphs3 = document.querySelector(".question-paragraph3")
let cards_wraper = document.querySelector('.wrapper-cards')
let cards = document.querySelector('.cards')
function dataMore(data , small_father , father) {
    data.map(elem =>{
    let div = document.createElement('div')
    div.classList.add("card")
    let img = document.createElement('img')
    let h4 = document.createElement('h4')
    let p = document.createElement('p')
    let btn = document.createElement('button')
    img.setAttribute('src' , elem.img)
    h4.textContent = elem.title
    p.textContent = elem.descripton
    btn.textContent = elem.btn
    div.appendChild(img)
    div.appendChild(h4)
    div.appendChild(p)
    div.appendChild(btn)
    small_father.appendChild(div)
    })
    father.appendChild(small_father)
}
dataMore(dataMor , cards ,cards_wraper)

function addText() {
    addText1.addEventListener('click', () => {
        paragraphs1.classList.toggle("show")
        paragraphs2.classList.remove("show")
        paragraphs3.classList.remove("show")
        addText1.classList.add("title")
        addText2.classList.remove("title")
        addText3.classList.remove("title")
    })
    addText2.addEventListener('click', () => {
        paragraphs2.classList.toggle("show")
        paragraphs1.classList.remove("show")
        paragraphs3.classList.remove("show")
        addText2.classList.add("title")
        addText1.classList.remove("title")
        addText3.classList.remove("title")
    })
    addText3.addEventListener('click', () => {
        paragraphs3.classList.toggle("show")
        paragraphs2.classList.remove("show")
        paragraphs1.classList.remove("show")
        addText3.classList.add("title")
        addText2.classList.remove("title")
        addText1.classList.remove("title")
    })
}
addText()