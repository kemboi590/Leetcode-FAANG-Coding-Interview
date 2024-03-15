
    // solution in js
    var findMedianSortedArrays = function(nums1, nums2) {
        if (nums1.length > nums2.length) {
            return findMedianSortedArrays(nums2, nums1);
        }
        
        const x = nums1.length;
        const y = nums2.length;
        
        let start = 0;
        let end = x;
        
        while (start <= end) {
            const partitionX = (start + end) >> 1; // (start + end) >> 1 means (start + end) / 2
            const partitionY = ((x + y + 1) >> 1) - partitionX; // gets the partition of Y based on partition of X
            
            const maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1]; // if partitionX is 0, then there is nothing on the left side, so set to -Infinity else set to the value at partitionX - 1, partitionX - 1 means the value to the left of the partition
            const minRightX = partitionX === x ? Infinity : nums1[partitionX];
            
            const maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
            const minRightY = partitionY === y ? Infinity : nums2[partitionY];
            
            if (maxLeftX <= minRightY && maxLeftY <= minRightX) { // if this condition is met, then we have found the correct partition
                if ((x + y) % 2 === 0) { // if the length of X + Y is even, then the median is the average of the max of the left side and the min of the right side
                    return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
                } else {
                    return Math.max(maxLeftX, maxLeftY);
                }
            } else if (maxLeftX > minRightY) { // if maxLeftX is greater than minRightY, then we are too far to the right of X, so we need to move towards the left
                end = partitionX - 1;
            } else if (maxLeftY > minRightX) {
                start = partitionX + 1; // if maxLeftY is greater than minRightX, then we are too far to the left of X, so we need to move towards the right
            }
        }
    };
    
    

 