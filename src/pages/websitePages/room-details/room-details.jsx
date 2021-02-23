/* eslint-disable global-require */
import myVars from '../../../variables/variables';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
import AboutsRoom from '../../../components/abouts-room/abouts-room';
import Comment from '../../../components/comment/comment';
import BulletList from '../../../components/bullet-list/bullet-list';
import BookingRoomCard from '../../../components/booking-room-card/booking-room-card';

function RoomDetails() {
  return (
    <div className="room-details">
      <header className="room-details__header">
        <Header navbar={myVars.navbarInHeaderRu} butLogin="войти" butRegister="зарегистрироваться" />
      </header>
      <section className="room-details__images">
        <div className="room-details__left-image">
          <img src={require('./img/room-details1.jpg').default} alt="Room image" className="room-details__image"/>
        </div>
        <div className="room-details__right-images">
          <img src={require('./img/room-details2.jpg').default} alt="Room image" className="room-details__image"/>
          <img src={require('./img/room-details3.jpg').default} alt="Room image" className="room-details__image"/>
        </div>
      </section>
      <main className="room-details__content">
        <section className="room-details__info">
          <div className="room-details__wrapper">
            <div className="room-details__room-info">
              <div className="room-details__text">Сведения о номере</div>
              <div className="room-details__abouts-room">
                <AboutsRoom roomDetails={myVars.roomDetailsInSite} />
              </div>
            </div>
            <div className="room-details__info-impression">
              <div className="room-details__text">Впечатления от номера</div>
              <div className="room-details__wrapper room-details__wrapper_impr">
                <div className="room-details__diagram"></div>
                <ul className="room-details__list">
                  <li className="room-details__el">Великолепно</li>
                  <li className="room-details__el">Хорошо</li>
                  <li className="room-details__el">Удовлетворительно</li>
                  <li className="room-details__el">Разочарован</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="room-details__wrapper room-details__wrapper_text">
            <div className="room-details__text">Отзывы посетителей номера</div>
            <div className="room-details__num-of-comments">2 отзыва</div>
          </div>
          <div className="room-details__comments">
            <div className="room-details__comment">
              <Comment avatar="avatar1.jpg" name="Мурад Сарафанов" dateText="5 дней назад" likeButton={{ count: 12, isLiked: true }} text="Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей." />
            </div>
            <div className="room-details__comment room-details__comment_last">
              <Comment avatar="avatar2.jpg" name="Патрисия Стёклышкова" dateText="Неделю назад" likeButton={{ count: 2 }} text="Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент" />
            </div>
          </div>
          <div className="room-details__wrapper">
            <div className="room-details__rules">
              <div className="room-details__text room-details__text_rules">Правила</div>
              <div className="room-details__bullet-list">
                <BulletList bulletList={myVars.bulletList} />
              </div>
            </div>
            <div className="room-details__cancel">
              <div className="room-details__text">Отмена</div>
              <div className="room-details__cancel-text">Бесплатная отмена в течении 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.</div>
            </div>
          </div>
        </section>
        <section className="room-details__booking-room-card">
          <BookingRoomCard number="888" costForDay="9 990" isLux={true} />
        </section>
      </main>
      <footer className="room-details__footer">
        <Footer footerText="Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»" menu={myVars.footerMenuRu} subscribeTitle="Подписка" subscribeText="Получайте специальные предложения и новости сервиса" copyright="Copyright © 2018 Toxin отель. Все права зачищены." />
      </footer>
    </div>
  );
}

export default RoomDetails;
