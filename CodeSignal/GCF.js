/*
Question 2

Imagine you are managing a city's transit archive looking back at past bus departure records. You are provided with an array departure_times which lists when buses departed throughout the day. Your job is to determine how many minutes have passed since the most recent bus left the station. If no bus has departed by the current time, return -1.

Time is formatted as strings in HH:MM within a 24-hour clock. All departures are ordered chronologically.

Assume that a bus scheduled to leave exactly at current_time has not yet departed.

Note: You are not expected to provide the most optimal solution, but a solution with time complexity not worse than O(departure_times.length × MINUTES_IN_DAY) will fit within the execution time limit.

Example

For departure_times = ["12:30", "14:00", "19:55"] and current_time = "14:30", the output should be solution(departure_times, current_time) = 30.

Explanation:
At "14:30", the last bus left at "14:00", so it was 30 minutes ago.

For departure_times = ["00:00", "14:00", "19:55"] and current_time = "00:00", the output should be solution(departure_times, current_time) = -1.

Explanation:
No buses have left before "00:00" (the bus scheduled at "00:00" hasn't departed yet), resulting in -1.

For departure_times = ["12:30", "14:00", "19:55"] and current_time = "14:00", the output should be solution(departure_times, current_time) = 90.

Explanation:
At "14:00", the last departure was at "12:30" because the "14:00" bus hasn't left, making it 90 minutes ago.




Question 3

Your task is to develop a library book circulation tracker.

You are given a sequence of operations that represent activities in a library. Each operation is one of three types: acquisition, checkout, or reclassify. Operations are provided in the following format:

["acquisition", "<book category>", "<quantity>", "<price>"] – the library acquires <quantity> books of <book category>, each valued at <price> for insurance purposes.
["checkout", "<book category>", "<quantity>"] – patrons borrow <quantity> books of <book category>. If books of the specified category have different insurance values, the least valuable ones should be checked out first. It is guaranteed that the library will always have enough books to fulfill all checkout requests.
["reclassify", "<book category>", "<quantity>", "<original price>", "<new price>"] – the library reclassifies <quantity> books of <book category> to a more valuable edition. It is guaranteed that there are <quantity> books of the specified category with the <original price> value.
Your function should calculate the total insurance value of all books checked out after processing the entire sequence of operations. Return an array representing the insurance value of books for each checkout operation.

Note: You are not expected to provide the most optimal solution, but a solution with time complexity not worse than O(operations.length2) will fit within the execution time limit.

Example

For

operations = [
  ["acquisition", "fiction", "2", "100"],
  ["acquisition", "reference", "3", "60"],
  ["checkout", "fiction", "1"],
  ["checkout", "reference", "1"],
  ["reclassify", "reference", "1", "60", "100"],
  ["checkout", "reference", "1"],
  ["checkout", "reference", "1"]
]
the output should be

solution(operations) = [100, 60, 60, 100]
Let's analyze the operations:

["acquisition", "fiction", "2", "100"] - the library acquires 2 fiction books, each valued at 100.
["acquisition", "reference", "3", "60"] - the library acquires 3 reference books, each valued at 60.
["checkout", "fiction", "1"] - a patron checks out 1 fiction book valued at 100, so the insurance value is 1 × 100 = 100.
["checkout", "reference", "1"] - a patron checks out 1 reference book valued at 60, so the insurance value is 1 × 60 = 60.
["reclassify", "reference", "1", "60", "100"] - one reference book is reclassified and its value becomes 100.
["checkout", "reference", "1"] - a patron checks out 1 reference book. There are 2 reference books in the library with values of 60 and 100, and the one with the value of 60 should be checked out first, so the insurance value is 1 × 60 = 60.
["checkout", "reference", "1"] - a patron checks out 1 reference book. There is 1 reference book in the library with the value of 100, so the insurance value is 1 × 100 = 100.




Question 4

You are monitoring the building density in a district of houses. The district is represented as a number line, where a house can be built at each numbered point on the line if at least one of the neighboring points is not occupied. Initially, there are no houses in the district.

You are given queries, an array of integers representing the locations of new houses in the order in which they will be built. After each house is built, your task is to find the longest segment of contiguous houses in the district.

Return an array of integers representing the longest segment of contiguous houses after each respective house from queries is built.

NOTE: It's guaranteed that all of the house locations in queries are unique and no house was built at a point with existing houses on both left and right adjacent points.

Assume that array indices are 0-based.

Example

For queries = [2, 1, 3], the output should be solution(queries) = [1, 2, 3].

Expand to see the example video.

Note: If you are not able to see the video, use this link to access it.

Let's look at what happens at each step:

After queries[0] = 2, there is only one house in the district (at 2), so the answer is 1.
After queries[1] = 1, there are two houses in the district (at 1 and 2). This means there is a segment of 2 contiguous houses, so the answer is 2.
After queries[2] = 3, there are three houses in the district (at 1, 2, and 3). This means there is a segment of 3 contiguous houses, so the answer is 3.
So the final answer is [1, 2, 3].

For queries = [1, 3, 0, 4], the output should be solution(queries) = [1, 1, 2, 2].

Expand to see the example video.

Note: If you are not able to see the video, use this link to access it.

Let's look at what happens at each step:

After queries[0] = 1, there is only one house in the district (at 1), so the answer is 1.
After queries[1] = 3, there are two houses in the district (at 1 and 3). These two houses are not contiguous, so the answer is still 1.
After queries[2] = 0, there are three houses in the district (at 0, 1, and 3). This means there is a segment of 2 contiguous houses, so the answer is 2.
Ater queries[2] = 4, there are two segments of 2 contiguous houses, so the answer is still 2.
So the final answer is [1, 1, 2, 2].
*/