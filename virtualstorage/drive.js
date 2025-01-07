const fsMod = require ('fs')
const pathMod = require ('path')

class DRIVE
{
  TAG
  NAME
  DIR
  ROOT
  PATH
  SIZE

  constructor (prop)
  {
    if (prop)
    {
      if (prop.tag) this.TAG = prop.tag
      if (prop.path) this.map (prop.path)

      //this.monitor ()
    }
  }

  monitor ()
  {
    fsMod.watch (this.PATH, (eventType, affected)=>
    {
      console.log ({eventType, affected})
    })
  }

  map (path)
  {
    const fs = fsMod
    const pth = pathMod

    if (fs.existsSync (path))
    {
      if (fs.lstatSync (path).isDirectory ())
      {
        this.NAME = pth.parse (path).name
        this.DIR = pth.parse (path).dir
        this.ROOT = pth.parse (path).root
        this.PATH = path
        this.SIZE = fs.lstatSync (path).size

        this.getContent (this.PATH, fs, pth)
      }
    }
  }

  getContent (path, fs, pth)
  {
    if (fs.readdirSync (path))
    {
      const contentBases = fs.readdirSync (path)
      const contentPaths = []
      
      for (let x in contentBases)
      {
        contentPaths.push (`${path}/${contentBases[x]}`)
  
        if (fs.lstatSync (contentPaths[x]).isDirectory ())
        {
          this.setFolders (contentPaths[x])   
        }
        if (fs.lstatSync (contentPaths[x]).isFile ())
        {
          this.setFiles (contentPaths[x])
        }
      }
    }
  }

  setFiles (contentPath)
  {
    if (!(this.FILES)) this.FILES = []
    
    const FolderMod = require (`${__dirname}/folder.js`)
    const FileMod = require (`${__dirname}/file.js`)

    this.FILES.push (new FileMod (contentPath))
  }

  setFolders (contentPath)
  {
    if (!(this.FOLDERS)) this.FOLDERS = []
  
    const FolderMod = require (`${__dirname}/folder.js`)

    this.FOLDERS.push (new FolderMod (contentPath, this.map, this.getContent, this.setFolders, this.setFiles))
  }
}
module.exports = DRIVE