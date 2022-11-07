interface Person { name: string, nickname: string, surname: string };
const item: Partial<Person> = { name: 'John', surname: 'Kowalsky'};
let result = item.nickname
console.log(result)