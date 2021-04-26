/* eslint-disable no-console */
import { outputFile, readFile } from 'fs-extra'
import globby from 'globby'

async function main(): Promise<void> {
  const args = process.argv.slice(2)
  const filePaths = await globby([
    'src/**/*.{ts,tsx}',
    ...args,
    '!src/index.ts',
    '!**/*.d.ts',
    '!**/*.stories.tsx'
  ])
  const result: Array<string> = []
  const usedExportNames: Record<string, true> = {} // this object is mutated by `parseExports`
  for (const filePath of filePaths.sort()) {
    const normalizedFilePath = filePath
      .replace(/^src/, '.')
      .replace(/\.tsx?/, '')
    const moduleExportsRegex = /export (?:(?:(?:async )?function)|const) ([^(<: ]+)/g
    const moduleExports = await parseFileExports(
      moduleExportsRegex,
      filePath,
      usedExportNames
    )
    if (moduleExports.length > 0) {
      result.push(
        `export { ${moduleExports.join(', ')} } from '${normalizedFilePath}'`
      )
    }
    const typeExportsRegex = /export (?:interface|type) ([^(<: ]+)/g
    const typeExports = await parseFileExports(
      typeExportsRegex,
      filePath,
      usedExportNames
    )
    if (typeExports.length > 0) {
      result.push(
        `export type { ${typeExports.join(', ')} } from '${normalizedFilePath}'`
      )
    }
  }
  await outputFile('src/index.ts', result.join('\n'))
}
main()

async function parseFileExports(
  regex: RegExp,
  filePath: string,
  usedExportNames: Record<string, true>
): Promise<Array<string>> {
  const contents = await readFile(filePath, 'utf8')
  if (/export default/g.test(contents) === true) {
    console.error(`Use of \`export default\`: ${filePath}`)
    process.exit(1)
  }
  const iterator = contents.matchAll(regex)
  const result: Array<string> = []
  for (const match of iterator) {
    const exportName = match[1]
    if (usedExportNames[exportName] === true) {
      console.error(`Export name clash \`${exportName}\`: ${filePath}`)
      process.exit(1)
    }
    usedExportNames[exportName] = true
    result.push(exportName)
  }
  return result.sort(function (a: string, b: string) {
    return a.localeCompare(b)
  })
}
