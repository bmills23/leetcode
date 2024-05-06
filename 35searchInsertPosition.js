// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Attempt at solution using recursive binary search
pass = 0;

var searchInsert = function(nums, target) {

    let length = nums.length;    

    // Edge case for empty array
    if (length === 0) return 0;

    // Edge case for target === 0
    if (target === 0) return 0;
    
    // Calculate the middle of the array
    let mid = Math.floor((length) / 2);

    // For Exact Matches
    if (nums[mid + pass] === target) {
        return mid + pass;
    }

    // For Middle Cases
    if (nums[mid + pass] < target && nums[mid + pass + 1] > target) {
        return mid + pass;
    }

    if (nums[mid + pass] > target && nums[mid + pass - 1] < target) {
        return mid + pass;
    }

    // Edge cases for edges of array 
    if (nums[mid + pass] === undefined && nums[mid + pass - 1] < target) {
        return mid + pass;
    } 

    if (nums[mid + pass] === undefined && nums[mid + pass - 1] > target) {
        return mid + pass - 1;
    }

    // Recursive calls for the function
    if (nums[mid] < target) {
        pass++;
        return searchInsert(nums, target);
    } else {
        pass--;
        return searchInsert(nums, target);
    } 
};

console.log(searchInsert([1,3], 1)) // Node outputs 0, Leetcode outputs 1
