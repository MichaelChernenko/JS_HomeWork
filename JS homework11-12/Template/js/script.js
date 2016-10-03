$(function() {

	var html = $('#studentPage').html();
	var data = {
		title: 'Черненко Михаил Юрьевич',
		imageSourse: 'img/face.png',
		university: 'Студент НАУ им. Н.Е.Жуковского "ХАИ"',
		objective: 'Хочу учить фронтенд, потому что:',
		objectList: [
			 'Мне это нравится, всегда есть к чему стремиться и куда расти',
			 'Процесс вёрстки очень интересн и не напоминает обычную рутину',
			 'Достойная оплата труда'
		],
		social: {
			phone: 'Мой контактный телефон',
			number: '+380500535307',
			profile: 'Мой профиль вконтакте',
			link: 'https://vk.com/mikael_amnell',
			text: 'vk.com'
		},
		feedback: {
			heading: 'Мой фидбек:',
			text: 'Нет ничего невозможного, всего можно достичь, стоит только захотеть.'
		}
	}


	var content = tmpl(html, data);
	$('body').append(content);


})