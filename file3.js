async function yello(){
    let prom = new Promise((resolve)=>{

        setTimeout(()=>{
            resolve("hello")
        },4000)
    })
    let prom1 = new Promise((resolve)=>{

        setTimeout(()=>{
            resolve("hello1")
        },2000)
    })
    let p = await prom
    console.log(p)
    let p1 = await prom1
    let p1 = await prom1
}

yello()