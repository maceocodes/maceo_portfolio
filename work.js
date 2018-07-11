const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.portfolio_image');

imgs.forEach(portfolio_image => 
    portfolio_image.addEventListener('click', e => (current.src =
    e.target.src))
);