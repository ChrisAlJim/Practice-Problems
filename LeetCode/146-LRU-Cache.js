/**
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.

int get(int key) Return the value of the key if the key exists, otherwise return -1.

void put(int key, int value) Update the value of the key if the key exists. Otherwise, 
add the key-value pair to the cache. If the number of keys exceeds the capacity from 
this operation, evict the least recently used key.

The functions get and put must each run in O(1) average time complexity.
 */

class Node {
    constructor(key, val) {
        this.key = key
        this.val = val
        this.next = null
        this.prev = null
    }
}

class LRUCache {
    constructor(cap) {
        this.cap = cap
        this.cache = new Map()

        this.lru = new Node("LRU", "LRU")
        this.mru = new Node("MRU", "MRU")

        this.lru.next = this.mru
        this.mru.prev = this.lru
    }

    #remove (node) {
        const prev = node.prev
        const next = node.next

        prev.next = next
        next.prev = prev
    }

    #insert (node) {
        const prev = this.mru.prev
        prev.next = node
        node.prev = prev
        node.next = this.mru
        this.mru.prev = node
    }

    get (key) {
        if (!(this.cache.has(key))) {
            return -1
        }
        if (this.cache.get(key).next !== this.mru) {     ///////////////////
            this.#remove(this.cache.get(key))            ///MOVE NODE TO MRU
            this.#insert(this.cache.get(key))            ///////////////////
        }
        return this.cache.get(key).val
    }

    put (key, value) {
        if (!(this.cache.has(key))) {
            if (this.cache.size === this.cap) {
                const tempKey = this.lru.next.key    ////////////////////////
                this.#remove(this.lru.next)          ///DELETE LRU FROM CACHE
                this.cache.delete(tempKey)           ////////////////////////
            }
            const node = new Node(key, value)   //////////////////
            this.cache.set(key, node)           ///INSERT NEW NODE
            this.#insert(node)                  //////////////////
        } else {
            this.#remove(this.cache.get(key))    ///////////////////////////////
            this.#insert(this.cache.get(key))    ///MOVE NODE TO MRU. UPDATE VAL
            this.cache.get(key).val = value      ///////////////////////////////
        }
    }
}

/**
We could add a node despite it going over capacity and just delete the LRU after
 */