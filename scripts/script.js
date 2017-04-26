// Docs at http://simpleweatherjs.com

function convertTemp(temp) {
  var temp, degreeType;
  
  // remove any non numeric chars (like degree symbol)
  degreeType = temp.replace(/[^A-Z]/g, '');
  temp = temp.replace(/[^0-9]/g, '');
  
  if (degreeType === 'C') {
    temp = Math.round((temp * 1.8) + 32);
    temp += '&deg;' + 'F';
  } else {
    temp = Math.round((temp - 32) * 5 / 9);
    temp += '&deg;' + 'C';
  }
  
  return temp;
}

function loadWeather(location, zipcode, degreeType) {
  $.simpleWeather({
    location: location,
    zipcode: zipcode,
    unit: degreeType,
    success: function (weather) {
      var html;
      html = '<h2><i class="wi wi-yahoo-' + weather.code + '"></i></h2>';
      html += '<h2 id="temp" class="F">' + weather.temp + '&deg;' + weather.units.temp + '</h2>';
      html += '<p>' + weather.city + ', ' + weather.region + '</p>';
      html += '<p>' + weather.currently + '</p>';
      $("p#weather").html(html);
    },
    error: function (error) {
      $("p#weather").html('<p>' + error + '</p>');
    }
  });
}

