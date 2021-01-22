export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '600abd3eee78a1089f5392c5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-eenttxg2',
                  apiId: 'd5251080-2c4d-4fd3-bfcf-3065a2e27654'
                },
                {
                  buildHookId: '600abd3e96b2560019cf686c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-gv5ru548',
                  apiId: '201f410e-ed27-41fd-b381-b757da680108'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mulupi/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-gv5ru548.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
