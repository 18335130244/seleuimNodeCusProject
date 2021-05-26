/**
 * 班级管理
 * */
const { By, until } = require('selenium-webdriver');
const {logs} = require('./utils/logs');
module.exports.classGli = {
    async init(driver){
        await driver.sleep(200);
        await driver.findElement(By.css('span[serarchkey="班级管理"]')).click();
        await driver.sleep(1000);
        // 订单搜索功能
        await driver.findElement(By.css('input[placeholder="请输入班级名称"]')).sendKeys('高一3人班（明德）秋-111');
        await driver.sleep(500)
        // 抹除 input 焦点事件
        await driver.findElement(By.css('body')).click();
        // 新增班级
        await driver.findElement(By.css('.view .el-button')).click();
        // 建立对等关系 组件推送
    }
}