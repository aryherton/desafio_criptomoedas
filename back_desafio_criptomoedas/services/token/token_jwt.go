package services

import (
	// "os"

	"fmt"
	"time"

	"github.com/golang-jwt/jwt/v4"
)

type jwt_token struct {
	secret_key string
	issure     string
}

type Options struct {
	Email string `json:"email"`
	jwt.StandardClaims
}

func New_jwt_token() *jwt_token {
	return &jwt_token{
		// secret_key: os.Getenv("SECRET_KEY"),
		secret_key: "secret",
		issure:     "criptomoedas",
	}
}

func (s *jwt_token) Create_token(user_email string) string {
	opt := &Options{
		user_email,
		jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Hour * 24).Unix(),
			Issuer:    s.issure,
			IssuedAt:  time.Now().Unix(),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, opt)

	t, err := token.SignedString([]byte(s.secret_key))
	if err != nil {
		return err.Error()
	}

	return t
}

func (s *jwt_token) Verify_token(token string) bool {
	_, err := jwt.Parse(token, func(token *jwt.Token) (interface{}, error) {
		if _, isValid := token.Method.(*jwt.SigningMethodHMAC); !isValid {
			return nil, fmt.Errorf("invalid token: %v", token)
		}

		return []byte(s.secret_key), nil
	})

	return err == nil
}
