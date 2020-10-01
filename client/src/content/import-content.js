// https://contentful.github.io/contentful-management.js/contentful-management/latest/ContentfulEnvironmentAPI.html#.createEntry

const contentful = require('contentful-management');

const client = contentful.createClient({
  accessToken: 'CFPAT-4DzCJZZjNbwSXj8LS87IUZZlz0EoCfyCVG0-vd0fdu4',
});

const jsonData = require('./ventura_county.json');

function populate(environment) {
  for (let i = 0; i < jsonData.length; i += 1) {
    const item = jsonData[i];
    environment.createEntry('resourceGuide', {
      fields: {
        location: {
          'en-US': item.location,
        },
        category: {
          'en-US': item.category,
        },
        title: {
          'en-US': item.title,
        },
        desc: {
          'en-US': item.desc,
        },
        phoneNumber: {
          'en-US': item.phone ? item.phone.map((p) => `${p.number} ${p.desc ? p.desc : ''}`) : [],
        },
        website: {
          'en-US': item.website,
        },
        email: {
          'en-US': item.email,
        },
        hours: {
          'en-US': item.hours,
        },
        address: {
          'en-US': item.address,
        },
      },
    })
      .catch(console.error);
  }
}

client.getSpace('icbf40caaie6')
  .then((space) => space.getEnvironment('master'))
  .then((environment) => { populate(environment); });
