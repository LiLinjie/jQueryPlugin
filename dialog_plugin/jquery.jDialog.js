(function ($) {
	$.fn.jDialog = function (options) {
		if (typeof options === 'string') options = { content: 'options'};
		var opts = $.extend({
			height: 'auto',
			dialogClass: 'j-ui-dialog',
			title: '',
			width: 300,
			zIndex: 1000
		}, options);
		this._isOpen = false;
		var jDialog, jDialogContent, jDialogTitle;
		if(this.parents('.' + opts.dialogClass).length == 0){
			jDialogContent = this.addClass('j-ui-dialog-cont').wrap('<div class="' + opts.dialogClass + '"></div>').show();
			jDialog = $('.' + opts.dialogClass).css({
				width: opts.width,
				height: opts.height,
				zIndex: opts.zIndex
			});
			jDialogTitle = $('<div class="j-ui-dialog-title"></div>').prependTo(jDialog);
			jDialogTitle.append('<h3>' + opts.title + '</h3><a class="j-ui-close" title="关闭"></a>');
			jDialog.height(jDialogContent.outerHeight() + jDialogTitle.height());
		}
		else{
			jDialog = this.parents('.' + opts.dialogClass).show();
		}
		
		$('.j-ui-close').click(function (e) {
			close();
		});
		function close (e) {
			jDialog.hide();
			this._isOpen = false;
		}
	}
})(jQuery);