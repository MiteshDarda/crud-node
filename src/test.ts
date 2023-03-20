const a = new Array;
for(var i = 0; i < 3; ++i){
   a.push(Promise.resolve("hey"));
   a.push(Promise.reject());
}

setTimeout( async() => {
    a.push( 
        await Promise.reject("REJECTION") 
        .then( () => {
            console.log("THEN")
            return "HEY HEY HEYY"
        })
        .catch( () =>{
            console.log("CATCH")
            return "LOL LO "
        })
    )
}, 1000)

Promise.all(a)
.then(
    (e) => console.log(e)
)
.catch(
    (e) => {
        console.log("Error", a)
    }
)

Promise.allSettled(a)
.then(
    (e) => {
        console.log("All Settled", a);
    }
)
.catch(
    e => {
        console.log("All Settled CATCH", a)
    }
)
