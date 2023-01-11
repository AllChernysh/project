function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    function arrayClone(arr) {
        return arr.slice(0);
       };

       const result = arrayClone(arr);
       console.log(result);
       
    // for(let i = 1; i <= 6; ){
    //     arr.length[result] = i;
    //        }

    //        const result = [];
           console.log(result);
           
}

function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }

    console.log(result);
    return result;
}


// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for(let i = 0; i < data.length; i++) {
//     if(typeof(data[i]) === "number"){
//     data[i] = data[i]*2 ;
//     }else if(typeof(data[i]) === "string"){
//         data[i] = `${data[i]} -done`;
//     }
   
//   }  console.log(data);
// //   return data;

//   const data = [5, 10, 'Shopping', 20, 'Homework'];
//   const result = data.reverse();
  
//   for(let i = 0; i < data.length; i++) {
//     data[i] = result[i];
//   }
//   console.log(result);

  const data = [5, 10, 'Shopping', 20, 'Homework'];
  const result1 = [];
  
//   for(let i = data.length - 1; i >= 0; i--) {
//     data[i] = result[i];
//     // console.log(result);
//   }
//   console.log(result);


  for(let i = 1; i <= data.length; i++){
    // data[i] = (data[i]- (data.length - i));
    result1[i - 1] = data[data.length - i];
    // console.log(data);
}
console.log(result1);
    


const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней



for(let i = 0; i <= lines; i++){
    for(let j = 0; j < lines - i; j++){
        result += ' ';
    }
    for(let k = 0; k <= i * 2; k++){
        result += '*';
    }
    result += '\n';
}
console.log(result);