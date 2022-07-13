$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');   /*getting the hmburgers menu operated on mouse click*/
        $('.navbar').toggleClass('nav-toggle');   /*getting the navigation panel to display only when clicked on the menu*/
    });

    
    $(window).on('load scroll',function(){
        $('#menu').removeClass('fa-times');      /*on scrolling the page , the nav panel gets hidden*/
        $('.navbar').removeClass('nav-toggle');


        if($(window).scrollTop() > 0){          /*if scrolling is done on the page then header style is changed and shown with different color and shadow. Otherwise in home page no header is highlighted*/
            $('header').addClass('sticky');
        }
        else{
            $('header').removeClass('sticky');
        }


        if($(window).scrollTop() > 0){          /*if scrolling is done on the page then header style is changed and shown with different color and shadow. Otherwise in home page no header is highlighted*/
            $('.scroll-top').show();
        }
        else{
            $('.scroll-top').hide();
        }

    });


    $('section').each(function(){

        let top = $(window).scrollTop();
        let offset = $(this).offset().top - 200;
        let id = $(this).attr('id');
        let height = $(this).height();
  
        if(top > offset && top < offset + height){
          $('.navbar a').removeClass('active');
          $('.navbar').find(`[href="#${id}"]`).addClass('active');
        }
  
      });
  
    });
  

    //Smooth scrolling
    $('a[href*="#"]').on('click',function(e){

        $('html, body').animate({
    
          scrollTop : $($(this).attr('href')).offset().top,
    
        },
          500,
          'linear'
        );
    
      });
