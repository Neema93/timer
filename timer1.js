let arr = process.argv.slice(2);


for (const key of arr) {
    const convertKey = Number(key);
    //console.log(convertKey)
    if(Number.isInteger(convertKey) && convertKey > 0){
       //console.log(convertKey);
        setTimeout(() => {         
           console.log("second",convertKey)
            // process.stdout.write('\x07',convertKey,'second'); 
            // seconds = ms / 1000
          },(convertKey * 1000));
          
    }
}
