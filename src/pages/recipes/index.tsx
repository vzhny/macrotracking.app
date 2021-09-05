import { NextPage } from 'next';

import AppContainer from '@/layout/AppContainer';
import { Main } from '@/templates/Main';
import { Meta } from '@/templates/Meta';
import { AppConfig } from '@/utils/AppConfig';

const Recipes: NextPage = () => {
  return (
    <Main meta={<Meta title={`${AppConfig.title} - Recipes`} />}>
      <AppContainer>
        <p>This is the recipes page.</p>
      </AppContainer>
    </Main>
  );
};

export default Recipes;
