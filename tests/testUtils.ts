/* eslint-disable no-sync */

import { MongoClient } from 'mongodb'
import { GenericContainer, StartedTestContainer } from 'testcontainers'
import { ProjectionsSchema } from './interfaces'
import path from 'path'
import fs from 'fs'
import erSchema from '../configurations/erSchema'
import aggregation from '../configurations/aggregation'
import Tap from 'tap'

type ProjectionName = keyof ProjectionsSchema
export type Fixtures = {
    [K in ProjectionName]: (ProjectionsSchema[K] & {
        __STATE__: 'PUBLIC'
    })[]
}
export type ERSchema = {
    version: '1.0.0',
    config: {
        [k in ProjectionName]: {
            outgoing: {
                [j in ProjectionName]?: j extends k ? never : {
                    conditions: Record<string, {
                        condition: object
                        oneToMany?: boolean
                    }>
                }
            }
        }
    }
}

export const initializeMongo = async(test: Tap.Test, fixtures: Fixtures) => {
  let mongoUri
  let mongoContainer: StartedTestContainer

  if (process.env.MONGODB_URL !== undefined) {
    mongoUri = process.env.MONGODB_URL
  } else {
    mongoContainer = await new GenericContainer('mongo:4.4')
      .withExposedPorts(27017)
      .start()

    mongoUri = `mongodb://${mongoContainer.getHost()}:${mongoContainer.getMappedPort(27017)}`
  }

  const mongoClient = new MongoClient(mongoUri)
  await mongoClient.connect()

  const dbName = `fast-data-low-code-testing-${Date.now()}`
  const collectionDb = mongoClient.db(dbName)

  await Promise.all(
    Object.entries(fixtures).map(([name, data]) => {
      return collectionDb
        .collection(name)
        .insertMany(data)
    })
  )

  test.teardown(async() => {
    for (const collectionName of Object.keys(fixtures)) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await collectionDb.dropCollection(collectionName)
        // eslint-disable-next-line no-empty
      } catch (error) {
      }
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

export const compileConfigurations = (inputDir: string, outDir: string) => {
  const jsonIndent = 4

  if (fs.existsSync(outDir)) {
    fs.rmdirSync(outDir, { recursive: true })
  }
  fs.mkdirSync(outDir, {})

  fs.writeFileSync(path.join(outDir, 'erSchema.json'), JSON.stringify(erSchema, null, jsonIndent))
  fs.writeFileSync(path.join(outDir, 'aggregation.json'), JSON.stringify(aggregation, null, jsonIndent))

  const configFiles = fs.readdirSync(inputDir)

  for (const configFile of configFiles) {
    if (configFile.endsWith('.js')) {
      fs.copyFileSync(path.join(inputDir, configFile), path.join(outDir, configFile))
    }
  }
}
