const { exec } = require('child_process');

exec('python turn-motor.py', (error) => {
  console.log('error', error);
});
console.log('ring bell command here');
