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
        if (!(this.DIR_COUNT)) this.DIR_COUNT = 0
        if (!(this.DIRECTORY)) this.DIRECTORY = []
            
        this.DIRECTORY.push (new this.#driveMod (temp))
        this.DIR_COUNT = this.DIRECTORY.length
      }
    }
  }
  query (prop)
  {
    if (!(this.QUERY_COUNT) )this.QUERY_COUNT = 0
    if (!(this.RESULT)) this.RESULT = []

    this.RESULT[this.QUERY_COUNT] = 
    this.QUERY_COUNT ++

    if (prop)
    {
      const temp = {}
      
      if (prop.drive) this.queryDrive (prop.drive)

      this.RESULT = temp

      return this.RESULT
    }
  }

  queryDrive (drive)
  {
    let innerKeys = []
    let Y = []
    for (let x in this.DIRECTORY)
    {
      innerKeys.push (Object.keys(this.DIRECTORY[x]))

      for (let y in drive)
      {
        let Y = y.toUpperCase ()
      }
    }
    console.log (innerKeys)
  }
}
module.exports = STORAGE