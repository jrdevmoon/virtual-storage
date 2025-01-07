const pth = require ('path')
const fs = require ('fs')

class FILE
{
  constructor (path)
  {
    if (path) this.map (path)

    if (this.EXT == ".json") this.import (this.PATH)
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

  import (path)
  {
    if (!(this.CONTENT)) this.CONTENT = require (path)
  }
}
module.exports = FILE