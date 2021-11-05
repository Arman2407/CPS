export function sliderSwiper () {
// Swiper
   let catalogSlider = null;
   let catalogSliderSecond = null;
   let catalogSliderThird = null;
   const mediaQuerySize = 768;

   const showBtn = document.querySelector('.show__more'); 
   const hideBtn = document.querySelector('.hide__all');

   const showBtnTech = document.querySelector('.show__more--technique');
   const hideBtnTech = document.querySelector('.hide__all--technique');
   
   const brandBlock = document.querySelector('.swiper-container--brand'); 
   const texhBlock = document.querySelector('.swiper-container--technique');

   catalogSliderInit();
   window.addEventListener('resize', checkMediaSize);
   checkMediaSize();

   function checkMediaSize () {
    // Если ширина экрана меньше mediaQuerySize
    if (document.documentElement.clientWidth < mediaQuerySize) {
      // Инициализировать слайдер если он ещё не был инициализирован
     // Скрыть кнопки показать / скрыть
      catalogSliderInit();
      hideBtns();
      texhBlock.style.maxHeight = '200px';
    } else {
      // Уничтожить слайдер если он был инициализирован
      // Показать кнопки показать / скрыть
      catalogSliderDestroy();
      showBtns();
    }
  };

  function catalogSliderInit () {
    if (!catalogSlider) {
       catalogSlider = new Swiper(".swiper-container--brand", {
         slidesPerView: "auto",
         spaceBetween: 16,
         pagination: {
             el: ".swiper-pagination",
             clickable: true,
         },
       });
     }

     if (!catalogSliderSecond) {
       catalogSliderSecond = new Swiper(".swiper-container--technique", {
         slidesPerView: "auto",
         spaceBetween: 16,
         pagination: {
             el: ".swiper-pagination--technique",
             clickable: true,
         },
       });
     }

     if (!catalogSliderThird) {
       catalogSliderThird = new Swiper(".swiper-container--prices", {
         slidesPerView: "auto",
         spaceBetween: 16,
         pagination: {
             el: ".swiper-pagination--prices",
             clickable: true,
         },
       });
     }
   };
  
   function catalogSliderDestroy () {
     if (catalogSlider) {
       catalogSlider.destroy();
       catalogSlider = null; 
     }

     if (catalogSliderSecond) {
      catalogSliderSecond.destroy();
      catalogSliderSecond = null;
    }

     if (catalogSliderThird) {
       catalogSliderThird.destroy();
       catalogSliderThird = null;
     }
   };
   
   // Показать / скрыть
   showBtn.addEventListener('click', function () {
     if (document.documentElement.clientWidth >= 768) {
       brandBlock.style.overflow = 'visible';
       brandBlock.style.maxHeight = '100vh';
       showBtn.style.display = 'none';
       hideBtn.style.display = 'block';
     }
   });

   hideBtn.addEventListener('click', function () {
     if (document.documentElement.clientWidth >= 768) {
       brandBlock.style.overflow = 'hidden';
       brandBlock.style.maxHeight = '175px';
       showBtn.style.display = 'block';
       hideBtn.style.display = 'none';
     }
   })

   showBtnTech.addEventListener('click', function () {
     if (document.documentElement.clientWidth >= 768) {
       texhBlock.style.overflow = 'visible';
       texhBlock.style.maxHeight =  '100vh';
       showBtnTech.style.display = 'none';
       hideBtnTech.style.display = 'block';
     } 
   });

   hideBtnTech.addEventListener('click', function () {
     if (document.documentElement.clientWidth >= 768) {
      texhBlock.style.overflow = 'hidden';
      texhBlock.style.maxHeight = '175px'
      showBtnTech.style.display = 'block';
      hideBtnTech.style.display = 'none';
     }
   });
  
   function hideBtns () {
    showBtn.style.display = "none";
    hideBtn.style.display = "none";
    hideBtnTech.style.display = 'none';
    showBtnTech.style.display = 'none';
  }

  function showBtns () {
    showBtn.style.display = "block";
    showBtnTech.style.display = 'block';
  }
} 
