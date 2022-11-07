$(function() {
    $('.accordion li').click(function(){
      $(this).toggleClass(' active ');
      $(this).siblings().removeClass(' active '); 
      $('.submenu').stop().slideUp();
      $('.active .submenu').stop().slideDown();
      return false;
    });
  });
  