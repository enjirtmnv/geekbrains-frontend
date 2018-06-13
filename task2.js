var d = parseInt(process.argv[2]) 
var m = (process.argv[3])
var y = parseInt(process.argv[4])
var max_month_day =  {"января":31, "февраля":28,  "марта":31, "апреля":30,  "мая":31, "июня":30, "июля":31, "августа":31, "сентября":30, "октября":31, "ноября":30, "декабря":31}
var max_days_till_newyear =  {"января":334, "февраля":306,  "марта":275, "апреля":245,  "мая":214, "июня":184, "июля":153, "августа":122, "сентября":92, "октября":61, "ноября":31, "декабря":0}

if ((y%400==0) || (y%4==0 && y%100!=0)){
    max_month_day["февраля"] += 1
    max_days_till_newyear["января"] += 1
}

var ans = max_month_day[m] - d + max_days_till_newyear[m]
process.stdout.write(ans.toString())

