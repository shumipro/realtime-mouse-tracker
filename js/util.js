module.exports = {
    // registered func is called at most one in a specified interval
    throttle: (func, interval) => {
        var lastTime = new Date().getTime() - interval
        return function() {
            var now = new Date().getTime()
            if ((lastTime + interval) <= now) {
                lastTime = now
                return func.apply(this, arguments)
            }
        }
    }
}