export default class Handler {

    constructor() {
        if (this.constructor === Handler) {
            throw new TypeError("Abstract class 'Handler' cannot be instantiated directly.")
        }
        this.nextHandler = null;
    }

    setNextHandler(nextHandler) {
        this.nextHandler = nextHandler;
    }

    handle(request) { }

}