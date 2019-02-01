module.exports = {
  prompts () {
    return [
      {
        name: 'name',
        message: 'What is the name of the new project',
        default: this.outFolder,
        filter: val => val.toLowerCase(),
        validate: input => {
          if (!input) return 'name is required';
          return true;
        },
      },
      {
        name: 'group',
        message: 'What is your GitHub user/group name',
        store: true,
        validate: input => {
          if (!input) return 'name is required';
          return true;
        },
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
