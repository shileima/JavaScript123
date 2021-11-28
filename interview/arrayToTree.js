// 数组转树结构
const menuOriginal = [
    { id: 7, name: "深圳市", parentId: 4 },
    { id: 1, name: "北京市" },
    { id: 2, name: "朝阳区", parentId: 1 },
    { id: 3, name: "海淀区", parentId: 1 },
    { id: 4, name: "广东省" },
    { id: 5, name: "广州市", parentId: 4 },
    { id: 8, name: "中关村", parentId: 3 },
];

function sort(arr) {
    let newArr = [];
    let map = {};
    arr.forEach(item => {
        map[item.id] = item
    });
    arr.forEach(item => {
        let parent = map[item.parentId]
        if(parent){
            (parent.children || (parent.children = [])).push(item)
        } else {
            newArr.push(item)
        }
    })
    return newArr
}

console.log(JSON.stringify(sort(menuOriginal)));


const menu = [{ id: 7, name: "深圳市", parentId: 4 },
{ id: 1, name: "北京市" },
{ id: 2, name: "朝阳区", parentId: 1 },
{ id: 3, name: "海淀区", parentId: 1 },
{ id: 4, name: "广东省" },
{ id: 5, name: "广州市", parentId: 4 },
{ id: 8, name: "中关村", parentId: 3 },];
const result = [];
function calc(){
    for(let i=0;i<menu.length;i++){
        if(!menu[i].parentId){
            result.push({...menu[i],children:[]});
        }
    }
    for(let i=0;i<result.length;i++){
        deep(result[i]);
    }
    function deep(node){
        for(let i=0;i<menu.length;i++){
        if(menu[i].parentId === node.id){
            node.children.push({...menu[i],children:[]});
            }
        }
        if(node.children.length){
            for(let j=0;j<node.children.length;j++){
                deep(node.children[j]);
            }   
        }
    }
}
calc();
console.log(result)


// 循环挺多
(function () {
    const menuOriginal = [
    { id: 7, name: "深圳市", parentId: 4 },
    { id: 1, name: "北京市" },
    { id: 2, name: "朝阳区", parentId: 1 },
    { id: 3, name: "海淀区", parentId: 1 },
    { id: 4, name: "广东省" },
    { id: 5, name: "广州市", parentId: 4 },
    { id: 8, name: "中关村", parentId: 3 },
    ];
    function arrToTree(data = []){
        let res = [];
        data.forEach((item, index) => {
            if(!item.parentId){
                data.splice(index, 1)
                item = {...item, children: []}
                res.push(item);

            }
        }) 
        res.forEach(item => {
            data.forEach(each => {
                if(item.id === each.parentId){
                    Array.isArray(item.children) && item.children.push(each) 
                }
            })
        })
        console.log(JSON.stringify(res))
        return JSON.stringify(res)
    }
    arrToTree(menuOriginal)
})();



// 数组转树结构
const menuOriginal = [
    { id: 7, name: "深圳市", parentId: 4 },
    { id: 1, name: "北京市" },
    { id: 2, name: "朝阳区", parentId: 1 },
    { id: 3, name: "海淀区", parentId: 1 },
    { id: 4, name: "广东省" },
    { id: 5, name: "广州市", parentId: 4 },
    { id: 8, name: "中关村", parentId: 3 },
];

const toTree = (menu) => {
    const map = {}
    const tree = []

    for (let i = 0; i < menu.length; i++) {
        const menuItem = menu[i]
        const {parentId} = menuItem
        if (parentId) {
            map[parentId] ? map[parentId].push(menuItem) : (map[parentId] = [menuItem])
        } else {
            tree.push({
                ...menuItem,
                children: [],
            })
        }
    }
    const push = (tree, id, children) => {
        for (let i = 0; i < tree.length; i++) {
            const node = tree[i]
            if (node.children && node.children.length) {
             
                push(node, id, children)
            }
            console.log('node.id', node.id, id)
            if (node.id == id) {
                node.children = children
                return
            }
        }
    }

    console.log('map', map, tree)
    Object.entries(map).forEach(([key, value]) => {
        push(tree, key, value)
    })
    return tree
}

console.log(JSON.stringify(toTree(menuOriginal)));