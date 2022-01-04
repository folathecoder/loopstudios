export interface NavDataTypes {
  logo: {
    image: string;
    altText: string;
    link: string;
  };
  menu: {
    title: string;
    link: string;
  }[];
  social: { title: string; icon: string; link: string }[];
  copyright: string;
}
