writeCode

Write code to:-

- create a database named `sports`.
use sports
- list all databases present in local mongod server.
show dbs
- create 3 collections named `cricket`, `football`, `TT` in sports databse.
db.createCollection('cricket')
db.createCollection('football')
db.createCollection('TT')
- add multiple players in those collections which should have fields like `name`, `age` and `email` and `bid_price`.
db.cricket.insert({name:'rohit', age:24, email:'rt@gmail.com', bid_price:10})
db.cricket.insert({name:'rkr', age:24, email:'rt@gmail.com', bid_price:1})
db.TT.insert({name:'rkr', age:24, email:'rt@gmail.com', bid_price:1})
db.TT.insert({name:'rkr', age:24, email:'rt@gmail.com', bid_price:1})
db.football.insert({name:'rkr', age:24, email:'rt@gmail.com', bid_price:1})
db.football.insert({name:'rkr', age:24, email:'rt@gmail.com', bid_price:1})
- list all collections in sports database.
show dbs
- rename `TT` collection to `tennis`.
db.TT.renameCollection('tennis')
- create a capped collection called `khokho` which should have max 3 documents.
db.createCollection('khokho',{capped:true,max:3})
db.khokho.insertMany([{name:'asvindra',age:24},{name:'aashu',age:24}])
  Try inserting more than 3 and see what happens?

- check whether a collection is capped or not?
db.khokho.isCapped()
- drop all documents from `football` collection.
 db.football.remove({})

- delete cricket collection completely.
db.cricket.drop()

- delete sports database.
db.dropDatabase()
- check which database you are connected to ?
db
- connect to test database
use test
