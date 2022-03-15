const {MongoClient} = require('mongodb')
const {GenericContainer} = require('testcontainers')

async function initializeMongo(t, projectionsMap) {
    let mongoUri
    let mongoContainer
    if (process.env.MONGODB_URL !== undefined) {
        mongoUri = process.env.MONGODB_URL
    } else {
        mongoContainer = await new GenericContainer('mongo:4.4')
            .withExposedPorts(27017)
            .start()
        
        mongoUri = 'mongodb://'+mongoContainer.getHost()+':'+mongoContainer.getMappedPort(27017)
    }

    const mongoClient = new MongoClient(mongoUri)
    await mongoClient.connect()
  
    const dbName = 'fast-data-low-code-testing-'+Date.now()
    const collectionDb = mongoClient.db(dbName)
  
    await Promise.all(
      Object.entries(projectionsMap).map(([name, data]) => {
        return collectionDb
        .collection(name)
        .insertMany(data)
    })
    )
  
    t.teardown(async () => {
        for (const collectionName of Object.keys(projectionsMap)) {
            try {
              // eslint-disable-next-line no-await-in-loop
              await collectionDb.dropCollection(collectionName)
              // eslint-disable-next-line no-empty
            } catch (error) { }
          }
          await collectionDb.dropDatabase()
          await mongoClient.close()
          await mongoContainer?.stop()
    })
    return {
      mongoClient,
      collectionDb,
    }
  }

module.exports = {
    initializeMongo
}