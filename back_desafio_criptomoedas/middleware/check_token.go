package middleware

import (
	s_token "github.com/aryherton/desafio_criptomoedas/services/token"
	"github.com/gin-gonic/gin"
)

func CheckToken(c *gin.Context) {
	token := c.GetHeader("Authorization")
	if token == "" {
		c.JSON(401, gin.H{
			"message": "Token not found",
		})
		c.Abort()
	} else {
		if !s_token.New_jwt_token().Verify_token(token) {
			c.JSON(401, gin.H{
				"message": "Token not valid",
			})
			c.Abort()
		}
	}

	c.Next()
}
