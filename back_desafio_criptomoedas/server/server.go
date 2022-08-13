package server

import (
	"log"

	r "github.com/aryherton/desafio_criptomoedas/server/routes"
	"github.com/gin-gonic/gin"
)

type Sever struct {
	port   string
	server *gin.Engine
}

func NewServer(port string) Sever {
	return Sever{
		port:   port,
		server: gin.Default(),
	}
}

func (s *Sever) Run() {
	router := r.ConfigureRouter(s.server)

	log.Print("server is running at port: ", s.port)
	log.Fatal(router.Run(":" + s.port))
}
