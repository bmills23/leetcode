// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// each ListNode is a node in the singly linked list 
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        let x = (l1 !== null) ? l1.val : 0;
        let y = (l2 !== null) ? l2.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next; // Return the sum list
}

// this works fine for arrays, but that is not the definition of the linked list in the context of this problem
const addTwoNumber = function (l1, l2) {
    const l1Rev = l1.reverse();
    const l2Rev = l2.reverse();
    let numString1 = '';
    let numString2 = '';
    const array = [];

    for (let i = 0; i < l1.length; i++) {
        numString1 += l1Rev[i];
    }

    for (let i = 0; i < l2.length; i++) {
        numString2 += l2Rev[i];
    }

    let finalNum = parseInt(numString1) + parseInt(numString2);
    const stringNum = finalNum.toString();

    for (let i = -1; i > -stringNum.length; i--) {
        array.push(parseInt(stringNum.slice(i-1, i)));
    }

    array.unshift(parseInt(stringNum.slice(-1)))

    return array;
};