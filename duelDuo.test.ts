
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://127.0.0.1:5500/public/index.html')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test("Draw button displays choices", async () => {
    const draw = await driver.findElement(By.id("draw"))
    await draw.click()
    const title = await driver.findElement(By.id("choices"))
    const displayed = await title.isDisplayed()

    await driver.sleep(3000)

    expect(displayed).toBe(true)
})

test("Add to Duo", async () => {
    const draw = await driver.findElement(By.id("draw"))
    await draw.click()
    const addDuo = await driver.findElement(By.xpath("/html/body/section[1]/div/div[1]/button"))
    await addDuo.click()
    const yourDuo = await driver.findElement(By.id("your-duo-header"))
    const displayed = await yourDuo.isDisplayed()

    await driver.sleep(4000)
    
    expect(displayed).toBe(true)

})