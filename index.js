const gpio = require('pi-gpio');

const PIN = 16;

gpio.open(PIN, 'output', function (error) {
  if (error) {
    console.log('Error:', error);
  }

  gpio.write(PIN, 1, function () {
    setTimeout(function () {
      gpio.close(PIN);
    }, 10 * 1000);
  });
});
