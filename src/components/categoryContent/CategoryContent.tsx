import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CategoryPageContent, ResourceContent } from '../../templates/CategoryPage.interface';
import './category-content.scss';

interface CategoryPageProps {
  categoryData: CategoryPageContent,
  location: string,
  category: string,
}

const ResourceSection: React.FC<ResourceContent> = ({
  title, address, phone, desc, website, email,
}) => (
  <div className="resource-section">
    <h1>{title}</h1>
    <p>{desc.desc}</p>
    <p>{address}</p>
    {phone && phone.map((p) => (
      <p>
        {p.number}
        {' '}
        {p.desc}
      </p>
    ))}
    <p><a href={website}>{website}</a></p>
    <p><a href={`mailto:${email}`}>{email}</a></p>
  </div>
);

const CategoryContent: React.FC<CategoryPageProps> = ({ categoryData, category }) => (
  <div>
    <p className="h0">{category}</p>
    <hr className="blue" />
    {/* TODO: fix hr not responding to max-width */}
    {categoryData.nodes.map((resource) => (
      <div id={encodeURI(resource.title)} key={uuidv4()}>
        <ResourceSection
          id={resource.id}
          location={resource.location}
          title={resource.title}
          address={resource.address}
          category={resource.category}
          phone={resource.phone}
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
