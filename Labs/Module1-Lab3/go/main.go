package main

import (
    "fmt"
    "os"
    "net/http"
)

func main() {
    http.HandleFunc("/", HelloServer)
    http.ListenAndServe(":8080", nil)
}

func HelloServer(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Reading env variable: %s!", os.Getenv("apiURL"))
}