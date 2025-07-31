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

const bruteJourneyReconstruction = (travelPhotos) => {
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
  return path
}



const journeyReconstruction = (travelPhotos) => {
  if (travelPhotos.length === 0) {
    console.log("No travel photos")
    return []
  }
  //map which node point to each other
  const adjancencyList = makeAdjacenceyList(travelPhotos)

  if (!adjancencyList) return
  //find where a node only has one edge, this
  //will be our starting point to build the path
  const startingPoint = findStartingPoint(adjancencyList)
  //construct path based nodes in adjancencyList
  const path = createPath(startingPoint, adjancencyList)

  return path

  function makeAdjacenceyList (array) {
    const adjancencyList = new Map()
    const extras = new Set()
    for (const tuple of array) {
      const [id1, id2] = tuple;
      if (adjancencyList.has(id1)) {
        adjancencyList.get(id1).add(id2)
        extras.delete(id1)
      } else {
        adjancencyList.set(id1, new Set([id2]))
        extras.add(id1)
      }
      if (adjancencyList.has(id2)) {
        adjancencyList.get(id2).add(id1)
        extras.delete(id2)
      } else {
        adjancencyList.set(id2, new Set([id1]))
        extras.add(id2)
      } 
    }
    if (extras.size > 2) {
      console.log("There are more then 2 end points in our travel photos")
      return
    }
    if (extras.size < 2) {
      console.log("The path is loops in on itself")
      return
    }
    return adjancencyList
  }

  function findStartingPoint (map) {
    for (const [key, value] of map) {
      if (value.size === 1) {
        return key
      }
    }
  }

  function createPath (startingPoint, adjancencyList) {
    const path = [startingPoint]
    const visited = new Set([startingPoint])
    while (path.length < adjancencyList.size) {
      const cur = path.at(-1)
      for (const id of adjancencyList.get(cur)) {
        if (!(visited.has(id))) {
          path.push(id)
          visited.add(id)
          break
        }
      }
    }
    return path
  }
}



const travelPhotos = [[3, 5], [1, 4], [2, 4], [1, 5]]
const greaterThan2Endpoints = [[3, 5], [1, 4], [2, 4], [1, 5], [1, 7]]
const loop = [[3, 5], [1, 4], [5, 4], [1, 5]]
// console.log(bruteJourneyReconstruction(travelPhotos))
console.log(journeyReconstruction([]))
console.log(journeyReconstruction(travelPhotos))
console.log(journeyReconstruction(greaterThan2Endpoints))
console.log(journeyReconstruction(loop))