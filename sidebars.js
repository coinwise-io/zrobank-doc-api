/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  //tutorialSidebar2: [{type: 'autogenerated', dirName: '/docs/Caas'}],
  // But you can create a sidebar manually
  
  overviewSidebar: [

    {
      type: 'category',
      label: 'Overview',
      items: ['overview/introduction', 'overview/security', 'overview/environments', 'overview/api-key', 'overview/api-changelog'],
    },
    
  ],
  paasSidebar: [

    {
      type: 'category',
      label: 'PaaS',
      items: ['paas/teste'],
    },
    
  ],
  caasSidebar: [

    {
      type: 'category',
      label: 'CaaS',
      items: ['caas/authentication', 'caas/apiLogs','caas/errors',
      'caas/indepotence','caas/pagination','caas/protocol',
      'caas/rateLimiting','caas/request_id','caas/serialization','caas/versioning'],
    },
    
  ],
  gatewaySidebar: [

    {
      type: 'category',
      label: 'Gateway',
      items: ['gateway/teste'],
    },
    
  ],

};

module.exports = sidebars;
