$(function(){

  //バーガーメニュー

  $("#burger").click(function () {
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('#modal_nav_menu').removeClass('active');
      $("html,body").css("overflow", "visible");
      return false;
    }else{
      $(this).addClass('active');
      $('#modal_nav_menu').addClass('active');
      $("html,body").css("overflow", "hidden");
      return false;
    }
  });

  $('.modal_sub_menu li p').click(function(){
    $("#burger").removeClass('active');
    $('#modal_nav_menu').removeClass('active');
    $('body,html').css('overflow', 'visible');
  });

  // サイズを変えた時にハンバーガーメニューの処理を消す
  $(window).on('load resize', function(){
    var w = $(window).width();
    var x = 1075;

  if (w <= x) {
    $('#burger').removeClass('active');
    $('#modal_nav_menu').removeClass('active')
    $("html,body").css("overflow", "visible");
    }
  });



  //ヘッダーナビメニューのドロップ
  $('#header-nav ul>.nav_wrapper').find('ul').hide();
  $('#header-nav .nav_title_wrapper>.nav_wrapper').hover(function(){
      $('.sub_menu:not(:animated)', this).slideDown(300);
    },
    function(){
      $('.sub_menu',this).slideUp();
  });


  //Planページのタブの切り替え用
  //任意のタブにURLからリンクするための設定
  function GethashID (hashIDName){
    if(hashIDName){
      //タブ設定
      $('.tab li').find('a').each(function() { 
        var idName = $(this).attr('href');
        if(idName == hashIDName){ 
          var parentElm = $(this).parent(); 
          $('.tab li').removeClass("active"); 
          $(parentElm).addClass("active");
          $(".area").removeClass("is-active");
          $(hashIDName).addClass("is-active");
        }
      });
    }
  }

  $('.tab a').on('click', function() {
    var idName = $(this).attr('href');
    GethashID (idName);
    return false;
  });

  $(window).on('load', function () {
      $('.tab li:first-of-type').addClass("active");
      $('.area:first-of-type').addClass("is-active");
    var hashName = location.hash; 
    GethashID (hashName);
  });


  ////////topへ戻るボタン関連////////
  //画面をスクロールしたら
  $(window).scroll(function(){
  if($(this).scrollTop()>600){
    $('#to_top').fadeIn(400);
    return false;
  }else{
    $('#to_top').fadeOut(400);
    return false;
  }
  });

  //「topへ戻る」ボタンを押すとtopから0の地点へスクロールする
  $('#to_top').click(function(){ 
    $('html,body').animate({'scrollTop':0},500);
    return false;
  });




  


});