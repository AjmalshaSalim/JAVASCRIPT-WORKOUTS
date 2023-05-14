class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class List{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }

 add(value){
   const node=new Node (value);
   if(this.head==null){
    this.head=node;
   }else{
    let temp=this.head;
while(temp.next!=null){
temp=temp.next;
    
   }
   temp.next=node
}
}
print(){
    let temp=this.head
    if(temp==null){
        console.log("empty")
    }
    else{
        while(temp!=null){
            console.log(temp.value)
            temp=temp.next
        }
    }
}
}

let news=new List()
news.add(200)
news.add(300)
news.add(400)
news.add(500)

news.print()