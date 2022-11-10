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
    this.table[idx] = { key, val };
  };
  getItem = (key) => {
    const idx = hastStringToInt(key, this.table.length);
    return this.table[idx];
  };
}




// Test
const myTable = new HashTable();
myTable.setItem("firstName", "bob");
myTable.setItem("lastName", "smith");
myTable.setItem("age", 30);
myTable.setItem("address", "123 main st");
myTable.setItem("city", "new york");
myTable.setItem("state", "ny");

console.log(myTable.getItem("firstName"));
