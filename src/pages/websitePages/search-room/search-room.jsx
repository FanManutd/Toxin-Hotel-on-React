import myVars from '../../../variables/variables';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
import FilterDate from '../../../components/filter-date/filter-date';
import Dropdown from '../../../components/dropdown/dropdown';
import RangeSlider from '../../../components/range-slider/range-slider';
import Checkbox from '../../../components/checkbox/checkbox';
import RichCheckbox from '../../../components/rich-checkbox/rich-checkbox';
import ExpandableCheckbox from '../../../components/expandable-checkbox/expandable-checkbox';
import Pagination from '../../../components/pagination/pagination';
import RoomCard from '../../../components/room-card/room-card';

function SearchRoom() {
  return (
    <div className="search-room">
      <header className="search-room__header">
        <Header navbar={myVars.navbarInHeaderRu} butLogin="войти" butRegister="зарегистрироваться" />
      </header>
      <main className="search-room__content">
        <section className="search-room__filters">
          <div className="search-room__filter-date">
            <FilterDate title="даты пребывания в отеле" />
          </div>
          <div className="search-room__guest-dropdown">
            <Dropdown title="гости" elements={myVars.guestDropdown} resultDefault="Сколько гостей" />
          </div>
          <div className="search-room__range-slider">
            <RangeSlider title="диапазон цены" />
          </div>
          <div className="search-room__small-text">Стоимость за сутки пребывания в номере</div>
          <div className="search-room__text">checkbox buttons</div>
          <div className="search-room__checkbox">
            <Checkbox checkboxes={myVars.checkboxes} />
          </div>
          <div className="search-room__text">доступность</div>
          <div className="search-room__rich-checkbox">
            <RichCheckbox richCheckboxes={myVars.richCheckboxes} />
          </div>
          <div className="search-room__room-dropdown">
            <Dropdown title="удобства номера" elements={myVars.roomDropdown} resultDefault="Сколько комнат" />
          </div>
          <div className="search-room__expandable-checkbox">
            <ExpandableCheckbox title="дополнительные удобства" checkboxList={myVars.checkboxesToList} />
          </div>
        </section>
        <section className="search-room__result">
          <div className="search-room__title">Номера, которые мы для вас подобрали</div>
          <div className="search-room__room-cards">
            <div className="search-room__room-card">
              <RoomCard images={['room1.jpg', 'room2.jpg', 'room3.jpg', 'room4.jpg']} number="888" isLux={true} costForDay="9 990" activeStars={5} numOfComments="145" />
            </div>
            <div className="search-room__room-card">
              <RoomCard images={['room2.jpg', 'room3.jpg', 'room4.jpg', 'room5.jpg']} number="840" costForDay="9 990" activeStars={4} numOfComments="65" />
            </div>
            <div className="search-room__room-card">
              <RoomCard images={['room3.jpg', 'room4.jpg', 'room5.jpg', 'room6.jpg']} number="980" isLux={true} costForDay="8 500" activeStars={3} numOfComments="35" />
            </div>
            <div className="search-room__room-card">
              <RoomCard images={['room4.jpg', 'room5.jpg', 'room6.jpg', 'room7.jpg']} number="856" costForDay="7 300" activeStars={5} numOfComments="19" />
            </div>
            <div className="search-room__room-card">
              <RoomCard images={['room5.jpg', 'room6.jpg', 'room7.jpg', 'room8.jpg']} number="740" costForDay="6 000" activeStars={4} numOfComments="44" />
            </div>
            <div className="search-room__room-card">
              <RoomCard images={['room6.jpg', 'room7.jpg', 'room8.jpg', 'room9.jpg']} number="982" costForDay="5 800" activeStars={3} numOfComments="56" />
            </div>
            <div className="search-room__room-card">
              <RoomCard images={['room7.jpg', 'room8.jpg', 'room9.jpg', 'room10.jpg']} number="678" costForDay="5 500" activeStars={5} numOfComments="45" />
            </div>
            <div className="search-room__room-card">
              <RoomCard images={['room8.jpg', 'room9.jpg', 'room10.jpg', 'room11.jpg']} number="450" costForDay="5 300" activeStars={4} numOfComments="39" />
            </div>
            <div className="search-room__room-card">
              <RoomCard images={['room9.jpg', 'room10.jpg', 'room11.jpg', 'room12.jpg']} number="350" costForDay="5 000" activeStars={3} numOfComments="77" />
            </div>
            <div className="search-room__room-card">
              <RoomCard images={['room10.jpg', 'room11.jpg', 'room12.jpg', 'room1.jpg']} number="666" costForDay="5 000" activeStars={5} numOfComments="25" />
            </div>
            <div className="search-room__room-card">
              <RoomCard images={['room11.jpg', 'room12.jpg', 'room1.jpg', 'room2.jpg']} number="444" costForDay="5 000" activeStars={3} numOfComments="15" />
            </div>
            <div className="search-room__room-card">
              <RoomCard images={['room12.jpg', 'room1.jpg', 'room2.jpg', 'room3.jpg']} number="352" costForDay="5 000" activeStars={3} numOfComments="55" />
            </div>
          </div>
          <div className="search-room__pagination">
            <Pagination caption="1 - 12 из 100+ вариантов аренды" />
          </div>
        </section>
      </main>
      <footer className="search-room__footer">
        <Footer footerText="Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»" menu={myVars.footerMenuRu} subscribeTitle="Подписка" subscribeText="Получайте специальные предложения и новости сервиса" copyright="Copyright © 2018 Toxin отель. Все права зачищены." />
      </footer>
    </div>
  );
}

export default SearchRoom;
