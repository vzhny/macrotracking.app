import { ReactNode } from 'react';

import { Container } from 'reactstrap';

interface AppContainerProps {
  children: ReactNode;
}

const AppContainer = ({ children }: AppContainerProps) => {
  return <Container className="mt-4">{children}</Container>;
};

export default AppContainer;
