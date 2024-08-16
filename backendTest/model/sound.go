package model

import (
	"time"
)

type Sound struct {
	ID int32
	Name string
	Creator string
	Genre string
	Duration *time.Time
	Sound_URL string
}