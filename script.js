jQuery(function(){
  responsive.start();
  jQuery(window).resize(responsive.start);
})


var responsive = {

  start: function () {
    var screen_size = jQuery(window).outerWidth();

    if (screen_size <= 742) {
      responsive.createButtons();
    } else {
      jQuery('.menu-verhnee-menyu-container > ul').show();
    }
  },

  createButtons: function () {
    if (!jQuery('#burger').length) {
      jQuery('<div>', {
        'id' : 'burger'
      }).prependTo('.menu-verhnee-menyu-container');

      jQuery('#burger').click(function(){
        jQuery('.menu-verhnee-menyu-container > ul').slideToggle();
      });
    }
    jQuery('.menu-verhnee-menyu-container .menu-item.menu-item-has-children').each(function(){
      if (!jQuery(this).find('.open-submenu').length) {
        jQuery('<span>', {
          'class' : 'open-submenu'
        }).prependTo(jQuery(this));
        
        jQuery('.open-submenu').click(function(){
          jQuery('.menu-verhnee-menyu-container > ul ul').slideToggle();
        });
      }
    });
  }

}
