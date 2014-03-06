var sum = 0;

/**
/* the first argument of argv is always 'node', 
/* the second parameter is the path of the program, 
/* So i need to start in 2
/* all returns of argv is a string so I need to coerce them into numbers
**/
for (var index = 2; index < process.argv.length; index ++){
  sum += Number(process.argv[index]);
}

console.log(sum);