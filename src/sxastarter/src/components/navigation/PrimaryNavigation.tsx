import { NavigationLink, getNavLinks } from '@constellation4sitecore/feature-navigation';
import { GraphNavigationMenu } from '@constellation4sitecore/feature-navigation/types/models/navigation-menu';
import { mapToNew } from '@constellation4sitecore/foundation-mapper';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type PrimaryNavigationProps = ComponentProps & {
  navigation: GraphNavigationMenu;
};

const PrimaryNavigation = ({ navigation }: PrimaryNavigationProps) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        SUG Demo
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {navigation?.items?.children?.results?.map((item) => {
            if (item.template.name == 'Navigation Link') {
              const link = mapToNew<NavigationLink>(item);
              return (
                <li className="nav-item" key={item.id}>
                  <a className="nav-link" href={link?.link.value.href}>
                    {link?.useThisDisplayName ? item.displayName : link?.link.value.text}
                  </a>
                </li>
              );
            }
            if (item.template.name == 'Link Group') {
              return (
                <li className="nav-item dropdown" key={item.id}>
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {item.name}
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {item.children.results.map((child) => {
                      const link = mapToNew<NavigationLink>(child);
                      return (
                        <li key={child.id}>
                          <a href={link?.link.value.href} className="dropdown-item">
                            {link?.useThisDisplayName ? child.name : link?.link.value.text}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  </nav>
);

export const getStaticProps = async (rendering: ComponentRendering) => {
  const navigation = {
    items: {
      children: await getNavLinks(rendering.dataSource as string),
    },
  };

  for (const item of navigation.items.children.results) {
    if (item.template.name == 'Link Group') {
      item.children = await getNavLinks(item.id);
    }
  }

  return { navigation };
};

export default PrimaryNavigation;
