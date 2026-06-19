# turbo-bassoon
Programs to solve to prepare for SDET Interviews

# When reading a new problem, look for these specific phrases. 

If you spot two or more of these, it's almost certainly this pattern:"In-place" modification: The problem explicitly tells you not to allocate extra space for another array ($\mathcal{O}(1)$ space)."Sorted in non-decreasing/ascending order": This is the ultimate trigger. Sorting guarantees that matching or related elements are packed tightly together."Return the length/number of elements k": The problem asks for a count of the valid prefix, meaning a write-pointer tracking the size is required."The remaining elements beyond k can be ignored": This is a green light showing you don't need to swap or erase data; you just overwrite.2. The Mental Model: "Read vs. Write"You should deploy this pattern whenever you need to filter an array based on a rule that looks at what you just processed.The Fast Pointer (i): Your explorer. It scans every single element from left to right without stopping.The Slow Pointer (x): Your gatekeeper/writer. It only moves when the explorer finds something that passes the filter condition.🛠️ The Implementation BlueprintYou can memorize this exact code structure. Only three things change depending on the variation of the problem:TypeScriptfunction solveTwoPointerFilter(nums: number[]): number {
    // 1. CHOOSE YOUR BOUNDARY: How many elements are guaranteed valid at the start?
    const K = 2; // (e.g., 1 for unique, 2 for at-most-twice)
    if (nums.length <= K) return nums.length;

    let writeIndex = K;

    // Start scanning right past the guaranteed valid boundary
    for (let i = K; i < nums.length; i++) {
        
        // 2. THE LOOK-BACK CONDITION: Compare current explorer to what was written K steps ago
        if (nums[i] > nums[writeIndex - K]) { 
            
            // 3. THE ACTION: Overwrite and step forward
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }
    return writeIndex; 
}

