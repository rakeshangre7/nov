import React from 'react';
import '../../../../assets/styles/form.module.css';

interface FieldProps {
  label: string;
  type: string;
  name: string;
  required: boolean;
}

export type FormDataProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: FieldProps[];
};

const Form = ({}: FormDataProps) => {
  return (
    <div className="FormWrapper">
      <div className="pt-30 smd:pt-20">
        <div className="container m-auto">
          <div className="smd:max-w-768 m-auto -mx-15 px-25px">
            <div className="overflow-hidden">
              <div className="px-15 ">
                <div className="">
                  <div className="">
                    <h3 className="text-5xl leading-42 text-black md:text-6xl md:leading-56 pt-[5px] pb-[10px] m-0">
                      Contact Us
                    </h3>
                  </div>

                  <div className="FormDataWrapper">
                    <div className="pt-5 pb-2.5 relative">
                      <label className="absolute text-base text-dark duration-300 transform -translate-y-6 scale-75 top-1 left-0 -z-10 origin-[0] peer-focus:left-4 peer-focus:text-dark peer-focus:-translate-y-6">
                        Topic<span className="text-red">*</span>
                      </label>
                      <div className="relative">
                        <select
                          className="block py-[1px] px-0.5 w-full text-base text-dark bg-transparent border-0 border-b-[1px] border-black  appearance-none    basicFocus hover:!outline-2  peer"
                          placeholder=" "
                        >
                          {' '}
                          <option value=""></option>
                          <option value="topic1">Topic 1</option>
                          <option value="topic2">Topic 2</option>
                          <option value="topic3">Topic 3</option>
                        </select>
                      </div>
                    </div>
                    <div className=" pt-5 pb-2.5 h-full">
                      <div className="-mx-15 px-15">
                        <div className="w-full relative z-0">
                          <div className="-mx-15">
                            <div className="w-full relative px-[15px]">
                              <div className="">
                                <div className="pt-5 pb-2.5">
                                  <input
                                    type="text"
                                    className="block py-[1px] px-0.5 w-full text-base text-dark bg-transparent border-0 border-b-[1px] border-black  appearance-none    basicFocus hover:!outline-2  peer"
                                    placeholder=" "
                                  />

                                  <label className="absolute text-base text-dark  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-4 peer-focus:text-dark  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    First Name<span className="text-red">*</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" pt-5 pb-2.5 h-full">
                      <div className="-mx-15 px-15">
                        <div className="w-full relative z-0">
                          <div className="-mx-15">
                            <div className="w-full relative px-[15px]">
                              <div className="">
                                <div className="pt-5 pb-2.5">
                                  <input
                                    type="text"
                                    className="block py-[1px] px-0.5 w-full text-base text-dark bg-transparent border-0 border-b-[1px] border-black  appearance-none    basicFocus hover:!outline-2  peer"
                                    placeholder=" "
                                  />

                                  <label className="absolute text-base text-dark  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-4 peer-focus:text-dark  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Last Name<span className="text-red">*</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" pt-5 pb-2.5 h-full">
                      <div className="-mx-15 px-15">
                        <div className="w-full relative z-0">
                          <div className="-mx-15">
                            <div className="w-full relative px-[15px]">
                              <div className="">
                                <div className="pt-5 pb-2.5">
                                  <input
                                    type="text"
                                    className="block py-[1px] px-0.5 w-full text-base text-dark bg-transparent border-0 border-b-[1px] border-black  appearance-none    basicFocus hover:!outline-2  peer"
                                    placeholder=" "
                                  />

                                  <label className="absolute text-base text-dark  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-4 peer-focus:text-dark  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Email<span className="text-red">*</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-5 pb-2.5 relative">
                      <label className="absolute text-base text-dark duration-300 transform -translate-y-6 scale-75 top-1 left-0 -z-10 origin-[0] peer-focus:left-4 peer-focus:text-dark peer-focus:-translate-y-6">
                        Country<span className="text-red">*</span>
                      </label>
                      <div className="relative">
                        <select
                          className="block py-[1px] px-0.5 w-full text-base text-dark bg-transparent border-0 border-b-[1px] border-black  appearance-none    basicFocus hover:!outline-2  peer"
                          placeholder=" "
                        >
                          <option value=""></option>
                          <option value="topic1">Topic 1</option>
                          <option value="topic2">Topic 2</option>
                          <option value="topic3">Topic 3</option>
                        </select>
                      </div>
                    </div>

                    <div className=" pt-5 pb-2.5 h-full">
                      <div className="-mx-15 px-15">
                        <div className="w-full relative z-0">
                          <div className="-mx-15">
                            <div className="w-full relative px-[15px]">
                              <div className="">
                                <div className="pt-5 pb-2.5">
                                  <input
                                    type="text"
                                    className="block py-[1px] px-0.5 w-full text-base text-dark bg-transparent border-0 border-b-[1px] border-black  appearance-none    basicFocus hover:!outline-2  peer"
                                    placeholder=" "
                                  />

                                  <label className="absolute text-base text-dark  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-4 peer-focus:text-dark  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Company Name
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" pt-5 pb-2.5 h-full">
                      <div className="-mx-15 px-15">
                        <div className="w-full relative z-0">
                          <div className="-mx-15">
                            <div className="w-full relative px-[15px]">
                              <div className="">
                                <div className="pt-5 pb-2.5">
                                  <input
                                    type="text"
                                    className="block py-[1px] px-0.5 w-full text-base text-dark bg-transparent border-0 border-b-[1px] border-black  appearance-none    basicFocus hover:!outline-2  peer"
                                    placeholder=" "
                                  />

                                  <label className="absolute text-base text-dark  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-4 peer-focus:text-dark  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Job Title
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" pt-5 pb-2.5 h-full">
                      <div className="-mx-15 px-15">
                        <div className="w-full relative z-0">
                          <div className="-mx-15">
                            <div className="w-full relative px-[15px]">
                              <div className="">
                                <div className="pt-5 pb-2.5">
                                  <textarea
                                    className="block py-1 px- w-full text-base text-dark bg-transparent border-[1px] border-black  appearance-none    basicFocus hover:!outline-2  peer"
                                    placeholder=" "
                                    rows={5}
                                  />

                                  <label className="absolute text-base text-dark  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-4 peer-focus:text-dark  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Comments<span className="text-red">*</span>
                                  </label>
                                  <p className="leading-1.5 text-dark text-base">
                                    Please provide specific location and contact information so we
                                    can expedite your request.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full  smd:mt-25 pt-5 pb-10 min-h-full">
                      <input
                        type="submit"
                        className="bg-red text-white leading-1  font-bold  py-12 px-24 decoration:none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
