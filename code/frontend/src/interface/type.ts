export type FormField = {
  name: string;
  email: string;
  address: string;
  website: string;
  desciption: string;
  rating: number;
  vote_quantity: number;
  image: string;
  avatar: string;
  industry: string;
  country: string;
  city: string;
  ot: string;
  techstacks: [string];
};

export type TextInputGroupT = {
  label: string;
  type: string;
  nregister:
    | 'name'
    | 'email'
    | 'address'
    | 'website'
    | 'desciption'
    | 'rating'
    | 'vote_quantity'
    | 'image'
    | 'avatar'
    | 'industry'
    | 'country'
    | 'city'
    | 'ot'
    | 'techstacks'
    | 'techstacks.0';
};

export type SelectInputGroupT = {
  label: string;
  options: string[];
  set: (value: string) => void;
  value: string;
};

export type SearchResult = {
  company_id: string;
  name: string;
  avatar: string;
  rating: number;
  vote_quantity: number;
};

export type Trending = {
  company_id: string;
  name: string;
};

export type DropdownType = {
  isOpen: boolean;
  toggleDropdown: () => void;
  dropdownRef: React.RefObject<HTMLDivElement>;
};
