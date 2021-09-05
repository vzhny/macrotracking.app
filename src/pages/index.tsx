import AppContainer from '@/layout/AppContainer';
import { Main } from '@/templates/Main';
import { Meta } from '@/templates/Meta';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <AppContainer>
        <p>This is the home page.</p>
      </AppContainer>
    </Main>
  );
};

export default Index;
