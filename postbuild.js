const fs = require('fs-extra')
const path = require('path')

const discoverSubRoutes = async (directoryPath) => {
  const fileNames = await fs.readdir(directoryPath)
  // Discover sub-directories.
  const subDirectories = []
  for (const fileName of fileNames) {
    const filePath = path.join(directoryPath, fileName)
    const stat = await fs.stat(filePath)
    const isDirectory = stat.isDirectory()
    if (isDirectory) {
      subDirectories.push(fileName)
    }
  }
  // Discover routes.
  const routes = []
  for (const subDirectory of subDirectories) {
    const subDirPath = path.join(directoryPath, subDirectory)
    const subDirFileNames = await fs.readdir(subDirPath)
    const hasIndex = subDirFileNames.includes("index.html")
    if (hasIndex) {
      const route = path.join(subDirPath, "index.html")
      routes.push(route)
    }
  }
  // Discover sub-routes
  const subDirRouteGroups = []
  for (const subDirectory of subDirectories) {
    const subDirPath = path.join(directoryPath, subDirectory)
    const subDirRouteGroup = await discoverSubRoutes(subDirPath)
    subDirRouteGroups.push(subDirRouteGroup)
  }
  const subDirRoutes = subDirRouteGroups.flat()
  // Return concatenates routes.
  return [
    ...routes,
    ...subDirRoutes
  ]
}

const renameSubRoutes = async () => {
  const subRoutes = await discoverSubRoutes('./public')
  for (const subRoute of subRoutes) {
    const directory = path.dirname(subRoute)
    const dirParent = path.dirname(directory)
    const parent = path.basename(directory)
    const newName = `${parent}.html`
    const newPath = path.join(dirParent, newName)
    // console.log(`Renaming sub-route '${subRoute}' to '${newPath}'.`)
    await fs.rename(subRoute, newPath)
  }
}

renameSubRoutes()