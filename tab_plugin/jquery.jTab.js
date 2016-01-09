;(function ($) {
	$.fn.extend({
		// tab插件名称
		jTab: function (options) {
			// 默认值
			var defaults = {
				tabSelected: "active",
				tabWidth: "100%",
				autoHeight: "true"
			};
			var opts = $.extend({}, defaults, options);
			$(this).css("width", opts.tabWidth);

			//选项卡this指通过当前选择器获取的JQuery对象
			var tab = $(".tab li", this);
			// 选项内容
			var tabContent = $(".tab-cont > div", this);

			if(opts.autoHeight != "true") {
				tabContent.css("height", opts.autoHeight);
			}

			// 单击选项卡
			tab.click(function () {
				$(this).addClass(opts.tabSelected).siblings().removeClass(opts.tabSelected);
				var curIndex = tab.index(this);
				tabContent.eq(curIndex).show().siblings().hide();
			})
		}
	})
})(jQuery);