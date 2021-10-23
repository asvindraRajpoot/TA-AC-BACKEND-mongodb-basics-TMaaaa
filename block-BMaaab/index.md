writeCode

Run these shell commands in mongo shell:

- db.version()//show the version of database
- db.stats()//shows 
{
	"db" : "test",
	"collections" : 0,
	"views" : 0,
	"objects" : 0,
	"avgObjSize" : 0,
	"dataSize" : 0,
	"storageSize" : 0,
	"totalSize" : 0,
	"indexes" : 0,
	"indexSize" : 0,
	"scaleFactor" : 1,
	"fileSize" : 0,
	"fsUsedSize" : 0,
	"fsTotalSize" : 0,
	"ok" : 1
}
- db.help()
//open help section 

Write code to

- create a database of your country name.
> use countryName
switched to db countryName
- check list of databases to see newly created database.
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
- check which database you are currently connected to ?
> db
countryName
