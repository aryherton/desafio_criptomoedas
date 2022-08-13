package controller

import (
	m "github.com/aryherton/desafio_criptomoedas/database/models"
	s "github.com/aryherton/desafio_criptomoedas/database/services"
	s_bcry "github.com/aryherton/desafio_criptomoedas/database/services/bcrypt"
	s_token "github.com/aryherton/desafio_criptomoedas/database/services/token"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

var user_id string

func CreatUsers(c *gin.Context) {
	oid := primitive.NewObjectID()
	user_id = oid.Hex()

	var body m.User

	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(400, gin.H{
			"error": err.Error(),
		})
		return
	}

	pwd := s_bcry.HashPassword(body.Password, 10)

	user := m.User{
		ID:          oid,
		Name:        body.Name,
		Email:       body.Email,
		Password:    pwd,
		Name_Crypto: body.Name_Crypto,
	}
	err := s.CreateUser(user)

	if err != nil {
		c.JSON(500, gin.H{
			"message": "Error creating user",
		})
	} else {
		token := s_token.New_jwt_token().Create_token(user.Email)
		c.JSON(200, token)
	}

}

func GetAllUsers(c *gin.Context) {
	users, err := s.Read()

	if err != nil {
		c.JSON(500, gin.H{
			"message": "Error getting users",
		})
	} else {
		c.JSON(200, users)
	}
}
