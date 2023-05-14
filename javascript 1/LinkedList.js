
    // Define the Node class for creating nodes
    class NODE {
      constructor(value) {
        this.value = value;
        this.next = null;
      }
    }
    // Define the LinkedList class for creating a linked list
    class DATA  {
      constructor() {
        this.head = null;
        this.tail = null;
      }
      // Method for adding a node to the end of the list
      METHOD(value) {
        const node = new NODE(value);
        if (!this.head) {
          this.head = node;
          this.tail = node;
        } else {
          this.tail.next = node;
          this.tail = node;
        }
      }
    }
    // Create a new linked list and add nodes to it
    const list = new DATA();
    list.METHOD(1);
    list.METHOD(2);
    list.METHOD(4);
    list.METHOD(3);
    list.METHOD(5);
    // Print the linked list to the console
    let current = list.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  