// Promise are handle the async task in javascript
// there are three states
// 1-Pending
// 2-Fulfilled
// 3-Reject
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
