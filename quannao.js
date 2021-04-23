const path = require('path');
const {Builder, By, Key, until} = require('selenium-webdriver');
const {Window} = require('selenium-webdriver/lib/webdriver');
const {ServiceBuilder} = require('selenium-webdriver/chrome');
let chromeExe = new ServiceBuilder(path.resolve(__dirname,'./chromedriver_win32/chromedriver.exe'));
(async function example() {
    let driver = await new Builder().forBrowser('chrome').setChromeService(chromeExe).build();
    try {
        let awaitObj = {
            pageSecond:1000,
            buttonSecond:300,
            elementSecond:100,
        }
        // 进入全脑首页
        await driver.get('https://dev-tendency.huanyujun.com/');
        // 实例化 当前 window 对象
        let nowWindowInstance = new Window(driver);
        // 实例化 需要调用 canvas 事件
        // let canvasEvent = new ActionChains(driver);
        async function implementationProcess(Q){
            let parent = `var nowParen = document.querySelectorAll('.problemContent:not([style="display: none;"])')[0];`
            // 当前第一个元素点击
            let NodeOne = `nowParen.querySelector('.problemInner').click()`
            await driver.executeScript(parent + NodeOne)
            await driver.sleep(awaitObj.buttonSecond)
            await driver.executeScript('document.querySelectorAll(".operation")[1].click()')
            console.log(Q ,' 执行完毕')
            await driver.sleep(awaitObj.buttonSecond)
        }
        async function mouseMovementEvent(Q){
            let canvas = driver.actions();
            canvas.keyDown()
            let parent = `var nowParen = document.querySelectorAll('.problemContent:not([style="display: none;"])')[0];`
            // 当前第一个元素点击
            let NodeOne = `nowParen.querySelector('.problemInner').click()`
            await driver.executeScript(parent + NodeOne)
            await driver.sleep(awaitObj.buttonSecond)
            await driver.executeScript('document.querySelectorAll(".operation")[1].click()')
            console.log(Q ,' 执行完毕')
            await driver.sleep(awaitObj.buttonSecond)
        }
        async function implementationProcessQ3(Q){
            let parent = `var nowParen = document.querySelectorAll('.problemContent:not([style="display: none;"])')[0];`
            // 当前第一个元素点击
            let NodeOne = `nowParen.querySelector('.problemInner').click();`
            let NodeTwo = `nowParen.querySelectorAll('.problemInner')[1].click();`
            await driver.executeScript(parent + NodeOne + NodeTwo)
            await driver.sleep(awaitObj.buttonSecond)
            await driver.executeScript('document.querySelectorAll(".operation")[1].click()')
            console.log(Q ,' 执行完毕')
        }
        async function implementationProcessQ7(Q){
            let parent = `var nowParen = document.querySelectorAll('.problemContent:not([style="display: none;"])')[0];`
            // 当前第一个元素点击
            let NodeOne = `nowParen.querySelector('.problemInner').click();`
            let NodeTwo = `nowParen.querySelectorAll('.problemInner')[1].click();`
            await driver.executeScript(parent + NodeOne + NodeTwo)
            await driver.sleep(awaitObj.buttonSecond)
            await driver.executeScript('document.querySelectorAll(".operation")[1].click()')
            console.log(Q ,' 执行完毕')
        }
        // 设置当前窗口大小 适应因该测试的区域位置
        await nowWindowInstance.setRect({width: 300, height: 1000});
        // 等待 1 秒 资源加载完毕
        await driver.sleep(awaitObj.pageSecond)
        // 进入儿童版本测试
        await driver.findElement(By.css('.all-nao-img')).click();
        await driver.sleep(awaitObj.buttonSecond)
        // 进入测验按钮是否存在
        await driver.findElement(By.css('.main-button')).click();
        await driver.sleep(awaitObj.buttonSecond)
        // 进入 Q1 测试题
        await implementationProcess('Q1')
        // 进入 Q2 测试题 题干
        await implementationProcess('Q2')
        // 进入 Q3 测试题 题干
        await implementationProcessQ3('Q3')
        // 进入 Q4 测试题 题干
        await implementationProcess('Q4')
        // 进入 Q5 测试题 题干
        await implementationProcess('Q5')
        // 进入 Q6 测试题 题干
        await implementationProcess('Q6')
        // 进入 Q7 测试题 题干
        await implementationProcess('Q7')
        // 等待基础页面布局加载完毕
        await driver.wait(until.titleContains('开始'));
    }
    finally{
        // await driver.quit();
    }
})();
