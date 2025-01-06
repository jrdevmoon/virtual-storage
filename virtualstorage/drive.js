class DRIVE
{
  constructor (prop)
  {
    if (prop)
    {
      if (prop.tag) this.TAG = prop.tag
      if (prop.path) this.map (prop.path)
    }
  }

  map (path)
  {
    const fs = require ('fs')
    const pth = require ('path')

    if (fs.existsSync (path))
    {
      if (fs.lstatSync (path).isDirectory ())
      {
        this.NAME = pth.parse (path).name
        this.DIR = pth.parse (path).dir
        this.ROOT = pth.parse (path).root
        this.PATH = path

        this.getContent (this.PATH, fs, pth)
      }
    }
  }

  getContent (path, fs, pth)
  {
    if (fs.readdirSync (path))
    {
      const FolderMod = require (`${__dirname}/folder.js`)

      const contentBases = fs.readdirSync (path)
      const contentPaths = []

      for (let x in contentBases)
      {
        contentPaths.push (`${path}/${contentBases[x]}`)

        if (fs.lstatSync (contentPaths[x]).isDirectory ())
        {
            if (!(this.FOLDERS)) this.FOLDERS = []

            this.FOLDERS.push (new FolderMod (contentPaths[x], this.map, this.getContent))
        }
      }
    }
  }
}
module.exports = DRIVE