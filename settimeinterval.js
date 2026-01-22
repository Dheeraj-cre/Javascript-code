
const timerId=setTimeout(()=>{
  console.log("Excute after 2 sec")
},2000)

clearInterval(timerId);

setIntervial(()=>{
  console.log("Run every 2 sec")
})
