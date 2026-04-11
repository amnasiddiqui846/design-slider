// let nextDom=document.getElementById('next');
// let prevDom=document.getElementById('prev');
// let carouselDom=document.querySelector('.carousel');
// let listItemDom=document.querySelector('.carousel .list');
// let thumbnailDom=document.querySelector('.carousel .thumbnail');

// nextDom.onclick=function(){
//     showSlider('next');
// }
// let timeRunning = 3000;
// let runTimeOut;
// function showSlider(type){
//     let itemSlider = document.querySelectorAll('.carousel .list .item');
//     let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');
//  if(type==='next'){
//     listItemDom.appendChild(itemSlider(0));
//      thumbnailDom.appendChild(itemThumbnail(0));
//      carouselDom.classList.add('next');
//  }
//  clearTimeout(runTimeOut);
//  runTimeOut= setTimeout(()=>{
// carouselDom.classList.remove('next');
//  },timeRunning)
// }
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

let timeRunning = 3000;
let runTimeOut;

// Next click
nextDom.onclick = function() {
    showSlider('next');
}

// Prev click
prevDom.onclick = function() {
    showSlider('prev');
}

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if (type === 'next') {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);
}

// THUMBNAILS CLICK LOGIC
document.querySelectorAll('.thumbnail .item').forEach((thumb, index) => {
    thumb.onclick = function() {
        // Jab niche click ho to 'next' wala effect trigger karein
        showSlider('next');
    }
});
