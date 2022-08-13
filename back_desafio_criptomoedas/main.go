package main

import (
	s "github.com/aryherton/desafio_criptomoedas/server"
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
	server := s.NewServer("3005")

	server.Run()
}
