import Checkbox from '../checkbox/checkbox';

class ExpandableCheckbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: this.props.isExpanded,
    };
  }

  handleWrapperClick = () => {
    this.setState((state) => ({
      isExpanded: !state.isExpanded,
    }));
  }

  render() {
    const { title, checkboxList } = this.props;

    const isArrowExpanded = this.state.isExpanded ? 'expandable-checkbox__arrow_expanded' : '';
    const isCheckboxesExpaned = this.state.isExpanded ? 'expandable-checkbox__checkboxes_expanded' : '';

    return (
      <div className="expandable-checkbox">
        <div className="expandable-checkbox__wrapper" onClick={this.handleWrapperClick}>
          <div className="expandable-checkbox__title">{title}</div>
          <div className={`expandable-checkbox__arrow ${isArrowExpanded}`}>expand_more</div>
        </div>
        <div className={`expandable-checkbox__checkboxes ${isCheckboxesExpaned}`}>
          <Checkbox checkboxes={checkboxList} />
        </div>
      </div>
    );
  }
}

ExpandableCheckbox.defaultProps = {
  title: 'expandable checkbox',
  checkboxList: [{ label: 'Можно курить' }, { label: 'Можно с питомцами', isChecked: true }],
  isExpanded: false,
};

export default ExpandableCheckbox;
