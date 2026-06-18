"use strict";
// [1,1,1,1,1,1,1,2,2,3], [1, 1, 2, 2, 3, _]
function keepOnlyUniqueAndDuplicate(nums) {
    let x = 2;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] > nums[x - 2]) {
            nums[x] = nums[i];
            x++;
        }
    }
    return x;
}
let arr = [1, 1, 1];
console.log(keepOnlyUniqueAndDuplicate(arr));
