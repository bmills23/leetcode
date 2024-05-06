// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// // 
// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

 /**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

 nums1 = [1,2];
 nums2 = [3];

// My attempt, only achieves O(nlogn) time complexity

//  var merge = function(nums1, m, nums2, n) {

//     nums1.length = m;
//     nums2.length = n;

//     nums1.push(...nums2);

//     nums1.sort((a, b) => a - b);

//     return nums1;
// }

// var findMedianSortedArrays = function(nums1, nums2) {
//     let merged = merge(nums1, nums1.length, nums2, nums2.length);
//     let length = merged.length;

//     if (length % 2 === 0) {
//         let mid = length / 2;
//         console.log((merged[mid - 1] + merged[mid]) / 2);
//         return (merged[mid - 1] + merged[mid]) / 2;
//     } else {
//         let mid = Math.floor(length / 2);
//         console.log(merged[mid]);
//         return merged[mid];
//     }
// };

// findMedianSortedArrays(nums1, nums2);

// Faster solution, O(log(min(m, n))) time complexity using binary search
 
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
    
    const x = nums1.length;
    const y = nums2.length;
    
    let start = 0;
    let end = x;
    
    while (start <= end) {
        const partitionX = (start + end) >> 1;
        const partitionY = ((x + y + 1) >> 1) - partitionX;
        
        const maxX = partitionX == 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
        const maxY = partitionY == 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
        
        const minX = partitionX == x ? Number.POSITIVE_INFINITY : nums1[partitionX];
        const minY = partitionY == y ? Number.POSITIVE_INFINITY : nums2[partitionY];
        
        if (maxX <= minY && maxY <= minX) {
            if ((x + y) & 1) return Math.max(maxX, maxY);
            else return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
        } else if (maxX > minY) end = partitionX - 1;
        else start = partitionX + 1;
    }
    
    throw new Error("Input arrays are not sorted");
};

// console.log(findMedianSortedArrays(nums1, nums2));

// Method to find median
// function Median(A, B) {
//     let n = A.length;
//     let m = B.length;
//     //initializing Priority Queue (Min Heap)
//     let pq = new PriorityQueue();
//     //pushing array A values to priority Queue
//     for (let i = 0; i < n; i++) {
//         pq.push(A[i]);
//     }
//     //pushing array B values to priority Queue
//     for (let i = 0; i < m; i++) {
//         pq.push(B[i]);
//     }
//     let check = n + m;
//     let count = -1;
//     let mid1, mid2;
//     while (!pq.isEmpty()) {
//         count++;
//         //returning mid value if combined length(n+m) is odd
//         if (check % 2 !== 0 && count === Math.floor(check / 2)) {
//             let ans = pq.top();
//             return ans;
//         }
//         //maintaining mid1 value if combined length(n+m) is even
//         //where we need to maintain both mid values in case of even combined length
//         if (check % 2 === 0 && count === (check / 2) - 1) {
//             mid1 = pq.top();
//         }
//         //now returning the mid2 value with previous maintained mid1 value by 2
//         if (check % 2 === 0 && count === check / 2) {
//             mid2 = pq.top();
//             let ans = (mid1 + mid2) / 2;
//             return ans;
//         }
//         pq.pop();
//     }
//     return 0.00000;
// }

// // Priority Queue (Min Heap) implementation
// class PriorityQueue {
//     constructor() {
//         this.data = [];
//     }
//     push(value) {
//         this.data.push(value);
//         this.bubbleUp(this.data.length - 1);
//     }
//     pop() {
//         let result = this.data[0];
//         let end = this.data.pop();
//         if (this.data.length > 0) {
//             this.data[0] = end;
//             this.bubbleDown(0);
//         }
//         return result;
//     }
//     top() {
//         return this.data[0];
//     }
//     isEmpty() {
//         return this.data.length === 0;
//     }
//     bubbleUp(index) {
//         let parent = Math.floor((index + 1) / 2) - 1;
//         if (parent >= 0 && this.data[parent] > this.data[index]) {
//             [this.data[parent], this.data[index]] = [this.data[index], this.data[parent]];
//             this.bubbleUp(parent);
//         }
//     }
//     bubbleDown(index) {
//         let child1 = (index + 1) * 2 - 1;
//         let child2 = (index + 1) * 2;
//         let minIndex = index;
//         if (child1 < this.data.length && this.data[child1] < this.data[minIndex]) {
//             minIndex = child1;
//         }
//         if (child2 < this.data.length && this.data[child2] < this.data[minIndex]) {
//             minIndex = child2;
//         }
//         if (minIndex !== index) {
//             [this.data[index], this.data[minIndex]] = [this.data[minIndex], this.data[index]];
//             this.bubbleDown(minIndex);
//         }
//     }
// }


// JavaScript Program to implement
// the above approach

// Method to find median
function Median(A, B) {
    let n = A.length;
    let m = B.length;
    if (n > m)
        return Median(B, A); // Swapping to make A smaller

    let start = 0;
    let end = n;

    let realmidinmergedarray = Math.floor((n + m + 1) / 2);
    console.log(realmidinmergedarray);

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let leftAsize = mid;
        let leftBsize = realmidinmergedarray - mid;
        let leftA
            = (leftAsize > 0)
                ? A[leftAsize - 1]
                : Number.MIN_VALUE; // checking overflow of indices
        let leftB
            = (leftBsize > 0) ? B[leftBsize - 1] : INT_MIN;
        let rightA
            = (leftAsize < n) ? A[leftAsize] : INT_MAX;
        let rightB
            = (leftBsize < m) ? B[leftBsize] : INT_MAX;

        // if correct partition is done
        if (leftA <= rightB && leftB <= rightA) {
            if ((m + n) % 2 == 0)
                return Math.floor((Math.max(leftA, leftB)
                    + Math.min(rightA, rightB))
                    / 2.0);
            return Math.max(leftA, leftB);
        }
        else if (leftA > rightB) {
            end = mid - 1;
        }
        else
            start = mid + 1;
    }
    return 0.0;
}

// Driver code
let arr1 = [-5, 3, 6, 12, 15, 17, 19];
let arr2 = [-12, -10, -6, -3, 4, 10];

console.log("Median of the two arrays are")
console.log(Median(arr1, arr2))
