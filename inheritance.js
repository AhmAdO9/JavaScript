class RailwayForm{
    constructor(name){
        alert("hey")
    }
     submit(){
        alert(self.name+"'s"+ "  form is submitted")
    }
    cancel(){
        alert(self.name+"'s"+ "  form is cancelled")
    }
    request_leaves(x){
        alert(`Leaves granted and two more and ${x}`)}


}
class Rail extends RailwayForm{
        constructor(name){
            super()
            self.name = name
            }
        
       request_leaves(x){
        super.request_leaves(x);}

       
}

obj = new Rail("admin")
obj.request_leaves(5)

  