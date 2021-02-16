window.addEventListener('DOMContentLoaded', () => {
    const dec = document.querySelector('.dec'),
        inc = document.querySelector('.inc');
    let like = document.querySelector('.like'),
        dislike = document.querySelector('.dislike');

    dec.addEventListener('click', likes);
    inc.addEventListener('click', dislikes);

    function likes() {
        num = parseInt(like.innerHTML);
        num++;
        like.innerText = num;
    }

    function dislikes() {
        num = parseInt(dislike.innerHTML);
        num++;
        dislike.innerText = num;
    }
})