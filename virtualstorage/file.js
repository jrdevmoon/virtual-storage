const pth = require ('path')
const fs = require ('fs')

class FILE
{
  constructor (path)
  {
    if (path) this.map (path)

    this.import ()

    //this.monitor ()
  }

  monitor ()
  {
    fs.watch (this.PATH, (eventType, affected)=>
    {
      console.log ({eventType, affected})
       
    })
  }

  map (path)
  {
    this.NAME = pth.parse (path).name
    this.BASE = pth.parse (path).base
    this.DIR = pth.parse (path).dir
    this.ROOT = pth.parse (path).root
    this.EXT = pth.parse(path).ext
    this.PATH = path
    this.SIZE = fs.lstatSync (path).size
  }

  import ()
  {
    if (this.EXT == ".json") 
    {
      this.CONTENT = this.content 
    }

    if (this.EXT == ".js") 
    {
      this.CONTENT = this.content
    }
  }

  content ()
  {
    return require (`"${this.PATH}"`)
  }
}
module.exports = FILE