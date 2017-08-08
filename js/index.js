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
