pipeline {
    agent any

    environment {
        // wheee npm komutunun verdiği konumu ve olası tüm node yollarını ekliyoruz
        PATH = "/Users/huseyinaydin/.nvm/versions/node/v20.0.0/bin:/opt/homebrew/bin:/usr/local/bin:${env.PATH}"
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
