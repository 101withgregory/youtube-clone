// collapse menu

let menuBtn = document.querySelector('.menu-btn');
let sidebar = document.querySelector('.sidebar');
let container = document.querySelector('.container');

menuBtn.onclick = (e)=>{
    e.preventDefault();
    sidebar.classList.toggle('resize-sidebar');
    container.classList.toggle('large-container')
}