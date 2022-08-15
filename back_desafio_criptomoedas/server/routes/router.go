package myroutes

import (
	c "github.com/aryherton/desafio_criptomoedas/controllers"
	md "github.com/aryherton/desafio_criptomoedas/middleware"
	"github.com/gin-gonic/gin"
)

func ConfigureRouter(router *gin.Engine) *gin.Engine {
	main := router.Group("/api/cripto")
	{
		user := main.Group("user")
		{
			user.GET("/", md.CheckToken, c.GetAllUsers)

			user.POST("/register", c.CreatUsers)
			user.POST("/login", c.Login)
			user.PUT("/:id", md.CheckToken, c.UpdateUser)
		}
	}
	return router
}
