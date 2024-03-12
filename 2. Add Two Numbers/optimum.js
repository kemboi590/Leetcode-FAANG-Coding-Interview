function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let dummyHead = new ListNode(0);
  let current = dummyHead;

  while (l1 || l2) {
    let sum = 0;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    
    sum += carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
    current = current.next;
  }

  return dummyHead.next;  //dummyHead.next will be used to return the head of the linked list
};

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function to print linked list values
function printLinkedList(list) {
  let current = list;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
}

// Test the addTwoNumbers function
const l1 = createLinkedList([9,9,9,9,9,9,9]);
const l2 = createLinkedList([9,9,9,9]);

const result = addTwoNumbers(l1, l2);
console.log(result);
console.log("Sum:");

printLinkedList(result);
