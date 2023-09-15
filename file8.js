const createTodo = async (todo)=>{
           
        let options = {
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify(todo),

        }
      
let p = await fetch("https://jsonplaceholder.typicode.com/posts", options)
let response = await p.json()
return response
        
}
const mainFunc = async()=>{
    let todo = {
        title:"admin",
        id:1222
    }
    let todor = await createTodo(todo)
    console.log(todor) 
}

mainFunc()
