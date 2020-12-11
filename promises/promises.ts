function asyncTask(callback: any) {
    setTimeout(() => {
        console.log("Async Task Calling Callback");        
        callback();
    }, 3000);
}
  
asyncTask(() => console.log("Callback Called"));

let asyncTask2 = new Promise( ( resolve, reject) => {
    setTimeout( ()=>{
        console.log("Resolving Promise");

        // All good
        // resolve();

        // Something went wrong
        reject();
    }, 3000 )    
})

asyncTask2.then( 
    function() {
        console.log("Promise resolved");
    }, 
    function() {
        console.error("Something went wrong");
    }
)