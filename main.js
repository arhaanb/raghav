// var body = document.getElementById('body');
// var except = document.getElementById('nav-hid');
// var lines = document.getElementById('lines');

// body.addEventListener("click", function () {
//     document.getElementById('nav-hid').style.display = 'none';
//     document.getElementById('lines').style.display = 'block';
//     document.getElementById('cross').style.display = 'none';
// }, false);
// except.addEventListener("click", function (ev) {
//     document.getElementById('nav-hid').style.display = 'block';
//     ev.stopPropagation(); //this is important! If removed, you'll get both alerts
// }, false);
// lines.addEventListener("click", function (ev) {
//     document.getElementById('nav-hid').style.display = 'block';
//     ev.stopPropagation(); //this is important! If removed, you'll get both alerts
// }, false);

// document.getElementsByTagName('img').setAttribute("draggable", "false");



$(document).ready(function () {
    $("#lines").click(function () {
        $(this).hide();
        $('#cross').css('display', 'block');
        $('#nav-hid').css('display', 'block');
    });

    // $("#cross").click(function () {
    //     $(this).hide();
    //     $('#lines').css('display', 'block');
    //     $('#nav-hid').hide();
    // });
});

$(document).on('click', function (event) {
    // ... clicked on the 'body', but not inside of #nav-hid
    $('#cross').hide();
    $('#lines').css('display', 'block');
    $('#nav-hid').hide();
});
$('#nav-hid').on('click', function (event) {
    event.stopPropagation();
});
$('#lines').on('click', function (event) {
    event.stopPropagation();
});

// $(document).click(function (e) {

//     // Check if click was triggered on or within #menu_content
//     if ($(e.target).closest("#nav-hid").length > 0) {
//         return false;
//     } if ($(e.target).closest("#lines").length > 0) {
//         return false;
//     }

//     // Otherwise
//     // trigger your click function
// $('#cross').hide();
// $('#lines').css('display', 'block');
// $('#nav-hid').hide();
// });

// $('body').click(function (evt) {
//     if (evt.target.id == "lines") {
//         $(this).hide();
//         $('#cross').css('display', 'block');
//         $('#nav-hid').css('display', 'block');
//     } if (evt.target.id == "nav-hid") {
//         return false;
//     }

//     $('#cross').hide();
//     $('#lines').css('display', 'block');
//     $('#nav-hid').hide();
// });