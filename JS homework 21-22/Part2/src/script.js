
'use strict';
document.addEventListener('DOMContentLoaded', ( () => {

let bodyPlace = document.getElementsByTagName('body');
let body = bodyPlace[0];
body.classList.add('cssClass');

try {

// вставить список
  let shablon = document.getElementById('make_form').innerHTML;
  let obj = localStorage.getItem('test_module');
  let myTest = JSON.parse(obj);

  let tmpl = _.template(shablon);
  let testForm = tmpl(myTest);
  body.innerHTML += testForm;

// добавить модальное окно
  let modulShablon = document.getElementById('make_modal').innerHTML;
  let modulFormFunc = _.template(modulShablon);
  let modulForm = modulFormFunc();
  body.innerHTML += modulForm;

// проверка результата
  let checkResult = (e) => {
      e.preventDefault();
      let i = 0,
      j = 0,
      boxFind = '',
      userCheck = '',
      userProgress = 'right';
        myTest.quesstions.forEach( () => {
          userCheck = '';
          i++;
          j = 0;
          myTest.answers[`answers_${i}`].forEach ( () => {
            j++;
            boxFind = document.getElementById( `line${i}${j}`);
            userCheck += (boxFind.checked) ? 1 : 0;
          });
          myTest.user_answer[i-1] = userCheck;
          if (myTest.correct[i-1] != userCheck) {
            userProgress = 'wrong';
          }
        });
      let obj = JSON.stringify(myTest);
      localStorage.setItem('test_module', obj);

  //  модальное окно

    let hideModul = () => {
      document.getElementById('cover-div').style.display = 'none';
    };

    document.getElementById('cover-div').style.display = 'block';
    let form = document.getElementById('prompt-form');
    document.getElementById('prompt-message').innerHTML = `Your answers are ${userProgress}`;

    form.onsubmit = () => {
      hideModul();
      return false;
    };

    form.elements.restart.onclick = () => {
      let inputBoxes = document.querySelectorAll( 'input[type="checkbox"]' );
      for (let boxForUncheck of inputBoxes){

        if (boxForUncheck.checked) {
          boxForUncheck.checked = 0;
        };
      };
      hideModul();
    };

    document.onkeydown = (e) => {        // escape
      if (e.keyCode == 27) {
        hideModul();
      }
    };

  //  конец  модального окна

  };


document.getElementById('submit-form').addEventListener('click', checkResult);

}
catch (e)  {

  alert(`Error. Please, restart page.', ${e}`);

  let myTest = {
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

      let obj = JSON.stringify(myTest);
      localStorage.setItem('test_module', obj);

    } finally {
  // window.localStorage.clear();
};

})
);









