document.write('<button id="btnleft">LEFT</button>');
document.write('<button id="btnright">RIGHT</button>');
document.write('<button id="btnup">UP</button>');
document.write('<button id="btndown">DOWN</button>');
document.write('<hr>');
document.write('<div id="box"></div>');

var btnleft = document.getElementById('btnleft');
var btnright = document.getElementById('btnright');
var btnup = document.getElementById('btnup');
var btndown = document.getElementById('btndown');
var box = document.getElementById('box');
console.dir(box);
var x = 100;
var y = 50;
var num = 100;
var a=0;
function move() {
    switch (this) {
        case btnleft:
            a =180;
            x = x - num;
            break;
        case btnright:
            a = 0;
            x = x + num;
            break;
        case btnup:
            a = 270;
            y = y - num;
            break;
        case btndown:
            a= 90;
            y = y + num;
            break;
    }
    box.style.transform = "rotate("+a+"deg)";
    box.style.left = x + 'px';
    box.style.top = y + 'px';
}

btnleft.onclick = move;
btnright.onclick = move;
btnup.onclick = move;
btndown.onclick = move;