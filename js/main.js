$(function(){
	$('.hamburger').on('click',function(e){
             e.preventDefault();
        toggleMenu();
    });
    
    function toggleMenu(){
        $('body').toggleClass('nav-open');
    }

    $('.tab-links.side-bar ul li a').on("click", function (e){
        e.preventDefault(); 
        $('.tab-links.side-bar ul li.active a').removeClass('active');
        $('.tab-links.side-bar ul li a.active').removeClass('active');
        $(this).addClass('active');
        $(this).parent().parent().children().removeClass('active');
        $(this).parent().addClass('active');
        $('.tab-content.form-tab.active').removeClass('active');
        $(this.rel).addClass('active');
    });

   var imgHeight = $('.side-bar.doctor-profile figure').outerHeight();
   $('.profile-info > div:first-child').css('height', imgHeight);

});