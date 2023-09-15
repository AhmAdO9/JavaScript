function loadScript(src){
  return new Promise((resolve, reject) => {
   let script = document.createElement('script')
   script.src = src;
   //  script.onload =()=>{resolve(true);console.log("ok")}

   document.body.appendChild(script)
   script.onload=function(){resolve(true);console.log("ok")}
   script.onerror = ()=> {reject(false); console.log("not ok")}
    
   })
  }
  loadScript("https://cdn.js1234delivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js").then((value)=>{console.log(value)}).catch((error)=>{console.log(error)})
