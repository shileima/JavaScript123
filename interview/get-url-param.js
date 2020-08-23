
function getUrlParam(sUrl, sKey) {
    let obj = {}
    const search = sUrl.split('?')[1].split('#')[0]
    const arr = search.split('&')
    arr.forEach(item => {
        let cur = item.split('=')
        obj[cur[0]] = (obj[cur[0]] && obj[cur[0]].length) ? [...obj[cur[0]], cur[1]] : [cur[1]]
    })
    // console.log(obj, 'obj');
    if (!sKey) return obj;
    return (obj[sKey] && obj[sKey].length) ? obj[sKey].length > 1 ? obj[sKey] : obj[sKey][0] : ''

}

console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe key', 'key'));