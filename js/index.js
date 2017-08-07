/**
 * Created by Administrator on 2017/3/17.
 */
window.onload= function () {
    var btn=document.getElementById('music-btn');
    var audio=document.getElementById('audio');

    btn.onclick= function () {
       if(audio.paused){
           audio.play();
           btn.style.background="url('images/music01.gif')";
       }else{
           audio.pause();
           btn.style.background="";
       }

    }
}
//$(function () {
//    var a=0;
//    $('.music-btn').click(function () {
//        a++;
//        if(a==1){
//
//        }
//        if(a==2){
//            $('.audio').stop();
//        }
//        if(a>2){
//            a=0;
//        }
//    })
//})