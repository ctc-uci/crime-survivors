const path = require('path');
const { pathify } = require('./src/utils/commonUtils'); // forced ES5 for some reason

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const queryCounties = `
    {
      allContentfulResource {
        nodes {
          location
        }
      }
    }
  `;

  const generateCountyPages = (query) => new Promise((resolve, reject) => {
    graphql(query).then((result) => {
      if (result.errors) {
        reject(result.errors);
      }

      const { nodes } = result.data.allContentfulResource;
      const urls = new Set();
      nodes.forEach((node) => {
        const { location } = node;
        const newPath = pathify([location, '']);
        if (urls.has(newPath)) {
          return;
        }
        urls.add(newPath);
        createPage({
          path: newPath, // your url -> /location/category
          component: path.resolve('./src/templates/CountyPage.js'), // your template component
          context: {
            location,
          },
        });
      });
      resolve();
    });
  });

  const queryCategories = `
    {
      allContentfulResource {
        nodes {
          category
          location
        }
      }
    }
  `;

  const generateCategoryPages = (query) => new Promise((resolve, reject) => {
    graphql(query).then((result) => {
      if (result.errors) {
        reject(result.errors);
      }

      const { nodes } = result.data.allContentfulResource;
      const urls = new Set();
      nodes.forEach((node) => {
        const { location } = node;
        const { category } = node;
        const newPath = pathify([location, category]);
        if (urls.has(newPath)) {
          return;
        }
        urls.add(newPath);
        createPage({
          path: newPath, // your url -> /location/category
          component: path.resolve('./src/templates/CategoryPage.js'), // your template component
          context: {
            category,
            location,
            // data here will be passed as props to the component `this.props.pathContext`,
            // as well as to the graphql query as graphql arguments.
          },
        });
      });
      resolve();
    });
  });

  const queryGuides = `
    {
      allContentfulGuide {
        nodes {
          title
        }
      }
    }
    `;

  const generateGuidePages = (query) => new Promise((resolve, reject) => {
    graphql(query).then((result) => {
      if (result.errors) {
        reject(result.errors);
      }

      const { nodes } = result.data.allContentfulGuide;
      nodes.forEach((node) => {
        const { title } = node;
        createPage({
          path: pathify(['guide', title]), // your url -> /location/category
          component: path.resolve('./src/templates/GuidePage.js'), // your template component
          context: {
            title,
            // data here will be passed as props to the component `this.props.pathContext`,
            // as well as to the graphql query as graphql arguments.
          },
        });
      });
      resolve();
    });
  });

  // we use a Promise to make sure the data are loaded
  // before attempting to create the pages with them
  return new Promise((resolve, reject) => {
    const promises = [
      generateCountyPages(queryCounties),
      generateCategoryPages(queryCategories),
      generateGuidePages(queryGuides),
    ];

    Promise.all(promises).then(() => resolve()).catch((error) => reject(error));
  });
};
