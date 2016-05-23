const Graph = require('./graph.js');
const Readline = require('readline');

const rl = Readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
 * 結點的數量
 */
let n = 22;

/*
 * 邊線們
 */
let edges = {
  'f0t1': 1,
  'f1t2': 2,
  'f1t4': 5,
  'f2t3': 3,
  'f2t21': 7,
  'f3t4': 3,
  'f4t5': 4,
  'f4t21': 4,
  'f5t6': 5,
  'f5t7': 1,
  'f5t8': 5,
  'f6t7': 2,
  'f7t8': 3,
  'f8t9': 6,
  'f8t10': 1,
  'f9t10': 3,
  'f9t11': 5,
  'f10t11': 6,
  'f11t12': 3,
  'f11t15': 2,
  'f12t13': 5,
  'f13t14': 3,
  'f13t15': 6,
  'f14t15': 3,
  'f14t16': 3,
  'f14t17': 4,
  'f15t16': 2,
  'f16t18': 6,
  'f16t19': 7,
  'f16t20': 15,
  'f17t18': 1,
  'f18t19': 2,
  'f19t20': 2,
  'f20t21': 3
}

let graphes = []

let firstGraph = new Graph(n, edges)
graphes[0] = firstGraph

for (let i = 1; i < n; i++) {
  let previousGraph = graphes[i - 1]
  let thisGraph = previousGraph.walk()
  graphes[i] = thisGraph
}

let lastGraph = graphes[graphes.length - 1]

console.log('0:大門口;1:焯炤館;2:野聲樓;3:輔園;4:宜真宿舍;5:宜美宿舍;6:藝術學院;7:公博樓;8:文開樓;9:文舍;10:文園;11:積健樓;12:中美堂;13:國璽樓;14:進修部;15:利瑪竇;16:伯達樓;17:心園;18:仁園;19:濟時樓;20:聖言樓;21:外語學院;');


rl.question('Input the start node number: \n', (start) => {
  console.log('start with:' + start + '\n')

  rl.question('Input the end node number:  \n', (end) => {
    console.log('end with:' + end + '\n')
    console.log('The short distance from ' + start + ' to ' + end + ' is ' + lastGraph.getEdgeDistance(start, end))
    //ANS
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < y; x++) {
        let key = 'f' + x + 't' + y
          console.log('map ' + key + ' ' + lastGraph.getEdgeDistance(x, y) + '\n')
      }
    }
    rl.close()
  })
})
