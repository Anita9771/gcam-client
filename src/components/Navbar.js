import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMainDropdown, setOpenMainDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMainDropdown = (index) => {
    setOpenMainDropdown(openMainDropdown === index ? null : index);
    setOpenSubDropdown(null);
  };

  const toggleSubDropdown = (key) => {
    setOpenSubDropdown(openSubDropdown === key ? null : key);
  };

  useEffect(() => {
    const handleScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
      setIsAtBottom(atBottom);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpenMainDropdown(null);
        setOpenSubDropdown(null);
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Giving',
      subItems: [
        { name: 'Make a Pledge', path: '/giving/pledge' },
        { name: 'Partnership', path: '/giving/partnership' },
        { name: 'Give Now', path: '/giving/payment' },
      ],
    },
    {
      name: 'Join Us',
      subItems: [
        {
          name: 'Register',
          subItems: [
            { name: 'First Timer', path: '/join-us/register/first-timer' },
            { name: 'Second Timer', path: '/join-us/register/second-timer' },
            { name: 'New Believer', path: '/join-us/register/new-believer' },
            { name: 'Church Member', path: '/join-us/register/member' },
            { name: 'Program Attendance', path: '/join-us/register/program-attendance' },
          ],
        },
        { name: 'Login', path: '/join-us/login' },
        { name: 'Create Profile', path: '/join-us/create-profile' },
      ],
    },
    {
      name: 'Forms',
      subItems: [
        { name: 'Child Dedication', path: '/forms/child-dedication' },
        { name: 'Baby Naming', path: '/forms/baby-naming' },
        { name: 'Intending Couples', path: '/forms/couples' },
        { name: 'Testimonies', path: '/forms/testimonies' },
      ],
    },
    {
      name: 'Help',
      subItems: [
        { name: 'Request', path: '/help/request' },
        { name: 'Enquiries', path: '/help/enquiries' },
        { name: 'Contact Us', path: '/help/contact' },
        { name: 'Welfare', path: '/help/welfare' },
      ],
    },
    {
      name: 'Downloads',
      subItems: [
        { name: 'Picture Gallery', path: '/downloads/gallery' },
        // { name: 'MP3 Download', path: '/downloads/mp3' },
      ],
    },
    {
      name: 'More Info',
      subItems: [
        // { name: 'Blog', path: '/more/blog' },
        { name: 'Departments', path: '/more/departments' },
        { name: 'Awakening', path: '/more/awakening' },
        { name: 'Praise', path: '/more/praise' },
      ],
    },
    // {
    //   name: 'Life Class',
    //   path: '/life-class',
    //   highlight: true,
    // },
    {
      name: 'Live Stream',
      path: 'https://web.facebook.com/profile.php?id=61576995746428&sk=videos',
      highlight: true,
    },
  ];

  const handleNavClick = () => {
    setOpenMainDropdown(null);
    setOpenSubDropdown(null);
    setIsOpen(false);
  };

  return (
    <nav
      className={`z-50 dark:bg-gray-900 dark:text-gray-100 fixed top-0 w-full shadow-lg transition-all duration-500 ${
        isAtBottom ? 'translate-y-[-20px]' : 'translate-y-0'
      }`}
      style={{ backgroundColor: '#800020', color: '#FFF5E1' }}
      ref={dropdownRef}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold" style={{ color: '#FFF5E1' }}>
              GCAM
            </Link>
          </div>
          <div className="hidden md:flex space-x-2">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                    style={{
                      backgroundColor: item.highlight ? '#B0A8B9' : 'transparent',
                      color: '#FFF5E1',
                    }}
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => toggleMainDropdown(index)}
                      className="px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors"
                      style={{ color: '#FFF5E1' }}
                    >
                      {item.name}
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform ${
                          openMainDropdown === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#FFF5E1"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`absolute z-10 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transform transition duration-300 origin-top-left ${
                        openMainDropdown === index
                          ? 'scale-100 opacity-100'
                          : 'scale-95 opacity-0 pointer-events-none'
                      }`}
                      style={{ backgroundColor: '#FFF5E1', color: '#800020' }}
                    >
                      <div className="py-1">
                        {item.subItems.map((subItem, subIndex) => (
                          subItem.path ? (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              className="block px-4 py-2 text-sm hover:bg-[#fcebdc]"
                              style={{ color: '#800020' }}
                              onClick={handleNavClick}
                            >
                              {subItem.name}
                            </Link>
                          ) : (
                            <div key={subIndex} className="relative">
                              <button
                                onClick={() => toggleSubDropdown(`${index}-${subIndex}`)}
                                className="flex justify-between items-center w-full px-4 py-2 text-sm hover:bg-[#fcebdc]"
                                style={{ color: '#800020' }}
                              >
                                {subItem.name}
                                <svg
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="#800020"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </button>
                              <div
                                className={`absolute left-full top-0 ml-1 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transform transition duration-300 origin-top-left ${
                                  openSubDropdown === `${index}-${subIndex}`
                                    ? 'scale-100 opacity-100'
                                    : 'scale-95 opacity-0 pointer-events-none'
                                }`}
                                style={{ backgroundColor: '#FFF5E1' }}
                              >
                                <div className="py-1">
                                  {subItem.subItems.map((nestedItem, nestedIndex) => (
                                    <Link
                                      key={nestedIndex}
                                      to={nestedItem.path}
                                      className="block px-4 py-2 text-sm hover:bg-[#fcebdc]"
                                      style={{ color: '#800020' }}
                                      onClick={handleNavClick}
                                    >
                                      {nestedItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              style={{ color: '#FFF5E1' }}
            >
              {isOpen ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="#FFF5E1">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="#FFF5E1">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-2 space-y-1 pb-4">
            {navItems.map((item, index) => (
              <div key={index} className="px-2">
                {item.path ? (
                  <Link
                    to={item.path}
                    className="block px-4 py-2 rounded-md text-sm"
                    style={{ color: '#FFF5E1' }}
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => toggleMainDropdown(index)}
                      className="w-full text-left px-4 py-2 rounded-md text-sm"
                      style={{ color: '#FFF5E1' }}
                    >
                      {item.name}
                    </button>
                    {openMainDropdown === index && (
                      <div className="ml-4">
                        {item.subItems.map((subItem, subIndex) => (
                          subItem.path ? (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              className="block px-4 py-2 text-sm"
                              style={{ color: '#FFF5E1' }}
                              onClick={handleNavClick}
                            >
                              {subItem.name}
                            </Link>
                          ) : (
                            <div key={subIndex} className="ml-4">
                              <button
                                onClick={() => toggleSubDropdown(`${index}-${subIndex}`)}
                                className="w-full text-left px-4 py-2 text-sm"
                                style={{ color: '#FFF5E1' }}
                              >
                                {subItem.name}
                              </button>
                              {openSubDropdown === `${index}-${subIndex}` && (
                                <div className="ml-4">
                                  {subItem.subItems.map((nestedItem, nestedIndex) => (
                                    <Link
                                      key={nestedIndex}
                                      to={nestedItem.path}
                                      className="block px-4 py-2 text-sm"
                                      style={{ color: '#FFF5E1' }}
                                      onClick={handleNavClick}
                                    >
                                      {nestedItem.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
