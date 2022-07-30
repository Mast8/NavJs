let btn = document.getElementById('slidebar_btn')
let sliderbar = document.querySelector('.sidebar')
let searchbtn = document.querySelector('.bx-search-alt-2')
btn.onclick = function(){
    sliderbar.classList.toggle('active')
}
searchbtn.onclick = function(){
    sliderbar.classList.toggle('active')
}
