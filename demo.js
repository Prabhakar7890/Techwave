const displayed = document.querySelector('.displayed');
const imageSet = document.querySelector('.imageSet');

for(let i = 1; i <= 7; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'assets/image' + i + '.jpg');
  imageSet.appendChild(newImage);
  newImage.onclick = function(e) {
    displayed.src = e.target.src;
  }

}

var images = (['assets/image1.jpg','assets/image2.jpg','assets/image3.jpg','assets/image4.jpg','assets/image5.jpg','assets/image6.jpg','assets/image7.jpg']);
var index = 0;
document.getElementById('imgsrc').src = images[index];
var next = document.getElementById('next');
var prev = document.getElementById('prev');

next.addEventListener('click', nextImage);

function nextImage() {
    index+=1;
    if (index > images.length - 1) {
     index = 0;
    }

     document.getElementById('imgsrc').src = images[index];

}

prev.addEventListener('click', prevImage);

function prevImage(){
    index-=1;
    if (index < 0) {
     index = images.length - 1;
    }

     document.getElementById('imgsrc').src = images[index];

}
