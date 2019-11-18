
// 参数依次为目标数组、选取元素数目、目标和
const search = (arr, count, sum) => {
    // 计算某选择情况下有几个 `1`，也就是选择元素的个数
    const n = num => {
        let count = 0
        while (num) {
            num = (num - 1) & num
            count++
        }
        console.log('count', count)
        return count
    }

    let len = arr.length, bit = 1 << len, res = []
    console.log('bit', bit)
    // 遍历所有的选择情况
    for (let i = 1; i < bit; i++) {
        // 满足选择的元素个数 === count
        if (n(i) === count) {
            let s = 0, temp = []

            // 每一种满足个数为 N 的选择情况下，继续判断是否满足 和为 M
            for (let j = 0; j < len; j++) {
                // 建立映射，找出选择位上的元素
                if ((i & 1 << j) !== 0) {
                    s += arr[j]
                    temp.push(arr[j])
                }
            }

            // 如果这种选择情况满足和为 M
            if (s === sum) {
                res.push(temp)
            }
        }
    }

    return res
}

console.log(search([1, 2, 3, 4, 5], 3, 7))
