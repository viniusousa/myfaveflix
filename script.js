/*
const responilists = document.querySelector('.js-imglistas')
*/
/*
new Glider(responilists, {
    slidesToshow: 5,
    slidesToScroll: 4,
    draggable: true,

} ) 
*/
new Glider(document.querySelector('.js-imglistas'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
      {
        
        breakpoint: 775,
        settings: {
          
          slidesToShow: 'auto',
          slidesToScroll: 'auto',
          itemWidth: 150,
          duration: 0.25
        }
      },{
        
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      },{
        
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          itemWidth: 150,
          duration: 0.25
        }
      }, {
        
        breakpoint: 1920,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
          itemWidth: 150,
          duration: 0.25,
          rewind: true
        }
      }
    ]
  });

  new Glider(document.querySelector('.js-imgslistas'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '.sdots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
      {
        
        breakpoint: 775,
        settings: {
          
          slidesToShow: 'auto',
          slidesToScroll: 'auto',
          itemWidth: 150,
          duration: 0.25
        }
      },{
        
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      },{
        
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          itemWidth: 150,
          duration: 0.25
        }
      }, {
        
        breakpoint: 1920,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
          itemWidth: 150,
          duration: 0.25,
          rewind: true
        }
      }
    ]
  });
  