import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';

const LanguageDropdown = ({ mobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);
  const activeLanguage = useLocale();

  useEffect(() => {
    const language = JSON.parse(localStorage.getItem('language'));
    if (language) {
      setSelectedOption(language);
    } else {
      setSelectedOption({
        id: 1,
        language: 'English',
        flag: '/assets/England.png',
        shorthand: 'en',
      });
    }
  }, []);

  //   const options = ['Option 1', 'Option 2', 'Option 3'];
  const languages = [
    {
      id: 1,
      language: 'English',
      flag: '/assets/England.png',
      shorthand: 'en',
    },
    {
      id: 2,
      language: 'اردو',
      flag: '/assets/Pakistan.png',
      shorthand: 'ur',
    },
    {
      id: 3,
      language: 'العربية',
      flag: '/assets/Saudi.png',
      shorthand: 'ar',
    },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    console.log({ option });
    setSelectedOption(option);
    axios
      .get(`/api/cookieinfo?newLang=${option.shorthand}`)
      .then((res) => {
        console.log({ res });
        localStorage.setItem('language', JSON.stringify(option));
        window.location.reload();
        setIsOpen(false);
      })
      .catch((err) => {
        console.log({ err });
        setIsOpen(false);
      });
    // setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative w-[100%] md:w-[160px] inline-block"
      ref={dropdownRef}
    >
      {selectedOption?.language && (
        <>
          <div
            className={`flex ${
              !mobile
                ? 'justify-end'
                : mobile && activeLanguage === 'en'
                ? 'justify-start'
                : 'justify-end'
            } items-center rounded-md ${
              !mobile && 'pl-4'
            } py-2 text-white cursor-pointer`}
            onClick={toggleDropdown}
          >
            <span className="mr-4 inline-block transform transition-transform duration-200 ease-in-out">
              {isOpen ? '▲' : '▼'}
            </span>
            <div className="flex items-center">
              <div className="w-[30px] mr-4">
                <img
                  src={selectedOption?.flag}
                  alt="Language"
                  className="max-w-[100%]"
                />
              </div>
              <p className="text-white ">{selectedOption?.language}</p>
            </div>
          </div>
          {isOpen && (
            <div className="cursor-pointer absolute left-0 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              {languages.map((item, index) => (
                // <div
                //   key={index}
                //   className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-200"
                //   onClick={() => selectOption(item)}
                // >
                //   <img src={item.flag} />
                //   {item.language}
                // </div>
                <div
                  key={index}
                  onClick={() => selectOption(item)}
                  className="flex items-center px-5 py-3"
                >
                  <div className="w-[30px] mr-4">
                    <img
                      src={item.flag}
                      alt="Language"
                      className="max-w-[100%]"
                    />
                  </div>
                  <p className="text-black">{item.language}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LanguageDropdown;
