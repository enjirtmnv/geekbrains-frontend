var a = parseInt(process.argv[2]) // приводим к нижнему регистру
var b = parseInt(process.argv[3]) // приводим к нижнему регистру
var c = a+b

var hours = ~~(c / 3600) // количество часов
var minutes = ~~(c / 60) - 60*hours // количество минут
var seconds = c%60 // количество секунд

var output = "" //+ " " + minutes.toString() + " " + seconds.toString()

if (hours > 0)
{
	output += hours.toString()
	if ((hours%100 != 11) && ((hours % 10) == 1) ){
	  output += " час ";
	} else if (([2, 3, 4].includes(hours % 10)) && (!([12, 13, 14].includes(hours % 100)))){
	  output += " часа ";
	} else {
	  output += " часов ";
	}
}
if  ((minutes > 0))
{
	output += minutes.toString()
	if ((minutes%100 != 11) && ((minutes % 10) == 1) ){
	  output += " минута ";
	} else if (([2, 3, 4].includes(minutes % 10)) && (!([12, 13, 14].includes(minutes% 100)))){
	  output += " минуты ";
	} else {
	  output += " минут ";
	}
}
if (seconds > 0)
{
	output += seconds.toString()
	if ((seconds%100 != 11) && ((seconds % 10) == 1) ){
	  output += " секунда";
	} else if (([2, 3, 4].includes(seconds % 10)) && (!([12, 13, 14].includes(seconds% 100)))){
	  output += " секунды";
	} else {
	  output += " секунд";
	}
}

process.stdout.write(output.trim())