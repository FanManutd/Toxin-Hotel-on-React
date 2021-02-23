import myVars from '../../../variables/variables';
import Logo from '../../../components/logo/logo';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
import FooterCreative from '../../../components/footer-creative/footer-creative';

function HeadersFooters() {
  return (
    <>
    <div className="logo">
      <div className="logo__wrapper">
        <Logo />
      </div>
    </div>
    <div className="headers-footers">
      <div className="headers-footers__header">
        <Header navbar={myVars.navbarInHeaderEn} butLogin="login" butRegister="register" />
      </div>
      <div className="headers-footers__header_user">
        <Header navbar={myVars.navbarInHeaderEn} userName="Cosmin Negoita" />
      </div>
      <div className="headers-footers__footer">
        <Footer footerText="Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque aliquam curabitur cociis." menu={myVars.footerMenuEn} subscribeTitle="Subscribe to our newsletter" subscribeText="Receive our latest news and promotions in your inbox!" copyright="Copyright © 2018 Toxin UI Kit. All rights reserved." />
      </div>
      <div className="headers-footers__footer-creative">
        <FooterCreative />
      </div>
    </div>
    </>
  );
}

export default HeadersFooters;
