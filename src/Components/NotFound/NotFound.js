import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="bg-purple">
      <div className="stars">
        <div className="central-body">
          <img
            className="image-404"
            src="http://salehriaz.com/404Page/img/404.svg"
            width="300px" alt=""
          />
          <a
            href="http://salehriaz.com/404Page/404.html"
            className="btn-go-home"
            target="_blank"
          >
            GO BACK HOME
          </a>
        </div>
        <div className="objects">
          <img
            className="object_rocket"
            src="http://salehriaz.com/404Page/img/rocket.svg"
            width="40px"alt=""
          />
          <div class="earth-moon">
            <img
              class="object_earth"
              src="http://salehriaz.com/404Page/img/earth.svg"
              width="100px"alt=""
            />
            <img
              class="object_moon"
              src="http://salehriaz.com/404Page/img/moon.svg"
              width="80px"alt=""
            />
          </div>
          <div class="box_astronaut">
            <img
              class="object_astronaut"
              src="http://salehriaz.com/404Page/img/astronaut.svg"
              width="140px"alt=""
            />
          </div>
        </div>
        <div class="glowing_stars">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;