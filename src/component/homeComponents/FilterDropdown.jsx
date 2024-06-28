
// import React, { useState } from "react";
// import {
//   Form,
//   Dropdown,
//   Button,
//   InputGroup,
//   FormControl,
// } from "react-bootstrap";
// import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { FiSearch } from "react-icons/fi";

// const countries = ["Lombok", "NTT", "Bali", "United Yogyakarta", "Wonosobo"];

// function FilterDropdown() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState("Location");

//   const [isGuestOpen, setIsGuestOpen] = useState(false);
//   const [adultGuests, setAdultGuests] = useState(1);
//   const [childrenGuests, setChildrenGuests] = useState(0);

//   const [startDate, setStartDate] = useState(new Date());

//   const toggleDropdown = () => setIsOpen(!isOpen);
//   const toggleGuestDropdown = () => setIsGuestOpen(!isGuestOpen);

//   const handleSelect = (eventKey) => {
//     setSelectedCountry(eventKey);
//     setIsOpen(false);
//   };

//   const handleGuestChange = (type, action) => {
//     if (type === "adult") {
//       if (action === "increment") setAdultGuests(adultGuests + 1);
//       if (action === "decrement" && adultGuests > 0)
//         setAdultGuests(adultGuests - 1);
//     } else if (type === "children") {
//       if (action === "increment") setChildrenGuests(childrenGuests + 1);
//       if (action === "decrement" && childrenGuests > 0)
//         setChildrenGuests(childrenGuests - 1);
//     }
//   };

//   return (
//     <div
//       className="mt-4 d-flex flex-row justify-content-center align-items-center py-2 px-3 filter-container"
//       style={{
//         backgroundColor: "rgba(255, 255, 255, 1)",
//         borderRadius: "25px",
//         boxShadow: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.25)",
//       }}
//     >
//       {/* Country Dropdown */}
//       <Form.Group
//         controlId="countrySelect"
//         className="filter-group"
//       >
//         <Dropdown show={isOpen} onToggle={toggleDropdown} drop="down">
//           <Dropdown.Toggle
//             variant="transparant"
//             id="dropdown-basic"
//             onClick={toggleDropdown}
//             className="custom-dropdown-toggle"
//           >
//             {selectedCountry}
//             <span>
//               {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
//             </span>
//           </Dropdown.Toggle>
//           <Dropdown.Menu className="dwn mt-3"> 
//             {countries.map((country, index) => (
//               <Dropdown.Item
//                 key={index}
//                 eventKey={country}
//                 onSelect={handleSelect}
//               >
//                 {country}
//               </Dropdown.Item>
//             ))}
//           </Dropdown.Menu>
//         </Dropdown>
//       </Form.Group>

//       {/* Date Picker */}
//       <Form.Group
//         controlId="dateSelect"
//         className="filter-group"
//       >
//         <DatePicker
//           className="dwn"
//           selected={startDate}
//           onChange={(date) => setStartDate(date)}
//           customInput={
//             <Button variant="transparant" className="custom-dropdown-toggle">
//               {startDate.toDateString()}
//               <span>
//                 <RiArrowDropDownLine />
//               </span>
//             </Button>
//           }
//         />
//       </Form.Group>

