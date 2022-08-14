package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
	ID          primitive.ObjectID `bson:"_id" json:"id" structs:"id"`
	Name        string             `bson:"name" json:"name" binding:"required"`
	Email       string             `bson:"email" json:"email" binding:"required"`
	Password    string             `bson:"password" json:"password" binding:"required"`
	Name_Crypto string             `bson:"name_crypto" json:"name_crypto"`
}

type Users []*User

type User_update struct {
	ID          primitive.ObjectID `bson:"_id" json:"id" structs:"id"`
	Name        string             `bson:"name" json:"name" binding:"required"`
	Email       string             `bson:"email" json:"email" binding:"required"`
	Name_Crypto string             `bson:"name_crypto" json:"name_crypto"`
}

type User_login struct {
	Email    string `bson:"email" json:"email" binding:"required"`
	Password string `bson:"password" json:"password" binding:"required"`
}
