import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from './components/Modal';
import AccordionData from './components/AccordionData';
import './App.css';

function App() {
  const [fullList, setFullList] = useState([]);
  const [currentList, setCurrentList] = useState([]);
  const [currentCompany, setCurrentCompany] = useState('');
  const [currentDetails, setCurrentDetails] = useState('');
  const [toggleDetails, setToggleDetails] = useState('');
  const [currentCategory, setCurrentCategory] = useState('Housing');
  const [toggleOn, setToggleOn] = useState(false);
  const [modal, setModal] = useState(false);

  const getResources = () => {
    axios
      .get('https://maui-help-resources.herokuapp.com/resources')
      .then((response) => {
        setFullList(response.data);
      });
  };

  useEffect(() => {
    getResources();
  }, []);

  useEffect(() => {
    setCurrentList(fullList.filter((val) => val.category === 'Housing'));
  }, [fullList]);

  const filterResources = (category) => {
    setCurrentCategory(category);
    setCurrentList(
      fullList.filter((val) => {
        return val.category === category;
      })
    );
  };

  const togglePanel = (id) => {
    if (toggleDetails === id) {
      setToggleDetails('');
      return;
    }
    setToggleDetails(id);
  };

  const closeModal = () => {
    setModal(false);
    setCurrentDetails('');
    setCurrentCompany('');
  };

  return (
    <div className="kupuna">
      <nav className="nav">
        <ul>
          <li key="Housing" onClick={() => filterResources('Housing')}>
            Housing
          </li>
          <li
            key="Homeless Outreach"
            onClick={() => filterResources('Homeless Outreach')}
          >
            Homeless Outreach
          </li>
          <li
            key="Food & Transportation"
            onClick={() => filterResources('Food & Transportation')}
          >
            Food & Transportation
          </li>
          <li key="Medical" onClick={() => filterResources('Medical')}>
            Medical
          </li>
          <li
            key="Rental Assistance"
            onClick={() => filterResources('Rental Assistance')}
          >
            Rental Assistance
          </li>
          <li key="Childcare" onClick={() => filterResources('Childcare')}>
            Childcare
          </li>
          <li key="Other" onClick={() => filterResources('Other')}>
            Other
          </li>
        </ul>
      </nav>
      <div className="container">
        <div className="modal">
          {modal && (
            <Modal
              currentCompany={currentCompany}
              currentDetails={currentDetails}
              closeModal={() => closeModal()}
            />
          )}
        </div>
        <div
          className="toggle-btn"
          onClick={() => {
            setToggleDetails('');
            setToggleOn(!toggleOn);
          }}
        >
          {toggleOn
            ? `Hide All ${currentCategory}`
            : `View All ${currentCategory}`}
        </div>
        <div className={fullList.length === 0 ? 'spinner' : ''}>
          {fullList.length === 0 ? String.fromCharCode(9711) : ''}
        </div>
        {currentList.map((val) => {
          return (
            <div className="card" key={val.id}>
              <div className="card-wrapper">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'hsl(199, 80%, 18%)',
                  }}
                >
                  <div
                    className="panel-title"
                    onClick={() => {
                      togglePanel(val.id);
                    }}
                  >
                    <h3
                      className="panel-company"
                      style={{ textAlign: 'center' }}
                    >
                      {val.company}
                    </h3>
                    <div
                      style={{
                        fontSize: '0.8rem',
                        marginLeft: '1rem',
                      }}
                    >
                      {toggleOn && toggleDetails === val.id
                        ? String.fromCharCode(9660)
                        : toggleOn || toggleDetails === val.id
                        ? String.fromCharCode(9650)
                        : String.fromCharCode(9660)}
                    </div>
                  </div>
                </div>
                {toggleOn && toggleDetails === val.id ? (
                  ''
                ) : toggleOn ? (
                  <AccordionData val={val} />
                ) : !toggleOn && toggleDetails === val.id ? (
                  <div>
                    <AccordionData val={val} />
                  </div>
                ) : toggleOn && toggleDetails === '' ? (
                  ''
                ) : (
                  ''
                )}
                {`${val.summary}` !== 'null' ? (
                  <p
                    className="details"
                    onClick={() => {
                      setCurrentCompany(`${val.company}`);
                      setCurrentDetails(`${val.summary}`);
                      setModal(true);
                    }}
                  >
                    Click Here to View Description
                  </p>
                ) : (
                  ''
                )}
              </div>
            </div>
          );
        })}
        <div className="footer">
          Don't see a relevant resource here? Call{' '}
          <a href={`tel:808-250-0132`}>808-250-0132</a>.
        </div>
        <div className="footer" style={{ marginBottom: '0.8rem' }}>
          Background Image Created By{' '}
          <a
            href="https://www.123freevectors.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Free Vector
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
