
new Glider(document.querySelector('.js-imglistas'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots',
    responsive: [
      {
        breakpoint: 775,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      },{
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  dots: '.sdots',
  responsive: [
    {
      
      breakpoint: 775,
      settings: {
        
        slidesToShow: 2,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    },{
      
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
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
  