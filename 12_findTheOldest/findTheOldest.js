function getAge(person) {
    if (person.hasOwnProperty('yearOfDeath')) {
        return (person.yearOfDeath - person.yearOfBirth);
    } else {
        const date = new Date();
        const currentYear = date.getFullYear();

        return (currentYear - person.yearOfBirth);
    }
}

const findTheOldest = function(people) {
    const ages = people.map((person) => {
        return {
            name: person.name, 
            age: getAge(person),
        }
    });

    let max = ages[0];

    ages.forEach((person) => {
        if (person.age > max.age) {
            max = person;
        }
    });

    return max;
};

// Do not edit below this line
module.exports = findTheOldest;
