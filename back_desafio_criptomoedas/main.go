package main

import (
	"log"
	"os"

	s "github.com/aryherton/desafio_criptomoedas/server"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	port := os.Getenv("PORT")

	server := s.NewServer(port)

	server.Run()
}
