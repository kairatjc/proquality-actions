// eslint-disable-next-line require-jsdoc
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const random = getRandomInt(0, 10);

if (random < 5) {
  console.log('\u001b[41m ERROR \u001b[40m');
  throw new Error('Something went wrong');
} else {
  console.log(`-----------------------------
\u001b[42m     Everything is good!     \u001b[40m
-----------------------------`);
}
