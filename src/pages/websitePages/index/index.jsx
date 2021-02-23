import ReactDom from 'react-dom';
import '../../../favicon/favicon';
import './index.scss';

function HomePage() {
  const pages = [
    { link: 'colors-type', text: 'Colors & Type' },
    { link: 'form-elements', text: 'Form Elements' },
    { link: 'cards', text: 'Cards' },
    { link: 'headers-footers', text: 'Headers & Footers' },
    { link: 'landing-page', text: 'Landing page' },
    { link: 'search-room', text: 'Search Room' },
    { link: 'room-details', text: 'Room Details' },
    { link: 'registration', text: 'Registration' },
    { link: 'sign-in', text: 'Sign In' },
  ];

  return (
    <div className="home-page">
      <ul className="home-page__list">
        {pages.map((page, index) => (
            <li className="home-page__el" key={index}>
              <a href={`${page.link}.html`} className="home-page__link" target="_blank" rel="noopener noreferrer" >{page.text}</a>
            </li>
        ))}
      </ul>
    </div>
  );
}

ReactDom.render(<HomePage />, document.querySelector('.App'));
