$(document).ready(function() {
    $("#hide").click(function() {
        // $(".header:first").toggle(200,"linear");

        // $(".header:first").fadeToggle(200);

        $(".header:first").slideToggle("100");

    })
});
$(document).ready(function() {
    $("#hode").click(function() {
        $(".header:last").toggle(200);

    })
});

////////////////////////////////////////
var showGoToTop = 150;
$(window).scroll(function() {
    if ($(this).scrollTop() >= showGoToTop) {
        $('#gototop').fadeIn();
    } else {
        $('#gototop').fadeOut();
    }
});
$(document).ready(function() {
    $('#gototop').click(function() {

        $('html, body').animate({ scrollTop: 0 }, 'slow')
    });
});
$(document).ready(function() {
    $('.see').click(function() {
        $('.banner3').slideToggle(200);
    })
});
$(document).ready(function() {
    $('.fancy a').fancybox();
});


$(document).ready(function() {
    $('.see').click(function() {
        var heart = $('.control');
        var forevel = $('.cancel');
        if ($(heart).css("display") == "inline-block") {
            $(heart).css('display', 'none');
            $(forevel).css('display', 'inline-block')
        } else {
            $(heart).css('display', 'inline-block');
            $(forevel).css('display', 'none')
        }
    })
});

// $(document).ready(function() {
//     $(".search-1,.search-2").on("keyup", function() {
//         var value = $(this).val().toLowerCase();
//         $(".list div ").filter(function() {

//             $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//             console.log(this)
//         });
//     });
// });
////SEARCH filter 
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search-1");
    filter = input.value.toUpperCase();
    ul = document.getElementById("list");
    li = ul.getElementsByClassName("Jquery");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("div")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}