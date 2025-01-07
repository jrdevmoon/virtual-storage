const VS = require (`${__dirname}/virtualstorage`)
const vs = new VS

vs.map (
{
  tag : "C:",
  path : `${__dirname}/virtualstorage`
}
)

vs.map (
  {
    tag : "D:",
    path : `${__dirname}/test`
  }
  )

console.dir (vs, {depth: 10})