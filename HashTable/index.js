const hastStringToInt = (string, tableSize) => {
  let hashkey = 20;
  for (let i = 0; i < string.length; i++) {
    hashkey = (hashkey * 31 + string.charCodeAt(i)) % tableSize;
  }

  return hashkey;
};

class HashTable {
  table = new Array(50);
  setItem = (key, val) => {
    const idx = hastStringToInt(key, this.table.length);

    if (!this.table[idx]) {
      this.table[idx] = [{ key, val }];
    } else {
      this.table[idx].push({ key, val });
    }
  };
  getItem = (key) => {
    const idx = hastStringToInt(key, this.table.length);
    if (!this.table[idx]) return null;
    console.log(this.table)
    return this.table[idx].find((x) => x.key === key)
  };
}

// Test
const myTable = new HashTable();
myTable.setItem("firstName", "qbentil");
myTable.setItem("lastName", "shadow");
myTable.setItem("age", 10);
myTable.setItem("address", "Pokuase");
myTable.setItem("city", "Accra");
myTable.setItem("state", "Greater Accra");

console.log(myTable.getItem("firstName"));
console.log(myTable.getItem("lastname"));
