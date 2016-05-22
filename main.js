const Graph = require('./graph.js');
const Readline = require('readline');

const rl = Readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n = 20;
let edges = {
  'f0t1': 3,
  'f0t2': 10,
  'f0t3': 8,
  'f1t2': 2,
  'f1t3': 7,
}

let graphes = []

let firstGraph = new Graph(n, edges)
graphes[0] = firstGraph

for (let i = 1; i < n; i++) {
  let previousGraph = graphes[i - 1]
  graphes.push(previousGraph.walk())
}

let lastGraph = graphes[graphes.length - 1]

rl.question('Input the start node number: \n', (start) => {
  console.log('start with:' + start + '\n')
  rl.question('Input the end node number:  \n', (end) => {
    console.log('end with:' + end + '\n')
    console.log('The short distance from ' + start + ' to ' + end + ' is ' + lastGraph.getEdgeDistance(start, end))
    rl.close()
  })
})
