'use strict';

{

  const swiper = new Swiper('.swiper-container', {
  
  
    speed: 1200,
  
    loop: true,
  
    autoplay: {
      delay: 4000
    },
  

  });
}

{
  const nav_menu = document.querySelectorAll('.nav-menu > ul > li');
  const nav_img = document.querySelectorAll('.nav-menu > ul > li > img');
  const nav_menu_0 = document.querySelector('.nav-menu-0');
  const nav_menu_1 = document.querySelector('.nav-menu-1');
  const nav_menu_2 = document.querySelector('.nav-menu-2');
  
  nav_menu[0].addEventListener('click', ()=> {
    nav_menu_0.classList.toggle('show');
    nav_menu[0].classList.toggle('color');
    nav_img[0].classList.toggle('img_hidden');

    nav_menu_1.classList.remove('show');
    nav_menu[1].classList.remove('color');
    nav_img[1].classList.remove('img_hidden');


    nav_menu_2.classList.remove('show');
    nav_menu[2].classList.remove('color');
    nav_img[2].classList.remove('img_hidden');


  } );
 


  nav_menu[1].addEventListener('click', ()=> {
    nav_menu_1.classList.toggle('show');
    nav_menu[1].classList.toggle('color');
    nav_img[1].classList.toggle('img_hidden');

    nav_menu_0.classList.remove('show');
    nav_menu[0].classList.remove('color');
    nav_img[0].classList.remove('img_hidden');


    nav_menu_2.classList.remove('show');
    nav_menu[2].classList.remove('color');
    nav_img[2].classList.remove('img_hidden');

  } );
 

  nav_menu[2].addEventListener('click', ()=> {
    nav_menu_2.classList.toggle('show');
    nav_menu[2].classList.toggle('color');
    nav_img[2].classList.toggle('img_hidden');


    nav_menu_1.classList.remove('show');
    nav_menu[1].classList.remove('color');
    nav_img[1].classList.remove('img_hidden');


    nav_menu_0.classList.remove('show');
    nav_menu[0].classList.remove('color');
    nav_img[0].classList.remove('img_hidden');


  } );
 
}

// ======== マウスホバーバージョン ===========
{

  // const nav_menu = document.querySelectorAll('.nav-menu > ul > li');
  // const nav_menu_2 = document.querySelector('.nav-menu-2');
  
  // nav_menu[0].addEventListener('mouseenter', ()=> {
  //   nav_menu_2.classList.add('show');
  // } );
  // nav_menu[0].addEventListener('mouseleave', ()=> {
  //   nav_menu_2.classList.remove('show');
  // } );

}


