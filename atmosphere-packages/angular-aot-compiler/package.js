Package.describe({
  name: 'ardatan:angular-aot-compiler',
  version: '0.1.1',
  summary: 'Angular Compiler Package for AOT',
  git: 'https://github.com/ardatan/angular2-meteor/atmosphere-packages/angular-aot-compiler',
  documentation: 'README.md'
});

Npm.depends({
  'meteor-typescript': '0.8.10',
  'typescript': '2.5.3',
  '@angular/compiler-cli': '4.4.6',
  '@angular/compiler': '4.4.6',
  '@angular/core': '4.4.6',
  '@angular/common': '4.4.6',
  'rxjs': '5.5.0',
  'rollup': '0.50.0',
  'rollup-plugin-node-resolve': '3.0.0',
  'rollup-plugin-hypothetical': '2.0.0',
  'rollup-plugin-commonjs': '8.2.4',
  'cheerio': '0.22.0',
  'node-sass': '4.5.3',
  'reflect-metadata': '0.1.10'
});

Package.onUse(function(api) {
  api.versionsFrom('1.5.2.2');
  api.use([
    'ecmascript',
    'barbatus:typescript-compiler@0.9.12',
    'babel-compiler'
  ], 'server');
  api.mainModule('index.js', 'server');
  api.export([
    'AngularAotCompiler'
  ], 'server');
});
