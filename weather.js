var weather;

var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
//var city = 'Mysore';
var apiKey = '&APPID=e456b2bfe18fc37dba36636c8d2d34a2';
var units = '&units=metric';

var input;
function setup() {
  createCanvas(400,200);

  var button = select("#submit");
  button.mousePressed(weatherAsk);

  input = select("#city");

}

function weatherAsk()
{
  var url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);
}

function gotData(data)
{
  weather = data;
}

function draw()
{
  background(0);
  if(weather)
  {
    ellipse(50,100,weather.main.temp,weather.main.temp);
    ellipse(300,100,weather.main.humidity,weather.main.temp);
  }
}
