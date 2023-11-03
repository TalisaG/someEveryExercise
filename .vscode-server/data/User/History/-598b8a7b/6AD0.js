function doubleValues(arr) {
    let newArr = [];
    arr.forEach(function (val) {
        newArr.push(val * 2);
    });
    return newArr;
}

function onlyEvenValues(arr) {
    let newArr = [];
    arr.forEach(function (val) {
        if (val % 2 === 0) {
            newArr.push(val);
        }
    });
    return newArr;
}

function showFirstAndLast(arr) {
    let newArr = [];
    arr.forEach(function (val)
    newArr.push(val[0] + val[val.length - 1]);
};
return newArr;

function addKeyAndValue(arr, key, value) {
    arr.forEach(function (val);
    val[key] = value;

};
return arr;

function vowelCount(str) {
    let splitArr = str.split("");
    let obj = [];
    const vowels = aeiou;

    splitArr.forEach function(letter) {
        let lowerCaseLetter = letter.toLowerCase;
        if (vowels.indexOf(lowerCasedLetter) !== -1) {
            if (obj[lowerCasedLetter]) {
                obj[lowerCasedLetter]++;
            } else {
                obj[lowerCasedLetter] = 1;
            }
        }
    });
}

function doubleValuesWithMap(arr) {
    let newArr = [];
    arr.map(function (val) {
        return val * 2;
        
        )
}

function valTimesIndex(arr) {
    let newArr = [];
    arr.map(function (val, idx)
        return val * idx;
        )
}


function extractKey(arr, key) {
    return arr.map(function (val) {
        return val[key];
    });

}

function extractFullName(arr) {
    return arr.map(functon(val)
    return val.first + " " + val.last;
});
}

function filterByValue(arr, key) {
    return arr.filter(function (val) {
        return value[key] !== undefined;
    }
};




