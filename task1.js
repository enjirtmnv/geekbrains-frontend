var inputStr = process.argv[2].toLowerCase() // приводим к нижнему регистру
inputStr = inputStr.replace(/[^a-zа-яё]/g, ''); // оставляем только буквы для проверки палиндрома
var reverseStr = inputStr.split('').reverse().join('') // переворачиваем
var ans = (reverseStr === inputStr) // проверяем на палиндром
process.stdout.write(ans.toString()) // вывод ответа
process.stdout.write("\n")