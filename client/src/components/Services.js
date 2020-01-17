import React, { Component } from "react";
import { FaMortarPestle, FaCircle } from "react-icons/fa";

import { GiCoffeeMug, GiPorcelainVase } from "react-icons/gi";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaMortarPestle />,
        title: "Bowls",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat volutate."
      },

      {
        icon: <FaCircle />,
        title: "Plates",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat volutate."
      },
      {
        icon: <GiPorcelainVase />,
        title: "Vases",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat volutate."
      },
      {
        icon: <GiCoffeeMug />,
        title: "Mugs",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat volutate."
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
