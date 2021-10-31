function solve() {
  let list = {
    sortList: [],
    // list.sort((a,b) => a - b);
    size: 0,
  };
  list.sort = () => list.sortList.sort((a, b) => a - b);
  list.add = (e) => {
    list.sortList.push(e);
    list.sort();
    list.size++;
  };
  list.remove = (idx) => {
    if (list.sortList[idx] == undefined) {
      throw new Error("Index doesn`t exist!");
    } else {
      list.sortList.splice(idx, 1);
      list.size--;
    }
  };
  list.get = (idx) => {
    if (list.sortList[idx] == undefined) {
      throw new Error("Index doesn`t exist!");
    } else {
      list.sort();
      return list.sortList[idx];
    }
  };
  return list;
}
solve();
let list = solve();
list.add(5);
list.add(6);
list.add(7);
list.add(10);

console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
list.remove(29);
list.remove(-1);
