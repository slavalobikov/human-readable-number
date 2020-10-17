module.exports = function toReadable (number) {
    const a = [
        'zero', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine'
    ];

    const b = [
        'ten', 'eleven', 'twelve', 'thirteen',
        'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen',
        'twenty', 'thirty', 'forty', 'fifty',
        'sixty', 'seventy', 'eighty', 'ninety'
    ];

    const oneChar = (num) => {
        return a[num];
    }

    const twoChar = (num, arr) => {
        if (num<21) {
            return b[num-10]
        } else {
            let first = Number(arr[0]);
            let last = Number(arr[1]);
            if (last === 0) {
                return b[10+first-2]
            } else {
                return b[10+first-2] + ' ' + oneChar(last)
            }
        }
    }

    const threeChar = (num, arr) => {
        let first = Number(arr[0]);
        let last = Number(arr[1]+arr[2]);
        if (last<10) {
            if (last === 0) {
                return a[first] + ' hundred';
            } else {
                return a[first] + ' hundred ' + a[last]
            }
        } else {
            let z = [arr[1], arr[2]]
            return a[first] + ' hundred ' + twoChar(last, z)
        }
    }

    let arrFromNum = String(number).split('');
    let arrLen = arrFromNum.length;

    switch (arrLen) {
        case 1:
            return oneChar(number);
        case 2:
            return twoChar(number, arrFromNum);
        case 3:
            return threeChar(number, arrFromNum);
    }
}
