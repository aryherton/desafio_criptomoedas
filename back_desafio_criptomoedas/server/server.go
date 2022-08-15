package server

import (
	"log"

	r "github.com/aryherton/desafio_criptomoedas/server/routes"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type Sever struct {
	port   string
	server *gin.Engine
}

func NewServer(port string) Sever {
	router := gin.Default()

	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"*"},
		AllowHeaders:     []string{"*"},
		ExposeHeaders:    []string{"*"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			return true
		},
	}))

	// router.Use(cors.Default())

	return Sever{
		port:   port,
		server: router,
	}
}

func (s *Sever) Run() {
	router := r.ConfigureRouter(s.server)

	log.Print("server is running at port: ", s.port)
	log.Fatal(router.Run(":" + s.port))
}
