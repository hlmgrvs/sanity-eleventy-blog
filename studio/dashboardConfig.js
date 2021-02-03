export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '601ae28abd005e0cce8fab70',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-srkse13u',
                  apiId: '53bb4a5b-e6ef-4998-9ebf-eea35b85c554'
                },
                {
                  buildHookId: '601ae28aecef8600982a323e',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-bp8wukfq',
                  apiId: 'a6e36086-450e-40b6-ba58-d9b686ae510c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hlmgrvs/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-bp8wukfq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
