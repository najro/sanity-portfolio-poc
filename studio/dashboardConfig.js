export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5db2f3f4ec840548d8c58202',
                  title: 'Sanity Studio',
                  name: 'sanity-portfolio-poc-studio',
                  apiId: '90961675-93b6-4cd8-b042-f76462c37a1b'
                },
                {
                  buildHookId: '5db2f3f4ea7ddd024dd86cb8',
                  title: 'Portfolio Website',
                  name: 'sanity-portfolio-poc',
                  apiId: '8e20acff-de56-4e0a-bc28-adfa7f6aaf1f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/najro/sanity-portfolio-poc',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-portfolio-poc.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
