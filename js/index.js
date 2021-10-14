$(document).ready(function(){
   $('.list').click(function(){
     const value = $(this).attr('data-filter');
     if(value == 'all'){
         $('.itembox').show('1000');
     }
     else{
        $('.itembox').not('.'+value).hide('1000');
        $('.itembox').filter('.'+value).show('1000');
     }
   });
   $('.list').click(function(){
     $(this).addclass('active').siblings().removeclass('active');
   });
});