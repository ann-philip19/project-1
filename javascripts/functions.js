// jshint esversion: 7

// Req. 3b
let arrAvg = (arr) => {
  let sum = 0, average;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  average = sum/arr.length;
  console.log(average);
};

//Req. 3c
let arrMax = (arr) => {
  var max = arr[0];
  arr.forEach(x=>{
    if (x>max){
      max=x;
    }
  });
  return max;
};

//Req.3d
let sumEvens = (arr) => {
  var sum = 0;
  for(let x of arr){
    if(x%2==0){
      sum=sum+x;
    }
  }
  return sum;
};
