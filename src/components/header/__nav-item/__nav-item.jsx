class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSubmenuHidden: true };
  }

  handleSubmenuClick = () => {
    this.setState((state) => ({
      isSubmenuHidden: !state.isSubmenuHidden,
    }));
  }

  render() {
    const { url, text, submenu } = this.props.menuItem;
    const isSubmenuHidden = this.state.isSubmenuHidden ? 'header__submenu_hidden' : '';

    if (submenu) {
      return (
        <div className="header__nav-item" onClick={this.handleSubmenuClick}>
          <div className="header__text">{text}
            <div className={`header__submenu ${isSubmenuHidden}`}>
              {submenu.map((subitem, index) => {
                // eslint-disable-next-line no-shadow
                const { url, text } = subitem;
                return (
                  <a key={index} href={url} className="header__submenu-text header__text">{text}</a>
                );
              })}
            </div>
          </div>
          <div className="header__arrow">expand_more</div>
        </div>
      );
    }
    return (
      <div className="header__nav-item">
        <a href={url} className="header__text">{text}</a>
      </div>
    );
  }
}

export default NavItem;
