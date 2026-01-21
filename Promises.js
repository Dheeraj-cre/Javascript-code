
const data = { Name : "Aman",Age: 24}

function fetchData(){
  return new Promise((resovle,reject)=>{
  setTimeout(()=>{
    resolve(data);
  },2000}
  })
}

fetchData().then(
  data =>{
    console.log("Data :", data)
  }).catch(err=>{
  console.log("Err : ", err)
})
