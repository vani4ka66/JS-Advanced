function getSortedList() {
    return {
        internalArray: [],
        size: 0,
        add: function (element) {
            this.internalArray.push(element);
            this.size++;
            this.sort();
        },
        remove: function (index) {
            if(index >= 0 && index < this.internalArray.length){
               this.internalArray.splice(index, 1);
                this.size--;
            }
        },
        get: function (index) {
            if(index >= 0 && index < this.internalArray.length){
               return this.internalArray[index];
            }
        },
        toString: function () {
            return this.internalArray.join(' ')
        },
        sort: function () {
            this.internalArray = this.internalArray.sort((a, b) => a - b)
        }
    }
}

let sortedList = getSortedList();

sortedList.add(1);
sortedList.add(2);
sortedList.add(3);
sortedList.add(4);
sortedList.add(5);
console.log(sortedList.toString());

sortedList.remove(2);
console.log(sortedList.toString());

console.log(sortedList.get(0));
