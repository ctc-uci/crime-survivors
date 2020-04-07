const path = require('path');


const fixStringForWindows = (stringToFix) => {
  if (stringToFix != null) {
    return stringToFix.replace(/[^a-zA-Z ]/g, '');
  }
  return stringToFix;
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  // we use a Promise to make sure the data are loaded
  // before attempting to create the pages with them
  return new Promise((resolve, reject) => {
    // fetch your data here, generally with graphQL.
    graphql(`
      {
        allOrangeCountyYaml {
          edges {
            node {
              id
              title
              category
            }
          }
        }
      }
    `).then((result) => {
      // first check if there is no errors
      if (result.errors) {
        // reject Promise if error
        reject(result.errors);
      }
      const categoriesLoaded = new Set();
      // if no errors, you can map into the data and create your static pages
      result.data.allOrangeCountyYaml.edges.forEach(({ node }) => {
        // create page according to the fetched data
        createPage({
          path: `/${fixStringForWindows(node.category)}/${fixStringForWindows(node.title)}`, // your url -> /categories/orgtitle
          // component: path.resolve('./src/templates/resources.js'), // your template component
          component: path.resolve('./src/components/pagecontainer.js'),
          context: {
            id: node.id,
            // optional,
            // data here will be passed as props to the component `this.props.pathContext`,
            // as well as to the graphql query as graphql arguments.
          },
        });

        if (!categoriesLoaded.has(node.category)) {
          categoriesLoaded.add(node.category);
          createPage({
            path: `/${fixStringForWindows(node.category)}/${fixStringForWindows(node.title)}`, // your url -> /categories/orgtitle
            // component: path.resolve('./src/templates/categories.js'), // your template component
            component: path.resolve('./src/components/pagecontainer.js'),
            context: {
              category: node.category,
              id: node.id,
            },
          });
        }
      });

      resolve();
    });
  });
};
