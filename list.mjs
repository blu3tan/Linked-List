import Node from './node.mjs';

class LinkedList {
	constructor() {
		this.head = null;
	}

	// Prepend a new node at the start
	prepend(value) {
		this.head = new Node(value, this.head);
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
}

const testLinkedList = new LinkedList();
testLinkedList.prepend(100);
testLinkedList.prepend(200);
testLinkedList.prepend(300);

testLinkedList.toString();
