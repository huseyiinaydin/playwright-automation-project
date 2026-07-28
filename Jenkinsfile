pipeline {
    agent any

    tools {
        // Eğer Jenkins'te NodeJs eklentisi tanımlıysa kullanır, değilse sistemdeki node'u alır
        nodejs 'node' 
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/huseyiinaydin/playwright-automation-project.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            echo 'Test koşumu tamamlandı.'
        }
    }
}
