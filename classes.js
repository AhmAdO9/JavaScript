class RailwayForm{
    constructor(name){
        this.name = name
    }
    //  submit(){
        //     alert(this.name+"'s"+ "  form is submitted")
        // }
        // cancel(){
            //     alert(this.name+"'s"+ "  form is cancelled")
            // }
            request_leaves(){
                console.log("Leaves granted and yolo two more")}
                
            }


class Rail extends RailwayForm{
    constructor(name1){
        super();
        this.name1 = name1
        
    }
        request_leaves(){ console.log("yooo")
        super.request_leaves()
        // console.log("yooo")
    } 
}
// }

obj = new Rail("admin")
console.log(obj.name1)

