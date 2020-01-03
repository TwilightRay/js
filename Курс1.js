// 1) Создать переменную num со значением 33721
// ·        Вывести в консоль произведение (умножение) цифр этого числа.
// 2) Полученный результат возвести в степень 3, используя только 1 оператор
// ·        Вывести его на экран

var num = "33721";// 126
var quantity = 10;
var count = [];

for (var i = num.length-1; i >= 0; i--) {
	count[i] = (33721%quantity);
	quantity*=10;
	
}
console.log(count);

var v = 0;
while (v < 4){
	count[v]-=count[v+1];
	++v;
}

console.log(count);

for (i = 0; i <4; i++) {
	count[i]+="";
	quantity = count[i].length-1;
	count[i] = ( +count[i]/Math.pow(10, quantity) );
	
}

console.log(count);

var result = 1;
for (i = 0; i < num.length-1; i++) {
	result*=count[i];
}
console.log(result);

function easy(number) {
    if (!number)
        return 0;
    var result = 1;
    while (number) {
        result *= number % 10;
        number = Math.floor(number / 10);
    }
    return result;
}

console.log(easy(33721));

num = Math.pow(result, 3);

console.log(num);
