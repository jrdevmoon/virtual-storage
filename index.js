const root = __dirname
const config = require (`${root}/config.json`)

const VS = require (`${root}${config.VS}`)

const storage = new VS
storage.map ({tag: "C:", path: root, monitor: true})


console.dir (storage, {depth: 20})