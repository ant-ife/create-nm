module.exports = {
  prompts () {
    return [
      {
        name: 'name',
        message: 'What is the name of the new project',
        default: this.outFolder,
        filter: val => val.toLowerCase(),
      },
      {
        name: 'group',
        message: 'What is your GitHub user/group name',
        store: true,
      },
    ];
  },
  actions: [
    {
      type: 'add',
      files: '**',
    },
    {
      type: 'move',
      patterns: {
        gitignore: '.gitignore',
      },
    },
  ],
  async completed () {
    this.gitInit();
    await this.npmInstall();
    this.showProjectTips();
  },
};
