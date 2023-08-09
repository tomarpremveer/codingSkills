/*
Debounce : it wait for a certain time before invoking the function again.
With immediate flag, we will execute the function immediately without any delay,
and won't call the function until delay.

Useful in case where we need to make a call on initial action. i.e button click for login

*/

function debounce(fn, delay = 0, immediate = false) {
    let timerId = null;

    return function debouncedFn(...args) {
        let context = this;
        /*should the function be called now? if immediate is yes and already not in
        execution, then yes.
        */
        const callNow = immediate && !timerId;
        clearTimeout(timerId);
        
        timerId = setTimeout(() => {
            timerId = null;
            if (!immediate) {
                fn.apply(context, args);
            }
        }, delay)
        /*Immediate mode and no wait timer */
        if (callNow) {
            fn.apply(context, args);
        }
    }
}