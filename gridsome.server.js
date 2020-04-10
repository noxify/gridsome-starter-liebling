// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({
    addCollection
  }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({
    createPage
  }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

  api.onCreateNode(options => {
    if (options.internal.typeName === 'Blog') {
      options.featured = (options.featured) ? options.featured : false;
      options.tags = (typeof options.tags === 'string') ? options.tags.split(',').map(string => string.trim()) : options.tags;
      options.author = (typeof options.author === 'string') ? options.author.split(',').map(string => string.trim()) : options.author;
      return {
        ...options
      };
    }
  })

  api.createPages(async ({
    graphql,
    createPage
  }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
    const {
      data
    } = await graphql(`{
      allBlog {
        edges {
          previous {
            id
          }
          next {
            id
          }
          node {
            id
            path
          }
        }
      }
    }
    `);

    data.allBlog.edges.forEach(function (element) {
      createPage({
        path: element.node.path,
        component: './src/templates/BlogPost.vue',
        context: {
          previousElement: (element.previous) ? element.previous.id : '##empty##',
          nextElement: (element.next) ? element.next.id : '##empty##',
          id: element.node.id
        }
      });

    });

  });
}