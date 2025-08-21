/*
<span><b>This</b> is very<i> funny</i></span>

           1<span>
         /    |     \
        /     |      \
       /      |       \
   2<b>   " is very"   3<i>
     |        5          |
     |                   |
   "This"            " funny"
     4                   6

"this" + " is very" + " funny"
(0, 7)
{
    0: Node4
    5: Node5
    12: Node6
    ...
    
}

function named: findText
inputs: rootNode, search string

Problem: Return the first instance nodes that contain this string
Strings case sensitive
If dom is empty output would be array 
output is an array of nodes

search string: "This" [Node4]
search string: "is very" [Node5]
search string: "This funny" []

Node {
    isText: bool,
    getText: string,
    getChildren: Node[],
}
*/

///////////
//OPTIMIZED
///////////

const findText = (root, searchString) => {
  if (!root || !searchString) {
    throw new Error("Invalid inputs!")
  }

  let renderedHTMLText = ""

  const indexToNodeMap = new Map()

  const htmlTextBuilder = (curNode) => {
    if (curNode.isText) {
      const nodeText = curNode.getText()
      if (nodeText.length > 0) {
        const preConcatLength = renderedHTMLText.length
        indexToNodeMap.set(preConcatLength, curNode)
        renderedHTMLText += nodeText
      }
      return
    }
    const children = curNode.getChildren()
    if (!children.length) return

    children.forEach((childNode) => {
      htmlTextBuilder(childNode)
    })
  }

  htmlTextBuilder(root)

  // Where the searchString is first found in our renderedHTMLText
  const searchStringStartIndex = renderedHTMLText.indexOf(searchString)

  if (searchStringStartIndex === -1) {
    return []
  }

  // Where the searchString ends (exclusive) in our renderedHTMLText
  const searchStringEndIndex = searchStringStartIndex + searchString.length

  const output = []

  for (const [index, node] of indexToNodeMap) {
    if (index >= searchStringStartIndex && index < searchStringEndIndex) {
      output.push(node)
    }
  }
  console.log(output)
  return output
}