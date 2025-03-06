//Create an array with five numbers and print it.
       arr =[1,2,3,4,5];
       console.log(arr)    
     //  Given an array, print the third element.
        arr =[1,2,3,4,5];
        console.log(3)
       // Modify the second element of an array to a new value.
       arr =[1,2,3,4,5];
       arr[1] =10
       console.log(arr)
      // Write a function that returns the length of an array.
              function demo(){
                arr =[100, 200,1000,50]
                return arr.length
              }
              console.log(demo())
             // Add a new element to the end of an array.
                    arr =[1,2,3,4,5]
                 arr =[8]
            console.log(arr)
            
//Remove the last element from an array and print the updated array.
arr = [1,2,3,4,5,6]
arr.pop()
console.log(arr)

//Use a loop to print each element of an array.

arr = [1,2,3,4,5]
for(var i = 0;i<=arr.length;i++){
    console.log(arr[i])
}

// Write a function to check if a given value exists in an array.
function checkValue(arr,value){
    return value in arr
}
console.log(checkValue([1,2,3,4,5],3))
console.log(checkValue([1,2,3,4,5],6))

// Create a copy of an array and print it.
array = [1, 2, 3, 4, 5]
copy_arr = [...array]
console.log(copy_arr)

// Convert an array to a string using 

arr = [1,2,3,4,5]
console.log(arr(""))
