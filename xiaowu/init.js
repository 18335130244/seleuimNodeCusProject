const path = require('path');
const {Builder, By, until , withTagName} = require('selenium-webdriver');
const {Window} = require('selenium-webdriver/lib/webdriver');
const {ServiceBuilder, Options} = require('selenium-webdriver/chrome');
let chromeExe = new ServiceBuilder(path.resolve(__dirname, '../chromedriver_win32/chromedriver.exe'));
const { xueShenGLi } = require('./xueShenGLi');
const { teacherGLi } = require('./teacherGLi');
const { orderListGLi } = require('./orderList');
const { classGli } = require('./classGli');
/**
 * 基础驱动器
 * */
(async function example() {
    let driver = await new Builder()
        .setChromeService(chromeExe)
        .forBrowser('chrome')
        .build();
    try {
        // 进入全脑首页
        await driver.get("http://10.10.102.121:8082/");

        // 插入自定义 脚本代码
        await driver.findElement(By.css('input[placeholder="邮箱登录"]')).sendKeys('wei.xia@ambow.com')
        await driver.findElement(By.css('input[placeholder="密码"]')).sendKeys('Ambow99999999')
        await driver.findElement(By.css('.submit_btn')).click()
        let winObj = new Window(driver);
        console.log(driver.executeScript('return window.__VUE_HOT_MAP__'));
        // 全屏操作
        await winObj.maximize();
        console.time('校务');
        // 等待 校务管理 菜单出现 在执行后续操作
        let xiaoWu = await driver.wait(until.elementLocated(By.css('span[serarchkey="校务管理"]')));
        console.timeEnd('校务');
        // 操作 校务管理下的目录
        await xiaoWu.click();
        await driver.sleep(200)
        // 执行销售管理
        // await driver.findElement(By.css('span[serarchkey="销售管理"]')).click();
        // await orderListGLi.init(driver);
        // 执行班级管理
        await driver.findElement(By.css('span[serarchkey="课程管理"]')).click();
        await classGli.init(driver);
        // await driver.sleep(200)
        // await driver.findElement(By.css('span[serarchkey="人员管理"]')).click();
        // // 执行 老师管理 基础驱动
        // await teacherGLi.init(driver)
        // // 执行 学生管理 班级下单全部处理
        // await xueShenGLi.init(driver)
        // 执行 停止关闭浏览器操作
        await driver.wait(until.elementLocated(By.id('foo')));
    } finally {
        // await driver.quit();
    }
})();