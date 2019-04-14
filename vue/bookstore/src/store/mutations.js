export const initList = (state, option) => {
    state.list = option;
}

export const getCollect = (state, option) => {
    state.collectList = option;
}

export const addCollect = (state, option) => {
    let bol = state.collectList.some(item => {
        return item.bookId === option.bookId;
    })
    if (!bol) {
        state.collectList.push(option)
    }
}

export const delList = (state, option) => {
    // console.log(state, option)
    var ary = state.list.filter(item => {
        return item.bookId !== option.bookId;
    })
    state.list = ary;
}

export const addList = (state, option) => {
    let bol = state.list.some(item => {
        return item.bookId === option.bookId;
    })
    if (!bol) {
        state.list.push(option)
    }
}

export const delCollect = (state, option) => {
    var ary = state.collectList.filter(item => {
        return item.bookId !== option.bookId;
    })
    state.collectList = ary;
}