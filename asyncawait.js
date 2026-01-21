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
