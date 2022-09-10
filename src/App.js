import logo from './logo.svg';
import datas from './data.json';
function App() {
  return (
    <div className='App'>
      <div className='top-box'>
        <div className='split'>
          <div className='left'>
            <p>My balance</p>
            <h2>$921.48</h2>
          </div>
          <img src={logo} alt='logo' className='right'></img>
        </div>
      </div>
      <div className='bot-box'>
        <h2 className='up'>Spending - Last 7 days</h2>
        <div className='mid'>
          <div className='chart'>
            {datas &&
              datas.map((data) => (
                <div className='days'>
                  <div
                    className='bar'
                    style={{ height: `${data.amount * 2.5}px` }}
                  ></div>
                  <p className='day'>{data.day}</p>
                </div>
              ))}
          </div>
        </div>
        <div className='split'>
          <div className='left'>
            <p>Total this month</p>
            <h2>$478.33</h2>
          </div>
          <div className='right'>
            <h4>+2.4%</h4>
            <p>from last month</p>
          </div>
        </div>
      </div>
      <div className='attribution'>
        Frontend Mentor. Coded by bill using React .
      </div>
    </div>
  );
}

export default App;
