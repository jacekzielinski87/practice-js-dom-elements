console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];


menuItems.forEach(consoleItem);

function consoleItem (item,index,arr){
const newUl = document.createElement('ul');
    console.log(item);
}




//Rozwiązanie z JS

const ulElement = document.querySelector('ul');
if(ulElement && ulElement.hasChildNodes()) {

const children = ulElement.children;

if(children[0].hasChildNodes()) {
}
if(children[1].hasChildNodes()) {
}
if(children[2].hasChildNodes()) {
}
}


