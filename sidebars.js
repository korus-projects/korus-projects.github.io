// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    // Introduction
    'intro',

    // VS Code Extension (Manually ordered)
    {
      type: 'category',
      label: 'VS Code Extension',
      collapsed: true,
      items: [
        'vscode-extension/overview',
        'vscode-extension/features',
        'vscode-extension/how-to-use',
        'vscode-extension/commands',
        'vscode-extension/configuration',
        'vscode-extension/troubleshooting',
      ],
    },

  ],
};

export default sidebars;
