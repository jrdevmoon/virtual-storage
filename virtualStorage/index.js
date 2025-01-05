const root = __dirname
const config = require (`${root}/config.json`)
const Drive = require (`${root}${config.D}`)

const SYSTEM = class
{
  map (prop)
  {
    const temp = {}

    if (prop)
    {
      if (prop.tag) temp.tag = prop.tag
      if (prop.path) temp.path = prop.path
      
      if (prop.monitor) temp.monitor = prop.monitor
    }

    if (!(prop)) console.log ("error")

    if (temp.path) this.setDrive (temp)
  }

  setDrive (prop)
  {
    if (!(this.STORAGE)) this.STORAGE = []
    if (!(this.DRIVE_COUNT)) this.DRIVE_COUNT = 0

    if (typeof (Drive) == "function") this.STORAGE.push (new Drive (prop))
    this.DRIVE_COUNT ++
  }
}
module.exports = SYSTEM