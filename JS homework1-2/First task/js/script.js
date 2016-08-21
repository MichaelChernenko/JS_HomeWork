var base; // Возводимое число
var degree; // Степень

do {
	base = parseInt(prompt(title = "Введите целое число - основание"));
	if ((isNaN(base))) {
		alert("Необходимо ввести число");
	};
} while (isNaN(base));

console.log("Основание:", base);

do {
	degree = parseInt(prompt(title = "Введите целое число - степень"));
	if ((isNaN(degree))) {
		alert("Необходимо ввести число");
	};
} while (isNaN(degree));

console.log("Степень:", degree);


function pow(a, b) {
	var result = a;
	
	for ( var i = 1; i < b; i++) {
		result *= a;
	}
	return result;
}

pow(base, degree);

console.log("Результат:", pow(base, degree));



