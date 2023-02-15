console.log(`this is line 1 
this is line 2`);

let a = 0, b = 2;
let sum = a + b;
console.log(`sum of ${a} + ${b} is equal to
 ${sum}` );

 /* tagged template literals */

 function parseHouse(property){
    return `${property.owner}  is selling the proerty at ${property.address} for ${property.price}`;
}
    let house = {
        address: "123 Main St, San Francisco CA, USA",
        floors: 2,
        price : 500000,
        owner: "John"
 };
console.log(parseHouse(house));

/* enhanced object properties*/


const pi = 3.1415;
const inchestofeet = 0.08333;

const exportObject ={
pi,
inchestofeet,
sum( a, b) {
    return a + b;
    },

    subtract(a, b){
        return a - b;
    }
};
console.log(exportObject);

/*Array Destructuring */
const data = [1, 2, 3];
 [a, , b, c = 4] = data;
console.log(a, b, c);

/* object destructuring */

const data1 = {
    f1:'v1',
    f2: 'v2',
    f3: 'v3'
}
const {f1: f1, f2: field2, f4:f4 = 'v4' } = data1;

console.log(f1, field2, f4);

/*nested Destructuring*/

const data2 = {
    arr: [1, 2, 3]
};

const{arr: [, v2] } = data2

console.log(v2);

/*implementing destructuring */


const courseCatalogMetadata = [{
    title: 'Linear Algebra II',
    description: 'Advanced linear algebra.',
    texts: [
        {
            author: 'James Smith',
            price: 120,
            ISBN: '912-644-578441-0'
        }
    ]
}];

const [course] = courseCatalogMetadata;
const [{texts: textbooks}] = courseCatalogMetadata;
const [{texts:[textbook]}] = courseCatalogMetadata;
const [{texts: [{ISBN}]}] = courseCatalogMetadata;

console.log(ISBN);