pipeline {
  agent any

  environment {
    IMAGE_NAME = 'marcindobroszek/waluty'
    REGISTRY_CREDENTIAL = 'marcindobroszek'
  }

  stages {
    stage('GIT cloning project') {
      steps {
        git branch: 'witaj-swiecie', credentialsId: 'githubMarcinCredential', url: 'git@github.com:marcin-kuba/waluty.git'
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

        stage('Build app') {
          steps {
            sh "npm run build"
          }
        }
      }
    }

    stage('Docker build image') {
      steps {
        sh 'docker build -f "Dockerfile" -t $IMAGE_NAME:$BUILD_NUMBER -t $IMAGE_NAME:latest /var/jenkins_home/workspace/prod-waluty-frontend'
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
