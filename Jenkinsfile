pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/huseyiinaydin/playwright-automation-project.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '/usr/local/bin/npm install'
                sh '/usr/local/bin/npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh '/usr/local/bin/npx playwright test'
            }
        }
    }

    post {
        always {
            echo 'Test koşumu tamamlandı.'
        }
    }
}
