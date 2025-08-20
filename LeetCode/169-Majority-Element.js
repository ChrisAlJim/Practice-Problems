/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.
*/

const majorityElement = (nums) => {
    const halfWay = nums.length / 2
    const map = new Map()

    for (const num of nums) {
        const count = (map.get(num) || 0) + 1
        map.set(num, count)

        if (count > halfWay) return num
    }
}