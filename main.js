var body = document.getElementById('body');
var except = document.getElementById('nav-hid');
var lines = document.getElementById('lines');

body.addEventListener("click", function () {
    document.getElementById('nav-hid').style.display = 'none';
    document.getElementById('lines').style.display = 'block';
    document.getElementById('cross').style.display = 'none';
}, false);
except.addEventListener("click", function (ev) {
    document.getElementById('nav-hid').style.display = 'block';
    ev.stopPropagation(); //this is important! If removed, you'll get both alerts
}, false);
lines.addEventListener("click", function (ev) {
    document.getElementById('nav-hid').style.display = 'block';
    ev.stopPropagation(); //this is important! If removed, you'll get both alerts
}, false);