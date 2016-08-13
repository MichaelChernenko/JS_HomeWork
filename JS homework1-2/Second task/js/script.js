var nameArr = [];
nameArr.length = 5;

for (var i = 0; i < nameArr.length; i++) {
	nameArr[i] = prompt("Введите имя:");
};

var userName = prompt("Введите Ваше имя:");

if (userName == nameArr[0] || userName == nameArr[1] || userName == nameArr[2] || userName == nameArr[3] || userName == nameArr[4]) {
	alert(userName + ", " + "вы успешно вошли");
}
else {
	alert("Вы не имеете необходимых прав!");
};
