pipeline {
  agent any

  environment {
    IMAGE_NAME = 'marcindobroszek/waluty'
    REGISTRY_CREDENTIAL = 'marcindobroszek'
    TESTING_EVN_URL = 'http://krypto.waluty.pl:83/'
  }

  stages {
    stage('git cloning project') {
      steps {
        git branch: 'main', credentialsId: 'githubMarcinCredential', url: 'git@github.com:marcin-kuba/waluty-frontend.git'
      }
    }
    stage('docker run nodejs') {
      agent {
        docker {
          image 'node:15.8.0-stretch'
          reuseNode true
        }
      }

      stages {
        stage('chrome installation') {
          steps {
            sh 'wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb'
            sh 'apt-get update'
            sh 'apt install --yes ./google-chrome-stable_current_amd64.deb'
          }
        }

        stage('npm install') {
          steps {
            sh 'npm install'
          }
        }

        stage('linting') {
          steps {
            sh 'npm run lint'
          }
        }

        stage('unit tests') {
          steps {
            sh 'npm run test'
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

        stage('swarm update service [test]') {
          steps {
            withDockerRegistry([credentialsId: 'dockerhubMarcinCredential', url: '']) {
              sh 'docker service update --with-registry-auth --image $IMAGE_NAME:latest test-waluty_frontend'
            }
          }
        }

        stage('cleaning up') {
          steps {
            sh 'docker rmi $IMAGE_NAME:$BUILD_NUMBER'
          }
        }

        stage('protractor installation') {
          steps {
            sh 'npm install protractor@7.0.0 --global'
            sh 'webdriver-manager update'
          }
        }

        stage('e2e tests') {
          steps {
            sh 'protractor e2e/protractor.conf.js --param.baseUrl=$TESTING_EVN_URL'
          }
        }
      }
    }

    stage('swarm update service [prod]') {
      steps {
        withDockerRegistry([credentialsId: 'dockerhubMarcinCredential', url: '']) {
          sh 'docker service update --with-registry-auth --image $IMAGE_NAME:latest prod-waluty_frontend'
        }
      }
    }
  }
}
