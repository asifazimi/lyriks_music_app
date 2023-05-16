job lyriks-music-app {
  datacenters = ["dc1"]

  group lyriks-music-app {
    count = 1
    task lyriks-music-app {
      vault {
        policies = ["blockchainr-read-secrets"]
      }
      driver = "docker"
      config {
        image = "acrbc001.azurecr.io/lyriks-music-app:latest"
        port_map {
          http = 3000
        }
      }
      template {
        data        = <<EOH
          PORT=3000
        EOH
        destination = "secrets/file.env"
        env         = true
      }
  
      resources {
        cpu    = 512
        memory = 1024
        network {
          port "http" {}
          mbits = 10
        }
      }
      service {
        name = "lyriks-music-app"
        tags = [
          "api",
          "urlprefix-lyriks-music-app-main.blockchainr.app/"
        ]
        port = "http"
        check {
          name = "alive"
          type = "tcp"
          interval = "10s"
          timeout = "2s"
        }
      }
    }
  }

}