
const banner = document.querySelector('.banner')
function ListCards(data , father) {
    data.map(elem =>{
    let listdiv = document.createElement('div')
    listdiv.classList.add("banner1")
    let i = document.createElement('i')
    let h1 = document.createElement('h1')
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.classList.add("button_banner")
    h1.textContent = elem.title
    p.textContent = elem.description
    btn.textContent = elem.btn
    listdiv.appendChild(h1)
    listdiv.appendChild(p)
    listdiv.appendChild(btn)
    father.appendChild(listdiv)
   let modal = document.querySelector('.modal')
   let close = document.querySelector('.modal-close')
   let overlayclose = document.querySelector('.overlay')
    btn.addEventListener("click" , (e)=>{
    let id = e.target.dataset.uuid
    let image_modal = document.querySelector('.image-modal')
    let heading = document.querySelector('.heading')
    let modal_paragrof = document.querySelector('.modal-paragrof')
    image_modal.setAttribute('src' , elem.img)
    heading.textContent = elem.title
    modal_paragrof.textContent = elem.bigDescription
        modal.style.display = "block"
        overlayclose.style.display ="block"
    })
    overlayclose.addEventListener("click" , ()=>{
        modal.style.display = "none"
        overlayclose.style.display ="none"
    })
    close.addEventListener("click" , ()=>{
        modal.style.display = "none"
        overlayclose.style.display ="none"
    })    
    })

}
ListCards(dataList2 , banner)



