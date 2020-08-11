export interface TitlePropType {
  title: string
  location: string
  category: string
}

export interface ResourcePropType  {
  location: string
  category: string
  title: string
  desc: { desc: string }
  phone: {
    desc: string
    number: string
  }[],
  website: string[]
  email: string[]
  hours: string
  address: string
};

export interface CategoryPropType {
  location: string
  category: string
}