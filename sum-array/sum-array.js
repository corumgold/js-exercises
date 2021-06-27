// let total = 0

// function sumArray(array){
//     for (i = 0; i < array.length; i++){
//         console.log(i);
//     }

//     console.log(total)    

// }

const userNames = ['bill', 'samiami', 'd392408342rfi', 'staceysmom1978', 'fionalvr']

const validUserNames = userNames.filter(u => {
    u.length <= 10;
})