import {
  ComponentRendering,
  Image,
  ImageField,
  LayoutServiceData,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { getRenderingIndex } from 'lib/enhancers/get-rendering-index';

type CarouselItemProps = ComponentProps & {
  fields: {
    image: ImageField;
  };
  index: number;
};

const CarouselItem = ({ fields, index }: CarouselItemProps) => (
  <div className={`carousel-item ${index == 0 ? 'active' : ''}`}>
    <Image field={fields.image} className="d-block w-100" />
  </div>
);

export const getStaticProps = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
) => {
  const placeholders = layoutData.sitecore?.route?.placeholders;
  const result = getRenderingIndex(placeholders, rendering.uid as string, 'CarouselItem');
  return { index: result?.index };
};

export default withDatasourceCheck()<CarouselItemProps>(CarouselItem);
