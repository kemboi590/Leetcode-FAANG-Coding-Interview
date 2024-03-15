// median of two sorted array leetcode question

// ALGORITHM
/**
 * 
 1. Position m + position n = (X + Y + 1) / 2
2. If X + Y is odd, median is max of left half
3. If X + Y is even, median is average of max of left half and min of right half
4. Found the correct position of partition in the array if
    maxLeftX <= minRightY and maxLeftY <= minRightX
    else if maxLeftX > minRightY, move towards left of X
    else move towards right of X
 */

    // Time complexity: O(log(min(m,n)))

    
   // EXAMPLE 1: ODD LENGTH
    /**
     X = [1, 3, 8, 9, 15]
    Y = [7, 11, 18, 19, 21, 25]

    start = 0
    end = 4
    partitionX = 2
    partitionY = (5 + 6 + 1) / 2 - partitionX = 3

    1,3 | 8,9,15
    7, 11, 18, 19 | 21, 25

    11 is not less than 8 so move towards right of X

    start = 3
    end = 4
    partitionX = 3
    partitionY = (5 + 6 + 1) / 2 - partitionX = 3

    1,3,8 | 9,15
    7, 11, 18 | 19, 21, 25

    18 is not less than 9 so move towards right of X

    start = 4
    end = 4
    partitionX = 4+4 / 2 = 4
    partitionY = (5 + 6 + 1) / 2 - partitionX = 2

    1,3,8,9 | 15
    7, 11 | 18, 19, 21, 25

    9 is less than 18 and 11 is less than 15 so we found the correct partition

    if X + Y is odd, median is max of left half 
    median = max(9, 11) = 11 

     */











   // EXAMPLE 2: EVEN LENGTH
    /*

    X = [23, 26, 31, 35]
    Y = [3, 5, 7, 9, 11, 16]

    start = 0
    end = 3
    partitionX = 0+3 / 2 = 1
    partitionY = (4+6+1) / 2 - partitionX = 3

    23 | 26, 31, 35
    3, 5, 7 | 9, 11, 16

    23 is not less than 9 so move towards right of X

    
    partitionX = 0
    partitionY = (4+6+1) / 2 - partitionX = 4

    23 | 26, 31, 35
    3, 5, 7, 9 | 11, 16

    23 is not less than 11 so move towards right of X

    partitionX = 0
    partitionY = (4+6+1) / 2 - partitionX = 5

    -NF | 26, 31, 35
    3, 5, 7, 9, 11 | 16
    
    5 is less than 26 and 11 is less than -ve infinity so we found the correct partition

    if X + Y is even, median is average of max of left half and min of right half
    median = (max(-ve infinity, 11) + min(23, 16)) / 2 = (11 + 16) / 2 = 13.5



     */

    
    



 