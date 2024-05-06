const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(parseInt(line)); 
}).on('close', function(){
  const fruit = input[0];
  let snakeBird_length = input[1];
  const fruit_length = input[2].split(' ').map(el => parseInt(el));
  
  for (let a = 0; a < fruit; a++) {
    if (snakeBird_length >= fruit_length[a]) {
      snakeBird_length++;
    }
  }
  
  console.log(snakeBird_length);
});