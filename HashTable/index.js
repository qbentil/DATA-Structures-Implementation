const hastStringToInt = (string, tableSize) => {
    return 5;
}

class HashTable{
    setItem = (key, val) => {
        
    }
    getItem = (key) => {
        const index = hastStringToInt(key, this.table?.length);
        return this.table[index];
    }
}