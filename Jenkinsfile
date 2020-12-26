pipeline {
  agent any

  environment {
    IMAGE_NAME = 'marcindobroszek/waluty'
    REGISTRY_CREDENTIAL = 'marcindobroszek'
  }

  stages {
    stage('git cloning project') {
      steps {
        git branch: 'unitt', credentialsId: 'githubMarcinCredential', url: 'git@github.com:marcin-kuba/waluty-frontend.git'
      }
    }
    stage('docker pull nodejs') {
      agent {
        docker {
          image 'node:14.3.0-stretch'
          reuseNode true
        }
      }

      stages {
        stage('npm install') {
          steps {
            sh 'npm install'
          }
        }

        stage('chrome install') {
          steps {
            sh 'wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb'
            sh 'apt-get update'
            sh 'apt install --yes ./google-chrome-stable_current_amd64.deb'
          }
        }

        stage('unit tests') {
          steps {
            sh 'npm run test'
          }
        }

        stage('e2e tests') {
          steps {
            sh 'npm run e2e'
          }
        }
      }
    }

    stage('docker build image') {
      steps {
        sh 'docker build -f "Dockerfile" -t $IMAGE_NAME:$BUILD_NUMBER -t $IMAGE_NAME:latest .'
      }
    }

    stage('docker publish image') {
      steps {
        withDockerRegistry([credentialsId: 'dockerhubMarcinCredential', url: '']) {
          sh 'docker push $IMAGE_NAME:$BUILD_NUMBER'
          sh 'docker push $IMAGE_NAME:latest'
        }
      }
    }

    stage('swarm update service') {
      steps {
        withDockerRegistry([credentialsId: 'dockerhubMarcinCredential', url: '']) {
          sh 'docker service update --with-registry-auth --image $IMAGE_NAME:$BUILD_NUMBER prod-waluty_frontend'
        }
      }
    }

    stage('cleaning up') {
      steps {
        sh 'docker rmi $IMAGE_NAME:$BUILD_NUMBER'
      }
    }
  }
}
