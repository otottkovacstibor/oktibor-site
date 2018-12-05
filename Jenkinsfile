node('master') {
  stage('Git checkout') {
    ansiColor('xterm') {
      checkout scm
    }
  }
  
  stage('Recreate container') {
    ansiColor('xterm') {
      withCredentials([string(credentialsId: 'uptimerobot-api-key', variable: 'UPTIMEROBOT_API_KEY')]) {
        sh('docker-compose up -d --build')
      }
    }
  }
}
