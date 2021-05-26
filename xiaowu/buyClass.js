const { By, until } = require('selenium-webdriver');
const {logs} = require('./utils/logs');
/**
 * 购买班级
 * */
module.exports.buyClass = {
    async init(driver){
        await driver.sleep(200);
        // 学生列表 标题
        await driver.wait(until.elementLocated(By.css('.page_tit')));
        await driver.findElement(By.css('input[placeholder="请输入学生姓名"]')).sendKeys('毛晨冰');
        // 使 input 失去焦点
        await driver.findElement(By.css('body')).click();
        await driver.sleep(200);
        logs('点击 购买班级')
        await driver.findElement(By.css('.el-table__fixed-right .buy-class')).click();
        await driver.sleep(2000);
        // 点击选择第一个班级
        await driver.findElement(By.css('.el-table__body-wrapper .el-table__row:nth-child(3) .el-checkbox__input')).click();
        await driver.sleep(300)
        let allClassBtn = await driver.findElements(By.css('.foot_er .el-button'));
        await allClassBtn[1].click()
        // 点击下拉列表时 将已存在的下拉列表进行清空
        await driver.executeScript("$('body > .el-select-dropdown').remove()");
        await driver.sleep(200);
        // 弹出下拉选择框
        await driver.findElement(By.css('.el-select')).click();
        await driver.sleep(200);
        // 选择 成单咨询师
        await driver.findElement(By.css('body > .el-select-dropdown .el-select-dropdown__item')).click();
        // 点击下拉列表时 将已存在的下拉列表进行清空
        await driver.executeScript("$('body > .el-select-dropdown').remove()");
        await driver.sleep(200);
        // 选择 付款日期
        await driver.findElement(By.css('input[placeholder="请选择付款日期："]+.el-input__prefix .el-input__icon')).click();
        await driver.sleep(200)
        // 选择当前的第二天付款日期
        await driver.findElement(By.css('body > .el-picker-panel .today + .available span')).click()
        await driver.executeScript("$('body > .el-select-dropdown').remove()");
        await driver.sleep(200);
        // 选择支付方式
        await driver.findElement(By.css('.cus-form .el-select')).click();
        await driver.sleep(200);
        // 选择 成交方式
        await driver.findElement(By.css('body>.el-select-dropdown .el-select-dropdown__item')).click();
        // 获取能输入的总金额
        let allPrice = await driver.findElement(By.css('.total span:nth-child(2)')).getText();
        // 准备输入金额
        await driver.findElement(By.css('.cus-form .el-input-number input')).sendKeys(allPrice.replace(/,/g,""))
        // 抹除 input 焦点事件
        await driver.findElement(By.css('body')).click();
        // 图片上传成功 json -- 与 本地 __VUE_HOT_MAP__ 交互完成
        await driver.executeScript('__VUE_HOT_MAP__.f363fb48.instances[0].payMethodList[0].uploadUrlList.push({code:0,status:"success",uid:"d956b03d-608e-49ff-a481-ae3247319a2f",url:"https://oa-oss.ambow.com/xiaowu/LeaveFiles/2021/5/17/1621228740692103.png"})')
        await driver.sleep(200);
        // 完成下订单
        await driver.findElement(By.css('.foot_er .el-button:nth-child(2)')).click()
    }
}
