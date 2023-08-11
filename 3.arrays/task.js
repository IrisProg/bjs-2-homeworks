function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((i ,j) => i === arr2[j]);
  
}

function getUsersNamesInAgeRange(users, gender) {
    function findeAve(acc, item, index, arr) {
        let sum = acc + item;
        if (index === arr.length - 1) {
          sum = sum/arr.length;
        }
        return sum;
      }
      if (users.length <= 0) {
        return 0;
      } else {
        result = users.filter(e => e.gender === gender).map(ages => ages.age).reduce(findeAve, 0);
      }  
      return result;
  
}
