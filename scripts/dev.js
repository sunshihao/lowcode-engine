#!/usr/bin/env node
const os = require('os');
const execa = require('execa');

async function start() {
    const [, , pkgName = '@xhxorg/lowcode-demo-general'] = process.argv;
    await execa.command(`lerna exec --scope ${pkgName} -- npm run start`, { stdio: 'inherit', encoding: 'utf-8' });
}

os.type() === 'Windows_NT' ? start() : execa.command('scripts/start.sh', { stdio: 'inherit', encoding: 'utf-8' });
