let total = 0

const array = [3,4,1]
function sumArray(array){
    for (i = 0; i < array.length(); i++){
        let total = i + total
    }
    
    console.log(total)
}