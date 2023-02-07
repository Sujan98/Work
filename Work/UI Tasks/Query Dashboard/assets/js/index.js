$(".net-item").click(function () {    
    $(".item-details").fadeIn(150);
});

$(".close-icon").click(function () {    
    $(".item-details").fadeOut(150);
});
$(".grid-view").click(function () {
    if ($(this).hasClass("map-view")) {
        $(".query-main").fadeOut(0);
        $(".equipments").fadeIn(0);
        $(".head-nav").fadeIn(0);
        $("#graph-container").fadeIn(0);
        $(".copyr").css("margin", "0px 0px 12px 0px");
        $(this).removeClass("map-view");
        $(this).html("grid view");
    }
    else {
        $("#graph-container").fadeOut(0);
        $(".equipments").fadeOut(0);
        $(".head-nav").fadeOut(0);
        $(".query-main").fadeIn(0);
        $(".copyr").css("margin", "6px 0px 12px 0px");
        $(this).addClass("map-view");
        $(this).html("map view");
    }
});
$(".q-drop").click(function () {
    $(".qtype-list").fadeIn(150);
});
$(".apply").click(function () {
    $(".qtype-list").fadeOut(150);
});
$(".clear").click(function () {
    $("#q-input").val("");
});
$(".q-list-down").click(function () {
    $(".q-list").fadeIn(150);
});

$(".lg-item").click(function () {
    var x = $(this).text();
    $(".q-list").fadeOut(150);
    $("#q-input").val(x);
});
$(".mail").click(function () {
    $(".q-list").fadeIn(150);
});
$(".query-t").click(function () {
    if ($(".query-slide").hasClass("query-slide-open")) {
        $(".query-slide").removeClass("query-slide-open");
    }
    else {
        $(".query-slide").addClass("query-slide-open");
    }
});
$(".close-slide").click(function () {
    $(".query-slide").removeClass("query-slide-open");
});

$(".build").click(function () {
    $(".qslide-open").removeClass("qslide-open");
    $(this).addClass("qslide-open");
    $(".build-main").css("display", "block");
    $(".run-form").css("display", "none");
    $(".run-down").removeClass("up-list");
    $(".build-down").addClass("up-list");
});
$(".run").click(function () {
    $(".qslide-open").removeClass("qslide-open");
    $(this).addClass("qslide-open");
    $(".run-form").css("display", "block");
    $(".build-main").css("display", "none");
    $(".build-down").removeClass("up-list");
    $(".run-down").addClass("up-list");
});
$(".head-tab").mouseover(function () {
    $(this).find("div").css("display", "inline-flex");
});
$(".head-tab").mouseleave(function () {
    $(this).find("div").css("display", "none");
});
$(".close-tab").click(function () {
    $(this).parent().remove();
});
$(".head-tab").click(function () {
    if ($(this).hasClass("tab-one")) {
        $(".net-item:not(.e-one)").fadeOut();
        $(".e-one").fadeIn();
    }
    else if ($(this).hasClass("tab-two")) {
        $(".net-item:not(.e-two)").fadeOut();
        $(".e-two").fadeIn();
    }
    else if ($(this).hasClass("tab-three")) {
        $(".net-item:not(.e-three)").fadeOut();
        $(".e-three").fadeIn();
    }
    else {
        $(".net-item").fadeIn();
    }
});
$(".close-tab").click(function() {
    if($(this).parent().hasClass("tab-three")) {
        if($(this).parent().hasClass("active")) {
        $(".net-item:not(.e-two)").fadeOut();
        $(".e-two").fadeIn();
        $(".tab-two").addClass("active");
        }
    }
    else if($(this).parent().hasClass("tab-two")) {
        if($(this).parent().hasClass("active")) {
            $(".net-item:not(.e-one)").fadeOut();
            $(".e-one").fadeIn();
        $(".tab-one").addClass("active");
        }
    }
    else if($(this).parent().hasClass("tab-one")) {
        if($(this).parent().hasClass("active")) {        
        $(".net-item").fadeIn();
        $(".t-active").addClass("active");
        }
    }
});
$(".side-item").mouseover(function () {
    $(".green").removeClass("green");
    $(this).addClass("green");
    if ($(this).hasClass("fav-item")) {
        $(this).find("img").attr("src", "assets/images/home/user-favourites-selection.png");
    }
    else if ($(this).hasClass("user-item")) {
        $(this).find("img").attr("src", "assets/images/home/user-template-selection.png");
    }
    else if ($(this).hasClass("cart-item")) {
        $(this).find("img").attr("src", "assets/images/home/user-cart-selection.png");
    }
    else if ($(this).hasClass("force-item")) {
        $(this).find("img").attr("src", "assets/images/home/force-directed-graph-selection.png");
    }
    else if ($(this).hasClass("hier-item")) {
        $(this).find("img").attr("src", "assets/images/home/hirearchy-graph-selection.png");
    }
    else if ($(this).hasClass("query-item")) {
        $(this).find("img").attr("src", "assets/images/home/query-to-table-selection.png");
    }
    else if ($(this).hasClass("wilcard-item")) {
        $(this).find("img").attr("src", "assets/images/home/wild-card-search-selection.png");
    }
    else if ($(this).hasClass("more-item")) {
        $(this).find("img").attr("src", "assets/images/home/more-selection.png");
    }
});
$(".side-item").mouseleave(function () {
    $(".green").removeClass("green");
    if ($(this).hasClass("fav-item")) {
        $(this).find("img").attr("src", "assets/images/home/user-favourites-grey.png");
    }
    else if ($(this).hasClass("user-item")) {
        $(this).find("img").attr("src", "assets/images/home/user-template-grey.png");
    }
    else if ($(this).hasClass("cart-item")) {
        $(this).find("img").attr("src", "assets/images/home/user-cart-grey.png");
    }
    else if ($(this).hasClass("force-item")) {
        $(this).find("img").attr("src", "assets/images/home/force-directed-graph-grey.png");
    }
    else if ($(this).hasClass("hier-item")) {
        $(this).find("img").attr("src", "assets/images/home/hirearchy-graph-grey.png");
    }
    else if ($(this).hasClass("query-item")) {
        $(this).find("img").attr("src", "assets/images/home/query-to-table-grey.png");
    }
    else if ($(this).hasClass("wilcard-item")) {
        $(this).find("img").attr("src", "assets/images/home/wild-card-search-grey.png");
    }
    else if ($(this).hasClass("more-item")) {
        $(this).find("img").attr("src", "assets/images/home/more-grey.png");
    }
});
