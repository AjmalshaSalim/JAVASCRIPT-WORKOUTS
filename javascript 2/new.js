let name={
    first:"ajmal",
    age:23,
    details:function(){
        console.log(this.first,this.age);
    },
    
    
}

let obj2={
    first:"aslam",
    age:24
}

let detailsObj2=name.details.bind(obj2)
detailsObj2();