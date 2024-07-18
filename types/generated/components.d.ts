import type { Schema, Attribute } from '@strapi/strapi';

export interface BodyBody extends Schema.Component {
  collectionName: 'components_body_bodies';
  info: {
    displayName: 'body';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.Text;
    description: Attribute.Text;
    button: Attribute.Component<'body.button'>;
    productImage: Attribute.Component<'body.product-image', true>;
  };
}

export interface BodyButton extends Schema.Component {
  collectionName: 'components_body_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    text: Attribute.String;
    type: Attribute.String;
  };
}

export interface BodyProductImage extends Schema.Component {
  collectionName: 'components_body_product_images';
  info: {
    displayName: 'productImage';
    description: '';
  };
  attributes: {
    image: Attribute.String;
    text: Attribute.String;
    subText: Attribute.String;
    price: Attribute.String;
    bannerImage: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface FooterFooter extends Schema.Component {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'footer';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    main: Attribute.String;
    submain: Attribute.String;
    subtitle: Attribute.String;
    sub: Attribute.String;
    text: Attribute.String;
    description: Attribute.Text;
  };
}

export interface HeaderHeader extends Schema.Component {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'header';
    description: '';
  };
  attributes: {
    NavMenu: Attribute.Component<'header.nav-menu'>;
    NavIcon: Attribute.Component<'header.nav-icon'>;
    logo: Attribute.String;
  };
}

export interface HeaderNavIcon extends Schema.Component {
  collectionName: 'components_header_nav_icons';
  info: {
    displayName: 'NavIcon';
  };
  attributes: {
    UserIcon: Attribute.String;
    SearchIcon: Attribute.String;
    FavoriteIcon: Attribute.String;
  };
}

export interface HeaderNavMenu extends Schema.Component {
  collectionName: 'components_header_nav_menus';
  info: {
    displayName: 'NavMenu';
  };
  attributes: {
    Home: Attribute.String;
    Shop: Attribute.String;
    About: Attribute.String;
    Contact: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'body.body': BodyBody;
      'body.button': BodyButton;
      'body.product-image': BodyProductImage;
      'footer.footer': FooterFooter;
      'header.header': HeaderHeader;
      'header.nav-icon': HeaderNavIcon;
      'header.nav-menu': HeaderNavMenu;
    }
  }
}
