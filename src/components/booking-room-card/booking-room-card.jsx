import Dropdown from '../dropdown/dropdown';
import DateDropdown from '../date-dropdown/date-dropdown';
import SubmitButton from '../submit-button/submit-button';
import myVars from '../../variables/variables';

function BookingRoomCard(props) {
  const { number, costForDay, isLux } = props;
  const noLux = !isLux ? '_no-lux' : '';

  return (
    <div className="booking-room-card">
      <div className="booking-room-card__content">
        <form action="/mock-address" method="post">
          <div className="booking-room-card__title">
            <div className="booking-room-card__symbol">№</div>
            <div className={`booking-room-card__number booking-room-card__number${noLux}`}>{number}</div>
            {isLux && <div className="booking-room-card__lux">ЛЮКС</div>}
            <div className="booking-room-card__cost">{costForDay}&#8381;</div>
            <div className="booking-room-card__for-day">в сутки</div>
          </div>
          <div className="booking-room-card__date-dropdown">
            <DateDropdown title1="Прибытие" title2="Выезд" />
          </div>
          <div className="booking-room-card__dropdown">
            <Dropdown title="Гости" elements={myVars.dropdownInBookRoomCard} buttons={true} resultDefault="Сколько гостей" keyWords={['гость', 'гостя', 'гостей']} />
          </div>
          <div className="booking-room-card__calculate">
            <div className="calculate">
              <div className="calculate__row">
                <div className="calculate__sum">{costForDay}&#8381; x 4 суток</div>
                <div className="calculate__cost">39 960&#8381;</div>
              </div>
              <div className="calculate__row">
                <div className="calculate__services">Сбор за услуги: скидка 2 179&#8381;</div>
                <div className="calculate__cost">0&#8381;</div>
              </div>
              <div className="calculate__row">
                <div className="calculate__add-services">Сбор за дополнительные услуги</div>
                <div className="calculate__cost">300&#8381;</div>
              </div>
            </div>
          </div>
          <div className="booking-room-card__total">
            <div className="total">
              <div className="total__text">Итого</div>
              <div className="total__border"></div>
              <div className="total__sum">38 081&#8381;</div>
            </div>
          </div>
          <div className="booking-room-card__submit-button">
            <SubmitButton text="Забронировать" />
          </div>
        </form>
      </div>
    </div>
  );
}

BookingRoomCard.defaultProps = {
  number: '888',
  costForDay: '9 990',
  isLux: true,
};

export default BookingRoomCard;
