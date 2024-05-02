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

//  nums1 = [1,2];
//  nums2 = [3];

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