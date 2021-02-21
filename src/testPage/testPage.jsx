/* eslint-disable max-len */
import Header from '../components/header/header';
import Dropdown from '../components/dropdown/dropdown';
import myVars from '../variables/variables';
import TextField from '../components/text-field/text-field';
import Footer from '../components/footer/footer';

class TestPage extends React.Component {
  render() {
    // return <Header navbar={navbarInHeaderRu} userName="Maykl Yakubchuk" />;
    // return <Header navbar={navbarInHeaderRu} butLogin="Войти" butRegister="Зарегистрироваться"/>;
    return (
      <>
      <Footer footerText="Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque aliquam curabitur cociis." menu={myVars.footerMenuEn} subscribeTitle="Subscribe to our newsletter" subscribeText="Receive our latest news and promotions in your inbox!" copyright="Copyright © 2018 Toxin UI Kit. All rights reserved."/>
      </>
    );
  }
}

export default TestPage;
