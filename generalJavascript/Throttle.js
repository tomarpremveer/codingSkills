function throttle(fn, limit) {
    let timerId;
    let lastRan;

    return function (args) {
        let context = this;

        if (!lastRan) {
            fn.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                if (Date.now() - lastRan >= limit) {
                    fn.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
            /* decreasing the limit coz, some time may have spent since last call */
        }
    }
}