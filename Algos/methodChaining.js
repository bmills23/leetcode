class Object {
    constructor () {
        this.data = [];
    }

    call (value) {
        console.log(value);
        return this;
    }
}

let obj = new Object();
obj.call(5).call(6).call(7).call(8);