define(
	"controller",
	['model', 'view', 'jquery'],
	function (model, view, $) {

		return {	
			Controller: function (model, view) {

				var self = this;
				view.elements.addBtn.on('click', addItem);
				view.elements.listContainer.on('click', '.item-delete', removeItem);  // фильтрует нажатие по конкретно .item-delete
				view.elements.listContainer.on('click', '.item-change', chgItem);

				function addItem() {
					var newItem = view.elements.input.val();  // получить значение value
					model.addItem(newItem);				// вызываем метод модели - передаём строку из input - в хранилище информации
					view.renderList(model.data);        // отобразить измененный перечень
					view.elements.input.val('');        // очищаем поле
				}

				function removeItem() {
					var itemIndex = this.parentNode.querySelector('span').innerHTML;
					model.removeItem(itemIndex);	       // удалим из модели элемент
					view.renderList(model.data); 		   // отобразить измененный перечень
				}

				function chgItem() {
					view.renderList(model.data);          // отобразить текущий перечень
					var itemIndex = this.parentNode.querySelector('span').innerHTML;
					var presentContent = this.parentNode.getElementsByClassName('item-content')[0].innerHTML;
					view.showChngBox(this, presentContent);

					$('.item-chg').on('click', function () {
							var newData = this.parentNode.querySelector('input').value;
							if (newData) {
								model.chgItem(itemIndex, newData);		           // заменить в модели элемент
								view.renderList(model.data); 		   // отобразить измененный перечень
							};
						});
					$('.item-cncl').on('click', function () {
							view.renderList(model.data);
						});
				}
			}
		}
	}
);