class STORAGE
{
  #driveMod = require (`${__dirname}/drive.js`)

  map (prop)
  {
    if (prop)
    {
      const temp = {}
      if (prop.tag) temp.tag = prop.tag
      if (prop.path) temp.path = prop.path

      if (temp.path)
      {
        if (!(this.DIRECTORY)) this.DIRECTORY = []

        this.DIRECTORY.push (new this.#driveMod (temp))
      }
    }
  }
}
module.exports = STORAGE