/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Header } from '../../components/Header';
import ImageUpload from '../../components/Image';
import {
  FormField,
  TextInputGroupT,
  SelectInputGroupT,
} from '../../interface/type';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'draft-js/dist/Draft.css';
import { useForm, SubmitHandler, set } from 'react-hook-form';
import { useMutation, gql } from '@apollo/client';
import { useDropdown } from '../../hooks/useDropdown';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { FaStarOfLife } from 'react-icons/fa';
import { RiShoppingBag3Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

// mutation
const CREATE_COMPANY = gql`
  mutation createCompany($input: CreateCompanyInput!) {
    createCompany(createCompanyInput: $input) {
      name
      email
      website
      address
      description
      avatar
      industry
      country
      city
      ot
    }
  }
`;

const CreateCompany = () => {
  // state for editor rich text
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  // state for image
  const [image, setImage] = useState('');
  // state for company
  const [industry, setIndustry] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [ot, setOt] = useState('');
  // form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormField>();

  // Handle rich text
  const handleText = () => {
    const contentState = editorState.getCurrentContent();
    const raw = JSON.stringify(convertToRaw(contentState));
    return raw;
  };

  const [createCompany] = useMutation(CREATE_COMPANY);

  const onSubmit: SubmitHandler<FormField> = (data) => {
    const newCompany = {
      ...data,
      description: handleText(),
      avatar: image,
      industry: industry,
      city: city,
      country: country,
      ot: ot,
    };

    createCompany({
      variables: { input: newCompany },
    });
    console.log(newCompany);
  };

  // Text input component
  const TextInputGroup = ({ label, type, nregister }: TextInputGroupT) => {
    return (
      <div className="w-[40%] flex flex-col m-4 ">
        <label className="text-lg py-4 font-semibold">{label}</label>
        <input
          type={type}
          className="w-full h-10   rounded-[4px] px-4 py-2 focus:outline-none 
              focus:ring-2 focus:ring-purple focus:border-transparent
              shadow-card"
          {...register(nregister)}
        />
      </div>
    );
  };

  // Select input component
  const SelectInputGroup = ({
    label,
    options,
    set,
    value,
  }: SelectInputGroupT) => {
    const { isOpen, toggleDropdown, dropdownRef } = useDropdown();

    const handleChange = (option: string) => {
      set(option);
    };

    return (
      <div className="w-[40%] flex flex-col m-4 ">
        <label className="text-lg py-4 font-semibold">{label}</label>
        <div
          className="w-full h-10 bg-[#ffffff]  rounded-[4px] px-4 py-2 focus:outline-none 
              focus:ring-2 focus:ring-purple focus:border-transparent
              shadow-card cursor-pointer relative"
          onClick={toggleDropdown}
        >
          <p className="w-full text-left">{value}</p>
          {isOpen && (
            <div
              ref={dropdownRef}
              className="absolute z-10 right-0 top-12 bg-bg_1 text-purple2 p-2 w-full text-left rounded"
            >
              {options.map((option) => (
                <div
                  key={option}
                  className=" cursor-pointer p-4 hover:bg-bg_2 "
                  onClick={() => handleChange(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <Header></Header>
      <div className="w-full relative flex flex-row justify-end ">
        <div className="h-full fixed top-[66px] left-[-2rem] w-[5rem] bg-purple rounded-md ">
          <Link to="/createcompany">
            <RiShoppingBag3Fill
              size={20}
              className=" text-white mt-8 ml-8 cursor-pointer w-12 h-10 py-[0.3rem] flex items-center justify-center hover:bg-purple2"
            />
          </Link>
        </div>
        <div className="w-40 flex flex-row justify-start items-center h-8 pt-8 pl-2">
          <IoIosArrowRoundBack size={20} className="cursor-pointer" />
          <div className="ml-2 font-semibold text-base text-purple">
            Create Company
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[80%] pr-14 bg-[#ffffff] mr-14 pt-4"
        >
          <div className="w-full flex flex-row pt-10 pl-14 items-center">
            <FaStarOfLife size={8} className="text-[#f52335] mr-2" />
            <p className="">Indicates that this field is required.</p>
          </div>
          <div className="flex flex-row flex-wrap justify-between p-8 text-text_1 text-sm">
            {/* Company name */}
            <TextInputGroup label="Company Name" type="text" nregister="name" />
            {/* Email */}
            <TextInputGroup label="Email" type="email" nregister="email" />
            {/* Address */}
            <TextInputGroup label="Address" type="text" nregister="address" />
            {/* Website */}
            <TextInputGroup label="Website" type="text" nregister="website" />
            {/* Description */}
            <div className="w-[100%] h-[20rem] mt-4 ">
              <p className="text-lg py-4 font-semibold ">Description</p>
              <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
              />
            </div>
            {/* Upload avatar */}
            <div className="w-[80%] flex flex-col m-4 mt-40 shadow-card p-4 ">
              <label className="text-lg py-4 font-semibold">
                Upload avatar
              </label>
              <ImageUpload onUpload={(url) => setImage(url)} />
            </div>

            {/* Industry */}
            <SelectInputGroup
              label="Industry"
              options={['Outsourcing', 'Production', 'Consulting']}
              set={setIndustry}
              value={industry}
            />

            {/* Country */}
            <SelectInputGroup
              label="Country"
              options={['Vietnam', 'Japan', 'Singapore', 'USA', 'China']}
              set={setCountry}
              value={country}
            />

            {/* city */}
            <SelectInputGroup
              label="City"
              options={['Ho Chi Minh City', 'Ha Noi', 'Da Nang']}
              set={setCity}
              value={city}
            />

            {/* ot */}
            <SelectInputGroup
              label="Over Time"
              options={['Not at all', 'No more than 12h', 'No more than 24h']}
              set={setOt}
              value={ot}
            />
          </div>
          <div className="w-full mt-4 flex flex-row justify-end p-4">
            <button
              type="submit"
              className="w-1/6 h-10 bg-purple2 text-white rounded-md mr-8"
            >
              Create new company
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default CreateCompany;
