package main

import (
	"fmt"
)

var input string
var key int = 3

func main() {
	fmt.Println("Hello, World!")
	fmt.Println("Enter a string to encrypt: ")
	fmt.Scanln(&input)
	fmt.Println("Enter a key: ")
	fmt.Scanln(&key)

	fmt.Println("Encrypted: ", input)
	fmt.Println("Key: ", key)
	for i := 0; i < len(input); i++ {
		num := int(input[i])
		num += key
		fmt.Println(string(input[i]))
	}
}
