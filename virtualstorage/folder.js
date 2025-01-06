class FOLDER
{
  NAME
  DIR
  ROOT
  PATH
  
  constructor (path, map, getContent)
  {
    this.map = map
    this.getContent = getContent

    this.map (path)
  }
}
module.exports = FOLDER