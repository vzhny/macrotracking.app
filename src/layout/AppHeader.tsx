import { useState } from 'react';

import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {
  faBook,
  faCog,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';

import { AppConfig } from '@/utils/AppConfig';

interface AppNavLink {
  name: string;
  route: string;
  icon: IconDefinition;
}

const AppHeader = () => {
  const { asPath } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const navLinks: AppNavLink[] = [
    {
      name: 'Dashboard',
      route: 'dashboard',
      icon: faTachometerAlt,
    },
    {
      name: 'Recipes',
      route: 'recipes',
      icon: faBook,
    },
    {
      name: 'Settings',
      route: 'settings',
      icon: faCog,
    },
  ];

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md">
      <Container>
        <NavbarBrand href="/" className="font-mono">
          {AppConfig.siteName}
        </NavbarBrand>
        <NavbarToggler onClick={() => toggle()} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto space-x-3" navbar>
            {navLinks.map(({ name, route, icon }, index) => (
              <NavItem key={index}>
                <Link href={`/${route}`} passHref>
                  <NavLink className={asPath === `/${route}/` ? 'active' : ''}>
                    <div className="flex items-center content-center space-x-1">
                      <FontAwesomeIcon icon={icon} className="h-4" />
                      <span>{name}</span>
                    </div>
                  </NavLink>
                </Link>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default AppHeader;
