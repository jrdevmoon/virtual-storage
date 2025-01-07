const VS = require (`${__dirname}/virtualstorage`)
const vs = new VS

vs.map (
{
  tag : "C:",
  path : `${__dirname}/test`
}
)
/*
vs.map (
  {
    tag : "D:",
    path : `${__dirname}`
  }
  )
*/
console.dir (vs, {depth: 7})