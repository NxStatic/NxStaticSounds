package handler

import (
	"fmt"
	"net/http"
)

type User struct{}

func (o *User) Create(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Create an order")
}
 
func (o *User) List(w http.ResponseWriter, r *http.Request) {
	fmt.Println("List all orders")
}

func (o *User) GetByID(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Get an order by ID")
}

func (o *User) UpdateByID(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Update an order by ID")
}

func (o *User) DeleteByID(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Delete an order by ID")
}