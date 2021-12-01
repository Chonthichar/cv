'use strict'

//timeline
const anime = document.querySelectorAll('#timeline li');

const screenView = box => {
    const action = box.getBoundingClientRect();
    return (
        action.top >= 0 && action.left >= 0 && action.bottom <= (window.innerHeight || document.documentElement.clientHeight) && action.right
        <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const active = () => anime.forEach(anime => {
    if (screenView(anime)){
        anime.classList.add('on')
    };
});

window.addEventListener('load', active);
window.addEventListener('resize', active);
window.addEventListener('scroll', active);