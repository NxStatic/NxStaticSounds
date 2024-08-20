package main

import (
	"fmt"
	"github.com/joho/godotenv"

	"github.com/NxStatic/NxStaticSounds"
)

type Config struct {
	Port string
}

type Application struct {
	Config Config
	// Models
}

func (app *Application) Serve() error {
	godotenv.Load()
}

func main() {
	fmt.Println("API is running")
}