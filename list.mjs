import Node from './node.mjs';

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	// Prepend a new node at the start
	prepend(value) {
		this.head = new Node(value, this.head);
		this.size++;
	}

	// Append a new node at the end
	append(value) {
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
// testLinkedList.prepend(100);
// testLinkedList.prepend(200);
// testLinkedList.append(500);
// testLinkedList.prepend(100);

testLinkedList.listSize();
