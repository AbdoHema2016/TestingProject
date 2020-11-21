import path from 'path';
import fs from 'fs';

const os = require('os').homedir();
const testFolder = path.join(os, '/Library/Developer/Xcode/DerivedData');
let iosStagingApp = '';

fs.readdir(testFolder, (_err, files) => {
  const iosStagingFolder =
    testFolder + files.find(dir => dir.includes('TestingProject'));
  iosStagingApp = path.join(
    iosStagingFolder,
    '/Build/Products/Debug-iphonesimulator/TestingProject.app',
  );
});

export const e2eiOSConfig = () => {
  const configiOS = {
    browserName: '',
    platformName: 'iOS',
    platformVersion: '14.2',
    deviceName: 'iPhone 11',
    automationName: 'XCUITest',
    autoGrantPermissions: true,
    connectHardwareKeyboard: true,
    app: iosStagingApp,
  };
  return configiOS;
};

export const e2eAndroidConfig = () => {
  const configAndroid = {
    browserName: '',
    'appium-version': '1.18.2',
    platformName: 'Android',
    platformVersion: '10',
    deviceName: 'emulator-5554',
    autoGrantPermissions: true,
    app: path.join(
      __dirname,
      '../../android/app/build/outputs/apk/staging/debug/app-staging-debug.apk',
    ),
  };
  return configAndroid;
};
