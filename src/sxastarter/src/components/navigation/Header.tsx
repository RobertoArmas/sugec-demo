import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type HeaderProps = ComponentProps;

const Header = ({ rendering }: HeaderProps) => (
  <>
    <header className="header">
      <Placeholder name="primary-navigation" rendering={rendering} />
    </header>
  </>
);

export default Header;
