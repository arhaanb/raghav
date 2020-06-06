$(document).ready(function () {
    $("#lines").click(function () {
        $(this).hide();
        $('#cross').fadeIn(700);
        $('#nav-hid').fadeIn(700);
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
    $('#lines').fadeIn(700);
    $('#nav-hid').fadeOut(500);
});
$('#nav-hid').on('click', function (event) {
    event.stopPropagation();
});
$('#lines').on('click', function (event) {
    event.stopPropagation();
});