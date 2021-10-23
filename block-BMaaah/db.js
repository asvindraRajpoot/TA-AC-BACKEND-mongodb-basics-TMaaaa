// 1. Create a database named `blog`.
// 2. Create a collection called 'articles'.
// 3. Insert multiple documents(at least 3) into articles. It should have fields

// - title as string
// - createdAt as date
// - details as String
// - author as nested object
//   - author should have
//     - name
//     - email
//     - age
//     - example author: {name: 'abc', email: 'abc@gmail', age: 25}
// - tags : Array of strings like ['html', 'css']

// ```js
// // An article should look like in the database
// {
//   _id: 'some_random_id',
//   title: '',
//   details: '',
//   author: {
//     name: '',
//     email: '',
//     age: ''
//   },
//   tags: ['js', 'mongo']
// }
// ```