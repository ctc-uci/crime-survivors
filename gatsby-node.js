const path = require('path');
const { pathify } = require('./src/common/utils/commonUtils'); // forced ES5 for some reason

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const queryCounties = `
    {
      allContentfulResource {
        locations: distinct(field: location)
      }
    }
  `;

  const generateCountyPages = (query) => new Promise((resolve, reject) => {
    graphql(query).then((result) => {
      if (result.errors) {
        reject(result.errors);
      }

      const { locations } = result.data.allContentfulResource;
      locations.forEach((location) => {
        const newPath = pathify([location, '']);
        createPage({
          path: newPath,
          component: path.resolve('./src/templates/CountyPage.tsx'), // your template component
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
      const uniqueUrls = new Set();

      nodes.forEach((node) => {
        const { location, category } = node;
        const newPath = pathify([location, category]);
        if (uniqueUrls.has(newPath)) {
          return;
        }
        uniqueUrls.add(newPath);
        createPage({
          path: newPath, // your url -> /location/category
          component: path.resolve('./src/templates/CategoryPage.tsx'), // your template component
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
      allContentfulGeneralGuide {
        categories: distinct(field: category)
      }
    }
    `;

  const generateGuidePages = (query) => new Promise((resolve, reject) => {
    graphql(query).then((result) => {
      if (result.errors) {
        reject(result.errors);
      }

      const { categories } = result.data.allContentfulGeneralGuide;
      categories.forEach((category) => {
        createPage({
          path: pathify(['guide', category]), // your url -> /location/category
          component: path.resolve('./src/templates/GuidePage.tsx'), // your template component
          context: {
            category,
            // data here will be passed as props to the component `this.props.pathContext`,
            // as well as to the graphql query as graphql arguments.
          },
        });
      });
      resolve();
    });
  });

  const generateLandingPage = () => {
    createPage({
      path: '/',
      component: path.resolve('./src/components/landingPage/LandingPage.tsx'),
    });
  };

  // const generateGuideLandingPage = () => {
  //   createPage({
  //     path: '/guide/',
  //     component: path.resolve('./src/components/guideLandingPage/GuideLandingPage.ts'),
  //   });
  // };

  // we use a Promise to make sure the data are loaded
  // before attempting to create the pages with them
  return new Promise((resolve, reject) => {
    const promises = [
      generateCountyPages(queryCounties),
      generateCategoryPages(queryCategories),
      generateGuidePages(queryGuides),
    ];

    // static pages
    generateLandingPage();
    // generateGuideLandingPage();

    Promise.all(promises).then(() => resolve()).catch((error) => reject(error));
  });
};
