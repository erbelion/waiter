export default class Waiter extends EventTarget {
    private _ready: boolean

    constructor(initialReady: boolean = false) {
        super()
        this._ready = initialReady
        if (initialReady === true) {
            this.dispatchEvent(new CustomEvent("ready"))
        }
    }

    get ready(): boolean {
        return this._ready
    }

    set ready(value: boolean) {
        this._ready = value
        if (value === true) {
            this.dispatchEvent(new CustomEvent("ready"))
        }
    }

    wait(): Promise<void> {
        return new Promise((resolve) => {
            if (this.ready) {
                resolve()
            } else {
                this.addEventListener("ready", () => resolve(), { once: true })
            }
        })
    }
}
