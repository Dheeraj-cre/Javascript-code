// asyn -Declearing a function with async make it return promise.
// await - It paused the execution of code until the promise its waiting for resolve then the return the resolve value      

async function fetchData(){

        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/");

            const data = await response.json();
            console.log("Data fetched!",data);
            
        } catch(err){
            console.log("Error :",err);
        }
    }

    fetchData();
