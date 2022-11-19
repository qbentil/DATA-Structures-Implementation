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
      this.table[idx] = [[key, val]];
    } else {
      this.table[idx].push([key, val]);
    }
  };
  getItem = (key) => {
    const idx = hastStringToInt(key, this.table.length);
    if (!this.table[idx]) return null;
    return this.table[idx].find((x) => x[0] === key)[1];
  };

  print = () => {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  };

  removeItem = (key) => {
    const idx = hastStringToInt(key, this.table.length);
    if (!this.table[idx]) return null;
    delete this.table[idx];
  };

  keys = () => {
    const keys = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        keys.push(this.table[i][0][0]);
      }
    }
    return keys;
  };

  values = () => {
    const values = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        values.push(this.table[i][0][1]);
      }
    }
    return values;
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

console.log(myTable.values());
