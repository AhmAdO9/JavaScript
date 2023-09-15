async function yello(){
    let prom = await new Promise((resolve)=>{

        setTimeout(()=>{
            resolve("hello12")
        },6000)
    })
    // let prom1 = new Promise((resolve)=>{

    //     setTimeout(()=>{
    //         resolve("hello1")
    //     },2000)
    // })

    // let p1 = await prom1
    // console.log(p1)
}

const sum = async () => { 
    setTimeout(()=>{
        console.log("dsadad")
    },4000)
}

const main1 = async () => {
    let a = await yello()
    let b = await sum()
}
main1()


