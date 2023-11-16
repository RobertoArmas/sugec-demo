import { GetStaticComponentProps, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { CustomFormLabels, customFormLabelId } from './types/custom-form-labels';
import { getLabelsForView } from '@constellation4sitecore/foundation-labels';
import { ComponentProps } from 'lib/component-props';

type CustomFormProps = ComponentProps & {
  labels: CustomFormLabels;
};

const CustomForm = ({ labels }: CustomFormProps) => (
  <>
    <div className="mb-3">
      <Text field={labels.emailAddress} tag="label" className="form-label" />
      <input
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder={labels.emailAddressPlaceholder?.value}
      />
    </div>
    <div className="mb-3">
      <Text field={labels.writeYourRequest} tag="label" className="form-label" />
      <textarea className="form-control" id="exampleFormControlTextarea1" />
    </div>
  </>
);

export const getStaticProps: GetStaticComponentProps = async () => {
  const labels = await getLabelsForView<CustomFormLabels>(customFormLabelId);
  return { labels: labels };
};

export default CustomForm;
