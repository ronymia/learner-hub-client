import React from 'react';
import { FaAngleDown } from 'react-icons/fa';

const FAQ = () => {
     const faqData = [1, 2, 3, 4, 5, 6];

     return (
          <section className="py-[30px] lg:px-[10%]">
               <h1 className="block text-center mb-7 capitalize text-dimBlack text-[35px]">frequently asked questions</h1>
               <div className="flex flex-wrap gap-5 items-start">
                    {
                         faqData.map(faq =>
                              <div className="borderBox">
                                   <div className="p-[15px] flex flex-row items-center justify-between cursor-pointer">
                                        <h3 className="text-xl">how to contact for help?</h3>
                                        <FaAngleDown className="text-primary text-xl rotate-180" />
                                   </div>
                                   <p className="borderBox p-[15px] leading-loose text-lightColor text-[15px]">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit consequatur molestias deserunt facere laborum doloremque fuga, quae aut. Recusandae officia quis temporibus! Magnam mollitia nostrum voluptatibus deserunt quidem. Natus, quo.
                                   </p>
                              </div>
                         )
                    }
               </div>
          </section>
     );
};

export default FAQ;
