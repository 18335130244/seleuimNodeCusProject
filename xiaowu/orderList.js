/**
 * 订单管理
 * */
const { By, until } = require('selenium-webdriver');
const {logs} = require('./utils/logs');
module.exports.orderListGLi = {
    async init(driver){
        await driver.sleep(200);
        await driver.findElement(By.css('span[serarchkey="订单列表"]')).click();
        await driver.sleep(1000);
        // 订单搜索功能
        await driver.findElement(By.css('input[placeholder="请输入学生姓名"]')).sendKeys('zjx-长沙');
        await driver.sleep(500)
        // 抹除 input 焦点事件
        await driver.findElement(By.css('body')).click();
        await driver.sleep(2000)
        // 进入订单详情
        await driver.findElement(By.css('.el-tabs__content .el-table__fixed-right .el-button')).click();
        await driver.sleep(500);
        // 查看 支付记录
        await driver.findElement(By.css('.page_right .el-button:nth-child(1)')).click();
        await driver.sleep(1500);
        // 抹除 input 焦点事件
        await driver.findElement(By.css('body')).click();
        // 查看 退款记录
        await driver.findElement(By.css('.page_right .el-button:nth-child(2)')).click();
        await driver.sleep(1500);
        // 抹除 input 焦点事件
        await driver.findElement(By.css('body')).click();
        // 关闭当前标签
        let tabCurr = await driver.executeScript('return sessionStorage.currentUrl');
        logs(tabCurr);
        await driver.findElement(By.css(`#tab-${tabCurr} .item_close`)).click();
        await driver.sleep(200);
        // 执行 退款操作
        // await driver.findElement(By.css(''))
    }
}