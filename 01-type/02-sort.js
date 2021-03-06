// 排序算法
// 选择、冒泡、插入、希尔、归并、快速

let arr = [3, 7, 2, 5, 4, 8, 6, 1];
// 交换数据
function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}
// 选择排序
// 1、找到数组中最小的那个元素
// 2、将它和数组的第一个元素交换位置
// 3、在剩下的元素中找到最小的元素，将它和数组的第二个元素交换位置
// 4、如此往复，直到整个数组排序
function selectSort(arr) {
  let minIndex, len = arr.length;
  for (let i = 0; i < len; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) swap(arr, i, minIndex);
  }
  return arr;
}

// 冒泡排序
// 1、比较相邻的元素，如果第一个比第二个大，就交换它们的位置
// 2、对每一对相邻的元素做同样的工作，从开始第一对到结尾的最后一对。最后的元素会是最大的数
// 3、针对所有的元素重复以上的步骤，除了最后一个
// 4、持续每次对越来越少的元素重复上面的步骤，直到没有任何一对元素需要比较
function bubbleSort(arr) {
  let temp, len = arr.length;
  while (len > 1) {
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
    len--;
  }
  return arr;
}

// 插入排序
// 1、从第一个元素开始，该元素可以认为已经被排序
// 2、取出下一个元素，在已经排序的元素序列中从后向前扫描
// 3、如果该元素（已排序）大于新元素，将该元素移到下一个位置
// 4、重复步骤3，直到找到已排序的元素小于或者等于新元素的位置
// 5、将新元素插入到该位置
// 6、重复步骤2-5
function insertionSort(arr) {
  let temp, len = arr.length;
  for (let i = 1; i < len; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j + 1] < arr[j]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      } else {
        break;
      }
    }
  }
  return arr;
}

