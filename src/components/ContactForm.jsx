import React from 'react';

//import contact img
import contactImg from '../assets/images/contact-img.png'

const ContactForm = () => {
     return (
          <section className="grid grid-cols-2 items-center justify-center gap-6 py-[30px] lg:px-[10%]">
               {/* left side  */}
               <div className="">
                    <figure>
                         <img src={contactImg} alt="" />
                    </figure>
               </div>

               {/* right side  */}
               <div className="">
                    <form className="borderBox p-5">
                         <h3 className="capitalize text-dimBlack text-2xl pb-3">send us a message</h3>

                         <input type="text" placeholder="name" className="block w-full py-3 px-4 text-base my-2 mx-0 borderBox placeholder:text-lightWhite focus:bg-primary focus:text-white outline-none" />

                         <input type="email" placeholder="email" className="block w-full py-3 px-4 text-base my-2 mx-0 borderBox placeholder:text-lightWhite focus:bg-primary focus:text-white outline-none" />

                         <input type="number" placeholder="phone" className="block w-full py-3 px-4 text-base my-2 mx-0 borderBox placeholder:text-lightWhite focus:bg-primary focus:text-white outline-none" />

                         <textarea name="message" className="block w-full py-3 px-4 text-base my-2 mx-0 borderBox placeholder:text-lightWhite focus:bg-primary focus:text-white outline-none resize-none h-40"
                              placeholder="message" id="" cols="30" rows="10"></textarea>

                         <input type="submit" value="send message" className="btn py-[10px] px-[30px]" />
                    </form>
               </div>
          </section>
     );
};

export default ContactForm;
