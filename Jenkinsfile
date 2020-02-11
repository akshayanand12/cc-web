pipeline { 
    agent any 

    tools {
        nodejs "NodeJs"
    }
     
    stages { 
        stage('Build') { 
            steps {
                git branch: 'master', url: 'https://github.com/akshayanand12/test-rmm.git' 
                sh "npm install"
            }
        }
    }
}