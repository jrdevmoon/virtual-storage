const pth = require ('path')
const fs = require ('fs')

class FOLDER
{
  NAME
  DIR
  ROOT
  PATH
  SIZE

  map
  getContent
  setFolders
  setFiles

  #count = 0
  
  constructor (path, map, getContent, setFolders, setFiles)
  {
    if (map) this.map = map
    if (getContent) this.getContent = getContent
    if (setFolders) this.setFolders = setFolders
    if (setFiles) this.setFiles = setFiles

    if (path) this.map (path)

    this.monitor ()
  }
  
  monitor ()
  {
    this.updates = ["updates"]
    fs.watch (this.PATH, (eventType, affected)=>
    {
      this.#count ++
      this.updates[this.#count] = {eventType, affected, count: this.count}
      console.log (this.updates)
      
      if (this.#count > 1) this.#count = 0
    })
  }
}
module.exports = FOLDER