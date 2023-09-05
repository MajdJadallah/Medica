import React, { useState, useEffect } from 'react';
import AsideLeft from '../components/AsideLeft'
import Header from '../components/Header'
import axios from 'axios';

function FAQ() {
  const [faqs, setFAQs] = useState([]);
  const [formData, setFormData] = useState({
    question: '',
    answer: '',
  });

  useEffect(() => {
    axios.get('')
    .then(()=>{})
    .catch(()=>{})
  })
  return (
    <div>
    <div className='row d-flex' id='dashboard'>
            <div className='col-md-2 aside-left'>
              <AsideLeft />
            </div>
            <div className='col-md-10 main'>
              <Header/>
            <h1 id='titleFQA'>FAQ</h1>
            <div id='main-FAQ'>
                <div id='display-FQA'>
                    <div id='FQA-card' className='card1'>
                        <div id='deleteFAQ'>
                        <h3>What is Medica?</h3>
                        <button>delete</button>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className='addFQA'>
                    <form id='form-FQA' className='card1'>
                        <div id='div-input'>
                        <label>Question</label>
                        <input type='text' placeholder='Add FQA'/>
                        </div>
                        <div id='div-input'>
                        <label>Answer</label>
                        <textarea type='text' placeholder='Answer'/>
                        </div>
                        <input type='submit' id='submit'/>
                    </form>
                </div>
            </div>
            </div>
          </div>
          </div>
  )
}

export default FAQ
