let arr = [`|   `, `/   `, `-   `, `\\    `, `|   `, `/   `, `-   `, `\\   `, `|   \n`];

for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    process.stdout.write(arr[i] + '\r')
  }, i * 300);
};