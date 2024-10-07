// JS main thread does not waits

// function doSomething(name, count) {
//     let cnt = 0;
//     let x = setInterval(function() {
//         cnt++;
//         console.log("Printing name - ", name);
//         if(cnt == count) {
//             clearInterval(x);
//         } 
//     }, 2000)
// }


// doSomething('Shubham', 3);
// doSomething('Aryan', 2);


// In order to print names sequentially we can use callback methods instead

function doSomethingWithCallback(name, count, callbackMethod) {
    let cnt = 0;
    let x = setInterval(function() {
        cnt++;
        console.log("Printing name - ", name);
        if(cnt == count) {
            callbackMethod();
            clearInterval(x);
        } 
    }, 2000)
}


doSomethingWithCallback('Shubham', 3, () => {
    doSomethingWithCallback('Aryan', 2, () => {
    }); 
});