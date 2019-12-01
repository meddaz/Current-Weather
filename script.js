$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&appid=ab85ba57bbbb423fb62bfb8201126ede", function(data) {

console.log(data);

var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp = data.main.temp.toFixed();

var weather = data.weather[0].main;


$('.icon').attr('src', icon);
$(".temp").append(temp  + ' &#8457;');

$(".weather").append(weather );
});
