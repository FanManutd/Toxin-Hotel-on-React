import ToxinLogo from '../toxin-logo/toxin-logo';

function FooterCreative() {
  return (
    <div className="footer-creative">
      <div className="footer-creative__wrapper">
        <div className="footer-creative__logo">
          <ToxinLogo />
        </div>
        <div className="footer-creative__text">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque aliquam curabitur cociis.</div>
        <div className="footer-creative__icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-creative__twitter footer-creative__icon"></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-creative__facebook footer-creative__icon"></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-creative__instagram footer-creative__icon"></a>
        </div>
      </div>
    </div>
  );
}

export default FooterCreative;
