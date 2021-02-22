import myVars from '../../variables/variables';
import DateDropdown from '../date-dropdown/date-dropdown';
import Dropdown from '../dropdown/dropdown';
import SubmitButton from '../submit-button/submit-button';

function SearchRoomCard() {
  return (
    <div className="search-room-card">
      <div className="search-room-card__content">
        <form action="/mock-address" method="get">
          <div className="search-room-card__title">Найдём номера под ваши пожелания</div>
          <div className="search-room-card__date-dropdown">
            <DateDropdown title1="Прибытие" title2="Выезд" />
          </div>
          <div className="search-room-card__dropdown">
            <Dropdown title="Гости" elements={myVars.dropdownInSearchRoomCard} buttons={true} resultDefault="Сколько гостей" keyWords={['гость', 'гостя', 'гостей']} />
          </div>
          <div className="search-room-card__submit-button">
            <SubmitButton text="Подобрать номер" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchRoomCard;
