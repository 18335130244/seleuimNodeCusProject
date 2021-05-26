const { By, until } = require('selenium-webdriver');
const {logs} = require('./utils/logs');
/**
 * 学生管理列表
 * */
module.exports.xueShenGLi = {
    async init(driver){
        await driver.sleep(200);
        // 等待 校务管理字的出现
        // await driver.wait(until.elementsLocated(await driver.findElement(By.css('.titleLeftMenu'))));
        await driver.wait(until.elementsLocated((By.css('.titleLeftMenu'))));
        await driver.sleep(200)
        await driver.sleep(200);
        await driver.findElement(By.css('span[serarchkey="学生管理"]')).click();
    }
}
