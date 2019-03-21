import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios";
import env from "./../../consts";


class RegisterResourceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email:"",
      end: "",
      tel: "",
      cel: "",
      cid: "",
      est: "",
      hab: "",
      areai: "",
      message1: "",     
      
      sweetCreate: false
    };
    console.log(this.props);
    this.hasErros = this.hasErros.bind(this);
    this.createResource = this.createResource.bind(this);
  }
  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({ sweetCreate: true });
  }
  createResource(method, id) {
    alert(1);
    if (!this.hasErros()) {

     if (method == "create") { 
      axios
        .post(env.API + "resource", {
          fname: this.state.fname,
          lname: this.state.lname,
          email:this.state.email,
          end: this.state.end,
          tel: this.state.tel,
          cel: this.state.cel,
          cid: this.state.cid,
          est: this.state.est,
          hab: this.state.hab,
          areai: this.state.areai,
          message1: this.state.message1		  
		  
        })
        .then(function (response) {
          alert(2);
          console.log(response);
          window.location = "/cadastro-recurso";
        })
        .catch(function (error) {
          console.log(error);
        });
        } else if (method = "update") {
          axios
          .put(env.API + "resource/" + id, {
            fname: this.state.fname,
            lname: this.state.lname,
            email:this.state.email,
            end: this.state.end,
            tel: this.state.tel,
            cel: this.state.cel,
            cid: this.state.cid,
            est: this.state.est,
            hab: this.state.hab,
            areai: this.state.areai,
            message1: this.state.message1		  
        
          })
          .then(function (response) {
            console.log(response);
            window.location = "/consultar-recurso";
          })
          .catch(function (error) {
            console.log(error);
          });
      
        }
    }
  }
  componentDidMount() {
    if (this.props.id) {
      const id = this.props.id;
      axios
        .get(env.API + "resource/" + id)
        .then((response) => {
          console.log(response);
          const data = response.data;
          this.setState({ fname: data.fname , lname: data.lname, email: data.email, end: data.end ,tel: data.tel ,cel: data.cel,cid: data.cid,est: data.est, hab:data.hab ,areai: data.areai, message1:data.message1 });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  goToConsulta() {
    window.location = "consultar-recurso";
  }

  hasErros() {
    if (this.state.fname === "") {
      this.setState({ error: "preencha o campo nome" });
      return true;
    } else if (this.state.lname === "") {
      this.setState({ error: "preencha o campo sobrenome" });
      return true;
    } else if (this.state.email === "") {
      this.setState({ error: "preencha o campo email" });
      return true;
    } else if (this.state.end === "") {
      this.setState({ error: "preencha o campo endereço" });
      return true;
    } else if (this.state.tel === "") {
      this.setState({ error: "preencha o campo telefone" });
      return true;
    } else if (this.state.cel === "") {
      this.setState({ error: "preencha o campo celular" });
      return true;
    } else if (this.state.cid === "") {
      this.setState({ error: "preencha o campo cidade" });
      return true;
    } else if (this.state.est === "") {
      this.setState({ error: "preencha o campo estado" });
      return true;    	
	} else if (this.state.hab === "") {
      this.setState({ error: "preencha o campo habilidades e qualificações" });
      return true;    	
	} else if (this.state.areai === "") {
      this.setState({ error: "preencha o campo area de interesse" });
      return true;
    }
	return false;
  }


  render() {
    return (
      <div className="App">
        <div>
          <form className="signupForm">
            <label className="labelFields">Nome</label><br />
            <input
              className="inputFields"
              type="text"
              placeholder="Digite o seu nome"
              value={this.state.fname}
              onChange={e => this.setState({ fname: e.target.value })} />
            <div>
              <ul>
                <br />

                <label className="labelFields">Sobrenome:</label><br />
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Digite o sobrenome"
                  value={this.state.lname}
                  onChange={e => this.setState({ lname: e.target.value })} /> <br />
                 <label className="labelFields">E-mail:</label><br />
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Digite o e-mail"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })} /> <br />  

                <label className="labelFields">Endereço:</label><br />
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Digite o endereço"
                  value={this.state.end}
                  onChange={e => this.setState({ end: e.target.value })} /><br />

                <label className="labelFields">Telefone:</label><br />
                <input
                  className="inputFields"
                  type="number"
                  placeholder="Digite o telefone do responsável"
                  value={this.state.tel}
                  onChange={e => this.setState({ tel: e.target.value })} /><br />
              </ul>
            </div>
            <br /><br />
            <div>
              <ul>
                <label className="labelFields">Celular</label>
                <br></br>
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Digite o celular do responsável"
                  value={this.state.cel}
                  onChange={e => this.setState({ cel: e.target.value })} />

              </ul>
            </div>
			<div>
              <ul>
                <label className="labelFields">Cidade</label>
                <br></br>
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Digite a cidade do responsável"
                  value={this.state.cid}
                  onChange={e => this.setState({ cid: e.target.value })} />

              </ul>
            </div>
			<div>
              <ul>
                <label className="labelFields">Estado</label>
                <br></br>
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Digite o estado do responsável"
                  value={this.state.est}
                  onChange={e => this.setState({ est: e.target.value })} />

              </ul>
            </div>
			<div>
              <ul>
                <label className="labelFields">Habilidades e Qualificações</label>
                <br></br>
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Digite as suas habilidades e qualificações"
                  value={this.state.hab}
                  onChange={e => this.setState({ hab: e.target.value })} />

              </ul>
            </div>
			   <ul>
                <label className="labelFields">Area de Interesse</label>
                <br></br>
                <input
                  className="inputFields"
                  type="text"
                  placeholder="Digite as suas áreas de interesse"
                  value={this.state.areai}
                  onChange={e => this.setState({ areai: e.target.value })} />

              </ul>
                  <label className="labelFields" style={{ color: "red" }}>
                    {this.state.error}
                  </label>
          

            <Row>
              <Col>
              
              {this.props.id ?
                  <button
                    type="button"
                    onClick={() => this.goToConsulta("/consultar-recurso")}
                    className="join-btn w-25"
                  >
                    Consultar Recurso
                </button> : null}
            
                <button
                  type="button"
                  onClick={() => { !this.props.id ? this.createResource("create") : this.createResource("update", this.props.id) }}
                  className="join-btn"
                >
                  Cadastrar Recurso
              </button>
              </Col>
            </Row>
          <SweetAlert
            success
            show={this.state.sweetCreate}
            title="Atenção"
            onConfirm={() => this.setState({ sweetCreate: false })}
          >
            {`Cadastrado ${this.state.fname} com sucesso!`}
          </SweetAlert>



          </form>       
        </div>
      </div>

    );
  }
}
export default RegisterResourceForm;
