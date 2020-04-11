const path = require('path');


const fixStringForWindows = (stringToFix) => {
  if (stringToFix != null) {
    return stringToFix.replace(/[^a-zA-Z0-9\- ]/g, '');
  }
  return stringToFix;
};

const generatePath = (category, title) => {
  if (title === '') {
    return `/${fixStringForWindows(category)}`;
  }
  return `/${fixStringForWindows(category)}/${fixStringForWindows(title)}`;
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const queryYamlNames = ['allOrangeCountyYaml'];

  const queryResources = `
    {
      allOrangeCountyYaml(filter: {title: {ne: null}}) {
        edges {
          node {
            id
            title
            category
          }
        }
      }
    }`;

  const queryCategories = `
    {
      allOrangeCountyYaml {
        group(field: category) {
          fieldValue
        }
      }
    }`;

  const generateResourcePages = (query, names) => new Promise((resolve, reject) => {
    graphql(query).then((result) => {
      if (result.errors) {
        reject(result.errors);
      }

      names.forEach((name) => {
        // if no errors, you can map into the data and create your static pages
        result.data[name].edges.forEach(({ node }) => {
          // create page according to the fetched data
          createPage({
            path: generatePath(node.category, node.title), // your url -> /categories/orgtitle
            component: path.resolve('./src/templates/resourcePage.js'), // your template component
            // component: path.resolve('./src/components/resourcePageContainer.js'),
            context: {
              id: node.id,
              // optional,
              // data here will be passed as props to the component `this.props.pathContext`,
              // as well as to the graphql query as graphql arguments.
            },
          });
        });
      });
      resolve();
    });
  });

  const generateCategoryPages = (query, names) => new Promise((resolve, reject) => {
    graphql(query).then((result) => {
      if (result.errors) {
        reject(result.errors);
      }

      names.forEach((name) => {
        // if no errors, you can map into the data and create your static pages
        result.data[name].group.forEach((category) => {
          // create page according to the fetched data
          createPage({
            path: generatePath(category.fieldValue, ''), // your url -> /categories/orgtitle
            component: path.resolve('./src/templates/categoryPage.js'), // your template component
            // component: path.resolve('./src/components/resourcePageContainer.js'),
            context: {
              category: category.fieldValue,
              // optional,
              // data here will be passed as props to the component `this.props.pathContext`,
              // as well as to the graphql query as graphql arguments.
            },
          });
        });
      });
      resolve();
    });
  });

  // we use a Promise to make sure the data are loaded
  // before attempting to create the pages with them
  return new Promise((resolve, reject) => {
    const promises = [generateResourcePages(queryResources, queryYamlNames),
      generateCategoryPages(queryCategories, queryYamlNames),
    ];
    // generateGuidePages(queryGuides);

    Promise.all(promises).then(() => resolve()).catch((error) => reject(error));
  });
};
