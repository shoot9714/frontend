import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import pets_dark from '../commons/images/pets_dark.jpg';
import '../commons/style.css'
import main from '../commons/images/main.jpeg';

const Main = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [state, setState] = useState({
    'START_DATE': '',
    'END_DATE': '',
    'CARE_NO': '0',
    'BOARD_ADDR1': ''
  });


  const setItem = (e) => {
    const { name, value } = e.target
    setState({
      ...state,
      [name]: value
    })
  }

  const onChange = (dates) => {
    const [start, end] = dates;

    if (end !== undefined) {
      setStartDate(start);
      setEndDate(end);

      setState({
        'START_DATE': start,
        'END_DATE': end
      })
    }
  };
  return (
    <section className="row banner-area">
      {/* <!--Banner Area Start --> */}
      <div className="banner-area__img">
        <img src={main} alt="banner-img" className="img-fluid" />
        <div className="banner-area__content">
          <div className='number'>
            <div className='row'>
              <div className='col input-group mb-3'>
                <span className="input-group-text" id="basic-addon1">케어링</span>
                <input
                  className='form-control'
                  type='number'
                  name='CARE_NO'
                  value={state.CARE_NO}
                  min='0'
                  onChange={(e) => setItem(e)}
                />
                <span className="input-group-text" id="basic-addon1">마리 이상</span>
              </div>
              <div className='col input-group mb-3'>
                <span className='input-group-text'>지역</span>
                <input
                  className='form-control'
                  type='text'
                  name='BOARD_ADDR1'
                  value={state.BOARD_ADDR1}
                  onChange={(e) => setItem(e)}
                />
              </div>
            </div>
            <div className='input-group mb-1'>
              <span className='input-group-text'>예약 날짜</span>
              <span className='form-control'>
                {<ReactDatePicker
                  className='form-control'
                  minDate={new Date()}
                  selected={startDate}
                  onChange={onChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  dateFormat={'yyyy년 MM월 dd일'}
                />}
              </span>
              <button className='btn btn-danger'>
                <Link to='/board' state={state} style={{ textDecoration: "none", color: "white" }}>Search
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>

  )
}

export default Main