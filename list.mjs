import Node from './node.mjs';

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	// Output the first node
	headNode() {
		if (!this.head) return console.log('This list is empty');
		return console.log(this.head);
	}

	// Output the last node
	tailNode() {
		if (!this.head) return console.log('This list is empty');
		let current = this.head;
		while (current.next !== null) {
			current = current.next;
		}
		return console.log(current);
	}

	// Return the node at given index
	nodeAtIndex(index) {
		let current = this.head;
		if (!this.head) return console.log('This list is empty');
		if (index < 0) return console.log('Negative index not allowed');
		if (index == 0)
			return console.log(`The value at index ${index} is ${current.value}`);
		if (index > this.size - 1)
			return console.log(`The last index is ${this.size - 1}`);
		for (let i = 0; i < index; i++) {
			current = current.next;
		}
		return console.log(`The value at index ${index} is ${current.value}`);
	}

	// Prepend a new node at the start
	prepend(value) {
		this.head = new Node(value, this.head);
		this.size++;
	}

	// Append a new node at the end
	append(value) {
		// If the list is empty create the head node and return
		if (!this.head) {
			this.size++;
			return (this.head = new Node(value, this.head));
		}
		let current = this.head;
		while (current.next !== null) {
			current = current.next;
		}
		current.next = new Node(value);
		this.size++;
	}

	// Print a string with the nodes values
	toString() {
		let current = this.head;
		let string = '';
		while (current) {
			string += `(${current.value}) --> `;
			current = current.next;
		}
		string += 'null';
		console.log(string);
	}

	// Print total number of nodes
	listSize() {
		console.log(`This list has ${this.size} nodes`);
	}
}

const testLinkedList = new LinkedList();
testLinkedList.prepend(100);
testLinkedList.prepend(200);
testLinkedList.append(500);
testLinkedList.prepend(600);

testLinkedList.toString();
testLinkedList.headNode();
testLinkedList.tailNode();
testLinkedList.listSize();
testLinkedList.nodeAtIndex(3);
