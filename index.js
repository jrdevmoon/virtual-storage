const VS = require (`${__dirname}/virtualstorage`)
const vs = new VS

vs.map (
{
  tag : "C:",
  path : "./test"
}
)

console.dir (vs, {depth: 10})