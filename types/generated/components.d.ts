import type { Schema, Attribute } from '@strapi/strapi';

export interface BodyBody extends Schema.Component {
  collectionName: 'components_body_bodies';
  info: {
    displayName: 'Body';
  };
  attributes: {};
}

export interface FooterFooter extends Schema.Component {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {};
}

export interface HeaderAbout extends Schema.Component {
  collectionName: 'components_header_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    About: Attribute.String;
  };
}

export interface HeaderContact extends Schema.Component {
  collectionName: 'components_header_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    Contact: Attribute.String;
  };
}

export interface HeaderHeader extends Schema.Component {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    Home: Attribute.Component<'header.home', true>;
    Shop: Attribute.Component<'header.shop', true>;
    About: Attribute.Component<'header.about', true>;
    Contact: Attribute.Component<'header.contact', true>;
    NavIcons: Attribute.Component<'header.nav-icons', true>;
  };
}

export interface HeaderHome extends Schema.Component {
  collectionName: 'components_header_homes';
  info: {
    displayName: 'Home';
  };
  attributes: {
    Home: Attribute.String;
  };
}

export interface HeaderNavIcons extends Schema.Component {
  collectionName: 'components_header_nav_icons';
  info: {
    displayName: 'NavIcons';
  };
  attributes: {
    userIcon: Attribute.String;
    searchIcon: Attribute.String;
    favoriteIcon: Attribute.String;
  };
}

export interface HeaderNavMenus extends Schema.Component {
  collectionName: 'components_header_nav_menus';
  info: {
    displayName: 'NavMenus';
  };
  attributes: {};
}

export interface HeaderShop extends Schema.Component {
  collectionName: 'components_header_shops';
  info: {
    displayName: 'Shop';
  };
  attributes: {
    Shop: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'body.body': BodyBody;
      'footer.footer': FooterFooter;
      'header.about': HeaderAbout;
      'header.contact': HeaderContact;
      'header.header': HeaderHeader;
      'header.home': HeaderHome;
      'header.nav-icons': HeaderNavIcons;
      'header.nav-menus': HeaderNavMenus;
      'header.shop': HeaderShop;
    }
  }
}
