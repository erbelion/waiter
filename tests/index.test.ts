import Waiter from "../src/index"

it("should work :D", async () => {
    const waiter = new Waiter()

    expect(waiter.ready).toBe(false)

    setTimeout(() => {
        waiter.ready = true
    }, 200)
    await waiter.wait()
    expect(waiter.ready).toBe(true)
})

it("should also work :D", async () => {
    const waiter = new Waiter(false)

    for (let i = 0; i <= 3; i++) {
        expect(waiter.ready).toBe(false)

        setTimeout(() => {
            waiter.ready = true
        }, 200)
        await waiter.wait()
        expect(waiter.ready).toBe(true)

        waiter.ready = false
    }
})

it("should also work :D", async () => {
    const waiter = new Waiter(true)

    expect(waiter.ready).toBe(true)

    waiter.ready = false

    expect(waiter.ready).toBe(false)
})
