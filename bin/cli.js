#!/usr/bin/env node
const path = require('path');
const sao = require('sao');
const cli = require('cac')();
const updateNotifier = require('update-notifier');
const pkg = require('../package.json');

updateNotifier({
  pkg,
  updateCheckInterval: 5000, // 5s
}).notify();

cli
  .command('<target-folder>', 'Generate a new project to target folder')
  .option(
    '--npm-client <client>',
    'Choose an npm client for installing packages (\'npm\' | \'yarn\')', {
      default: 'npm',
    }
  )
  .option(
    '--registry <registry>',
    'Use a custom registry for package manager'
  )
  .action(async (targetFolder, { npmClient = 'npm', registry }) => {
    // FIXME the default npmClient not works
    const app = sao({
      generator: path.join(__dirname, '..'),
      outDir: targetFolder,
      npmClient,
      registry,
    });

    await app.run().catch(sao.handleError);
  });

cli.on('command:!', () => {
  if (!cli.args.length) cli.outputHelp();
});

cli.help();
cli.version(require('../package').version);

cli.parse();
