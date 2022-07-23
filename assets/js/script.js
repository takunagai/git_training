"use strict";

// いろんなjsをまとめて書いています。
// const autoPrefixer = require("gulp-autoprefixer");
var swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  speed: 300,
  centerSlides: true,
  loopAdditionalSlides: 0,
  // loopedSlides:10,
  // slidesPerView: 3,
  spaceBetween: 2,
  //   effect: 'coverflow',
  //  coverflowEffect: {
  //      rotate: 50,
  //     stretch:0,
  //     depth:100,
  //     modifier:2,
  //     slideShadows: true,
  //   },
  effect: "cube",
  cubeEffect: {
    slideShadows: false
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  } // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

}); //トップへ戻るボタンの表示判定用

jQuery(window).on("scroll", function () {
  // トップから100px以上スクロールしたら
  if (100 < jQuery(this).scrollTop()) {
    // is-showクラスをつける
    jQuery(".footer__totop").addClass("is-show");
  } else {
    // 100pxを下回ったらis-showクラスを削除
    jQuery(".footer__totop").removeClass("is-show");
  }
}); // #から始まるURLがクリックされた時,つまりIDタグのリンクがある場合

jQuery('a[href^="#"]').click(function () {
  // .headerクラスがついた要素の高さを取得
  var header = jQuery(".header").innerHeight();
  var speed = 100;
  var id = jQuery(this).attr("href");
  var target = jQuery("#" == id ? "html" : id); // トップからの距離からヘッダー分の高さを引く

  var position = jQuery(target).offset().top - header;
  console.log(target);
  console.log(id); // その分だけ移動すればヘッダーと被りません
  //ターゲットまでの移動距離をpositionで調節するイメージ

  jQuery("html, body").animate({
    scrollTop: position
  }, speed);
  return false;
}); // ハンバーガーをクリックしたときの動作

$(".header-hamburger").on("click", function (e) {
  e.preventDefault(); // aタグを開いたりしても推移しないように。

  $(".hamburger").toggleClass("is-active"); // $(".hamburger__background").toggleClass("is-active");
  // $(".hamburger__items").toggleClass("is-active");

  $(this).toggleClass("is-active"); // $(this).addClass("hamburger__content");
  // $('.hamburger__close').toggleClass('slide-in');
  // $('.hamburger__content').toggleClass('slide-in');
  // $('body').toggleClass('noscroll');

  return false; // aタグを開いたりしても推移しないように。
});
$(".hamburger__link").on('click', function () {
  // $('.header-hamburger').trigger('click');
  $(".hamburger").removeClass("is-active");
  $(".header-hamburger").removeClass("is-active");
}); //ヘッダー追従用。下記は、100px以上スクロールした固定

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      //100px以上スクロールした固定
      $(".header").addClass("h-active");
    } else {
      $(".header").removeClass("h-active");
    }
  });
});