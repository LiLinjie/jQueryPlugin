(function ($) {
	$.fn.jTooltip = function (options) {
		var opts = $.extend({}, options);
		var tooltips = $('<div class="j-tooltips"></div>').appendTo('body').text(this.text()).hide();
		var that = this;
		this.on({
			mouseover: function (e) {
				e.stopPropagation();
				tooltips.show().css({
					top: e.pageY,
					left: e.pageX
				});
			},
			mouseout: function (e) {
				tooltips.hide();
			},
			mousemove: function (e) {
				tooltips.css({
					top: e.pageY,
					left: e.pageX
				});
			}
		})
	}
})(jQuery);