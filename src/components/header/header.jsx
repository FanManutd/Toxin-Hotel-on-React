/* eslint-disable max-len */
import NavItem from './__nav-item/__nav-item';
import Button from '../button/button';
import ToxinLogo from '../toxin-logo/toxin-logo';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBurgerShow: false,
      isUserDropdownShow: false,
    };
  }

  handleBurgerClick = () => {
    this.setState((state) => ({
      isBurgerShow: !state.isBurgerShow,
    }));
    if (this.state.isUserDropdownShow) {
      this.setState((state) => ({
        isUserDropdownShow: !state.isUserDropdownShow,
      }));
    }
  }

  handleUserClick = () => {
    this.setState((state) => ({
      isUserDropdownShow: !state.isUserDropdownShow,
    }));
    if (this.state.isBurgerShow) {
      this.setState((state) => ({
        isBurgerShow: !state.isBurgerShow,
      }));
    }
  }

  render() {
    const {
      navbar, userName, butLogin, butRegister,
    } = this.props;

    const isNavbarShown = this.state.isBurgerShow ? 'header__navbar_shown' : '';
    const isUsernameShown = this.state.isUserDropdownShow ? 'header__username_shown' : '';
    const isButtonsShown = this.state.isUserDropdownShow ? 'header__buttons_shown' : '';

    return (
      <div className="header">
        <div className="header__wrapper">
          <div className="header__content">
            <div className="header__toxin-logo">
              <ToxinLogo />
            </div>
            <div className={`header__navbar ${isNavbarShown}`}>
              {navbar.map((menuItem, index) => <NavItem key={index} menuItem={menuItem} />)}
            </div>
            <div className="header__user-icon" onClick={this.handleUserClick}>person</div>
            {userName
              ? <div className={`header__username header__text ${isUsernameShown}`}>{userName}</div>
              : <div className={`header__buttons ${isButtonsShown}`}>
                <div className="header__button-login header__button">
                  <Button place="in-header" color="white" text={butLogin} />
                </div>
                <div className="header__button-register header__button">
                  <Button place="in-header" color="purple" text={butRegister} />
                </div>
              </div>
            }
            <div className="header__burger" onClick={this.handleBurgerClick}>dehaze</div>
          </div>
        </div>
      </div>
    );
  }
}

Header.defaultProps = {
  navbar: [{ url: '/mock-address', text: 'О нас' },
    { text: 'Услуги', submenu: [{ url: '/mock-address', text: 'test1' }, { url: '/mock-address', text: 'test2' }] },
    { url: '/mock-address', text: 'Вакансии' },
    { url: '/mock-address', text: 'Новости' },
    { text: 'Соглашения', submenu: [{ url: '/mock-address', text: 'test3' }, { url: '/mock-address', text: 'test4' }] }],
  butLogin: 'Войти',
  butRegister: 'Зарегистрироваться',
  userName: null,
};

export default Header;
