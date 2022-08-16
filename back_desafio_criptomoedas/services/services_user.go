package services

import (
	m "github.com/aryherton/desafio_criptomoedas/database/models"
)

func CreateUser(user m.User) error {
	err := m.Create(user)

	if err != nil {
		return err
	}
	return nil
}

func LoginUser(email string, password string) (string, error) {
	token, err := m.Login(email, password)

	if err != nil {
		return "", err
	}

	return token, nil
}

func Read() (m.Users, error) {
	user, err := m.Read()

	if err != nil {
		return m.Users{}, err
	}

	return user, nil
}

func ReadByEmail(email string) (m.User, error) {
	user, err := m.Read_By_Email(email)

	if err != nil {
		return m.User{}, err
	}

	return user, nil
}

func Update(user m.User_update, user_id string) error {
	err := m.Update(user, user_id)

	if err != nil {
		return err
	}

	return nil
}

func Delete(user_id string) error {
	err := m.Delete(user_id)

	if err != nil {
		return err
	}

	return nil
}
