const timeout = 5000

describe(
    '/ (Home Page)',
    () => {
        let page
        beforeAll(async () => {
            page = await global.__BROWSER__.newPage()
            await page.goto('http://localhost:3001/')
        }, timeout)

        afterAll(async () => {
            await page.close()
        })

        it('should load without error', async () => {
            const text = await page.evaluate(() => document.body.textContent)
            console.log(text)
        })
    },
    timeout,
)
