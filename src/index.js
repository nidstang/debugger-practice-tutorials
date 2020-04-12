// we want to print out 1,2,3,4,5,6,7 but we got: 7,7,7,7,7,7,7
const practice1 = () => {
    console.log('Practice 1 result: ');
    for(var i = 0; i < 7; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
};

// we are looking for a element in the array, but something may be wrong because we could not find it
const practice2 = () => {
    var arr = ['Madrid', 'Sevilla', 'Malaga', 'Valencia', 'Barcelona', 'Badajoz'];
    
    const search = (arrToSearch, value) => {
        for(var i = 0; i < arrToSearch.length; i++) {
            if (value == arrToSearch[i]) return true;
            return false;
        }
    };

    console.log('Practice 2 result: ', search(arr, 'sevilla')); //it'd printed false but must be true 
};

// we'd like to remove all null values in our array. But it is not working on
const practice3 = () => {
    var arr = [1,null, 2, 3, null, 5, null];

    const removeNullValues = (sourceArr) => {
        for(var i = 0; i < sourceArr.length; i++) {
            if (typeof sourceArr[i] === 'null') {
                delete sourceArr[i];
            }
        }

        return sourceArr;
    }

    console.log('Practice 3 result:', removeNullValues(arr)); //mmm the null values still are there
};


// We are doing a composition by concatenation but we are losing some props' values!
const practice4 = () => {
    const proto1 = {
        foo: 'bar',
        bar: 'foo',
        toString() {
            return `${this.foo}:${this.bar}`;
        }
    };

    const createProto2 = (name, lastname) => ({
        name,
        lastname,
        toString() {
            return `${this.name}:${this.lastname}`;
        }
    });

    const result = Object.assign(createProto2('Barbara', 'Liskov'), proto1);

    console.log('Practice4 result: ', result.toString()); //oops ! where has Barbara Liskov gone?
};


// Do not touch this!!
[practice1, practice2, practice3, practice4].forEach((practice, i) => {
    document.querySelector('#run'+(i+1)).addEventListener('click', practice);
});



