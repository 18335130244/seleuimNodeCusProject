const { By, until } = require('selenium-webdriver');
const {logs} = require('./utils/logs');

module.exports.teacherGLi = {
    async init(driver){
        await driver.sleep(200);
        // 等待 校务管理字的出现
        // await driver.wait(until.elementsLocated(await driver.findElement(By.css('.titleLeftMenu'))));
        await driver.wait(until.elementsLocated((By.css('.titleLeftMenu'))));
        await driver.sleep(200);
        await driver.findElement(By.css('span[serarchkey="教师管理"]')).click();
        await driver.sleep(500);
        // 搜索 老师功能
        await driver.findElement(By.css('input[placeholder="根据教师姓名查询"]')).sendKeys('六一');
        // 抹除 input 焦点事件
        await driver.findElement(By.css('body')).click();
        await driver.sleep(2000)
    }
}