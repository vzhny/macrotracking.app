import { NextPage } from 'next';

import AppContainer from '@/layout/AppContainer';
import { Main } from '@/templates/Main';
import { Meta } from '@/templates/Meta';
import { AppConfig } from '@/utils/AppConfig';

const Settings: NextPage = () => {
  return (
    <Main meta={<Meta title={`${AppConfig.title} - Settings`} />}>
      <AppContainer>
        <p>This is the settings page.</p>
      </AppContainer>
    </Main>
  );
};

export default Settings;
