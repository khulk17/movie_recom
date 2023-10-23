import React from 'react';
import "./Contact.css"
import NavigationBar from '../components/navbar/NavigationBar';
function Contact() {
  return <div>
    <NavigationBar/>
    <h1> Request <br/>
  <small> Suggest Me any updates to the list</small>
</h1>
<section class="contact-wrap">
  <form action="" class="contact-form">
    <div class="col-sm-6">
      <div class="input-block">
        <label for="">First Name</label>
        <input type="text" class="form-control"/>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="input-block">
        <label for="">Last Name</label>
        <input type="text" class="form-control"/>
      </div>
    </div>
    <div class="col-sm-12">
      <div class="input-block">
        <label for="">Email</label>
        <input type="text" class="form-control"/>
      </div>
    </div>
    <div class="col-sm-12">
      <div class="input-block">
        <label for="">Message Subject</label>
        <input type="text" class="form-control"/>
      </div>
    </div>
    <div class="col-sm-12">
      <div class="input-block textarea">
        <label for="">Drop your message here</label>
        <textarea rows="3" type="text" class="form-control"></textarea>
      </div>
    </div>
    <div class="col-sm-12">
      <button class="square-button">Send</button>
    </div>
  </form>
</section>
<div class="made-with-love">
  Made with 
  <i>♥</i> by 
  <a  href="https://codepen.io/nikhil8krishnan">Nikhil Krishnan</a>
</div>
  </div>;
}

export default Contact;