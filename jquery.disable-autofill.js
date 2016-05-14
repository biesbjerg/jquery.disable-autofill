;(function($, window, document, undefined) {

	var pluginName = 'disableAutofill';
	var defaults = {};

	function Plugin(element, options) {
		this.element = element;
		this.options = $.extend({}, defaults, options) ;

		this._defaults = defaults;
		this._name = pluginName;

		this.initialize();
	}

	Plugin.prototype.initialize = function() {
		var $element = $(this.element);
		$element
			.val($element.attr('value'))
			.clone()
			.removeAttr('id class required')
			.insertBefore(this.element)
			.hide();
	};

	$.fn[pluginName] = function(options) {
		return this.each(function() {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
			}
		});
	};

})(jQuery, window, document);
