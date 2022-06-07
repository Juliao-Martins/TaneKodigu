const menu = document.getElementById('menu'),
hamburger = document.getElementById('hamburger'),
hambChildOne = document.querySelector('.hamburger span:nth-child(1)'),
hambChildTwo = document.querySelector('.hamburger span:nth-child(2)'),
hambChildLast = document.querySelector('.hamburger span:nth-child(3)');


hamburger.addEventListener('click', () => {
    menu.classList.toggle('popup-menu');
    hambChildOne.classList.toggle('first');
    hambChildTwo.classList.toggle('second');
    hambChildLast.classList.toggle('last');
});