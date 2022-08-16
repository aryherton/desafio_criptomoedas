package controller

import (
	m "github.com/aryherton/desafio_criptomoedas/database/models"
	s "github.com/aryherton/desafio_criptomoedas/services"
	s_bcry "github.com/aryherton/desafio_criptomoedas/services/bcrypt"
	s_token "github.com/aryherton/desafio_criptomoedas/services/token"
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

	if _, err := s.ReadByEmail(body.Email); err != nil {
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
	} else {
		c.JSON(409, gin.H{
			"message": "Email already exists",
		})
	}

}

func Login(c *gin.Context) {
	var body m.User_login
	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(400, gin.H{
			"error": err.Error(),
		})
		return
	}

	token, err := s.LoginUser(body.Email, body.Password)

	if err != nil {
		c.JSON(500, gin.H{
			"message": "Error getting user",
		})
	}

	c.JSON(200, token)
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

func UpdateUser(c *gin.Context) {
	param := c.Param("id")
	var body m.User_update
	if err := c.ShouldBindJSON(&body); err != nil {
		c.JSON(400, gin.H{
			"error": err.Error(),
		})
		return
	}
	user := m.User_update{
		ID:          body.ID,
		Name:        body.Name,
		Email:       body.Email,
		Name_Crypto: body.Name_Crypto,
	}
	err := s.Update(user, param)

	if err != nil {
		c.JSON(500, gin.H{
			"message": "Error updating user",
		})
	} else {
		c.JSON(200, gin.H{
			"message": "User updated",
		})
	}
}
