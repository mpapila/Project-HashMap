class HashMap {
    constructor() {
        this.buckets = [];
    }
    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
        }
        return hashCode;
    }
    set(key, value) {
        let index = this.hash(key);
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }

        this.buckets[index].push({ key, value });
    }
    get(key) {
        let index = this.hash(key);
        if (this.buckets[index] === null) {
            return false;
        } else {
            return this.buckets[index].find((item) => item.key === key)
        }
    }
    has(key) {
        let index = this.hash(key)
        if (this.buckets[index] === null) {
            return null
        } else {
            if (this.buckets[index].find((item) => item.key === key)) {
                return true
            } else { return false }
        }
    }
    remove(key) {
        let index = this.hash(key)
        if (this.buckets[index] === null) {
            return null
        } else {
            this.buckets[index].pop(key);
        }
    }
    length() {
        let total = 0
        for (let i = 0; i < this.buckets.length; i++) {
            total += this.buckets[i].length
        }
        return total
    }
}

const newMap = new HashMap();
newMap.set('Name', 'Mehmet')
newMap.set('Age', '29')
newMap.set('city', 'Houston')
// console.log(newMap.get('Name'))
// console.log(newMap.has('city'))
// newMap.remove('city')
console.log(newMap.length())
console.log(newMap)
