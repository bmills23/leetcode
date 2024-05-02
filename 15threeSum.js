// Given an integer array nums, return all the triplets 
// [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, 
// and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

const arr = [-1,0,1,2,-1,-4]

var threeSum = function(nums) {
    nums.sort((a, b) => a - b); // Sorted Array
    let answer = [];
    
    if (nums.length < 3) {
        return answer;
    }
    
    if (nums[0] > 0) {
        return answer;
    }
    
    let hashMap = new Map();
    
    for (let i = 0; i < nums.length; ++i) {
        hashMap.set(nums[i], i);
    }
    
    for (let i = 0; i < nums.length - 2; ++i) {
        // if the first element is greater than 0, then we can't have a sum of 0
        if (nums[i] > 0) {
            break;
        }
        for (let j = i + 1; j < nums.length - 1; ++j) {
            let required = -1 * (nums[i] + nums[j]);
            console.log(required)
            // if the required element is in the map and the index of the required element is greater than j
            if (hashMap.has(required) && hashMap.get(required) > j) {
                answer.push([nums[i], nums[j], required]);
            }
            // set j to the next element
            j = hashMap.get(nums[j]);
        }
        // set i to the next element
        i = hashMap.get(nums[i]);
    }
    console.log(hashMap);
    console.log(answer);
    return answer;
};

threeSum(arr)