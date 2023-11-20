// // // ヘッダーメニュー用js // // //

// header
$(function ($) {
    //メニューの開閉

    $("#header .btn-menu .btn-s").click(function () {
        spMenu();
        btnMenu();
    });

    $('#header .btn-menu .btn-s').keypress(function (e) {
        if (e.keyCode == 13) {
            spMenu();
            btnMenu();
        }
    });

    function spMenu() {
        $("#header .btn-menu .btn-s").toggleClass("open");
        $("body").toggleClass("fixed-body");
    };

});


// header
$(window).on('load resize', function () {

    if ($(window).width() > 768) {
        $("#navi, .u-menu ,.wrap-sp-navi").removeAttr("style");
        $(".wrap-sp-navi").removeClass("active-menu")
        $(".wrap-sp-navi").removeClass("active-sp");
        $("body").removeClass("fixed-body");
        $(".btn-menu .btn-s").removeClass("open");
        $("#navi li a.to-lower").removeClass("open-m");
        btnMenu();
    } else if ($(window).width() < 768) {
    }

});

// header
$(function ($) {
    $("#navi .u-menu").prev("a").addClass('to-lower');
});

// header
$(function ($) {
    $("#navi li a.to-lower").click(function (e) {
        $(this).next(".u-menu").slideToggle();
        $(this).toggleClass("open-m");
        e.preventDefault();
    });
});

//スマホメニューのテキスト表示切り換え
function btnMenu() {
    if ($(".btn-menu .btn-s").hasClass('open')) {
        $(".btn-menu .btn-s").children("p").text("close");
    } else {
        $(".btn-menu .btn-s").children("p").text("menu");
    }
};

// ヘッダー追従　上に上がるとメニュー非表示
$(function ($) {

    var beforePos = 0;//スクロールの値の比較用の設定

    //スクロール途中でヘッダーが消え、上にスクロールすると復活する設定を関数にまとめる
    function ScrollAnime() {

        var scroll = $(window).scrollTop();

        //ヘッダーの出し入れをする
        if (scroll == beforePos) {
            //IE11対策で処理を入れない
        } else if (200 > scroll) {
            $('#header').removeClass('up-h'); //#headerにup-hというクラス名を除き
            $('#header').removeClass('down-h');//#headerにdown-hのクラス名を追加
        }
        else if (0 > scroll - beforePos) {

            //ヘッダーが上から出現する
            $('#header').removeClass('up-h'); //#headerにup-hというクラス名を除き
            $('#header').addClass('down-h');//#headerにdown-hのクラス名を追加
            // $('#navi li').mouseover().addClass('navi-hover');
            $('#navi li a').mouseover().next('.u-menu').removeClass('navi-none');

            num = $('#navi li a').parent('li').index();
            $('#navi li a').mouseover().next('.u-menu').eq(num).addClass('navi-hover');

        } else {

            //ヘッダーが上に消える
            $('#header').removeClass('down-h');//#headerにDownMoveというクラス名を除き
            $('#header').addClass('up-h');//#headerにUpMoveのクラス名を追加
            // $('#navi li a.to-lower').next('.u-menu').slideUp();
            // $('#navi li').mouseover().addClass('navi-hover');
            $('#navi li a').mouseover().next('.u-menu').addClass('navi-none');

        }

        // ヘッダーを固定する
        if (!$("#header").hasClass('no-link')) {
            if (scroll > 0) {
                $("#header").addClass('fixed-h');

                // if ($(window).width() > 768) {
                //     $("body").css("padding-top","160px");
                // } else if ($(window).width() <= 768) {
                //     $("body").css("padding-top","57px");
                // }

            } else {
                $("#header").removeClass('fixed-h');
                $("body").css("padding-top", "0px");
            }

            beforePos = scroll;//現在のスクロール値を比較用のbeforePosに格納
        }

    }

    // スクロールしたタイミングで実行
    $(window).scroll(function () {
        ScrollAnime();
    });

    // ページを読み込んだタイミングで実行
    ScrollAnime();

});


// よくある質問
$(function () {

    $('.list-qa > .col-qa > div').hide();
    $('.list-qa > .col-qa > .col-qa-ttl').click(function (e) {
        $(this).next("div").slideToggle();
        $(this).toggleClass("active");
    });

    $('.list-qa > .col-qa > .col-qa-ttl').keypress(function (e) {
        if (e.keyCode == 13) {
            $(this).next("div").slideToggle();
            $(this).toggleClass("active");
        }
    });

});

//上下のスクロールバー連動
$(function () {

    $(window).on('load resize', function () {

        $('.table-scroll').each(function (i) {
            $(this).addClass("table-block" + (i + 1));

            // テーブルの幅を取得し、#scrollbar .scroll_innerにwidthを指定
            var widthTable = $(this).find(".scroll-table table.table-data").outerWidth();
            var widthScrollTable = $(this).find(".scroll-table").outerWidth();
            $(this).find(".scroll-bar .scroll-in").width(widthTable);

            // 上下のスクロールバーが連動するよう調整
            $(this).find(".scroll-bar, .scroll-table").on("scroll", function () {
                $(this).find(".pct-scrollhint").fadeOut();
                if ($(this).attr("class") === "scroll-bar") {
                    $(this).next(".scroll-table").scrollLeft($(this).scrollLeft());
                } else {
                    $(this).scrollLeft($(this).scrollLeft());
                    $(this).parents(".table-scroll").children(".scroll-bar").scrollLeft($(this).scrollLeft());
                }
            });

            // スクロールバーが出るときだけ、scrollhintを表示
            if (widthScrollTable < widthTable - 1) {
                $(this).find(".pct-scrollhint").addClass("active");
            } else {
                $(this).find(".pct-scrollhint").removeClass("active");
            }

        });
    });

});

//page-top
$(function () {
    var topBtn = $('.page-top');
    topBtn.hide();
    //消える
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
});

// tab
$('ul.tab-area li a').click(function (e) {
    num = $(this).parent('li').index();
    $(this).addClass('active').parent().siblings().children().removeClass('active');
    $(this).parent().parent().parent().next('.tab-contents').children('div').removeClass('active').eq(num).addClass('active');
    e.preventDefault();
});
