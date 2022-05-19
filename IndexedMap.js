class IndexedMap {
    constructor() {
        this.items = {};
        this.array = [];
    }

    set(key, value) {
        this.items[key] = value;
        this.array.push(key);
    }

    has(key) {
        return this.items.hasOwnProperty(key);
    }

    hasIndex(index) {
        return index < this.size();
    }

    get(key) {
        return this.has(key) ? this.items[key] : null;
    }

    getByIndex(index) {
        return this.hasIndex(index) ? this.get(this.array[index]) : null;
    }

    remove(key) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    }

    size() {
        return this.array.length;
    }

    //(fn(value, key, index));
    forEach(fn) {
        for (let i = 0; i < this.size(); i++) {
            fn(this.items[this.array[i]], this.array[i], i);
        }
    }

    toString() {
        let result = '{ ';
        this.forEach((value, key, index) => {
            result += `${key} : ${value}, `;
        })
        result = result.slice(0,result.length-2);
        result += ' }';
        return result;
    }

    union(...maps) {

        // for (let entry of maps) { // то же самое, что и recipeMap.entries()
        //     console.log(entry); // огурец,500 (и так далее)
        // }

        // console.log(...maps);
        // console.log(maps.length);
        // maps.forEach((value, key) => console.log(value));
        // for (let i = 0; i < maps.length ; i++) {
        //     for (let j = 0; j < maps[i].size(); j++) {
        //         console.log(maps[i]);
        //     }
        //     // maps[i].forEach(function(value, key) {
        //     //     //
        //     //
        //     // });
        // }
        //
        // return this.items;
        // return new IndexedMap(this.items,...maps);
        // return Object.assign(this.items,...maps);
    }

    unique() {
        // return Array.from(Object.keys(this.items));
    }

    uniqueKeys() {
        //     return [];
        //     arr.filter((item, index) => arr.indexOf(item) === index);
    }

    setTo(index, value, key) {
        if (this.hasIndex(index)) {
            this.array.splice(index, 0, key);
            this.items[key] = value;
        }
    }

    removeAt(index, count = 1) {
        while (count) {
            if (this.hasIndex(index + count)) {
                let key = Object.keys(this.items)[index];
                delete this.items[key];
            }
            count--;
        }
    }
}

let firstMap = new IndexedMap();
firstMap.set('key1', '1');
firstMap.set('key2', '2');
firstMap.set('key3', '3');
firstMap.set('key4', '4');
firstMap.set('key5', '5');

// firstMap.forEach((value, key, index) => {
//     console.log([value, key, index]);
// });
console.log(firstMap.toString());
// firstMap.set(45, '4');
// console.log(firstMap);
let secondMap = new IndexedMap();
secondMap.set('3', '4');
secondMap.set('4', '4');
secondMap.set('5', '5');
secondMap.set('6', '6');
// console.log(firstMap.getByIndex(2));
// firstMap.removeAt(0, 2);
// firstMap.setTo(0, 'insert', 'keyinsert');
// }));
// console.log(firstMap);
// firstMap.setTo(5, 'key10');
// console.log(firstMap);
// console.log(firstMap.getByIndex(0));
// console.log(firstMap.getByIndex(0));
// console.log(firstMap.getByIndex(0));
// console.log(firstMap.getByIndex(0));
// console.log(firstMap);
// let arr = [];
// forEach(callback(currentValue, index, array) {
//     //your iterator
// }[, thisArg]);
