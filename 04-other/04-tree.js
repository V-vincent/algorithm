// 实现 convert 方法，把原始 list 转换成树形结构，要求尽可能降低时间复杂度
// 以下数据结构中，id 代表部门编号，name 是部门名称，parentId 是父部门编号，为 0 代表一级部门，
// 现在要求实现一个 convert 方法，把原始 list 转换成树形结构，
// parentId 为多少就挂载在该 id 的属性 children 数组下，结构如下：
// 原始 list 如下
let list = [
  { id: 1, name: '部门A', parentId: 0 },
  { id: 2, name: '部门B', parentId: 0 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 1 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
  { id: 7, name: '部门G', parentId: 2 },
  { id: 8, name: '部门H', parentId: 4 },
];
// const result = convert(list);
// 转换后的结果如下
// let result = [
//   {
//     id: 1,
//     name: '部门A',
//     parentId: 0,
//     children: [
//       {
//         id: 3,
//         name: '部门C',
//         parentId: 1,
//         children: [
//           {
//             id: 6,
//             name: '部门F',
//             parentId: 3
//           }]
//       },
//       {
//         id: 4,
//         name: '部门D',
//         parentId: 1,
//         children: [
//           {
//             id: 8,
//             name: '部门H',
//             parentId: 4
//           }
//         ]
//       }
//     ]
//   },
// ];
// 实现
function convert(list) {
  let res = [];
  let map = {};
  list.map(item => {
    map[item.id] = item;
  })
  for (let i = 0; i < list.length; i++) {
    let item = list[i];
    if (item.parentId !== 0) {
      if (!map[item.parentId]['children']) {
        map[item.parentId]['children'] = [];
      }
      map[item.parentId]['children'].push(item);
    } else {
      res.push(item);
    }
  }
  return res;
}
convert(list);

// 已知数据格式，实现一个函数 fn 找出链条中所有的父级 id
const data = [{
  id: '1',
  name: 'test1',
  children: [
    {
      id: '11',
      name: 'test11',
      children: [
        {
          id: '111',
          name: 'test111'
        },
        {
          id: '112',
          name: 'test112'
        }
      ]
    },
    {
      id: '12',
      name: 'test12',
      children: [
        {
          id: '121',
          name: 'test121'
        },
        {
          id: '122',
          name: 'test122'
        }
      ]
    }
  ]
}];

function dfsFindPath(target, val) {
  let stack = [...target];
  while (stack.length) {
    let cur = stack.pop();
    if (cur.children) {
      stack.push(...cur.children.map(item => ({ ...item, path: (cur.path || cur.id) + '-' + item.id })))
    }
    if (cur.id === val) return cur.path || cur.id;
  }
  return null;
}
// console.log(dfsFindPath(data, '1222'));
function bfsFindPath(target, val) {
  let queue = [...target];
  let index = 0;
  while (index < queue.length) {
    let cur = queue[index++];
    if (cur.children) {
      queue.push(...cur.children.map(item => ({ ...item, path: (cur.path || cur.id) + '-' + item.id })))
    }
    if (cur.id === val) return cur.path || cur.id;
  }
  return null;
}
// console.log(bfsFindPath(data, '122'));

// 编程题，写个程序把 entry 转换成如下对象
var entry = {
  a: {
    b: {
      c: {
        dd: 'abcdd'
      }
    },
    d: {
      xx: 'adxx'
    },
    e: 'ae'
  }
}
// 要求转换成如下对象
var output = {
  'a.b.c.dd': 'abcdd',
  'a.d.xx': 'adxx',
  'a.e': 'ae'
}

function isObject(data) {
  return toString.call(data) === '[object Object]'
}
function transform(obj) {
  let res = {};
  let stack = [obj];
  while (stack.length) {
    let item = stack.pop();
    let path = item.path || '';
    if (isObject(item)) {
      for (let key in item) {
        let itemP = (path ? path + '.' : '') + key;
        if (isObject(item[key])) {
          item[key]['path'] = itemP;
          stack.push(item[key])
        } else {
          if (itemP.indexOf('path') == -1) res[itemP] = item[key];
        }
      }
    }
  }
  return res;
}
// console.log(transform(entry));
function flatObj(obj, parentKey = '', res = {}) {
  for (let key in obj) {
    let keyName = `${parentKey}${key}`;
    if (isObject(obj[key])) {
      flatObj(obj[key], keyName + '.', res);
    } else {
      res[keyName] = obj[key];
    }
  }
  return res;
}
// console.log(flatObj(entry));

// 以上题目的反转
function removeFlatObj(obj) {
  let map = {};
  let temp = map;
  for (let key in obj) {
    let keys = key.split('.');
    for (let i = 0; i < keys.length; i++) {
      let item = keys[i];
      if (i === keys.length - 1) {
        temp[item] = obj[key];
      } else {
        temp[item] = temp[item] || {};
      }
      temp = temp[item];
    }
    temp = map;
  }
  return map;
}
console.log(removeFlatObj(output));