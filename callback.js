function doSomething(name, count) {
    let cnt = 0;
    let x = setInterval(function() {
        cnt++;
        console.log("Printing name - ", name);
        if(cnt == count) {
            clearInterval(x);
        } 
    }, 2000)
}


doSomething('Shubham', 3);
doSomething('Aryan', 2);