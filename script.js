// ASYNC AND await


  async function nigam(){
    let p1=new Promise((res,rej)=>{
  setTimeout(()=>{
    res("hey mamma paani pilaoa")
  },2000)})

let p2= new Promise((res,reej)=>{
  setTimeout(()=>{
    res("hey nmaama dahi pilao")
  },5000)
})
    // p1.then(alert)
    // p2.then(alert)
    console.log("fetchiung yor demands")
    let a1=await p1
     console.log("fetched yor demands",a1)
     console.log("fetchiung yor other demands")
    let a2= await p2
     console.log("fetched yor demands",a2)
    return(a1,a2)
  }
document.write("give ypour demands")
let a=nigam()
a.then((value)=>{
  console.log(value)
})
// document.write(a)
// console.log(a)
