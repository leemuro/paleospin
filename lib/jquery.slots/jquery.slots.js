(function($) {
  $.fn.slot = function(options) {
    var slotIndex = 0;
    $(this).each(function() {
      slotIndex++;
      var $list = $(this);
      var listHeight = $list.outerHeight();
      var itemCount = $list.find('li').length;
      var itemHeight = $list.find('li').first().outerHeight();

      var spinning = false;
      var spins = 10 + slotIndex;
      var spinDuration = 0;
      var spinCount = 0;

      $list.css('position', 'absolute');

      function spin() {
        spinning = true;
        $list.css('top', -listHeight)
          .animate({'top': '0px'}, spinDuration, 'linear', function() {
            spinCount++;
            spinDuration += spinCount * 10;
            if(spinCount < spins)
              spin();
            else
              stop();
          });
      }

      function stop() {
        var index = Math.floor(Math.random() * itemCount);
        var y = -(itemHeight * index);

        $list.css('top', -listHeight)
          .animate({'top': y}, spinDuration, 'linear', function() {
            spinning = false;
          });
      }

      $(options.spinButton).click(function() {
        if(!spinning)
          spin();
      });
    })
  }
})(jQuery);
