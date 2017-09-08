# Node JS Cosmos DB Demo

## How to use

1. Create a Azure Cosmos DB instance in Mongo mode
2. Create a Database
3. Create a Collection
4. Create some data (see below)
5. Put data into the collection (see below)
6. Get the connection string, database name, and collection info
7. Create a `settings.json` file (see below) and put the data above into it
8. Run the demo

## How to create the sample data

You can create data using the little utility at: https://github.com/BlitzkriegSoftware/NoSqlDataMaker 

It makes people JSON that can be used for this demo

## How to import data

Use the instructions in the data maker to use `mongoimport` to populate the collection (do not use the Cosmos DB import tool!)

## Settings.json file format

This is the file format for `settings.json` file

```json
{
	"ConnectionString": "",
	"Database": "",
	"Collection": ""
}
```