// 希尔排序
// 将待排序列划分为若干组，在每一组内进行插入排序，让元素可以一次性的朝最终位置前进一大步，以使整个序列基本有序，然后再对整个序列进行插入排序
// 算法的最后一步就是普通的插入排序，但是这个时候，需要排序的数据几乎是已经排好了的，会很高效
function hillSort(arr) {
  let temp, len = arr.length;
  let gap = Math.floor(len / 2);
  while (gap >= 1) {
    for (let i = gap; i < len; i++) {
      temp = arr[i];
      for (var j = i - gap; j >= 0 && arr[j] > temp; j = j - gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
}

// 五、归并排序
// 归并排序采用的是分治的思想：分治法是把一个复杂的问题分成两个或更多的相同或相似的子问题，再把子问题分成更小的子问题，直到最后子问题可以简单的直接求解，原问题的解即子问题的解的合并。
// 1、将一个数组拆成A、B两个小组，两个小组继续拆，直到每个小组只有一个元素为止。
// 2、按照拆分过程逐步合并小组，由于各小组初始只有一个元素，可以看做小组内部是有序的，合并小组可以被看做是合并两个有序数组的过程。
// 3、对左右两个小数组重复第二步，直至各区间只有1个数。
// 合并数组
function mergeArray(left, right) {
  let leftLen = left && left.length;
  let rightLen = right && right.length;
  let arr = [];
  let i = 0,
    j = 0;
  while (i < leftLen && j < rightLen) {
    arr.push(left[i] > right[j] ? right[j++] : left[i++]);
  }
  while (i < leftLen) {
    arr.push(left[i++]);
  }
  while (j < rightLen) {
    arr.push(right[j++]);
  }
  return arr;
}
// 归并程序
function mergeSort(arr) {
  let len = arr && arr.length;
  if (len <= 1) return arr;
  let mid = Math.floor(len / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return mergeArray(mergeSort(left), mergeSort(right));
}
// 以上是自顶向下的归并实现，
// 然而用归并将一个大数组排序时，我们需要进行很多次归并，因此在每次归并时都创建一个新数组来存储排序结果会带来问题。
// 于是我们希望有一种能在原地归并的方法，这样就可以先将前半部分排序，再将后半部分排序，然后在数组中移动元素而不需要使用额外的空间
function mergeArray2(arr, index, mid, hi) {
  let i = index;
  let k = index;
  let j = mid + 1;
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[i];
  }
  while (k <= hi) {
    if (i > mid) {
      arr[k] = temp[j++];
    } else if (j > hi) {
      arr[k] = temp[i++];
    } else if (temp[j] <= temp[i]) {
      arr[k] = temp[j++]
    } else {
      arr[k] = temp[i++];
    }
    k += 1;
  }
}

function mergeSort2(arr) {
  let len = arr.length;
  if (arr.length <= 1) return arr;
  let width = 1;
  while (width < len) {
    let index = 0;
    while (index < (len - width)) {
      mergeArray2(arr, index, index + width - 1, Math.min(index + width * 2 - 1, len - 1));
      index += width * 2;
    }
    width *= 2;
  }
  return arr;
}

// 快速排序
// 1、从数列中挑出一个元素，称为“基准”(pivot)
// 2、重新排序数列，所有比基准值小的元素摆放在基准前面，所有比基准值大的元素摆在基准后面（相同的数可以放到任何一边），
// 在这个分割结束之后，该基准就处于数列的中间位置，这个称为分割操作
// 3、递归地把小于基准值的元素的子数列和大于基准值元素的子数列排序
function quickSort(arr) {
  let len = arr && arr.length;
  if (len <= 1) return arr;
  let pivot = arr[len - 1];
  let left = [],
    right = [];
  for (let i = 0; i < len - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}
// 原地快速排序
// 设置两个变量i，j，排序开始的时候：i= 0, j = len - 1;
// 以最后一个数组元素作为基准值，赋值给key
// 从i开始向后搜索，找到第一个大于key的值arr[i]
// 从j开始向前搜索，找到第一个小于key的值arr[j]，将arr[j]和arr[i]互换
// 重复第3/4步，直到i>j
function inplaceQuickSort(arr, a, b) {
  if (a >= b) return;
  let len = arr.length;
  let temp, pivot = arr[b],
    left = a,
    right = b - 1;
  while (left <= right) {
    // 左指针向右移动，寻找第一个比基准值大的元素
    while (left <= right && arr[left] < pivot) {
      left += 1;
    }
    // 右指针向左移动，寻找第一个比基准值小的元素
    while (left <= right && pivot < arr[right]) {
      right -= 1;
    }
    if (left >= right) break;
    // 交换左右元素
    temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }
  temp = arr[left];
  arr[left] = arr[b];
  arr[b] = temp;
  inplaceQuickSort(arr, a, left - 1);
  inplaceQuickSort(arr, left + 1, b);
  return arr;
}
// 三向切分的快速排序：
// 1、a[i]小于v，将a[lt]和a[i]交换，将lt和i加1
// 2、a[i]大于v，将a[gt]和a[i]交换，将gt减1
// 3、a[i]等于v，将i+1
// 简言之：
// 将比基准值小的放到数组左端
// 将比基准值大的放到数组右端
// 将等于基准值的元素放在一起
function quickThreeWay(arr, a, b) {
  if (a > b) return;
  let temp, pivot = arr[a];
  let lt = a,
    i = a + 1,
    gt = b;
  while (i <= gt) {
    if (arr[i] < pivot) { // a[i]小于基准值，则a[i]和a[lt]进行交换，i和lt分别+1
      temp = arr[i];
      arr[i] = arr[lt];
      arr[lt] = temp;
      i += 1;
      lt += 1;
    } else if (arr[i] > pivot) { // a[i]大于基准值，则a[i]和a[gt]进行交换，gt-1
      temp = arr[i];
      arr[i] = arr[gt];
      arr[gt] = temp;
      gt -= 1;
    } else { // a[i]等于基准值，则i+1
      i += 1;
    }
  }
  quickThreeWay(arr, a, lt - 1);
  quickThreeWay(arr, gt + 1, b);
  return arr;
}