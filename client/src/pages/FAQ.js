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
    axios.get('http://localhost:8080/api/faq')
    .then((res)=>{
      setFAQs(res.data.FAQS);
      console.log(faqs);
    })
    .catch((error)=>{
      console.log(error);
    })

    axios.post()
    .then((response)=>{
      console.log(response.data);
    })
    .catch((error)=>{console.log(error)});
  },[]);
  return (
    <div>
    <div className='row d-flex' id='dashboard'>
            <div className='col-md-2 aside-left'>
              <AsideLeft />
            </div>
            <div className='col-md-10 main px=0'>
              <Header/>
            <h1 id='titleFQA'>FAQ</h1>
            <div id='main-FAQ'>
                <div id='display-FQA' className='col-md-7'>
                    {faqs.map((item) => (
                      <div className='FQA-card card1' key={item._id}>
                        <div className='deleteFAQ'>
                        <h3>{item.question}</h3>
                        <button>delete</button>
                        </div>
                        <p>{item.answer}</p>
                    </div>
                    ))}
                </div>
                <div className='addFQA col-md-4'>
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
