import React, { Component } from "react";


class Feed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <br></br>
            <h1 className="h1-main">Feed</h1>
          </div>
        </div>
        <div className="container col-md-8">
          <div
            className="col-md-12"
            style={{
              backgroundColor: "#1a8687",
              justifyContent: "center",
              backgroundColor: "rgb(26, 134, 135)",
              display: "flex"
            }}
          >
            <input
              type="text"
              className="inputFields"
              style={{ width: "100%", marginleft: "10px" }}
              onChange={e => this.setState({ buscaTable: e.target.value })}
            />
            <button
              type="button"
              className="join-btn-no-transform mr-1 login col-md-2"
              style={{
                width: "100%",
                borderRadius: "20px",
                marginLeft: "10px"
              }}
              onClick={() => this.findProblem()}
            >
              Buscar
          </button>
          </div>
        </div>


        {/* <div className="row">
          <div className="col-md-12">
            <table className="table table-main">
              <thead>
                <tr>
                  <th scope="col" style={{ display: "none" }}>
                    ID
                </th>
                  <th scope="col">Empresa</th>

                </tr>
              </thead>
            </table>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Feed;