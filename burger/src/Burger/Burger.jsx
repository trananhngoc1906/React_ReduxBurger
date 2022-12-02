import React, { Component } from "react";
import { connect } from "react-redux";

class Burger extends Component {
  renderBread = () => {
    let { burger } = this.props;

    return Object.entries(burger).map(([key, value], index) => {
      let midBurger = [];
      for (let i = 0; i < value; i++) {
        midBurger.push(<div key={i} className={key}></div>);
      }
      return midBurger;
    });
  };

  totalCounting = () => {
    let { menu, burger } = this.props;
    let total = 0;
    for (let key in burger) {
      let per = burger[key] * menu[key]; //salad: 1 * salad: 10 = 10
      total += per;
    }
    return total;
  };

  renderMenu = () => {
    let { menu, burger, dispatch } = this.props;
    return Object.entries(menu).map(([key, value], index) => {
      return (
        <tr key={index}>
          <td>{key}</td>
          <td style={{ minWidth: "25%" }}>
            <button
              className="btn btn-success mx-1"
              onClick={() => {
                const action = {
                  type: "ADD_BREAD",
                  payload: {
                    [key]: 1,
                  },
                };
                dispatch(action);
              }}
            >
              +
            </button>
            {burger[key]}
            {/* {burger[key] > 1 && <button
              className="btn btn-danger mx-1"
              onClick={() => {
                const action = {
                  type: "ADD_BREAD",
                  payload: {
                    [key]: -1
                  }
                }
                dispatch(action);
              }}
            >
              -
            </button>} */}
            <button
              className="btn btn-danger mx-1"
              onClick={() => {
                const action = {
                  type: "ADD_BREAD",
                  payload: {
                    [key]: -1,
                  },
                };
                dispatch(action);
              }}
            >
              -
            </button>
          </td>
          <td>{value}</td>
          <td>{burger[key] * value}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Bài tập Burger</h1>
        <div className="row">
          <div className="col-6">
            <div className="breadTop"></div>
            {this.renderBread()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-6 text-center">
            <h3>Menu</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Thức ăn</th>
                  <th>Số lượng</th>
                  <th>Đơn giá</th>
                  <th>Thành tiền</th>
                </tr>
              </thead>
              <tbody>{this.renderMenu()}</tbody>
              <tfoot>
                <tr>
                  <th colSpan={2}></th>
                  <th>Tổng cộng</th>
                  <th>{this.totalCounting()}</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total,
  };
};

export default connect(mapStoreToProps)(Burger);
