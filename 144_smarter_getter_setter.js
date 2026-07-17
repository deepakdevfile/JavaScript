let user = {
    get name(){
        return this._name;
    },
    set name(value){
        if(value.length < 4){
            console.log("Name is too short, need at least 4 characters");
            return;
        }
        this._name = value;
    }
}

user.name = "Peter";
console.log(user.name);
user.name = "Pet";
console.log(user.name);