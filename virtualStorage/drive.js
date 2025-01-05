const root = __dirname
const config = require (`${root}/config.json`)
const Map = require (`${root}${config.DM}`)

const DRIVE = class
{
  constructor (prop)
  {
    if (prop)
    {
      if (prop.path) this.map (prop)
    }

    if (!(prop)) console.log ("error")
  }

  map (prop)
  {
        
  }
}
module.exports = DRIVE