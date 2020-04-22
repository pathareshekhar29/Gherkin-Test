exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    './e2e/features/**/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,

  framework: 'custom',  

  frameworkPath: require.resolve('protractor-cucumber-framework'),  
  cucumberOpts: {
    require: ['./e2e/features/**/*.steps.ts'],  
    format: 'json: e2e-output.txt',  
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'  
    });
  }
};
