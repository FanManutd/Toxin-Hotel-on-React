/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import RateButton from '../rate-button/rate-button';

class RoomCard extends React.Component {
  constructor(props) {
    super(props);

    this.count = 0;
    this.state = {
      position: 0,
      circles: [' room-card__circle_active', '', '', ''],
    };
  }

  handleLeftArrowClick = () => {
    this.count -= 1;
    if (this.count < 0) {
      this.count = 0;
    } else {
      const position = -271 * this.count;
      const circles = ['', '', '', ''];
      circles[this.count] = ' room-card__circle_active';
      this.setState({ position, circles });
    }
  }

  handleRightArrowClick = () => {
    this.count += 1;
    if (this.count > 3) {
      this.count = 3;
    } else {
      const position = -271 * this.count;
      const circles = ['', '', '', ''];
      circles[this.count] = ' room-card__circle_active';
      this.setState({ position, circles });
    }
  }

  handleCircleClick = (number) => {
    this.count = number;
    const position = -271 * this.count;
    const circles = ['', '', '', ''];
    circles[this.count] = ' room-card__circle_active';
    this.setState({ position, circles });
  }

  render() {
    const {
      images, number, isLux, costForDay, activeStars, numOfComments,
    } = this.props;

    const noLux = isLux ? '' : '_no-lux';

    return (
      <div className="room-card">
        <div className="room-card__preview">
          <div className="room-card__gallery" style={{ marginLeft: `${this.state.position}px` }}>
            <img className="room-card__picture" src={require(`@components/room-card/image/${images[0]}`).default} alt="room picture1" />
            <img className="room-card__picture" src={require(`@components/room-card/image/${images[1]}`).default} alt="room picture2" />
            <img className="room-card__picture" src={require(`@components/room-card/image/${images[2]}`).default} alt="room picture3" />
            <img className="room-card__picture" src={require(`@components/room-card/image/${images[3]}`).default} alt="room picture4" />
          </div>
          <div className="room-card__arrow room-card__left-arrow" onClick={this.handleLeftArrowClick}>keyboard_arrow_left</div>
          <div className="room-card__arrow room-card__right-arrow" onClick={this.handleRightArrowClick}>keyboard_arrow_left</div>
          <div className="room-card__circles">
            <div className={`room-card__circle${this.state.circles[0]}`} onClick={this.handleCircleClick.bind(this, 0)}></div>
            <div className={`room-card__circle${this.state.circles[1]}`} onClick={this.handleCircleClick.bind(this, 1)}></div>
            <div className={`room-card__circle${this.state.circles[2]}`} onClick={this.handleCircleClick.bind(this, 2)}></div>
            <div className={`room-card__circle${this.state.circles[3]}`} onClick={this.handleCircleClick.bind(this, 3)}></div>
          </div>
        </div>
        <div className="room-card__info">
          <div className="room-card__wrapper">
            <div className="room-card__symbol">№</div>
            <div className={`room-card__number room-card__number${noLux}`}>{number}</div>
            {isLux && <div className="room-card__lux">ЛЮКС</div>}
            <div className="room-card__cost">{costForDay}&#8381;</div>
            <div className="room-card__for-day">в сутки</div>
          </div>
          <div className="room-card__border"></div>
          <div className="room-card__wrapper">
            <RateButton activeStars={activeStars} />
            <div className="room-card__num-of-comments">{numOfComments}</div>
            <div className="room-card__comments">Отзывов</div>
          </div>
        </div>
      </div>
    );
  }
}

RoomCard.defaultProps = {
  images: ['room1.jpg', 'room2.jpg', 'room3.jpg', 'room4.jpg'],
  number: '888',
  isLux: false,
  costForDay: '9 990',
  activeStars: 5,
  numOfComments: '145',
};

export default RoomCard;
