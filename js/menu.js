$(document).ready(function(){

  $(".main").hover(function(){
    $(this).find(".sub").stop().slideDown();
  },function(){
    $(this).find(".sub").stop().slideUp();
  });

  let $img = $(".changeimg ul li"),
      $text = $(".changeimg ul li .des"),
      $lbtn = $(".side-btn .lbtn"),
      $rbtn = $(".side-btn .rbtn"),
      oldImg=0,
      newImg=0,
      oldText=0,
      newText=0,
      count = $img.length;

  function changeImg(newImg){
    if(oldImg != newImg){
      $img.eq(oldImg).removeClass("imgVisible");
      $img.eq(newImg).addClass("imgVisible");
    };
    oldImg = newImg;
  };

  function changeText(newText){
    if(oldText != newText){
      $text.eq(oldText).removeClass("textVisible");
      $text.eq(newText).addClass("textVisible");
    };
    oldText = newText;
  };

  function autoImg(){
    newImg++;
    if(newImg>count-1){
      newImg=0;
    }
    changeImg(newImg);
  };
  function autoText(){
    newText++;
    if(newText>count-1){
      newText=0;
    }
    changeText(newText);
  };
  setInterval(autoImg,4000);
  setInterval(autoText,4000);

  $lbtn.click(function(){
    newImg--;
    if(newImg<0){
      newImg=count-1;
    }
    changeImg(newImg);

    newText--;
    if(newText<0){
      newText=count-1;
    }
    changeText(newText);
  });

  $rbtn.click(function(){
    newImg++;
    if(newImg>count-1){
      newImg=0;
    }
    changeImg(newImg);

    newText++;
    if(newText>count-1){
      newText=0;
    }
    changeText(newText);
  });

  $("main").mouseenter(function(){
    clearInterval(timerImg);
    clearInterval(timerText);
  })
  .mouseleave(function(){
    timerImg = setInterval(autoImg,4000); 
    timerText = setInterval(autoText,4000);
  });

});