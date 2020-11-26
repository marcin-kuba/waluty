pipeline {
  agent any

  environment {
    IMAGE_NAME = 'marcindobroszek/waluty'
    REGISTRY_CREDENTIAL = 'marcindobroszek'
  }

  stages {
    stage('Cloning our GIT') {
      steps {
        git branch: 'witaj-swiecie', credentialsId: 'githubMarcinCredential', url: 'git@github.com:marcin-kuba/waluty.git'
      }
    }
    stage('Install') {
      agent {
        docker {
          image 'node:14.3.0-stretch'
          args '-u root:root'
          reuseNode true
        }
      }
      steps {
        sh 'npm install'
      }
    }
    stage('Lint') {
      steps {
        sh 'npm run lint'
      }
    }
    stage('Build') {
      steps {
        sh "npm run build"
      }
    }
    stage('Docker build image') {
      steps {
        sh 'docker build -f "Dockerfile" -t $IMAGE_NAME:$BUILD_NUMBER -t $IMAGE_NAME:latest .'
      }
    }
    stage('Docker publish image') {
      steps {
        withDockerRegistry([credentialsId: "githubMarcinCredential", url: ""]) {
          sh 'docker push $IMAGE_NAME:$BUILD_NUMBER'
          sh 'docker push $IMAGE_NAME:latest'
        }
      }
    }
    stage('Swarm update service') {
      steps {
        withDockerRegistry([credentialsId: "githubMarcinCredential", url: ""]) {
          sh 'docker service update --with-registry-auth --image $IMAGE_NAME:$BUILD_NUMBER  prod-waluty_frontend'
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
