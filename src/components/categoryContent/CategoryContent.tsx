import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Element } from 'react-scroll';
import { urlEncode } from '../../common/utils/commonUtils';
import { CategoryPageContent, ResourceContent } from '../../templates/CategoryPage.interface';
import './category-content.scss';

interface CategoryPageProps {
  categoryData: CategoryPageContent,
  location: string,
  category: string,
}

const ResourceSection: React.FC<ResourceContent> = ({
  title, address, phoneNumbers, desc, website, email,
}) => (
  <Element className="resource-section" name={urlEncode(title)}>
    <h1>{title}</h1>
    {desc && desc.desc && <p>{desc.desc}</p>}
    <p>{address}</p>
    {phoneNumbers && phoneNumbers.map((phone) => <p>{phone}</p>)}
    <p><a href={website}>{website}</a></p>
    <p><a href={`mailto:${email}`}>{email}</a></p>
  </Element>
);

const CategoryContent: React.FC<CategoryPageProps> = ({ categoryData, category }) => (
  <div>
    <p className="h0 blue">{category}</p>
    <hr className="blue" />
    {/* TODO: fix hr not responding to max-width */}
    {categoryData.nodes.map((resource) => (
      <div id={urlEncode(resource.title)} key={uuidv4()}>
        <ResourceSection
          id={resource.id}
          location={resource.location}
          title={resource.title}
          address={resource.address}
          category={resource.category}
          phoneNumbers={resource.phoneNumbers}
          desc={resource.desc}
          website={resource.website}
          email={resource.email}
        />
        <hr className="blue-long" />
      </div>
    ))}
  </div>
);

export default CategoryContent;
