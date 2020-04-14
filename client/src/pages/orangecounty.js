// import React from 'react';
// import PropTypes from 'prop-types';
// import { graphql } from 'gatsby';
// import PageContainer from '../components/pagecontainer';
// import Sidebar from '../components/sidebar';

// const OrangeCountyPage = ({ data }) => {
//   const { allOrangeCountyYaml } = data;
//   const { nodes } = allOrangeCountyYaml;

//   return (
//     <PageContainer>
//       <div>
//         <Sidebar resources={nodes} />
//       </div>
//     </PageContainer>
//   );
// };

// OrangeCountyPage.defaultProps = {
//   data: {
//     allOrangeCountyYaml: {
//       nodes: [{
//         address: 'address',
//         category: 'category',
//         phone: [{ desc: 'desc', number: '(555) 555-5555' }],
//         title: 'title',
//         desc: 'desc',
//       },
//       ],
//     },
//   },
// };

// export const query = graphql`
//   query OCQuery($category: String!) {
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

// // Proptype validation, required by eslint
// OrangeCountyPage.propTypes = {
//   data: PropTypes.shape({
//     allOrangeCountyYaml: PropTypes.shape({
//       nodes: PropTypes.arrayOf(
//         PropTypes.shape({
//           address: PropTypes.string,
//           category: PropTypes.string,
//           phone: PropTypes.arrayOf(
//             PropTypes.shape({
//               desc: PropTypes.string,
//               number: PropTypes.string,
//             }),
//           ),
//           title: PropTypes.string,
//           desc: PropTypes.string,
//         }),
//       ),
//     }),
//   }),
// };

// export default OrangeCountyPage;
