import {
  Field,
  ImageField,
  LinkField,
  Text,
  RichText,
  Link,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type CardProps = ComponentProps & {
  fields: {
    image: ImageField;
    heading: Field<string>;
    copy: Field<string>;
    primaryCTA: LinkField;
  };
};

const Card = ({ fields }: CardProps) => (
  <div className="card">
    <div className="card-body">
      <Text field={fields.heading} tag="h4" />
      <RichText field={fields.copy} className="card-text" />
      {fields.primaryCTA?.value.href && (
        <Link field={fields.primaryCTA} className="btn btn-primary" />
      )}
    </div>
  </div>
);
export default Card;
