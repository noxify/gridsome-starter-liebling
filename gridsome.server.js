const _ = require('lodash');

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
    if( options.internal.typeName === 'CustomPage') {
      options.subtitle = options.subtitle || ''
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
          node {
            id
            path
            tags {
              title
            }
          }
        }
      }
    }`);

    data.allBlog.edges.forEach(({
      node
    }) => {

      //without the map, you will get an 500 error
      //because the graphql filter requires an array
      //not an object
      var tags = _.map(node.tags, function (tag) {
        return tag.title;
      });

      createPage({
        path: node.path,
        component: './src/templates/BlogPost.vue',
        context: {
          recordId: node.id,
          tags: tags,
        }
      });

    });
  });

}