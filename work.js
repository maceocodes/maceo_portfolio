const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.thumb_image');

imgs.forEach(thumb_image => 
    thumb_image.addEventListener('click', e => (current.src =
    e.target.src))
);