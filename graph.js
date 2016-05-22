class graph {
  /*
   * edge example: {'f0t1' => 3, 'f1t2' => 2}
   */
  constructor(n, edges) {
    this.n = n
    this.map = {}
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < i; j++) {
        let key = 'f' + j + 't' + i
        if (undefined !== edges[key])  {
          this.map[key] = edges[key]
        } else {
          this.map[key] = Infinity
        }
      }
    }
  }

  /*
   * Retrieve next graph
   * return: Graph
   */
   walk() {
     let nextMap = {}
     for (let i = 0; i < this.n; i++) {
       for (let j = 0; j < i; j++) {
         let key = 'f' + j + 't' + i
         nextMap[key] = this.shortPath(j, i)
       }
     }
     return new graph(this.n, nextMap)
   }

   shortPath(from_node, to_node) {
     let key = 'f' + from_node + 't' + to_node
     let minDistance = this.map[key]
     for (let i = 0; i < this.n; i++) {
       if (i === from_node || i === to_node) {
         continue
       } else {
         minDistance = Math.min(minDistance, this.getEdgeDistance(from_node, i) + this.getEdgeDistance(i, to_node))
       }
     }
     return minDistance
   }

   getEdgeDistance(from_node, to_node) {
     if (from_node < to_node) {
       return this.map['f' + from_node + 't' + to_node]
     } else {
       return this.map['f' + to_node + 't' + from_node]
     }
   }
}

module.exports = graph
