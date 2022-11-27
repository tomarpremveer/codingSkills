function createHash(path, config) {
    const configHash = Object.keys(config)
        .sort((a, b) => a.localeCompare(b))
        .map((k) => k + ":" + config[k].toString())
        .join("&");
    return path + configHash;
}
/*
This function will merge the same get api calls(having same path and config) that are triggered
with the durationToMerge variable.
*/
function createGetAPIWithMerging(getAPI, maxCacheSize = 5, durationToMerge = 1000) {
    let cache = new Map();
    let i = 0;
    return function mergedFn(path, config) {
        const key = createHash(path, config);
        const hasEntry = cache.has(key);

        if (hasEntry) {
            const entry = cache.get(key);
            if (Date.now() - entry.triggered <= durationToMerge) {
                return entry.promise;
            }
            cache.delete(key);
        }

        const promiseCall = getAPI(path, config);
        cache.set(key, { triggered: Date.now(), promise: promiseCall })
        if (cache.size > maxCacheSize) {
            for (let [hash] of cache) {
                cache.delete(hash);
                break;
            }
        }
        return promiseCall;
    }
}
/* createGetAPIWithMerging.clearCache = () => {
  cache.clear();
} */

/*
console.log(createHash('/list', {type: 'bfe', filter:'dev', list: [1,2,3]}))
console.log(createHash('/list', {filter:'dev', type: 'bfe', list: [1,2,3]}))
console.log(createHash('/list', {list: [1,2,3], filter:'dev', type: 'bfe'}))
*/
const fn = (path, config) => {
    return 1;
}
const a = createGetAPIWithMerging(fn)
a('/list', { type: 'bfe', filter: 'dev', list: [1, 2, 3] })
a('/list', { filter: 'dev', type: 'bfe', list: [1, 2, 3] });
a('/list', { list: [1, 2, 3], filter: 'dev', type: 'bfe' });
