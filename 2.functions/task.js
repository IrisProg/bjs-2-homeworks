function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;

  max = Math.max(...arr);
  min = Math.min(...arr);

  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }

  avg = sum/arr.length;
  avg = avg.toFixed(2);
  avg = parseFloat(avg);

  return { min: min, max: max, avg: avg };
}



function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let differ = 0;

  max = Math.max(...arr);
  min = Math.min(...arr);

  if (arr.length <= 0) {
    differ = 0;
  } else {
    differ = max - min; 
  }

  return differ;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let diff = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i]%2 == 0) { 
    sumEvenElement += arr[i];
    } else { 
    sumOddElement += arr[i];
    }
  }
  if (arr.length <= 0) {
    diff = 0;
  } else {
    diff = sumEvenElement - sumOddElement;
  }
  return diff;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++){
    if (arr[i]%2 == 0) { 
    sumEvenElement += arr[i];
    countEvenElement += 1;
    } 
  }
  if (arr.length <= 0) {
    avg = 0;
  } else {
    avg = sumEvenElement/countEvenElement;
  }
  return avg;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; i++) {
    const workerResult = func(...arrOfArr[i]);
    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }
  return maxWorkerResult;

}