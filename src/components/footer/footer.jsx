import ToxinLogo from '../toxin-logo/toxin-logo';
import TextField from '../text-field/text-field';

class Footer extends React.Component {
  render() {
    const {
      footerText, menu, subscribeTitle, subscribeText, copyright,
    } = this.props;
    return (
      <div className="footer">
        <div className="footer__content">
          <div className="footer__wrapper">
            <div className="footer__about-hotel">
              <div className="footer__toxin-logo">
                <ToxinLogo />
              </div>
              <div className="footer__text">{footerText}</div>
            </div>
            {menu.map((item) => {
              const { title, submenu } = item;
              return (
                <nav className="footer__item">
                  <div className="footer__subtitle">{title}</div>
                  {submenu.map((subitem) => {
                    const { url, text } = subitem;
                    return <a href={url} className="footer__subitem">{text}</a>;
                  })}
                </nav>
              );
            })}
            <div className="footer__subscribe">
              <div className="footer__subtitle">{subscribeTitle}</div>
              <div className="footer__subscribe-text">{subscribeText}</div>
              <div className="footer__subscribe-field">
                <TextField type="subscription" placeholder="Your email address"/>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <div className="copyright">
            <div className="copyright__text">{copyright}</div>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="copyright__twitter copyright__icon"></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="copyright__facebook copyright__icon"></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="copyright__instagram copyright__icon"></a>
          </div>
        </div>
      </div>
    );
  }
}

Footer.defaultProps = {
  footerText: 'Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque aliquam curabitur cociis.',
  menu: [{
    title: 'navigation',
    submenu: [{ url: '/mock-address', text: 'About Us' },
      { url: '/mock-address', text: 'News' },
      { url: '/mock-address', text: 'Support' },
      { url: '/mock-address', text: 'Products' }],
  },
  {
    title: 'about us',
    submenu: [{ url: '/mock-address', text: 'Who we are' },
      { url: '/mock-address', text: 'Our team' },
      { url: '/mock-address', text: 'Careers' },
      { url: '/mock-address', text: 'Investors' }],
  },
  {
    title: 'support',
    submenu: [{ url: '/mock-address', text: 'Documentation' },
      { url: '/mock-address', text: 'Community' },
      { url: '/mock-address', text: 'Get in Touch' }],
  }],
  subscribeTitle: 'Subscribe to our newsletter',
  subscribeText: 'Receive our latest news and promotions in your inbox!',
  copyright: 'Copyright © 2018 Toxin UI Kit. All rights reserved.',
};

export default Footer;
