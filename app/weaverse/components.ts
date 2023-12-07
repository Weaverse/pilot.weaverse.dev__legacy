import type {HydrogenComponent} from '@weaverse/hydrogen';
import * as AllProducts from '~/sections/all-products';
import * as BlogPost from '~/sections/blog-post';
import * as Blogs from '~/sections/blogs';
import * as CollectionFilters from '~/sections/collection-filters';
import * as CollectionHeader from '~/sections/collection-header';
import * as CollectionList from '~/sections/collection-list';
import * as ContentColumnWithImage from '~/sections/column-with-text/index';
import * as ContentColumnItem from '~/sections/column-with-text/item';
import * as Countdown from '~/sections/CountDown/CountDown';
import * as CountDownTimer from '~/sections/CountDown/Timer';
import * as FeaturedCollections from '~/sections/featured-collections';
import * as FeaturedProducts from '~/sections/featured-products';
import * as ButtonItem from '~/sections/HeaderImage/ButtonImage';
import * as HeaderImage from '~/sections/HeaderImage/HeaderImage';
import * as Hero from '~/sections/hero';
import * as ImageGallery from '~/sections/ImageGallery';
import * as ImageGalleryItems from '~/sections/ImageGallery/items';
import * as ImageGalleryItem from '~/sections/ImageGallery/image';
import * as ImageWTextButtonItem from '~/sections/image-with-text/content-item/ButtonItem';
import * as ImageWithText from '~/sections/image-with-text/ImageWithText';
import * as Judgeme from '~/sections/judgeme-review';
import * as Main from '~/sections/main';
import * as Map from '~/sections/map';
import * as Page from '~/sections/page';
import * as ProductInformation from '~/sections/product-information';
import * as PromotionGridItem from '~/sections/PromotionGrid/item';
import * as PromotionGrid from '~/sections/PromotionGrid/PromotionGrid';
import * as RelatedArticles from '~/sections/related-articles';
import * as RelatedProducts from '~/sections/related-products';
import * as RichTextButtonItem from '~/sections/RichText/Button';
import * as RichText from '~/sections/RichText/RichText';
import {atoms} from '~/sections/shared/atoms';
import * as SingleProduct from '~/sections/single-product';
import * as Testimonial from '~/sections/testimonials';
import * as TestimonialItems from '~/sections/testimonials/items';
import * as TestimonialItem from '~/sections/testimonials/item';
import * as Video from '~/sections/Video/video';
import * as VideoItem from '~/sections/Video/VideoItem';
import * as VideoButtonItem from '~/sections/VideoWithText/VideoButtonItem';
import * as VideoWithText from '~/sections/VideoWithText/VideoWithText';

export let components: HydrogenComponent[] = [
  ...atoms,
  Main,
  Hero,
  Page,
  Video,
  VideoItem,
  CollectionHeader,
  HeaderImage,
  ButtonItem,
  ImageWithText,
  ImageWTextButtonItem,
  ContentColumnWithImage,
  ContentColumnItem,
  RichText,
  RichTextButtonItem,
  VideoWithText,
  VideoButtonItem,
  Map,
  PromotionGrid,
  PromotionGridItem,
  Countdown,
  CountDownTimer,
  Blogs,
  BlogPost,
  AllProducts,
  FeaturedProducts,
  FeaturedCollections,
  Testimonial,
  TestimonialItems,
  TestimonialItem,
  ImageGallery,
  ImageGalleryItems,
  ImageGalleryItem,
  ProductInformation,
  RelatedProducts,
  RelatedArticles,
  CollectionFilters,
  CollectionList,
  SingleProduct,
  Judgeme,
];
