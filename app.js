//// ===> problem :
/// we work for a company building a smart home thermometre ... 
/// our task : 
//// "Given an array of temperatures of one day , calculate the tempertaure amplitude "
//// keep in mind that sometimes there might be a sensor error ... 


// const temperatures = [3,-2,-6,-1,Error,9,12,17,15,14]   

/// 1)/ 
/// undresatnding the problem : 
/// what is temps amplitude !!! 
/// answer : diffrence between highest and lowest temp ... 

///2)
/// how to compute max and min temperatures !!! 

/////// exempel fro stack over flow
// const numbers = [1,2,3,4,1,5]   //// max =1  , val =1 || val = 2  , max =2 || val =3  max = 3 ......... 


// function maxValue(arr) {
//     let max = arr[0];
  
//     for (let val of arr) {
//       if (val > max) {
//         max = val;
//       }
//     }
//     return max;
//   }


//   console.log(maxValue(numbers))


// const temperatures = [3,"-2",-6,-1,Error,9,12,17,15,14]   

// function tempAmplitude (arr){   //// generic function ... 
//     let max = arr[0] ;  /// 3 ,3
//     let min = arr[0] ;   ///3 ,-2 ,...

//     for (let i = 0 ; i<arr.length ; i++){
        
//         if (typeof arr[i] !== "number" ) continue ; 
//             console.log(arr[i])
//         if (arr[i]>max){
//             max = arr[i] ;
//         }
//         if (arr[i]<min){
//             min = arr[i] ;
//         }
//     }

//     console.log("min:",min , "max:" , max)
//     let amplitude = max-min 
//     return amplitude ;


// }



// console.log(tempAmplitude(temperatures))   /// invocation , run the function , call the function 
// 




////// problem 2 :  function should recive 2 arrays of temperatures 

////1)-
//// undrestanding the problem ....  (dry : d'ont repeat your self ...)
//// with 2 arrays should we implement functionality twice !!! answer : no ... 

///// ===> merge two arrays ...  

// const temp1 =  [1,20,30,-10] ;
// const  temp2 = [5,-50,15,6]


// function calcAmplitude2 (arr1 , arr2 ){  //// generic function ... 
// const arr3 = arr1.concat(arr2)
// console.log(arr3)
// let max = arr3[0] ; 
// let min = arr3[0] ; 
// for (let i = 0 ; i<arr3.length ; i++){
//      if (typeof arr3[i] !== "number") continue 
//      if (arr3[i]>max){
//         max = arr3[i] ;
//      }
//      if (arr3[i]<min){
//        min = arr3[i]
//      }
// }
  
// console.log("min:",min , "max:" , max)
// let amplitude = max-min ; 
// return amplitude ;

// }

// const temp1 =  [1,20,30,-10] ;  ///-50 , 30  ===> 80
// const  temp2 = [5,-50,15,6]

// console.log(calcAmplitude2(temp1,temp2))


 ///// debugging !!! 
 //// 

   const mesurekelvin = function(){
    const mesurement = {
        type : "temp" ,   //// hard coded
        unit : "celcuc"  ,  //c°
        value : Number(prompt("degree's celcus ")) /// value  : 20  
       }
       console.table(mesurement)
       console.error(mesurement)
       console.warn(mesurement)
       console.log(mesurement)
    console.log(typeof mesurement.value)
    const kelvin = mesurement.value + 273 ; 
    return kelvin 
   }


   console.log(mesurekelvin())


