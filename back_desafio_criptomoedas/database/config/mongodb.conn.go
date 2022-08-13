package db

import (
	"context"
	// "fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var (
	// usr  = "root"
	// pwd  = "root"
	// host = "localhost"
	// port = "27017"
	db = "criptocurrencies"
)

func GetCollection(collection string) *mongo.Collection {
	// uri := fmt.Sprintf("mongodb://%s:%s@%s:%s/%s", usr, pwd, host, port, db)

	// client, err := mongo.NewClient(options.Client().ApplyURI(uri))

	// if err != nil {
	// 	panic(err.Error())
	// }

	// ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	// err = client.Connect(ctx)

	// if err != nil {
	// 	panic(err.Error())
	// }

	// return client.Database(db).Collection(collection)

	serverAPIOptions := options.ServerAPI(options.ServerAPIVersion1)
	clientOptions := options.Client().
		ApplyURI("mongodb+srv://ary_atlas:ary123456@cluster0.ajacots.mongodb.net/?retryWrites=true&w=majority").
		SetServerAPIOptions(serverAPIOptions)
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		print(err)
		log.Fatal(err)
	}

	return client.Database(db).Collection(collection)
}
