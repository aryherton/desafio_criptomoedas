package main

import (
	"log"
	"os"

	s "github.com/aryherton/desafio_criptomoedas/server"
	"github.com/joho/godotenv"
)

// func getAll(c *gin.Context) {
// 	c.JSON(200, gin.H{
// 		"message": "Ai simmmmmmmmmmmmmmmmmmmmmmmmmmm",
// 	})
// }

// func main() {
// 	r := gin.Default()
// 	r.GET("/user", getAll)
// 	r.Run(":3005")
// }

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	port := os.Getenv("PORT")

	server := s.NewServer(port)

	server.Run()
}
