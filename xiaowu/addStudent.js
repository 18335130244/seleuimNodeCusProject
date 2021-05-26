const { By, until } = require('selenium-webdriver');
const {logs} = require('./utils/logs');
/**
 * 购买班级
 * */
module.exports.buyClass = {
    async init(driver){
        await driver.sleep(200);
        let student = {
            addressCity: "",
            addressCounty: "",
            addressProvince: "",
            channel: "8a76c697-ecb9-474a-8df8-73403bd7d3f7",
            clientName: "1111",
            clientSex: "unknown",
            contactPhone: "18335130244",
            contactStatus: "FOLLOW-0",
            contactType: "来电",
            customerType: "0",
            fromType: "老客户",
            intentionDegree: "INTENTION-3",
            orgId: "165",
            parentOrgChildOrg: ["3", "165"],
            parentOrgId: "3",
            sellerMasterId: "15446412fe3511eaa4dd506b4b4b45ba"
        };
        // 调用本地接口 新增学生
        await driver.executeScript('');
    }
}
