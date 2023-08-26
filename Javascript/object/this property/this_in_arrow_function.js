let user = {
    name: 'moin',
    ok () {
        return hello = () => {
          return "Hello World!" + this.name;
        };
    } 
    
}
let x = user.ok();
console.log(x());