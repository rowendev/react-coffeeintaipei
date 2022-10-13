import React from "react";
import { AiFillCheckCircle, AiOutlineInstagram } from "react-icons/ai";

function District({ district }) {
  return (
    <div>
      <h3>{district}</h3>
      <div className="card">
        <h4>7-11</h4>
        <p>台北市北投區大同街153號1號倉庫</p>
        <p>週一～五12:00–19:00，週六、日 12:00–20:30</p>
        <a
          href="https://www.instagram.com/explore/locations/213028214/sheme-house/?utm_source=ig_embed&ig_rid=17858ca4-e496-4f4e-b214-85b15a4ac384"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineInstagram />
        </a>
        <div className="condition" style={{ display: "flex" }}>
          <p>
            <AiFillCheckCircle />
            插座
          </p>
          <p>
            <AiFillCheckCircle />
            不限時
          </p>
        </div>
      </div>
      <div className="card">
        <h4>7-11</h4>
        <p>地址: 台北市北投區大同街153號1號倉庫</p>
        <p>營業時間: 週一～五12:00–19:00，週六、日 12:00–20:30</p>
        <div className="condition" style={{ display: "flex" }}>
          <p>
            <AiFillCheckCircle />
            插座
          </p>
          <p>
            <AiFillCheckCircle />
            不限時
          </p>
        </div>
      </div>
    </div>
  );
}

export default District;
