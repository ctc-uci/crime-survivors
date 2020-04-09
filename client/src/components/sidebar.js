import React from 'react';
import PropTypes from 'prop-types';
// import { graphql } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';


const Sidebar = ({ data }) => {
  // const { resources } = props;
  // const { nodes } = resources;
  const { allOrangeCountyYaml } = data;
  const { nodes } = allOrangeCountyYaml;

  console.log(JSON.stringify(nodes, null, 2));

  return (
    <div>
      <h1>HELLO THIS IS THE SIDEBAR</h1>
      {nodes.map((resource) => (
        <div key={uuidv4()}>
          <h1>{resource.title}</h1>
          <div>{resource.desc}</div>
        </div>
      ))}
      <p>yadadada</p>
    </div>
  );
};

// export const query = graphql`
//   query SidebarQuery($category: String!) {
//     allOrangeCountyYaml(filter: {category: { eq: $category }}) {
//       nodes {
//         id
//         category
//         title
//         desc
//         phone {
//           desc
//           number
//         }
//         website
//         email
//         hours
//         address
//       }
//     }
//   }
// `;

// Defaults values for props, required by eslint
Sidebar.defaultProps = {
  data: {
    allOrangeCountyYaml: {
      nodes: [{
        address: 'address',
        category: 'category',
        phone: [{ desc: 'desc', number: '(555) 555-5555' }],
        title: 'title',
        desc: 'desc',
      },
      ],
    },
  },
};


// Proptype validation, required by eslint
Sidebar.propTypes = {
  data: PropTypes.shape({
    allOrangeCountyYaml: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          address: PropTypes.string,
          category: PropTypes.string,
          phone: PropTypes.arrayOf(
            PropTypes.shape({
              desc: PropTypes.string,
              number: PropTypes.string,
            }),
          ),
          title: PropTypes.string,
          desc: PropTypes.string,
        }),
      ),
    }),
  }),
};

export default Sidebar;
