import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import swal from 'sweetalert';
import { Container, Row, Col } from "react-bootstrap";

const Cfstat = () => {
  const [handle, setHandle] = useState("adarshranjanar2");
  const [users, setUsers] = useState({});

  useEffect(() => {
    fetchDetails();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchDetails();
  };

  const fetchDetails = () => {
    axios
      .get(`https://codeforces.com/api/user.info?handles=${handle}`)
      .then((res) => {
        setUsers(res.data.result[0]);
      })
      .catch((e) => {
        console.log(e);
        if (e) {
          swal("No such id exists", "Please try again", "error");
        }
      });
  };

  

  return (
    <div name="cfstats"  className="w-full h-fit bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <Container className="max-w-screen-lg mx-auto flex flex-col md:flex-row bg-black bg-opacity-50 text-white rounded-lg p-4 md:p-8">
        <div  className="text-center md:text-left md:order-2">
          <h2 className="text-4xl sm:text-7xl font-bold text-white mt-2 md:mt-0">
            Know Your CF STATS!!!
          </h2>
          <form onSubmit={handleSubmit} className="mt-2 md:mt-4 max-w-md">
            <input
              type="text"
              placeholder="Enter your cf id"
              onChange={(e) => {
                setHandle(e.target.value);
              }}
              className="bg-gray-900 text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:border-cyan-500"
            />
            <button
              type="submit"
              className="mt-2 py-2 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-md cursor-pointer hover:scale-105 duration-300"
            >
              Submit
            </button>
          </form>
          {/* Display user info here */}
          {Object.keys(users).length > 0 && (
            <div className="mt-2 md:mt-4 text-white">
              <h3 className="text-xl font-semibold">
                Name: {users.firstName} {users.lastName}
              </h3>
              <p className="mt-2">Current Rank: {users.rank}</p>
              <p>Rating: {users.rating}</p>
              <p>Highest Rating: {users.maxRating}</p>
            </div>
          )}
        </div>
        <div className="title-photo-container md:order-1">
          {users.titlePhoto && (
            <img
              src={users.titlePhoto}
              alt="Title Photo"
              className="rounded-full mx-auto w-2/3 md:w-3/4 mt-2 md:mt-4 border-4 border-cyan-500 shadow-lg hover:scale-105 duration-300 transform hover:rotate-3"
            />
          )}
        </div>
      </Container>
    </div>
  );
};

export default Cfstat;
