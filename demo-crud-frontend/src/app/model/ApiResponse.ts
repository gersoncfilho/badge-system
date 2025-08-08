export interface ApiResponse {
  users: Array<User>;
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  empty: boolean;
}

interface User {
  id: number;
  about: string;
  address: string;
  age: number;
  balance: string;
  company: string;
  email: string;
  eyeColor: string | null;
  gender: string;
  isActive: boolean | null;
  latitude: number;
  longitude: number;
  name: string;
  phone: string;
  picture: string;
  registered: string;
}

interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

interface Sort {
  sorted: boolean;
  empty: boolean;
  unsorted: boolean;
}
