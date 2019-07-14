function getNumbers(str) {
    let result = [];
    for (let index = 0; index < str.length; index++) {
        if(!isNaN(str[index]) && str[index] !== ' ') {
            result.push(str[index]);
        }
    }
    return result
}
console.log(getNumbers('010r3i  n7g9'));

function findTypes() {
    let result = new Object();
    for (let index = 0; index < arguments.length; index++) {
        if (typeof arguments[index] in result) {
            result[typeof arguments[index]] += 1;
        } else {
            result[typeof arguments[index]] = 1;
        }
    }
    return result
}
console.log(findTypes(null, 5, 'hello', undefined, {'val':2}, true, function() {
 return true 
}));

function executeforEach(array, func) {
    let result = [];

    for (let index = 0; index < array.length; index++) {
        let element_result = func(array[index]);
        if (element_result === false) {
           continue;
        }
        result.push(array[index]);
    }
    return result;
}
executeforEach([1, 2, 3], function(el) {
 console.log(el);
});

function mapArray(array, func) {
    return executeforEach(array, func);
}
console.log(mapArray([2, 5, 8], function(el) {
    return el + 3;
}));

function filterArray(array, func) {
    return executeforEach(array, func);
}
console.log(filterArray([2, 5, 8], function(el) {
    return el > 3;
}));

function showFormattedDate(date) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();

    return 'Date: ' + month + ' ' + day + ' ' + year;
}
console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

function canConvertToDate(date) {
    date = new Date(date);
    return !isNaN(date.getDate());
}
console.log(canConvertToDate('1111-01-211T00:00:00'));

function daysBetween(day1, day2) {
    day1 = Math.floor(Date.parse(day1) / 86400000);
    day2 = Math.floor(Date.parse(day2) / 86400000);

    return day2 - day1;

}
console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));

function getAmountOfAdultPeople(persons) {
    let person_age_day = [];
    //Set current date and day 18 years ago
    let current_date = new Date();
    let max_birth_date = new Date(
        current_date.getFullYear() - 18,
        current_date.getMonth(),
        current_date.getDate(),
        current_date.getHours(),
        current_date.getMinutes(),
        current_date.getSeconds(),
        current_date.getMilliseconds()
    );
    //Find difference in days
    let max_difference = daysBetween(max_birth_date, current_date);

    //Set array with person age in days
    for (let index = 0; index < persons.length; index++) {
        person_age_day[index] = new Date(persons[index][' birthday ']);
        person_age_day[index] = daysBetween(person_age_day[index], current_date);
    }

    //Find person with age 18+
    person_age_day = filterArray(person_age_day, function (day) {
        return day > max_difference;
    });

    return person_age_day.length;
}

function keys(object) {
    let result = [];

    for (let key in object) {
        result.push(key);
    }
    return result;
}
console.log(keys({keyOne: 4, keyTwo: 2, keyThree: 1}));

function values(object) {
    let result = [];

    for (let key in object) {
        result.push(object[key]);
    }
    return result;
}
console.log(values({keyOne: 4, keyTwo: 2, keyThree: 1}));
