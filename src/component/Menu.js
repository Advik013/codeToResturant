import React, { Component } from "react";
import "./style/Menu.css";
import { NewArray } from "./Data";
// import { useNavigate } from "react-router-dom";
export class Menu extends Component {
  constructor() {
    super();
    this.state = { menu: [], displaypror: "" };
  }

 


  async componentDidMount() {


 

 
    this.setState({ menu: NewArray});
  }


  render() {
    return (
      <>
        <div id="food_container" className="mp-container" >
          {this.state.menu.map(element => {
            return (
              <div className="card" key={element.name}>
                <img src={element.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <li>{element.name}</li>
                  <table className="GeneratedTable">
                    <tbody>
                      <tr>
                        <td>{element.qty_1}</td>
                        <td>{element.qty_1_price}</td>
                      </tr>
                      <tr>
                        <td>{element.qty_2}</td>
                        <td>{element.qty_2_price}</td>
                      </tr>
                      <tr style={{ display: this.state.displaypror }}>
                        <td>{element.qty_3}</td>
                        <td>{element.qty_3_price}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Menu;
