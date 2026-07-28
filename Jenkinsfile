pipeline {
    agent {
        // Playwright'ın resmi Docker imajını kullanarak tüm bağımlılıkları hazır getiriyoruz
        docker {
            image 'mcr.microsoft.com/playwright:v1.40.0-focal'
        }
    }
    
    stages {
        stage('1. Bağımlılıkları Yükle') {
            steps {
                sh 'npm ci'
            }
        }
        
        stage('2. Playwright Testlerini Koş') {
            steps {
                // Headless modda tüm testleri çalıştırır
                sh 'npx playwright test'
            }
        }
    }
    
    post {
        always {
            // Testler geçse de kalsa da HTML raporunu Jenkins'e çıktı olarak kaydet
            archiveArtifacts artifacts: 'playwright-report/**/*', fingerprint: true
        }
    }
}