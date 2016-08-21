
var testPage = {

	createWrapper: function() {
		var parentElem = document.body;
		var container = document.createElement('div');
		container.classList = 'container';
		var append = parentElem.appendChild(container);
	},

	createFieldset: function() {
		var parentElem = document.querySelector('.container');
		var fieldset = document.createElement('fieldset');
		fieldset.classList = 'fieldset';
		var append = parentElem.appendChild(fieldset);
		var header = document.createElement('legend');
		header.innerHTML = 'Тест по программированию';
		header.classList = 'h1';
		var append = fieldset.appendChild(header);
	},

	createForm: function() {
		var form = document.createElement('form'); 
		var parentElem = document.getElementsByTagName('fieldset');
		parentElem[0].appendChild(form);
		form.setAttribute('name', 'test');
		form.setAttribute('method', 'get');
		var ol = document.createElement('ol');  //создать элемент ol
		for (var i = 1; i < 4; i++) {
			var li = document.createElement('li'); 
			li.innerHTML = 'Вопрос №' + i;
			li.classList ='h2';
			for (var j = 1; j < 4; j++) {
				var div = document.createElement('div');
				var checkBox = document.createElement('input');
				checkBox.setAttribute('type', 'checkbox');
				checkBox.setAttribute('id', 'line' + i + j);
				checkBox.classList = "checkbox-inline";
				var label = document.createElement('label');
				label.innerHTML = 'Вариант ответа №' + j;
				label.setAttribute('for', 'line' + i + j);
				label.classList = 'h3';
				div.appendChild(checkBox);
				div.appendChild(label);
				li.appendChild(div);
			}
			ol.appendChild(li);
		}
		form.appendChild(ol);
	},

	createButton: function() {
		var submitDiv = document.createElement('div');
		var parentElem = document.getElementsByTagName('form');
		var submit = document.createElement('input');
		submit.setAttribute('type', 'submit');
		submit.setAttribute('value', 'Проверить мои результаты');
		submit.setAttribute('id', 'submit-form');
		submit.classList  = 'custom-button';
		submitDiv.classList = 'submitDiv';
		submitDiv.appendChild(submit);
		parentElem[0].appendChild(submitDiv);
	}
	
}


testPage.createWrapper();
testPage.createFieldset();
testPage.createForm();
testPage.createButton();