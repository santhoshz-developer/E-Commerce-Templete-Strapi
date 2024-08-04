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
    template_Id: Attribute.BigInteger;
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
    offer: Attribute.String;
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
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
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
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface HeaderNavIcon extends Schema.Component {
  collectionName: 'components_header_nav_icons';
  info: {
    displayName: 'NavIcon';
    description: '';
  };
  attributes: {
    UserIcon: Attribute.String;
    SearchIcon: Attribute.String;
    FavoriteIcon: Attribute.String;
    Cart: Attribute.String;
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

export interface ProductDetailsButton extends Schema.Component {
  collectionName: 'components_product_details_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    addToCart: Attribute.Boolean;
    Compare: Attribute.Boolean;
    count: Attribute.BigInteger;
  };
}

export interface ProductDetailsDescriptionImage extends Schema.Component {
  collectionName: 'components_product_details_description_images';
  info: {
    displayName: 'DescriptionImage';
  };
  attributes: {
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface ProductDetailsExtraDetails extends Schema.Component {
  collectionName: 'components_product_details_extra_details';
  info: {
    displayName: 'extra-details';
  };
  attributes: {
    SKU: Attribute.String;
    Category: Attribute.String;
    Tags: Attribute.String;
  };
}

export interface ProductDetailsProductDetails extends Schema.Component {
  collectionName: 'components_product_details_product_details';
  info: {
    displayName: 'productDetails';
    description: '';
  };
  attributes: {
    SideImages: Attribute.Component<'product-details.side-images', true>;
    SeletedImage: Attribute.Component<'product-details.seleted-image', true>;
    button: Attribute.Component<'product-details.button', true>;
    extraDetails: Attribute.Component<'product-details.extra-details', true>;
    Share: Attribute.Component<'product-details.share', true>;
    seletedTabs: Attribute.Component<'product-details.seleted-tabs', true>;
    DescriptionImage: Attribute.Component<'product-details.description-image'>;
  };
}

export interface ProductDetailsSeletedImage extends Schema.Component {
  collectionName: 'components_product_details_seleted_images';
  info: {
    displayName: 'SeletedImage';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    name: Attribute.String;
    price: Attribute.String;
    customerReview: Attribute.String;
    description: Attribute.Text;
    size: Attribute.JSON;
  };
}

export interface ProductDetailsSeletedTabs extends Schema.Component {
  collectionName: 'components_product_details_seleted_tabs';
  info: {
    displayName: 'seletedTabs';
  };
  attributes: {
    tabsHeading: Attribute.JSON;
    Description1: Attribute.Text;
    Description2: Attribute.Text;
    additionalInformation: Attribute.Text;
    reviews: Attribute.Text;
  };
}

export interface ProductDetailsShare extends Schema.Component {
  collectionName: 'components_product_details_shares';
  info: {
    displayName: 'Share';
  };
  attributes: {
    facebook: Attribute.String;
    linkedin: Attribute.String;
    twitter: Attribute.String;
  };
}

export interface ProductDetailsSideImages extends Schema.Component {
  collectionName: 'components_product_details_side_images';
  info: {
    displayName: 'SideImages';
  };
  attributes: {
    image: Attribute.String;
    SideImages: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface UserDetailsUserDetails extends Schema.Component {
  collectionName: 'components_user_details_user_details';
  info: {
    displayName: 'userDetails';
  };
  attributes: {
    userId: Attribute.String;
    username: Attribute.String;
    email: Attribute.Email;
    password: Attribute.Password;
    phoneNumber: Attribute.Integer;
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
      'product-details.button': ProductDetailsButton;
      'product-details.description-image': ProductDetailsDescriptionImage;
      'product-details.extra-details': ProductDetailsExtraDetails;
      'product-details.product-details': ProductDetailsProductDetails;
      'product-details.seleted-image': ProductDetailsSeletedImage;
      'product-details.seleted-tabs': ProductDetailsSeletedTabs;
      'product-details.share': ProductDetailsShare;
      'product-details.side-images': ProductDetailsSideImages;
      'user-details.user-details': UserDetailsUserDetails;
    }
  }
}
