package services_test

import (
	"testing"

	m "github.com/aryherton/desafio_criptomoedas/database/models"
	s "github.com/aryherton/desafio_criptomoedas/services"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

var user_id string

func TestCreateUser(t *testing.T) {
	oid := primitive.NewObjectID()
	user_id = oid.Hex()

	user := m.User{
		ID:          oid,
		Name:        "Isabella",
		Email:       "isa@test.com",
		Password:    "123456",
		Name_Crypto: "Real",
	}

	err := s.CreateUser(user)

	if err != nil {
		t.Errorf("Error creating user: %s", err)
		t.Fail()
	} else {
		t.Log("User created successfully")
	}

}

func TestReadUser(t *testing.T) {
	users, er := s.Read()

	if er != nil {
		t.Errorf("Error reading user: %s", er)
		t.Fail()
	}

	if len(users) == 0 {
		t.Error("No users found")
		t.Fail()
	} else {
		t.Log("Users found successfully")
	}
}

func TestUpdateUser(t *testing.T) {
	user := m.User_update{
		Name:        "Barbosa",
		Email:       "test@update.com",
		Name_Crypto: "BTC",
	}

	err := s.Update(user, user_id)

	if err != nil {
		t.Errorf("Error updating user: %s", err)
		t.Fail()
	} else {
		t.Log("User updated successfully")
	}
}

func TestDeleteUser(t *testing.T) {
	err := s.Delete(user_id)

	if err != nil {
		t.Errorf("Error deleting user: %s", err)
		t.Fail()
	} else {
		t.Log("User deleted successfully")
	}
}
