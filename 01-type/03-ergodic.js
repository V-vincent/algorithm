// 深度优先遍历（DFS）
// 以纵向的维度对数据进行遍历，从某个顶点出发，先访问它的子节点，如果没有子节点则访问它的兄弟节点，
// 再以这个子节点为顶点进行访问，重复此步骤，直到所有的结点被访问完为止。
// 深度优先遍历递归实现
// function dfs(node, nodes) {
//   nodes = nodes || [];
//   if (node) {
//     nodes.push(node);
//     let child = node.children;
//     for (let i = 0; i < child.length; i++) {
//       dfs(child[i], nodes);
//     }
//   }
//   return nodes;
// }
// 深度优先遍历非递归实现
function dfs(node) {
  let nodes = [];
  if (node) {
    // 利用栈后进先出的特性，取最后一个出来加进nodes里面
    let stacks = [];
    stacks.push(node);
    while (stacks.length) {
      let item = stacks.pop(); // 取出最后一个
      nodes.push(item); // 加进nodes里面
      let child = item.children;
      for (let i = child.length - 1; i >= 0; i--) {
        // 把后面的子节点先加进栈里面，再在最后面取出来
        stacks.push(child[i]);
      }
    }
  }
  return nodes;
}

// 广度优先遍历（BFS）
// 以横向的维度对数据进行遍历，从某个顶点出发，先访问它的所有兄弟节点，访问完再访问第一个节点的子节点，
// 再以这个子节点为顶点进行访问，重复此步骤，直到所有的结点被访问完为止。
// 广度优先遍历实现（非递归）
// function bfs(node) {
//   let nodes = [];
//   if (node) {
//     // 利用队列先进先出的特性，取第一个出来加进nodes里面
//     let queue = [];
//     queue.push(node);
//     while (queue.length) {
//       let item = queue.shift();
//       nodes.push(item);
//       let child = item.children;
//       for (let i = 0; i < child.length; i++) {
//         // 按顺序从左到右加进队列
//         queue.push(child[i]);
//       }
//     }
//   }
//   return nodes;
// }
function bfs(node) {
  let nodes = [];
  if (node) {
    let queue = [];
    queue.push(node);
    let index = 0;
    while (index < queue.length) {
      let item = queue[index++];
      nodes.push(item);
      let child = item.children;
      for (let i = 0; i < child.length; i++) {
        queue.push(child[i]);
      }
    }
  }
  return nodes;
}