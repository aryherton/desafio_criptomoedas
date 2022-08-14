package models

import (
	"context"

	db "github.com/aryherton/desafio_criptomoedas/database/config"
	s "github.com/aryherton/desafio_criptomoedas/services/bcrypt"
	s_token "github.com/aryherton/desafio_criptomoedas/services/token"
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

func Login(email string, password string) (string, error) {
	var user User
	var err error
	var pwd bool

	user, err = Read_By_Email(email)
	if err != nil {
		return "", err
	}

	pwd = s.CheckPasswordHash(password, user.Password)

	if !pwd {
		return "", err
	}

	token := s_token.New_jwt_token().Create_token(email)

	if err != nil {
		return "", err
	}

	return token, nil
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

func Read_By_Email(email string) (User, error) {
	var user User

	filter := bson.M{"email": email}

	err := collection.FindOne(ctx, filter).Decode(&user)

	if err != nil {
		return User{}, err
	}

	return user, nil
}

func Update(user User_update, user_id string) error {
	var err error

	oid, _ := primitive.ObjectIDFromHex(user_id)

	filter := bson.M{"_id": oid}

	update := bson.M{
		"$set": bson.M{
			"name":        user.Name,
			"email":       user.Email,
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
