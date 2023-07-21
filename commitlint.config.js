module.exports = {
  plugins: ['commitlint-plugin-jira-rules'],
  extends: ['jira'],
  rules: {
    'jira-task-id-project-key': [2, 'always', ['NOV', 'NOJIRA']],
    'jira-task-id-max-length': [2, 'always',11],
    'header-full-stop': [2, 'always', '.'],
  }
}