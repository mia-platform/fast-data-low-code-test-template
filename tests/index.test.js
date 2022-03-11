const tap = require('tap')
const fs = require('fs')
const path = require('path')
const pino = require('pino')
const automationLib = require('@mia-platform-internal/fast-data-automation-lib')

const { initializeMongo } = require('./testUtils')
const CASES_FOLDER_PATH = path.join(__dirname, 'cases')

const aggregationFolder = path.resolve(path.join(__dirname, '../configurations'))
const aggregation = require(path.join(aggregationFolder, 'aggregation.json'))
const erSchema = require(path.join(aggregationFolder, 'erSchema.json'))

tap.test('fast data test', t => {
    const testCases = fs.readdirSync(CASES_FOLDER_PATH)
    for (const dirName of testCases) {
        t.test(`case: ${dirName}`, async t => {

            const folderTest = path.join(CASES_FOLDER_PATH, dirName)
            const expected = require(path.join(folderTest, 'expected.json'))
            const fixtures = require(path.join(folderTest, 'fixtures.json'))
            const identifier = require(path.join(folderTest, 'identifier.json'))
            
            const {collectionDb} = await initializeMongo(t, fixtures)
            
            
            const logger = pino({level: 'silent'})
            automationLib.validator.aggregation.erSchema(logger, erSchema).validate()
            automationLib.validator.aggregation.aggregation(logger, aggregation).validate()
            automationLib.validator.aggregation.aggregation(logger, aggregation).requiredFiles()
            
            const aggregateFn = automationLib.aggregation(
                logger,
                erSchema,
                aggregation,
                aggregationFolder
            )
            const aggregatedData = await aggregateFn(collectionDb, identifier)
            t.strictSame(aggregatedData, expected, 'expected to be equal')

            t.end()
        })
    }

    t.end()
})