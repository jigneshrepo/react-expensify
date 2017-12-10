const book = {
    name:'Hands-on Machine Learning',
    author: 'Aurelion Geron',
    publisher:{
        //name:'Wrox',
        year:2017
    }
}

const {name:publisherName = 'Self-published', year} = book.publisher;

console.log(`${book.name} published by ${publisherName}`);

const menu = ['dosa',100,200,300];

const [item,,medium] = menu;

console.log(`A medium ${item} costs Rs.${medium}`);