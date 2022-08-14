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
