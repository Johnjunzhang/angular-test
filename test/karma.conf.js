basePath = '../';

frameworks = ["jasmine"];

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'test/lib/jquery-1.9.1.js',
  'app/lib/angular/angular.js',
  'app/js/**/*.js',
  'test/lib/angular/angular-mocks.js',
  'test/unit/**/*.js'
];

autoWatch = false;

browsers = ['Chrome'];

singleRun = false;
