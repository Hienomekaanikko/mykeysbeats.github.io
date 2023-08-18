let text = document.getElementById('text');
let text2 = document.getElementById('text2');
let text3 = document.getElementById('text3');
let text4 = document.getElementById('text4');
let taso3 = document.getElementById('taso3');
let taso2 = document.getElementById('taso2');
let btn = document.getElementById('btn');
let stone = document.getElementById('stone');
let me = document.getElementById('me');
let header = document.getElementById('header');
let lehti3 = document.getElementById('lehti3');
let karhu2 = document.getElementById('karhu2');
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    karhu2.style.top = value * -0.1 + 'px';
    lehti3.style.top = value * 0.5 + 'px';
    text.style.top = 50 + value * -0.2 + '%';
    text2.style.marginTop = value * 0.3 + 'px';
    text3.style.left = value * 0.3 + 'px';
    text4.style.right = value * 0.2 + 'px';
    taso3.style.top = value * 0.3+ 'px';
    taso2.style.top = value * 0.3 + 'px';
    btn.style.marginTop = value * 0.5 + 'px';
    me.style.left = value * 0.9 + 'px';
    stone.style.top = value * 0.12 + 'px';
    header.style.top = value * 0.5 + 'px'
})
