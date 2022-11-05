package main

import (
	"log"
	"os/exec"
)

func main() {

	cmd := exec.Command("locust -f ./traffic.py --headless -H http://localhost:3000  -u 1 -r 0.5")

	err := cmd.Run()

	if err != nil {
		log.Fatal(err)
	}
}
