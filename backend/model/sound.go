package model

import (
	"time"

	"github.com/google/uuid"
)

type Sound struct {
	SoundID uuid.UUID
	Name string
	Creator string
	Genre string
	Duration *time.Time
}