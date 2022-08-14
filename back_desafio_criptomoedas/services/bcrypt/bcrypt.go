package services

import (
	"golang.org/x/crypto/bcrypt"
)

func HashPassword(password string, value_const int) string {
	bytes, _ := bcrypt.GenerateFromPassword([]byte(password), value_const)

	return string(bytes)
}

func CheckPasswordHash(password string, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}
