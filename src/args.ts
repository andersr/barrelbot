// import Yargs from 'yargs';

// export function getArgs(): Yargs.Argv {
//   return Yargs.usage('Usage: barrelbot [options]')
//     .example('barrelbot', 'Run barrelbot')

//     .command(['watch', '$0'], 'the watch command', {}, argv => {
//       console.log('this command will be run by default', JSON.stringify(argv));
//     });

//   // .string('b')
//   // .alias('b', 'baseUrl')
//   // .nargs('d', 1)
//   // .describe(
//   //   'b',
//   //   "The base url relative to 'directory' for non-relative imports (with tsconfig's baseUrl)."
//   // );

//   // .config('c')
//   // .alias('c', 'config')
//   // .describe('c', 'The location of the config file.')

//   // .string('d')
//   // .alias('d', 'directory')
//   // .nargs('d', 1)
//   // .describe('d', 'The directory to create barrels for.')
//   // .default('d', './')

//   // .boolean('D')
//   // .alias('D', 'delete')
//   // .describe('D', 'Delete existing barrel files.')
//   // .default('D', false)

//   // .array('e')
//   // .alias('e', 'exclude')
//   // .describe(
//   //   'e',
//   //   'Excludes any files whose paths match any of the regular expressions.'
//   // )

//   // .help('h')
//   // .alias('h', 'help')
//   // .default('h', false)

//   // .array('i')
//   // .alias('i', 'include')
//   // .describe(
//   //   'i',
//   //   'Only include files whose paths match any of the regular expressions.'
//   // )

//   // .string('l')
//   // .alias('l', 'location')
//   // .describe('l', 'The mode for picking barrel file locations')
//   // .choices('l', ['top', 'below', 'all', 'replace', 'branch'])
//   // .default('l', 'top')

//   // .string('n')
//   // .alias('n', 'name')
//   // .describe('n', 'The name to give barrel files')
//   // .default('n', 'index')

//   // .string('s')
//   // .alias('s', 'structure')
//   // .describe('s', 'The mode for structuring barrel file exports')
//   // .choices('s', ['flat', 'filesystem'])
//   // .default('s', 'flat')

//   // .boolean('q')
//   // .alias('q', 'singleQuotes')
//   // .describe(
//   //   'q',
//   //   'Use single quotes for paths instead of the default double quotes'
//   // )
//   // .default('q', false)

//   // .version()
//   // .alias('v', 'version')
//   // .default('v', false)

//   // .boolean('V')
//   // .alias('V', 'verbose')
//   // .describe('V', 'Display additional logging information')
//   // .default('V', false);
// }
