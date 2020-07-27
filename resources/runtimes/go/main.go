package main

import (
    "fmt"
    "os"
    "net/http"
    "encoding/json"
)

type App struct {
	Message        string `json:"Message"`
	HostName       string `json:"HostName"`
    RequestHeaders map[string][]string `json:"RequestHeaders"`
}

func main() {
    http.HandleFunc("/", MainServer)
    http.ListenAndServe(":8080", nil)
}

func MainServer(w http.ResponseWriter, r *http.Request) {

    hostname, _ := os.Hostname()
    headers := r.Header

    data := App{
        Message: "My go container is running...",
        HostName: hostname,
        RequestHeaders: headers,
    }
    
    buf, _ := json.Marshal(data)
    fmt.Fprintf(w, string(buf))

}