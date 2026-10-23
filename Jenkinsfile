pipeline {
    agent { label 'linux' }
    tools {
        // Same major version as the GitHub Pages workflow
        nodejs '20'
    }

    stages {
        stage("Checkout"){
            steps {
                checkout scm
            }
        }
        stage("Install dependencies"){
            steps {
                // The app lives in the eml-compendium folder
                dir('eml-compendium') {
                    sh 'npm ci'
                }
            }
        }
        stage("Build"){
            steps {
                dir('eml-compendium') {
                    sh 'npm run build'
                }
            }
        }
        stage("Archive"){
            steps {
                // Fingerprinting allows us to find where a build came from (ie archive files -> version)
                // allowEmptyArchive: false fails the build if no files match
                archiveArtifacts artifacts: 'eml-compendium/dist/**/*',
                                 fingerprint: true,
                                 allowEmptyArchive: false
            }
        }
    }
}
