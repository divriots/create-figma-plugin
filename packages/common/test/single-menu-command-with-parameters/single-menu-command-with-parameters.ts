import test from 'ava'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import { readConfigAsync } from '../../src/read-config-async.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const config = {
  apiVersion: '1.0.0',
  build: null,
  commandId: null,
  editorType: ['figma'],
  enablePrivatePluginApi: false,
  enableProposedApi: false,
  id: 'a',
  main: null,
  name: 'a',
  parameterOnly: false,
  parameters: null,
  relaunchButtons: null,
  ui: null
}

const menuItemConfig = {
  commandId: 'c--default',
  main: {
    handler: 'default',
    src: 'c'
  },
  menu: null,
  name: 'b',
  ui: null
}

test('single parameter', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '01-single-parameter'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    menu: [
      {
        ...menuItemConfig,
        parameterOnly: false,
        parameters: [
          {
            allowFreeform: false,
            description: null,
            key: 'e',
            name: 'd',
            optional: false
          }
        ]
      }
    ]
  })
})

test('description', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '02-description'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    menu: [
      {
        ...menuItemConfig,
        parameterOnly: false,
        parameters: [
          {
            allowFreeform: false,
            description: 'f',
            key: 'e',
            name: 'd',
            optional: false
          }
        ]
      }
    ]
  })
})

test('allow freeform', async function (t) {
  t.plan(1)
  process.chdir(
    join(
      __dirname,
      'fixtures',

      '03-allow-freeform'
    )
  )
  t.deepEqual(await readConfigAsync(), {
    ...config,
    menu: [
      {
        ...menuItemConfig,
        parameterOnly: false,
        parameters: [
          {
            allowFreeform: true,
            description: null,
            key: 'e',
            name: 'd',
            optional: false
          }
        ]
      }
    ]
  })
})

test('optional', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '04-optional'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    menu: [
      {
        ...menuItemConfig,
        parameterOnly: false,
        parameters: [
          {
            allowFreeform: false,
            description: null,
            key: 'e',
            name: 'd',
            optional: true
          }
        ]
      }
    ]
  })
})

test('multiple parameters', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '05-multiple-parameters'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    menu: [
      {
        ...menuItemConfig,
        parameterOnly: false,
        parameters: [
          {
            allowFreeform: true,
            description: null,
            key: 'e',
            name: 'd',
            optional: false
          },
          {
            allowFreeform: false,
            description: 'h',
            key: 'g',
            name: 'f',
            optional: true
          }
        ]
      }
    ]
  })
})

test('parameter only', async function (t) {
  t.plan(1)
  process.chdir(join(__dirname, 'fixtures', '06-parameter-only'))
  t.deepEqual(await readConfigAsync(), {
    ...config,
    menu: [
      {
        ...menuItemConfig,
        parameterOnly: true,
        parameters: [
          {
            allowFreeform: false,
            description: null,
            key: 'e',
            name: 'd',
            optional: false
          }
        ]
      }
    ]
  })
})