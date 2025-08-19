/*
Given the heads of two singly linked-lists headA and headB, return the 
node at which the two lists intersect. If the two linked lists have no 
intersection at all, return null.
*/

const getIntersectionNode = (headA, headB) => {
    if (!headA || !headB) return null

    let a = headA, b = headB

    while (a !== b) {
        a = a ? a.next : headB // a1, a9, a1, c2, c4, 3b, c2
        b = b ? b.next : headA // 3b, c2, c4, a1, a9, a1, c2
    }

    return a
}