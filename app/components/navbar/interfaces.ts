// export interface CategoryWithChildren {
//   id: string;
//   name: string;
//   slug: string;
//   children?: {
//     id: string;
//     name: string;
//     slug: string;
//   }[];
// }

// export interface CategoryWithChildren {
//   id: string;
//   name: string;
//   slug: string;
//   children?: CategoryWithChildren[]; // 👈 Esto es lo que falta
// }

export interface CategoryWithChildren {
  id: string;
  name: string;
  slug: string;
  children?: {
    id: string;
    name: string;
    slug: string;
  }[];
}