import wd from 'wd';
import {e2eiOSConfig} from './appiumConf';
const PORT = 4723;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;

let config = e2eiOSConfig;

const driver = wd.promiseChainRemote('localhost', PORT);

beforeAll(async () => {
    await driver.init(config());
  });  

test('Test first screen', async () => {
    //Button
    await driver.waitForElementByAccessibilityId('firstBtn', 2000);
    const firstBtn = await driver.elementByAccessibilityId('firstBtn');
    await firstBtn.click();

    //Switch
    await driver.waitForElementByAccessibilityId('firstSwitch', 2000);
    const firstSwitch = await driver.elementByAccessibilityId('firstSwitch');
    await firstSwitch.click();

    //Text Input
    await driver.waitForElementByAccessibilityId('firstTxtInput', 2000);
    const firstTxtInput = await driver.elementByAccessibilityId('firstTxtInput');
    await firstTxtInput.sendKeys('Hello');

    //Text
    await driver.waitForElementByAccessibilityId('firstTxt', 2000);
    const txt = await driver.elementByAccessibilityId('firstTxt').text();
    expect(txt).toBe(
        `firstTxt`,
        );   

    //Finishing the test
    await driver.waitForElementByAccessibilityId('flow', 2000);
    const flow = await driver.elementByAccessibilityId('flow');
    await flow.click();
    await flow.click();

    await driver.waitForElementByAccessibilityId('congrats', 2000);
    const congrats = await driver.elementByAccessibilityId('congrats');
    await congrats.sendKeys('Congratulations 🎉🎉🎉');
    await driver.quit();
        
})
