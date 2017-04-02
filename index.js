const gpio = require('pi-gpio');

const PIN = 16;

gpio.open(PIN, 'output', (error) => {
  if (error) {
    console.log('Error:', error);
  }

  gpio.write(PIN, 1, () => {
    setTimeout(() => {
      gpio.close(PIN);
    }, 10 * 1000);
  });
});
