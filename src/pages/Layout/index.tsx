import { Card, Layout, Steps } from 'antd';
import React, { useEffect, useState } from 'react';
import { Location } from 'history';
import { getLanguageData } from '../../locales';
import CommonFooter from '../../components/CommonFooter';
import CommonHeader from '../../components/CommonHeader';
import SelectLang from '../../components/SelectLang';
import './index.less';
import { TypeConfig } from '../../type';

const { Header, Footer, Content } = Layout;
const { Step } = Steps;

interface Props {
  children?: React.ReactChild;
  location: Location;
}

export function getCurrentStep(type = ''): number {
  switch (type) {
    case TypeConfig.search:
      return 0;
    case TypeConfig.chapter:
      return 1;
    case TypeConfig.download:
      return 2;
    case TypeConfig.result:
      return 3;
    default:
      return 0;
  }
}

const HomePage: React.FunctionComponent<Props> = ({
  children,
  location: { pathname },
}) => {
  const [currentType, setCurrentType] = useState<string>('');
  useEffect(() => {
    const [, temp] = pathname.split('/');
    setCurrentType(temp);
  }, [pathname]);
  const isVertical: boolean = window.innerWidth > 800;
  return (
    <Layout className="home-page" style={{ minHeight: '100vh' }}>
      <Header>
        <CommonHeader>
          <SelectLang />
        </CommonHeader>
      </Header>
      <Content>
        <Card>
          <Steps
            size={isVertical ? 'default' : 'small'}
            labelPlacement={isVertical ? 'vertical' : 'horizontal'}
            current={getCurrentStep(currentType)}
          >
            <Step title={getLanguageData('page.HomePage.step0')} />
            <Step title={getLanguageData('page.HomePage.step1')} />
            <Step title={getLanguageData('page.HomePage.step2')} />
            <Step title={getLanguageData('page.HomePage.step3')} />
          </Steps>
        </Card>
        <Card>{children}</Card>
      </Content>
      <Footer>
        <CommonFooter />
      </Footer>
    </Layout>
  );
};

export default HomePage;
