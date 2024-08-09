package model

import "github.com/google/uuid"

type User struct {
	UserID uuid.UUID
	FirstName string
	LastName string
	Email string
	PasswordHash string
}