//       {/* Guest Dropdown */}
//       <Form.Group controlId="guestSelect" className="filter-group">
//         <Dropdown show={isGuestOpen} onToggle={toggleGuestDropdown} drop="down">
//           <Dropdown.Toggle
//             variant="transparant"
//             id="dropdown-basic"
//             onClick={toggleGuestDropdown}
//             className="custom-dropdown-toggle"
//           >
//             {`Adults: ${adultGuests}, Children: ${childrenGuests}`}
//             <span>
//               {isGuestOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
//             </span>
//           </Dropdown.Toggle>
//           <Dropdown.Menu style={{minWidth:"15em"}} className="dwn px-3 mt-3">
//             <div className="d-flex flex-row">
//               <div style={{minWidth:"50%"}} >
//                 <Dropdown.Header className="px-0">Adults</Dropdown.Header>
//               </div>
//               <InputGroup className="mb-3">
//                 <Button
//                   variant="outline-secondary"
//                   onClick={() => handleGuestChange("adult", "decrement")}
//                 >
//                   -
//                 </Button>
//                 <FormControl value={adultGuests} readOnly />
//                 <Button
//                   variant="outline-secondary"
//                   onClick={() => handleGuestChange("adult", "increment")}
//                 >
//                   +
//                 </Button>
//               </InputGroup>
//             </div>
//             <div className="d-flex flex-row">
//               <div className="d-flex flex-column" style={{ minWidth: "50%" }}>
//                 <Dropdown.Header className="px-0">Children</Dropdown.Header>
//               </div>
//               <InputGroup>
//                 <Button
//                   variant="outline-secondary"
//                   onClick={() => handleGuestChange("children", "decrement")}
//                 >
//                   -
//                 </Button>
//                 <FormControl value={childrenGuests} readOnly />
//                 <Button
//                   variant="outline-secondary"
//                   onClick={() => handleGuestChange("children", "increment")}
//                 >
//                   +
//                 </Button>
//               </InputGroup>
//             </div>
//           </Dropdown.Menu>
//         </Dropdown>
//       </Form.Group>

//       <div
//         className="d-flex flex-row fs-3 p-2 search-icon"
//         style={{
//           borderRadius: "100px",
//           backgroundColor: "rgba(0, 60, 130, 1)",
//         }}
//       >
//         <FiSearch />
//       </div>

//       <style>{`
//         .react-datepicker-wrapper{
//           display:flex;
//         }
//         .custom-dropdown-toggle::after {
//           display: none;
//         }
        
//         .custom-dropdown-toggle {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           width: 100%;
//         }

//         .filter-container {
//           flex-wrap: wrap;
//         }

//         .filter-group {
//           border-right: grey solid 1px;
//           flex: 1 1 100%;
//         }

//         .search-icon {
//           flex: 1 1 auto;
//           margin-top: 1rem;
//         }

//         @media (min-width: 576px) {
//           .filter-group {
//             flex: 1;
//             border-right: grey solid 1px;
//           }

//           .search-icon {
//             margin-top: 0;
//           }
//         }

//         @media (max-width: 575.98px) {
//           .filter-group {
//             border-right: none;
//             border-bottom: grey solid 1px;
//           }

//           .filter-container {
//             flex-direction: column;
//           }

//           .search-icon {
//             margin-top: 1rem;
//             align-self: center;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default FilterDropdown;
import React, { useState } from "react";
import {
  Form,
  Dropdown,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiSearch } from "react-icons/fi";

const countries = ["Lombok", "NTT", "Bali", "United Yogyakarta", "Wonosobo"];

function FilterDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Location");

  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const [adultGuests, setAdultGuests] = useState(1);
  const [childrenGuests, setChildrenGuests] = useState(0);

  const [startDate, setStartDate] = useState(new Date());

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleGuestDropdown = () => setIsGuestOpen(!isGuestOpen);

  const handleSelect = (eventKey) => {
    setSelectedCountry(eventKey);
    setIsOpen(false);
  };

  const handleGuestChange = (type, action) => {
    if (type === "adult") {
      if (action === "increment") setAdultGuests(adultGuests + 1);
      if (action === "decrement" && adultGuests > 0)
        setAdultGuests(adultGuests - 1);
    } else if (type === "children") {
      if (action === "increment") setChildrenGuests(childrenGuests + 1);
      if (action === "decrement" && childrenGuests > 0)
        setChildrenGuests(childrenGuests - 1);
    }
  };

  return (
    <div
      className="filter-container mt-4 d-flex flex-row justify-content-center align-items-center py-2 px-3"
      style={{
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: "25px",
        boxShadow: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.25)",
      }}
    >
      {/* Country Dropdown */}
      <Form.Group
        controlId="countrySelect"
        className="filter-group"
        style={{ flex: "1" }}
      >
        <Dropdown show={isOpen} onToggle={toggleDropdown} drop="down">
          <Dropdown.Toggle
            variant="transparant"
            id="dropdown-basic"
            onClick={toggleDropdown}
            className="custom-dropdown-toggle"
          >
            {selectedCountry}
            <span>
              {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dwn mt-3">
            {countries.map((country, index) => (
              <Dropdown.Item
                key={index}
                eventKey={country}
                onSelect={handleSelect}
              >
                {country}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>

      {/* Date Picker */}
      <Form.Group
        controlId="dateSelect"
        className="filter-group"
        style={{ flex: "1" }}
      >
        <DatePicker
          className="dwn"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          customInput={
            <Button variant="transparant" className="custom-dropdown-toggle">
              {startDate.toDateString()}
              <span>
                <RiArrowDropDownLine />
              </span>
            </Button>
          }
        />
      </Form.Group>

      {/* Guest Dropdown */}
      <Form.Group controlId="guestSelect" className="filter-group" style={{ flex: "1" }}>
        <Dropdown show={isGuestOpen} onToggle={toggleGuestDropdown} drop="down">
          <Dropdown.Toggle
            variant="transparant"
            id="dropdown-basic"
            onClick={toggleGuestDropdown}
            className="custom-dropdown-toggle"
          >
            {`Adults: ${adultGuests}, Children: ${childrenGuests}`}
            <span>
              {isGuestOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu style={{minWidth:"15em"}} className="dwn px-3 mt-3">
            <div className="d-flex flex-row">
              <div style={{minWidth:"50%"}}>
                <Dropdown.Header className="px-0">Adults</Dropdown.Header>
              </div>
              <InputGroup className="mb-3">
                <Button
                  variant="outline-secondary"
                  onClick={() => handleGuestChange("adult", "decrement")}
                >
                  -
                </Button>
                <FormControl value={adultGuests} readOnly />
                <Button
                  variant="outline-secondary"
                  onClick={() => handleGuestChange("adult", "increment")}
                >
                  +
                </Button>
              </InputGroup>
            </div>
            <div className="d-flex flex-row">
              <div className="d-flex flex-column" style={{ minWidth: "50%" }}>
                <Dropdown.Header className="px-0">Children</Dropdown.Header>
              </div>
              <InputGroup>
                <Button
                  variant="outline-secondary"
                  onClick={() => handleGuestChange("children", "decrement")}
                >
                  -
                </Button>
                <FormControl value={childrenGuests} readOnly />
                <Button
                  variant="outline-secondary"
                  onClick={() => handleGuestChange("children", "increment")}
                >
                  +
                </Button>
              </InputGroup>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>

      <div
        className="search-icon d-flex flex-row fs-3 p-2"
        style={{
          borderRadius: "100px",
          backgroundColor: "rgba(0, 60, 130, 1)",
          marginLeft:"1em"
        }}
      >
        <FiSearch />
      </div>

      <style>{`
        .react-datepicker-wrapper {
          display: flex;
        }
        .custom-dropdown-toggle::after {
          display: none;
        }
        
        .custom-dropdown-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .filter-container {
          flex-wrap: wrap;
        }

        .filter-group {
          flex: 1;
          border-right: grey solid 1px;
        }

        .search-icon {
          margin-left: 1rem;
        }

        @media (max-width: 768px) {
          .filter-group {
            border-right: none;
            border-bottom: grey solid 1px;
            flex: 1 1 100%;
            margin-bottom: 1rem;
          }

          .filter-container {
            flex-direction: column;
          }

          .search-icon {
            margin-left: 0;
            margin-top: 1rem;
            align-self: center;
          }
        }
      `}</style>
    </div>
  );
}

export default FilterDropdown;
