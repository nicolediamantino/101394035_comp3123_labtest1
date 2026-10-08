
const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject("Input must be an array");
        } else {
            const result = mixedArray
                .filter(word => typeof word === "string")
                .map(word => word.toLowerCase());

            resolve(result);
        }
    });
};

const mixedArray = ['PIZZA', 99, true, 'Fries', 'burGer',3];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error));
