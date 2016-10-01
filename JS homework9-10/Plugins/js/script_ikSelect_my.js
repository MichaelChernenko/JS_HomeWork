$(function () {
	$.ikSelect.extendDefaults({
		extraWidth: 1
	});

	$('.select-options').each(function () {
		var $example = $(this);
		var $select = $('select', this);
		var selectOptions = {};

		$select.ikSelect();

		$('.list-examples', $example).each(function () {
			var $list = $(this);
			var $buttonSet = $('button', $list);

			$buttonSet.each(function () {
				var $button = $(this);
				var key = $('.key', $button).text();
				var value = $button.data('value');
				var currentValue = value;
				var altValue = $button.data('altvalue');
				var $value = $('.value', $button);

				var renderValue = function () {
					$value.text(typeof currentValue === 'string' ? ('\'' + currentValue + '\'') : currentValue);
				};

				var storeValue = function () {
					selectOptions[key] = currentValue;
					if (typeof currentValue === 'string') {
						if (currentValue.indexOf('function') === 0) {
							selectOptions[key] = eval('callback = ' + currentValue, currentValue);
						}
					}
				};

				renderValue();
				storeValue();

				$button.on('click', function (event) {
					event.preventDefault();
					currentValue = currentValue === value ? altValue : value;
					renderValue();
					storeValue();
					$select.ikSelect('detach').prop('disabled', false).ikSelect(selectOptions);
				});
			});
		});
	});
});
