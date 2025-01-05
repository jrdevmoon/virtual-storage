const pathMod = require ('path')
const fsMod = require ('fs')

const map = (path)=>
{ 
  this.path = path

  this.getPathData = getPathData ()
  this.getFSData = getFSData ()

  this.mapDir = mapDir

  return this
}

const getFSData = () =>
{
  if (fsMod.existsSync (this.path)) this.exists = true
  if (fsMod.lstatSync (this.path).isDirectory) this.type = "dir"
  if (fsMod.lstatSync (this.path).isFile) this.type = "file"
  this.size = fsMod.lstatSync (this.path).size
  this.contentBases = fsMod.readdirSync (this.path)
  this.contentNames = []
  this.contentPaths = []

  for (let xx in this.contentBases)
  {
    this.contentNames = pathMod.parse (this.contentBases[xx]).name
    this.contentPaths.push (`${this.path}/${this.contentBases[xx]}`)
  }
  const contentLength = this.contentPaths.length
  if (contentLength >= 1) this.content = true

  this._exists = _exists ()
  this.getType = getType ()
  this.getSize = getSize ()
  this._content = _content ()
  this.getContentBases = getContentBases ()
  this.getContentNames = getContentNames ()
  this.getContentPaths = getContentPaths ()

  return this
}

const _exists = () => {return this.exists}
const getType = () => {return this.type}
const getSize = () => {return this.size}
const _content = () => {return this.content}
const getContentBases = () => {return this.contentBases}
const getContentNames = () => {return this.contentNames}
const getContentPaths = () => {return this.contentPaths}

const getPathData = ()=>
{
  this.name = pathMod.parse (this.path).name
  this.root = pathMod.parse (this.path).root
  this.dir = pathMod.parse (this.path).dir
  this.ext = pathMod.parse (this.path).ext
  this.base = pathMod.parse (this.path).base

  this.getName = getName ()
  this.getDir = getDir ()
  this.getRoot = getRoot ()
  this.getExt = getExt ()
  this.getBase = getBase ()
  this.getPath = getPath ()

  return this
}

const getName = () => {return this.name}
const getRoot = () => {return this.root}
const getDir = () => {return this.dir}
const getExt = () => {return this.ext}
const getBase = () => {return this.base}
const getPath = () => {return this.path}

module.exports = map