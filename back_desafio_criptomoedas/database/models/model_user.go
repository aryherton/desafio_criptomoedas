package models

import (
	"context"

	db "github.com/aryherton/desafio_criptomoedas/database/config"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

var collection = db.GetCollection("users")
var ctx = context.Background()

func Create(user User) error {
	var err error

	_, err = collection.InsertOne(ctx, user)

	if err != nil {
		return err
	}

	return nil
}

func Read() (Users, error) {
	var users Users

	filter := bson.D{}

	cur, err := collection.Find(ctx, filter)

	if err != nil {
		return Users{}, err
	}

	for cur.Next(ctx) {
		var user User
		err = cur.Decode(&user)

		if err != nil {
			return Users{}, err
		}
		users = append(users, &user)
	}

	return users, nil
}

func Update(user User, user_id string) error {
	var err error

	oid, _ := primitive.ObjectIDFromHex(user_id)

	filter := bson.M{"_id": oid}

	update := bson.M{
		"$set": bson.M{
			"name":        user.Name,
			"email":       user.Email,
			"password":    user.Password,
			"name_crypto": user.Name_Crypto,
		},
	}

	_, err = collection.UpdateOne(ctx, filter, update)

	if err != nil {
		return err
	}

	return nil
}

func Delete(user_id string) error {
	var err error
	var oid primitive.ObjectID

	oid, err = primitive.ObjectIDFromHex(user_id)

	if err != nil {
		return err
	}

	filter := bson.M{"_id": oid}

	_, err = collection.DeleteOne(ctx, filter)

	if err != nil {
		return err
	}

	return nil
}
