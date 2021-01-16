// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

const readParamsFromCli = () => {
  const params = {}
  process.argv.filter(it => it.startsWith('--param.')).forEach(pair => {
    const parts = pair.split('=')
    const name = parts[0].trim().replace('--param.', '')
    params[name] = parts[1] && parts[1].trim() || true
  })
  return params
}

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--no-sandbox', '--headless'],
    },
  },
  directConnect: true,
  baseUrl: readParamsFromCli().baseUrl || 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
