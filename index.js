// input nilai
let nilaiA = 20;
let nilaiB = 60;
let nilaiC = 10;

// sort secara asc
function asc(a, b, c) {
    let group = [a, b, c]
    group.sort(function (a, b) {
        return a - b;
    })
    return group;
}

// sort secara desc
function desc(a, b, c) {
    let group = [a, b, c]
    group.sort(function (a, b) {
        return b - a;
    })
    return group;
}

// nilai max
function max(a, b, c) {
    return Math.max(a, b, c);
}

// nilai min
function min(a, b, c) {
    return Math.min(a, b, c);
}

// nilai rata rata
function average(a, b, c) {
    return (a + b + c) / 3;
}

// output hasil
console.log(`Nilai A : ${nilaiA}`);
console.log(`Nilai B : ${nilaiB}`);
console.log(`Nilai C : ${nilaiC}`);
console.log(`Urutan nilai Ascending : ${asc(nilaiA, nilaiB, nilaiC)}`);
console.log(`Urutan nilai Descending : ${desc(nilaiA, nilaiB, nilaiC)}`);
console.log(`Nilai Max : ${max(nilaiA, nilaiB, nilaiC)}`)
console.log(`Nilai Max : ${min(nilaiA, nilaiB, nilaiC)}`)
console.log(`Nilai Rata Rata : ${average(nilaiA, nilaiB, nilaiC)}`)