/**
 * Created by wangbiaozy on 2017/12/1.
 */
(function(global){
    function remChange(){
        document.documentElement.style.fontSize=100*document.documentElement.clientWidth/720+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);
$(function () {
    $('#lookBtn').on('touchend',function () {
        $('footer').slideToggle();
        if($(this).children('span').hasClass('active')){
            console.log(1);
            $(this).children('span').removeClass('active');
        }else{
            $(this).children('span').addClass('active');
        }
    });
});
