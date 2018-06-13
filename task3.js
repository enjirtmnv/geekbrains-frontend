var a = parseInt(process.argv[2]) // приводим к нижнему регистру
var b = parseInt(process.argv[3]) // приводим к нижнему регистру
var c = a+b
if (c == 0) // обработаем крайний случай
{
	process.stdout.write("0 секунд")
	return;
}



var hours = ~~(c / 3600) // количество часов
var minutes = ~~(c / 60) - 60*hours // количество минут
var seconds = c%60 // количество секунд

var output = "" //+ " " + minutes.toString() + " " + seconds.toString()

// можно было бы сделать функцию, но часы и минуты имеют разные окончания, поэтому решила сделать копипастой

// час -- 1, 21, 31, ... оканчивается на 1 (кроме 11)
// часа -- оканчивается на 2, 3, 4, кроме 12 13 14 
// часов все остальное
if (hours > 0)
	output += hours.toString()
	if ((hours != 11) && ((hours % 10) == 1) ){
	  output += " час ";
	} else if (([2, 3, 4].includes(hours % 10)) && (!([12, 13, 14].includes(hours)))){
	  output += " часа ";
	} else {
	  output += " часов ";
	}

// минуты -- оканчивается на 2,3,4 кроме 12 13 14
// минута -- оканчивается на 1, кроме 11
// минут -- все остальное
if (minutes > 0)
	output += minutes.toString()
	if ((minutes != 11) && ((minutes % 10) == 1) ){
	  output += " минута ";
	} else if (([2, 3, 4].includes(minutes % 10)) && (!([12, 13, 14].includes(minutes)))){
	  output += " минуты ";
	} else {
	  output += " минут ";
	}

// секунда -- оканчивается на 1 кроме 11 
// секунды -- оканчивается на 2 3 4 кроме 12 13 14
// секунд -- все остальное
if (seconds > 0)
	output += minutes.toString()
	if ((minutes != 11) && ((minutes % 10) == 1) ){
	  output += " секунда ";
	} else if (([2, 3, 4].includes(minutes % 10)) && (!([12, 13, 14].includes(minutes)))){
	  output += " секунды ";
	} else {
	  output += " секунд ";
	}

process.stdout.write(output)