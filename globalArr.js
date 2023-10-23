import{ticket_1} from './ticket_1.js'
import{ticket_2} from './ticket_2.js'
let container=document.querySelector('.container')
let ticketItemsBlock = document.querySelector(".ticket-items-block");
let main = document.querySelector('.main')
let body = document.querySelector('body')
let newMain


let ticketItemsHtml=''
let index=0

export let arr

let globalArr = [
    ticket_1,
    ticket_2,
]
arr=globalArr[index]

for (let i = 0; i < globalArr.length; i++) {
    ticketItemsHtml += `<div class="ticket-items-html">${i + 1}</div>`;
}



container.insertAdjacentElement('afterbegin',ticketItemsBlock)
ticketItemsBlock.insertAdjacentHTML('afterbegin',ticketItemsHtml)
let node = document.querySelectorAll('.ticket-items-html')

const clickByItem=(e)=>{
    index = e.target.textContent
    arr = globalArr[index-1]
    newMain=document.createElement('div');
    newMain.classList.add('main')
    container.replaceChild(newMain,main)
}
node.forEach(item => {
    item.onclick = clickByItem;
});












