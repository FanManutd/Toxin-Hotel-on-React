import Calendar from '../calendar/calendar';

class FilterDate extends React.Component {
  constructor(props) {
    super(props);

    this.filterDate = React.createRef();
  }

  componentDidMount() {
    new Calendar(this.filterDate.current, 1);
  }

  render() {
    const title = this.props.title;

    return (
      <div className="filter-date" ref={this.filterDate}>
        <div className="filter-date__title">{title}</div>
        <div className="filter-date__wrapper js-date-dropdown__wrapper">
          <div className="filter-date__arrow">expand_more</div>
          <input type="text" className="filter-date__input js-filter-date__input" placeholder="19 авг - 23 авг" readOnly />
        </div>
      </div>
    );
  }
}

FilterDate.defaultProps = {
  title: 'filter date',
};

export default FilterDate;
