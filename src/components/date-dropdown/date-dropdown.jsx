import Calendar from '../calendar/calendar';

class DateDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.dateDropdown = React.createRef();
  }

  componentDidMount() {
    new Calendar(this.dateDropdown.current, 2);
  }

  render() {
    const { title1, title2 } = this.props;

    return (
      <div className="date-dropdown" ref={this.dateDropdown}>
        <div className="date-dropdown__date">
          <div className="date-dropdown__title">{title1}</div>
          <div className="date-dropdown__wrapper js-date-dropdown__wrapper">
            <div className="date-dropdown__arrow js-date-dropdown__arrow">expand_more</div>
            <input type="text" className="date-dropdown__input js-date-dropdown__input-1" placeholder="дд.мм.гггг" readOnly/>
          </div>
        </div>
        <div className="date-dropdown__date">
          <div className="date-dropdown__title">{title2}</div>
          <div className="date-dropdown__wrapper js-date-dropdown__wrapper">
            <div className="date-dropdown__arrow js-date-dropdown__arrow">expand_more</div>
            <input type="text" className="date-dropdown__input js-date-dropdown__input-2" placeholder="дд.мм.гггг" readOnly/>
          </div>
        </div>
      </div>
    );
  }
}

DateDropdown.defaultProps = {
  title1: 'Прибытие',
  title2: 'Выезд',
};

export default DateDropdown;
