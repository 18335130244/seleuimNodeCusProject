const path = require('path');
const {Builder, By, until} = require('selenium-webdriver');
const {Window} = require('selenium-webdriver/lib/webdriver');
const {ServiceBuilder, Options} = require('selenium-webdriver/chrome');
let chromeExe = new ServiceBuilder(path.resolve(__dirname, './chromedriver_win32/chromedriver.exe'));

function logs(text, tipsText = '') {
    console.log(text, tipsText)
}

(async function example() {
    let driver = await new Builder()
        .setChromeService(chromeExe)
        .setChromeOptions(new Options().setMobileEmulation({deviceName: 'iPhone 6/7/8'}))
        .forBrowser('chrome')
        .build();
    try {
        let awaitObj = {
            pageSecond: 1000,
            buttonSecond: 300,
            elementSecond: 100,
        }
        // 进入全脑首页
        await driver.get('https://dev-tendency.huanyujun.com/');
        // 所有可以被选中的内容部分
        let boxClass = '.problemContent:not([style="display: none;"]) '
        // 实例化 当前 window 对象
        let nowWindowInstance = new Window(driver);
        // 插入 执行 js 手指事件脚本代码
        /* eventType is 'touchstart', 'touchmove', 'touchend'... */
        let sendTouchEvent = `function sendTouchEvent(x, y, element, eventType) {
            const touchObj = new Touch({
                identifier: Date.now(),
                target: element,
                clientX: x,
                clientY: y,
                radiusX: 2.5,
                radiusY: 2.5,
                rotationAngle: 10,
                force: 0.5,
            });

            const touchEvent = new TouchEvent(eventType, {
                cancelable: true,
                bubbles: true,
                touches: [touchObj],
                targetTouches: [],
                changedTouches: [touchObj],
                shiftKey: true,
            });

            element.dispatchEvent(touchEvent);
        }`;
        // 实例化 需要调用 canvas 事件 常规单选题
        async function implementationProcess(Q) {
            // 拿到当前被激活的元素
            await driver
                .findElement(By.css(boxClass + '.problemInner')).click()
            // 当前第一个元素点击
            await driver.sleep(awaitObj.buttonSecond)
            await driver.findElement(By.css('.operation:nth-child(2)')).click()
            logs(Q, ' 执行完毕')
            await driver.sleep(awaitObj.buttonSecond)
        }

        async function implementationProcessQ3(Q) {
            // 拿到当前被激活的元素
            await driver
                .findElement(By.css(boxClass + '.problemInner')).click()
            await driver
                .findElement(By.css(boxClass + '.problemInner:nth-child(2)')).click()
            // 当前第一个元素点击
            await driver.sleep(awaitObj.buttonSecond)
            await driver.findElement(By.css('.operation:nth-child(2)')).click()
            logs(Q, ' 执行完毕')
            await driver.sleep(awaitObj.buttonSecond)
        }

        async function mouseMovementEventQ7(Q) {
            // 拖动鼠标方法准备执行
            let actions = driver.actions({async: true});
            let Q7Canvas = driver.findElement(By.css('#innerBoxRender canvas'))
            await actions.dragAndDrop(Q7Canvas, {x: parseInt('10'), y: parseInt('10')}).perform();
            await actions.dragAndDrop(Q7Canvas, {x: parseInt('1'), y: parseInt('2')}).perform();
            logs(Q, ' 执行完毕')
            await driver.findElement(By.css('.operation:nth-child(2)')).click()
            await driver.sleep(awaitObj.buttonSecond)
        }

        async function mouseMovementEventQ8(Q) {
            await driver.findElement(By.css(boxClass + '.yun .nei-yun')).click()
            // 等待元素被隐藏
            await driver.sleep(awaitObj.pageSecond * 6)
            // 等待执行 填入数字
            await driver.sleep(awaitObj.buttonSecond);
            // 执行自我循环点击 数字内容
            for(let i = 0 ; i < 9 ; i ++){
                let node1 = `sendTouchEvent(150, 150, document.querySelectorAll('${boxClass}.van-key')[${i}], 'touchstart');`;
                let node2 = `sendTouchEvent(220, 200, document.querySelectorAll('${boxClass}.van-key')[${i}], 'touchend');`;
                driver.executeScript(sendTouchEvent+node1+node2);
            }
            await driver.sleep(1000)
            logs(Q, ' 执行完毕')
            // 进入下一题
            await driver.findElement(By.css('.operation:nth-child(2)')).click()
            await driver.sleep(awaitObj.buttonSecond)
        }

        async function mouseMovementEventQ9(Q) {
            await driver
                .findElement(By.css(boxClass + '.yun .nei-yun')).click()
            // 等待元素被隐藏
            await driver.sleep(awaitObj.pageSecond * 6)
            // 等待执行 填入数字
            await driver.sleep(awaitObj.buttonSecond);
            await driver.findElement(By.css(boxClass + '.choseInner:nth-child(3)')).click()
            await driver.sleep(awaitObj.buttonSecond);
            logs(Q, ' 执行完毕')
            await driver.findElement(By.css('.operation:nth-child(2)')).click()
            await driver.sleep(awaitObj.buttonSecond)
        }

        async function mouseMovementEventQ10(Q) {
            await driver
                .findElement(By.css('.clickOnImg')).click()
            // 等待元素被隐藏
            await driver.sleep(awaitObj.pageSecond * 6)
            // 等待执行 填入数字
            await driver.sleep(awaitObj.buttonSecond);
            let sourceEle = driver.findElement(By.css(boxClass + ".point .point_span"));
            let targetEle = driver.findElement(By.css(boxClass + ".point .point_span:nth-child(2)"));
            const actions = driver.actions({async: false});
            await actions.move({origin:sourceEle}).press().perform();
            await actions.move({origin:targetEle}).release().perform();
            await driver.sleep(awaitObj.buttonSecond);
            logs(Q, ' 执行完毕')
            await driver.findElement(By.css('.operation:nth-child(2)')).click()
            await driver.sleep(awaitObj.buttonSecond)
        }
        async function mouseMovementEventQ11(Q) {
            async function loopClick(i){
                await driver.findElement(By.css(boxClass+`.browImg:nth-child(${i})`)).click();
                await driver.findElement(By.css(boxClass+`.innerFont:nth-child(${i})`)).click();
                logs(`执行第`,i);
                await driver.sleep(1000)
                if(i < 6){
                   await loopClick(++i);
                }
            }
            await loopClick(1)
            await driver.sleep(awaitObj.buttonSecond);
            logs(Q, ' 执行完毕')
            await driver.findElement(By.css('.operation:nth-child(2)')).click()
            await driver.sleep(awaitObj.buttonSecond)
        }
        async function mouseMovementEventQ12(Q) {
            let sourceEle = driver.findElement(By.css(boxClass + ".canvas-plate canvas"));
            const actions = driver.actions({async: false});
            await actions.dragAndDrop(sourceEle, {x:100, y:100}).perform();
            await driver.sleep(awaitObj.buttonSecond);
            logs(Q, ' 执行完毕')
            await driver.findElement(By.css('.operation:nth-child(3)')).click()
            await driver.sleep(awaitObj.buttonSecond)
        }

        async function implementationProcessQ7(Q) {
            let parent = `var nowParen = document.querySelectorAll('.problemContent:not([style="display: none;"])')[0];`
            // 当前第一个元素点击
            let NodeOne = `nowParen.querySelector('.problemInner').click();`
            let NodeTwo = `nowParen.querySelectorAll('.problemInner')[1].click();`
            await driver.executeScript(parent + NodeOne + NodeTwo)
            await driver.sleep(awaitObj.buttonSecond)
            await driver.executeScript('document.querySelectorAll(".choseInner")[3].click()')
            logs(Q, ' 执行完毕')
        }

        // 设置当前窗口大小 适应因该测试的区域位置
        // await nowWindowInstance.setRect({width: 300, height: 1000});
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
        await mouseMovementEventQ7('Q7')
        // 进入 Q8 测试题 题干
        await mouseMovementEventQ8('Q8')
        // 进入 Q9 测试题 题干
        await mouseMovementEventQ9('Q9')
        // 进入 Q10 测试题 题干
        await mouseMovementEventQ10('Q10')
        // 进入 Q11 测试题 题干
        await mouseMovementEventQ11('Q11')
        // 进入 Q12 测试题 题干
        await mouseMovementEventQ12('Q12')
        logs('生成报告')
        let nowActiveCurrentUrl = await driver.getCurrentUrl();
        logs('报告链接',nowActiveCurrentUrl)
    } finally {
        await driver.quit();
    }
})();
