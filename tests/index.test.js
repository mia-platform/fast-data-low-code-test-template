const tap = require('tap')
const fs = require('fs')
const path = require('path')
const pino = require('pino')
const automationLib = require('@mia-platform-internal/fast-data-automation-lib')

const { initializeMongo } = require('./testUtils')
const AGGREGATOR_CASES_FOLDER_PATH = path.join(__dirname, 'aggregator')
const VALIDATOR_VALID_CASES_PATH = path.join(__dirname, 'validator', 'valid')
const VALIDATOR_INVALID_CASES_PATH = path.join(__dirname, 'validator', 'invalid')

const configDir = path.resolve(path.join(__dirname, '../configurations'))
const aggregation = require(path.join(configDir, 'aggregation.json'))
const erSchema = require(path.join(configDir, 'erSchema.json'))
const validator = require(path.join(configDir, 'validator.js'))

tap.test('fast data test', t => {

    t.test('aggregator', t => {
        const testCases = fs.readdirSync(AGGREGATOR_CASES_FOLDER_PATH)
        for (const dirName of testCases) {
            t.test(`case: ${dirName}`, async t => {
                const folderTest = path.join(AGGREGATOR_CASES_FOLDER_PATH, dirName)
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
                    configDir
                )
                const aggregatedData = await aggregateFn(collectionDb, identifier)
                t.strictSame(aggregatedData, expected, 'expected to be equal')

                t.end()
            })
        }

        t.end()
    })

    t.test('validator', t => {

        t.test('valid', t => {
            const testCases = fs.readdirSync(VALIDATOR_VALID_CASES_PATH)
            for (const dirName of testCases) {
                t.test(`case: ${dirName}`, async t => {
                    const logger = pino({level: 'silent'})

                    const sv = require(path.join(VALIDATOR_VALID_CASES_PATH, dirName))
                    const validationResult = validator(logger, sv)
                    t.ok(validationResult)
                    t.end()
                })
            }

            t.end()
        })
        t.test('invalid', t => {
            const testCases = fs.readdirSync(VALIDATOR_INVALID_CASES_PATH)
            for (const dirName of testCases) {
                t.test(`case: ${dirName}`, async t => {
                    const logger = pino({level: 'silent'})

                    const sv = require(path.join(VALIDATOR_INVALID_CASES_PATH, dirName))
                    const validationResult = validator(logger, sv)
                    t.notOk(validationResult)
                    t.end()
                })
            }

            t.end()
        })

        t.end()
    })

    t.end()
})
