import type { HydrogenComponent } from '@weaverse/hydrogen';
import * as AllProducts from '~/sections/all-products';
import * as BlogPost from '~/sections/blog-post';
import * as Blogs from '~/sections/blogs';
import * as CollectionBanner from '~/sections/collection-banner';
import * as CollectionFilters from '~/sections/collection-filters';
import * as CollectionList from '~/sections/collection-list';
import * as ColumnWithImage from '~/sections/column-with-image';
import * as ColumnWithImageItem from '~/sections/column-with-image/item';
import * as Countdown from '~/sections/countdown';
import * as CountdownActions from '~/sections/countdown/actions';
import * as CountDownTimer from '~/sections/countdown/timer';
import * as FeaturedCollections from '~/sections/featured-collections';
import * as FeaturedProducts from '~/sections/featured-products';
import * as ImageBanner from '~/sections/image-banner';
import * as ImageGallery from '~/sections/image-gallery';
import * as ImageGalleryItem from '~/sections/image-gallery/image';
import * as ImageGalleryItems from '~/sections/image-gallery/items';
import * as ImageWithText from '~/sections/image-with-text';
import * as ImageWithTextContent from '~/sections/image-with-text/content';
import * as ImageWithTextImage from '~/sections/image-with-text/image';
import * as Map from '~/sections/map';
import * as Page from '~/sections/page';
import * as ProductInformation from '~/sections/product-information';
import * as PromotionGrid from '~/sections/promotion-grid';
import * as PromotionGridButtons from '~/sections/promotion-grid/buttons';
import * as PromotionGridItem from '~/sections/promotion-grid/item';
import * as RelatedArticles from '~/sections/related-articles';
import * as RelatedProducts from '~/sections/related-products';
import { commonComponents } from '~/sections/shared/atoms';
import * as SingleProduct from '~/sections/single-product';
import * as Judgeme from '~/sections/single-product/judgeme-review';
import * as Testimonial from '~/sections/testimonials';
import * as TestimonialItem from '~/sections/testimonials/item';
import * as TestimonialItems from '~/sections/testimonials/items';
import * as VideoBanner from '~/sections/video-banner';
import * as VideoEmbed from '~/sections/video-embed';
import * as VideoEmbedItem from '~/sections/video-embed/video';
import * as MetaDemo from '~/sections/meta-demo';
export let components: HydrogenComponent[] = [
  ...commonComponents,
  AllProducts,
  BlogPost,
  Blogs,
  CollectionBanner,
  Page,
  VideoEmbed,
  VideoEmbedItem,
  ImageBanner,
  ImageWithText,
  ImageWithTextContent,
  ImageWithTextImage,
  ColumnWithImage,
  ColumnWithImageItem,
  VideoBanner,
  Map,
  PromotionGrid,
  PromotionGridItem,
  PromotionGridButtons,
  Countdown,
  CountDownTimer,
  CountdownActions,
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
  MetaDemo
];
