class List {
  constructor() {
    this.list = [];
    this.size = this.list.length;
  }
  getUpdateSize = () => (this.size = this.list.length);
  sortList = () => this.list.sort((a, b) => a - b);
  add(e) {
    this.list.push(e);
    this.getUpdateSize();
    this.sortList();
  }
  remove(idx) {
    if (this.list[idx] !== undefined) {
      this.list.splice(idx, 1);
      this.getUpdateSize();
      this.sortList();
    }
  }
  get(idx) {
    if (this.list[idx] !== undefined) {
      this.getUpdateSize();
      this.sortList();
      return this.list[idx];
    }
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
