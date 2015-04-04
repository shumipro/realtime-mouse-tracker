import util from './util'

var INTERVAL = window.RMT_INTERVAL || 100,
    API_PATH = window.RMT_API_PATH || 'http://localhost/track/?'

var onLoadTime = new Date().getTime()

var tracker = () => {
    var last = {
        x: null,
        y: null,
        time: new Date().getTime()
    }
    // send while stopping mouse cursor
    setInterval(() => {
        var now = new Date().getTime()
        if ((last.time + INTERVAL) <= now) {
            send(last.x, last.y)
        }
    }, INTERVAL)
    return (e) => {
        last = {
            x: e.pageX,
            y: e.pageY,
            time: new Date().getTime()
        }
        send(last.x, last.y)
    }
}

var send = (x, y) => {
    if(x === null || y === null) {
        return
    }
    // create a image as a beacon
    beacon(API_PATH + 'x=' + x + '&y=' + y + '&t=' + onLoadTime + '&url=' + location.href)
}

var beacon = (() => {
    var img = new Image()
    img.style.position = 'absolute'
    img.style.top = '-9999px'
    img.style.left = '-9999px'
    document.body.appendChild(img)
    return (src) => {
        console.log('send beacon to ' + src);
        img.src = src
    }
})()

var init = () => {
    document.addEventListener('mousemove', util.throttle(tracker(), INTERVAL))
}

if (window.addEventListener){
    window.addEventListener('load', init, false)
} else if (window.attachEvent) {
    window.attachEvent('onload', init)
}