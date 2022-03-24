import tap from 'tap'
import { compileConfigurations, initializeMongo } from './testUtils'
import pino from 'pino'

import * as automationLib from '@mia-platform-internal/fast-data-automation-lib'

import erSchema from '../configurations/erSchema'
import aggregation from '../configurations/aggregation'

import aggregatorTestCases from './aggregator'
import * as path from 'path'
import * as fs from 'fs'
import validatorTestCases from './validator'

tap.test('fast data test', async t => {
  const configOutDir = path.join(__dirname, 'config-out')

  await t.before(() => {
    compileConfigurations(
      path.join(__dirname, '..', 'configurations'),
      configOutDir
    )
  })

  await t.test('aggregator', async t => {
    for (const testCase of aggregatorTestCases) {
      await t.test(`case: ${testCase.name}`, async t => {
        const {
          expected,
          fixtures,
          identifier,
        } = testCase.data

        const { collectionDb } = await initializeMongo(t, fixtures as any)

        const logger = pino({ level: 'silent' })
        automationLib.validator.aggregation.erSchema(logger, erSchema).validate()
        automationLib.validator.aggregation.aggregation(logger, aggregation).validate()
        automationLib.validator.aggregation.aggregation(logger, aggregation).requiredFiles()

        const aggregateFn = automationLib.aggregation(
          logger,
                    erSchema as any,
                    aggregation as any,
                    configOutDir
        )
        const aggregatedData = await aggregateFn(collectionDb, identifier)
        t.strictSame(aggregatedData, expected, 'expected to be equal')

        t.end()
      })
    }


    t.end()
  })

  await t.test('validator', async t => {
    const {
      validTestCases,
      invalidTestCases,
    } = validatorTestCases

    const validator = (await import(path.join(configOutDir, 'validator.js'))).default

    await t.test('valid', t => {
      for (const testCase of validTestCases) {
        t.test(`case: ${testCase.name}`, async t => {
          const logger = pino({ level: 'silent' })

          const validationResult = validator(logger, testCase.sv)
          t.ok(validationResult)
          t.end()
        })
      }

      t.end()
    })
    await t.test('invalid', t => {
      for (const testCase of invalidTestCases) {
        t.test(`case: ${testCase.name}`, async t => {
          const logger = pino({ level: 'silent' })

          const validationResult = validator(logger, testCase.sv)
          t.notOk(validationResult)
          t.end()
        })
      }

      t.end()
    })

    t.end()
  })

  fs.rmdirSync(configOutDir, { recursive: true })

  t.end()
}).then()
