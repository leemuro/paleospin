(function($) {
  $.fn.slot = function(options) {
    var slotIndex = 0;
    $(this).each(function() {
      slotIndex++;
      var $list = $(this);

      var spinning = false;
      var spins = 6 + (1.5 * slotIndex);
      var spinDuration = 0;
      var spinCount = 0;

      var listHeight, itemCount, itemHeight;

      $list.css('position', 'absolute');

      function spin() {
        itemCount = $list.find('li').length;
        if(itemCount <= 1) return;
        spinning = true;
        listHeight = $list.outerHeight();
        itemHeight = $list.find('li').first().outerHeight();
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

      function reset() {
        $list.css('top', 0);
      }

      $(options.spinButton).click(function() {
        if(!spinning)
          spin();
      });

      $(options.resets).click(function() {
        reset();
      });
    })
  }
})(jQuery);
