package main

import (
	"fmt"
	"context"
	"github.com/NxStatic/NxStaticSounds/application"
)

func main() {
	app := application.New()

	err := app.Start(context.TODO())
	if err != nil {
		fmt.Println("Failed to start app:", err)
	}
}