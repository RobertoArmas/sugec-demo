import { ComponentProps } from 'lib/component-props';

export type AlertProps = ComponentProps;

const Alert = () => (
  <div className="alert alert-primary" role="alert">
    A simple primary alert—check it out!
  </div>
);

export const getStaticProps = () => {
  return {};
};
export default Alert;
