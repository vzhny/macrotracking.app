import { NextPage } from 'next';

import AppContainer from '@/layout/AppContainer';
import { Main } from '@/templates/Main';
import { Meta } from '@/templates/Meta';
import { AppConfig } from '@/utils/AppConfig';

const Dashboard: NextPage = () => {
  return (
    <Main meta={<Meta title={`${AppConfig.title} - Dashboard`} />}>
      <AppContainer>
        <p>This is the dashboard page.</p>
      </AppContainer>
    </Main>
  );
};

export default Dashboard;
