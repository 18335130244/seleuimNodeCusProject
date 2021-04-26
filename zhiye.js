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
        let boxClass = '.problemList:not([style="display: none;"]) '
        // clickClassName 需要被点击的姓名  需要被点击的数量
        async function implementationProcess(Q, clickClassName, clickNum) {
            // 拿到当前被激活的元素
            async function deepElement(i){
                await driver
                    .findElement(By.css(boxClass + `${clickClassName}:nth-child(${i})`)).click()
                if(i <= clickNum){
                    await deepElement(++i)
                }
            }
            await deepElement(1)
            // 当前第一个元素点击
            await driver.sleep(awaitObj.buttonSecond)
            // 下一题
            await driver.findElement(By.css('.fr')).click()
            logs(Q, ' 执行完毕')
            await driver.sleep(awaitObj.buttonSecond)
        }
        // 设置当前窗口大小 适应因该测试的区域位置
        // await nowWindowInstance.setRect({width: 300, height: 1000});
        // 等待 1 秒 资源加载完毕
        await driver.sleep(awaitObj.pageSecond)
        // 进入儿童版本测试
        await driver.findElement(By.css('.all-nao-img:nth-child(2)')).click();
        await driver.sleep(awaitObj.buttonSecond)
        // 进入测验按钮是否存在
        await driver.findElement(By.css('.btn.fr')).click();
        await driver.sleep(awaitObj.buttonSecond)
        // 进入 Q1 测试题
        await implementationProcess('Q1','.van-checkbox',2)
        // 进入 Q2 测试题 题干
        await implementationProcess('Q2','.el-checkbox-button',2)
        // 进入 Q3 测试题 题干
        await implementationProcess('Q3','.el-checkbox-button',2)
        // 进入 Q4 测试题 题干
        await implementationProcess('Q4','.van-checkbox',2)
        // 进入 Q5 测试题 题干
        await implementationProcess('Q5','.el-checkbox-button',2)
        // 进入 Q6 测试题 题干
        await implementationProcess('Q6','.van-checkbox',2)
        // 进入 Q7 测试题 题干
        await implementationProcess('Q7','.van-checkbox',2)
        // 进入 Q8 测试题 题干
        await implementationProcess('Q8','.van-checkbox',2)
        // 进入 Q9 测试题 题干
        await implementationProcess('Q9','.van-checkbox',2)
        // 进入 Q10 测试题 题干
        await implementationProcess('Q10','.van-checkbox',2)
        // 进入 Q11 测试题 题干
        await implementationProcess('Q11','.van-checkbox',2)
        // 进入 Q12 测试题 题干
        await implementationProcess('Q12','.el-checkbox-button',2)
        // 进入 Q13 测试题 题干
        await implementationProcess('Q13','.van-checkbox',2)
        // 进入 Q14 测试题 题干
        await implementationProcess('Q14','.van-checkbox',2)
        // 进入 Q15 测试题 题干
        await implementationProcess('Q15','.van-checkbox',2)
        // 进入 Q16 测试题 题干
        await implementationProcess('Q16','.van-checkbox',2)
        // 进入 Q17 测试题 题干
        await implementationProcess('Q17','.van-checkbox',3)
        // 进入 Q18 测试题 题干
        await implementationProcess('Q18','.van-checkbox',3)
        // 进入 Q19 测试题 题干
        await implementationProcess('Q19','.van-checkbox',1)
        await driver.sleep(2000)
        logs('生成报告')
        let nowActiveCurrentUrl = await driver.getCurrentUrl();
        logs('报告链接',nowActiveCurrentUrl)
    } finally {
        await driver.quit();
    }
})();
