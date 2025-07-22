/*
INSTRUCTIONS

A traveler visited a series of unique landmarks on a journey. Unfortunately, 
their travel journal was damaged, and they can no longer remember the exact 
order of their visits. However, they do have a collection of photos, each 
showing exactly two landmarks that were visited consecutively (either 
landmark could have been visited first).

Given the collection of photos represented as pairs of landmark IDs in 
travelPhotos, help the traveler reconstruct the complete journey. Each 
landmark was visited exactly once, and for every consecutive pair of 
landmarks in the journey, there exists a photo containing both landmarks.

You may reconstruct the journey in either forward or reverse order - both 
are considered correct.

EXAMPLE

For travelPhotos = [[3, 5], [1, 4], [2, 4], [1, 5]], the output can 
be solution(travelPhotos) = [3, 5, 1, 4, 2].

Explanation:

The photos show that landmarks 3 and 5 were visited consecutively, as 
were 1 and 4, 2 and 4, and 1 and 5.
By analyzing these connections, we can determine the traveler's journey 
was [3, 5, 1, 4, 2].
The reverse journey [2, 4, 1, 5, 3] is also a valid answer.
*/

const bruteJourneyReconstruction = () => {
  const adjancencyList = new Map()
  for (const photo of travelPhotos) {
    const [id1, id2] = photo;
    (adjancencyList.has(id1)) ? adjancencyList.get(id1).push(id2) : adjancencyList.set(id1, [id2]);
    (adjancencyList.has(id2)) ? adjancencyList.get(id2).push(id1) : adjancencyList.set(id2, [id1]);
  }

  const path = []
  const visited = new Set()
  while (path.length < adjancencyList.size) {
    while (path.length === 0) {
      for (const [key, value] of adjancencyList) {
        if (value.length === 1) {
          path.push(key)
          visited.add(key)
          break
        }
      }
    }
    const cur = path.at(-1)
    for (const id of adjancencyList.get(cur)) {
      if (visited.has(id)) {
        continue
      } else {
        path.push(id)
        visited.add(id)
        break
      }
    }
  }
}


const travelPhotos = [[3, 5], [1, 4], [2, 4], [1, 5]]
journeyReconstruction(travelPhotos)