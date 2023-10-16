import React, { useState } from "react";
import './events.css';
import Banner1 from '../../assest/images/banner_1.png';
import Banner2 from '../../assest/images/banner_2.png';
import Banner3 from '../../assest/images/banner_3.png';
import Banner4 from '../../assest/images/banner_4.jpg';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

function Events() {
  // Create an array of states to track favorite for each card
  const [isFavoriteArray, setIsFavoriteArray] = useState([false, false, false, false]);

  // Function to toggle the favorite for a specific card
  const toggleFavorite = (index) => {
    const newFavoriteArray = [...isFavoriteArray];
    newFavoriteArray[index] = !newFavoriteArray[index];
    setIsFavoriteArray(newFavoriteArray);
  };

  return (
    <section className="container event_section">
    <h2 className="section_title"><span>Events</span></h2>
      <div className="events_container">
        {[
          { banner: Banner1, title: "Discover Your Path to Australia: International Education and Migration Fair" },
          { banner: Banner2, title: "Discover Your Path to Australia: International Education and Migration Fair" },
          { banner: Banner3, title: "Discover Your Path to Australia: International Education and Migration Fair" },
          { banner: Banner4, title: "Discover Your Path to Australia: International Education and Migration Fair" },
          { banner: Banner1, title: "Discover Your Path to Australia: International Education and Migration Fair" },
          { banner: Banner2, title: "Discover Your Path to Australia: International Education and Migration Fair" },
          { banner: Banner3, title: "Discover Your Path to Australia: International Education and Migration Fair" },
          { banner: Banner4, title: "Discover Your Path to Australia: International Education and Migration Fair" },
        ].map((event, index) => (
          <div className="event_card" key={index}>
            <div className="event_banner">
              <img src={event.banner} alt="Event Banner" />
            </div>
            <span onClick={() => toggleFavorite(index)} className={isFavoriteArray[index] ? "favorate" : ""}>
              {isFavoriteArray[index] ? <AiFillHeart /> : <AiOutlineHeart />}
            </span>
            <div className="event_details">
              <h6 className="event_title">{event.title}</h6>
              <p className="event_dt">Fri, Aug 18, 2023 - 3:00 PM</p>
              <p className="event_venue">Holiday Inn Cebu City</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;
