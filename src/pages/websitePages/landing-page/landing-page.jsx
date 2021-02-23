import myVars from '../../../variables/variables';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
import SearchRoomCard from '../../../components/search-room-card/search-room-card';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="landing-page__header">
        <Header navbar={myVars.navbarInHeaderRu} butLogin="войти" butRegister="зарегистрироваться" />
      </header>
      <main className="landing-page__image">
        <div className="landing-page__wrapper">
          <div className="landing-page__search-room-card">
            <SearchRoomCard />
          </div>
          <div className="landing-page__text">Лучшие номера для вашей работы, отдыха и просто вдохновения</div>
        </div>
      </main>
      <footer className="landing-page__footer">
        <Footer footerText="Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»" menu={myVars.footerMenuRu} subscribeTitle="Подписка" subscribeText="Получайте специальные предложения и новости сервиса" copyright="Copyright © 2018 Toxin отель. Все права зачищены." />
      </footer>
    </div>
  );
}

export default LandingPage;
