import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
import env from "./../../consts";
import Projects from "./projects";

class ModalLearnMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      modal: false
    };
    this.sendEvent = this.sendEvent.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  sendEvent(status) {
    axios
      .put(env.API + "resource-problem", {
        id: this.props.atualProblemResourceId,
        status: status
      })
      .then(response => {
        // handle success
        this.props.history.push("/lista-projetos");
      })
      .catch(error => {
        console.log(error + "Erro na API");
      });
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  loadProblems() {
    // Make a request for a user with a given ID
    axios
      .get(env.API + "problem")
      .then(response => {
        // handle success
        const data = response.data;
        this.setState({ users: data });
      })
      .catch(error => {
        // handle error
        console.log(error + "Erro na API");
      });
  }
  componentDidMount() {
    this.loadProblems();
  }

  render() {
    const closeBtn = (
      <button className="close" onClick={this.toggle}>
        &times;
      </button>
    );

    return (
      <div>
        <Button
          className="join-btn-no-transform mr-1"
          style={{
            width: "100%",
            marginBottom: "5px",
            marginTop: "5px"
          }}
          onClick={this.toggle}
        >
          {this.props.buttonLabel}Saiba mais!
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          style={{ marginTop: "140px" }}
        >
          <ModalHeader toggle={this.toggle} close={closeBtn}>
            {this.props.titulo}
          </ModalHeader>
          <ModalBody>
            {this.state.users.map(problem => {
              return (
                <div>
                  {this.props.atualProblemId == problem.id ? (
                    <div>
                      <tr key={`buscaTable${problem.id}`}>
                        <td style={{ display: "none" }}>{problem.id}</td>
                        <td>{problem.descricao}</td>
                      </tr>
                    </div>
                  ) : null}
                </div>
              );
            })}
            <br />
          </ModalBody>
          <ModalFooter>
            <Button
              color="info"
              onClick={() => this.sendEvent("AGUARDANDO-CONTATO")}
            >
              Entrem em contato comigo
            </Button>
            <Button color="info" onClick={() => this.sendEvent("RECUSADO")}>
              Recursar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalLearnMore;
