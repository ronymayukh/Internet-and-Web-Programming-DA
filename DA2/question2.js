
day=prompt("Enter a day like - Monday, Tuesday upto Sunday ")
months=prompt("Enter a month like -  January, febuaruary upto december ")
year=prompt("Enter a year like - 2001 to 2010 ")
var event=[day,months,year]

var e=event.slice(1)
alert("var e=event.slice(1); e="+e)
alert('event.splice(1, 1, "A","B","C") gives '+event.splice(1, 1, "A","B","C"))
alert('and event becomes'+event)
