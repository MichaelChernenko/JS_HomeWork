
'use strict';
document.addEventListener('DOMContentLoaded', (function () {

	let bodyPlace = document.getElementsByTagName('body');
let body = bodyPlace[0];
body.classList.add('cssClass');
	try {

// вставить список
var shablon = document.getElementById('make_form').innerHTML;
var obj = localStorage.getItem('test_module');
var myTest = JSON.parse(obj);

var tmpl = _.template(shablon);
var testForm = tmpl(myTest);
body.innerHTML += testForm;

// добавить модальное окно
var modulShablon = document.getElementById('make_modal').innerHTML;
var modulFormFunc = _.template(modulShablon);
var modulForm = modulFormFunc();
body.innerHTML += modulForm;

// проверка результата
function checkResult(e) {
	e.preventDefault();
	var i = 0,
	j = 0,
	boxFind = '',
	userCheck = '',
	userProgress = 'правильны';
	myTest.quesstions.forEach(function () {
		userCheck = '';
		i++;
		j = 0;
		myTest.answers['answers_' + i].forEach ( function () {
			j++;
			boxFind = document.getElementById( 'line' + i + j );
			userCheck += (boxFind.checked) ? 1 : 0;
		});
		myTest.user_answer[i-1] = userCheck;
		if (myTest.correct[i-1] != userCheck) {
			userProgress = 'неверны';
		}
	});
	var obj = JSON.stringify(myTest);
	localStorage.setItem('test_module', obj);

  //  модальное окно

  function hideModul() {
  	document.getElementById('cover-div').style.display = 'none';
  };

  document.getElementById('cover-div').style.display = 'block';
  var form = document.getElementById('prompt-form');
  document.getElementById('prompt-message').innerHTML = 'Ваши ответы ' + userProgress;

  form.onsubmit = function() {
  	hideModul();
  	return false;
  };

  form.elements.restart.onclick = function() {
  	var inputBoxes = document.querySelectorAll( 'input[type="checkbox"]' );
  	for(i in inputBoxes){
  		if((!(inputBoxes.hasOwnProperty(i))||i==="length")) break;
  		if (inputBoxes[i].checked) {
  			inputBoxes[i].checked = 0;
  		};
  	};
  	hideModul();
  };

    document.onkeydown = function(e) {        // escape
    	if (e.keyCode == 27) {
    		hideModul();
    	}
    };

  //  конец  модального окна

};


document.getElementById('submit-form').addEventListener('click', checkResult);


} catch (e) {

	alert('Error. Please, restart page.', e);

	var myTest = {
		formAttr: {
			name: 'test',
			method: 'get'},
			quesstions: [
			'Что обозначает директива ‘use strict’?',
			'К какому участку скрипта применяется строгие правила ‘use strict’?',
			'Какие основное ограничения к объявлению переменных в строгом режиме?'
			],
			answers: {
				answers_1: ['Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 5.',
				'Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 6.',
				'Код данного скрипта будет обработан по строгим правилам, однако допускается использование нестрогих правил написания кода.'
				],
				answers_2: ['Внутри блока {}',
				'Либо во всем скрипте, либо в отдельной функции.',
				'Строгие правила работают между директивами ‘use strict’ и ‘strict end’.'
				],
				answers_3: ['Переменные функций должны объявляться с использованием ключевого слова var',
				'Глобальные переменные должны объявляться с использованием ключевого слова var',
				'Любая переменная должна объявляться с использованием ключевого слова var'
				] },
				correct: ['100', '010', '001'],
				user_answer: ['000', '000', '000']
			};

			var obj = JSON.stringify(myTest);
			localStorage.setItem('test_module', obj);

		} finally {
  // window.localStorage.clear();
};

})
);








