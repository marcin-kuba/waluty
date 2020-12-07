pipeline {
  agent any

  environment {
    IMAGE_NAME = 'marcindobroszek/waluty'
    REGISTRY_CREDENTIAL = 'marcindobroszek'
  }

  stages {
    stage('GIT cloning project') {
      steps {
        git branch: 'main', credentialsId: 'githubMarcinCredential', url: 'git@github.com:marcin-kuba/waluty-frontend.git'
      }
    }
    stage('Docker pull nodejs') {
      agent {
        docker {
          image 'node:14.3.0-stretch'
          reuseNode true
        }
      }

      stages {
        stage('NPM install') {
          steps {
            sh 'npm install'
          }
        }

        stage('Lint') {
          steps {
            sh 'npm run lint'
          }
        }
      }
    }

    stage('Docker build image') {
      steps {
        sh 'docker build -f "Dockerfile" -t $IMAGE_NAME:$BUILD_NUMBER -t $IMAGE_NAME:latest .'
      }
    }
    stage('Docker publish image') {
      steps {
        withDockerRegistry([credentialsId: "dockerhubMarcinCredential", url: ""]) {
          sh 'docker push $IMAGE_NAME:$BUILD_NUMBER'
          sh 'docker push $IMAGE_NAME:latest'
        }
      }
    }
    stage('Swarm update service') {
      steps {
        withDockerRegistry([credentialsId: "dockerhubMarcinCredential", url: ""]) {
          sh 'docker service update --with-registry-auth --image $IMAGE_NAME:$BUILD_NUMBER prod-waluty_frontend'
        }
      }
    }
    stage('Cleaning up') {
      steps {
        sh 'docker rmi $IMAGE_NAME:$BUILD_NUMBER'
      }
    }
  }
}
