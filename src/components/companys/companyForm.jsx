import React, { Component } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import axios from "axios";
import env from "../../consts";
class CompanyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      razaoSocial: "",
      nomeFantasia: "",
      cnpj: "",
      cep: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      uf: "",
      pais: "",
      nomeRepresentante: "",
      telefoneRepresentante: "",
      celularRepresentante: "",
      emailRepresentante: "",
      departamento: "",
      segmentoEmpresa: "",
      sweetCreate: false
    };
    console.log(this.props);
    this.hasErros = this.hasErros.bind(this);
    this.createCompany = this.createCompany.bind(this);
  }
  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({ sweetCreate: true });
  }
  createCompany(method, id) {
    if (!this.hasErros()) {
      if (method == "create") {
        axios
          .post(env.API + "company", {
            razaoSocial: this.state.razaoSocial,
            nomeFantasia: this.state.nomeFantasia,
            cnpj: this.state.cnpj,
            cep: this.state.cep,
            rua: this.state.rua,
            numero: this.state.numero,
            bairro: this.state.bairro,
            cidade: this.state.cidade,
            uf: this.state.uf,
            pais: this.state.pais,
            nomeRepresentante: this.state.nomeRepresentante,
            telefoneRepresentante: this.state.telefoneRepresentante,
            celularRepresentante: this.state.celularRepresentante,
            emailRepresentante: this.state.emailRepresentante,
            departamento: this.state.departamento,
            segmentoEmpresa: this.state.segmentoEmpresa
          })
          .then(response => {
            console.log(response);
            this.props.history.push("/consultar-empresa", state);
          })
          .catch(error => {
            console.log(error);
          });
      } else if ((method = "update")) {
        axios
          .put(env.API + "company/" + id, {
            razaoSocial: this.state.razaoSocial,
            nomeFantasia: this.state.nomeFantasia,
            cnpj: this.state.cnpj,
            cep: this.state.cep,
            rua: this.state.rua,
            numero: this.state.numero,
            bairro: this.state.bairro,
            cidade: this.state.cidade,
            uf: this.state.uf,
            pais: this.state.pais,
            nomeRepresentante: this.state.nomeRepresentante,
            telefoneRepresentante: this.state.telefoneRepresentante,
            celularRepresentante: this.state.celularRepresentante,
            emailRepresentante: this.state.emailRepresentante,
            departamento: this.state.departamento,
            segmentoEmpresa: this.state.segmentoEmpresa
          })
          .then(response => {
            console.log(response);
            this.props.history.push("/consultar-empresa");
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }

  componentDidMount() {
    if (this.props.id) {
      const id = this.props.id;
      axios
        .get(env.API + "company/" + id)
        .then(response => {
          console.log(response);
          const data = response.data;
          this.setState({
            razaoSocial: data.razaoSocial,
            nomeFantasia: data.nomeFantasia,
            cnpj: data.cnpj,
            cep: data.cep,
            rua: data.rua,
            numero: data.numero,
            bairro: data.bairro,
            cidade: data.cidade,
            uf: data.uf,
            pais: data.pais,
            nomeRepresentante: data.nomeRepresentante,
            telefoneRepresentante: data.telefoneRepresentante,
            celularRepresentante: data.celularRepresentante,
            emailRepresentante: data.emailRepresentante,
            departamento: data.departamento,
            segmentoEmpresa: data.segmentoEmpresa
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
  goToConsulta() {
    this.props.history.push("consultar-empresa");
  }
  hasErros() {
    if (this.state.razaoSocial === "") {
      this.setState({ error: "preencha o campo de razão social " });
      return true;
    } else if (this.state.nomeFantasia === "") {
      this.setState({ error: "preencha o campo de nome fantasia " });
      return true;
    } else if (this.state.cnpj === "") {
      this.setState({ error: "preencha o campo de cnpj" });
      return true;
    } else if (this.state.cep === "") {
      this.setState({ error: "preencha o campo de cep" });
      return true;
    } else if (this.state.rua === "") {
      this.setState({ error: "preencha o campo da rua" });
      return true;
    } else if (this.state.numero === "") {
      this.setState({ error: "preencha o campo do numero" });
      return true;
    } else if (this.state.bairro === "") {
      this.setState({ error: "preencha o campo de bairro" });
      return true;
    } else if (this.state.cidade === "") {
      this.setState({ error: "preencha o campo de cidade" });
      return true;
    } else if (this.state.uf === "") {
      this.setState({ error: "preencha o campo de uf" });
      return true;
    } else if (this.state.pais === "") {
      this.setState({ error: "preencha o campo do pais" });
      return true;
    } else if (this.state.nomeRepresentante === "") {
      this.setState({ error: "preencha o campo de nome do representante" });
      return true;
    } else if (this.state.telefoneRepresentante === "") {
      this.setState({ error: "preencha o campo de telefone do representante" });
      return true;
    } else if (this.state.celularRepresentante === "") {
      this.setState({ error: "preencha o campo de celular do representante" });
      return true;
    } else if (this.state.emailRepresentante === "") {
      this.setState({ error: "preencha o campo de email do representante" });
      return true;
    } else if (this.state.departamento === "") {
      this.setState({ error: "preencha o campo do departamento" });
      return true;
    } else if (this.state.segmentoEmpresa === "") {
      this.setState({ error: "preencha o campo de segmento da empresa" });
      return true;
    }
    return false;
  }
  render() {
    return (
      <div className="loginUser col-md-12">
        <form className="signupForm form-inline">
          <div className="col-md-8">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Razão Social:{" "}
            </label>
            <input
              className="inputFields col-md-12"
              type="text"
              id="empresa"
              name="firstname"
              placeholder="Razao Social "
              value={this.state.razaoSocial}
              onChange={e => this.setState({ razaoSocial: e.target.value })}
              required
            />
          </div>
          <div className="col-md-4">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              CNPJ :
            </label>
            <input
              className="inputFields col-md-12"
              type="number"
              id="cnpj"
              name="lastname"
              placeholder="CNPJ"
              value={this.state.cnpj}
              onChange={e => this.setState({ cnpj: e.target.value })}
              required
            />
          </div>
          <div className="col-md-7">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Nome Fantasia:{" "}
            </label>
            <input
              className="inputFields col-md-12"
              type="text"
              id="empresa"
              name="firstname"
              placeholder="Nome Fantasia "
              value={this.state.nomeFantasia}
              onChange={e => this.setState({ nomeFantasia: e.target.value })}
              required
            />
          </div>
          <div className="col-md-3">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              CEP :
            </label>
            <input
              className="inputFields col-md-12"
              type="integer"
              size="10"
              maxlength="9"
              id="cep"
              name="cep"
              placeholder="CEP"
              value={this.state.cep}
              onChange={e => this.setState({ cep: e.target.value })}
              required
            />
          </div>

          <div className="col-md-7">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Rua :
            </label>
            <input
              className="inputFields col-md-12"
              size="60"
              type="text"
              id="rua"
              name="rua"
              placeholder="Rua"
              value={this.state.rua}
              onChange={e => this.setState({ rua: e.target.value })}
              required
            />
          </div>
          <div className="col-md-5">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Numero :
            </label>
            <input
              className="inputFields col-md-12"
              type="number"
              size="6"
              id="numero"
              name="numero"
              placeholder="O numero "
              value={this.state.numero}
              onChange={e => this.setState({ numero: e.target.value })}
              required
            />
          </div>
          <div className="col-md-5">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Bairro :
            </label>
            <input
              className=" inputFields col-md-12"
              size="40"
              type="text"
              id="bairro"
              name="bairro"
              placeholder="O bairro "
              value={this.state.bairro}
              onChange={e => this.setState({ bairro: e.target.value })}
              required
            />
          </div>
          <div className="col-md-5">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Cidade :
            </label>
            <input
              className="inputFields col-md-12"
              type="text"
              size="40"
              id="cidade"
              name="cidade"
              placeholder="A cidade "
              value={this.state.cidade}
              onChange={e => this.setState({ cidade: e.target.value })}
              required
            />
          </div>
          <div className="col-md-2">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              UF :
            </label>
            <select
              className="inputFields col-md-12"
              id="iduf"
              value={this.state.uf}
              onChange={e => this.setState({ uf: e.target.value })}
              required
            >
              <option /*value={this.state.uf}*/>AC</option>
              <option /*value={this.state.uf}*/>AL</option>
              <option /*value={this.state.uf}*/>AM</option>
              <option /*value={this.state.uf}*/>AP</option>
              <option /*value={this.state.uf}*/>BA</option>
              <option /*value={this.state.uf}*/>CE</option>
              <option /*value={this.state.uf}*/>DF</option>
              <option /*value={this.state.uf}*/>ES</option>
              <option /*value={this.state.uf}*/>GO</option>
              <option /*value={this.state.uf}*/>MA</option>
              <option /*value={this.state.uf}*/>MG</option>
              <option /*value={this.state.uf}*/>MS</option>
              <option /*value={this.state.uf}*/>MT</option>
              <option /*value={this.state.uf}*/>PA</option>
              <option /*value={this.state.uf}*/>PB</option>
              <option /*value={this.state.uf}*/>PE</option>
              <option /*value={this.state.uf}*/>PI</option>
              <option /*value={this.state.uf}*/>PR</option>
              <option /*value={this.state.uf}*/>RJ</option>
              <option /*value={this.state.uf}*/>RN</option>
              <option /*value={this.state.uf}*/>RO</option>
              <option /*value={this.state.uf}*/>RR</option>
              <option /*value={this.state.uf}*/>RS</option>
              <option /*value={this.state.uf}*/>SC</option>
              <option /*value={this.state.uf}*/>SE</option>
              <option /*value={this.state.uf}*/>SP</option>
              <option /*value={this.state.uf}*/>TO</option>
            </select>
          </div>
          <div className="col-md-6">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Pais :
            </label>
            <select
              className="inputFields col-md-12"
              value={this.state.pais}
              onChange={e => this.setState({ pais: e.target.value })}
              required
            >
              <option /*value={this.state.pais}*/>Andorra</option>
              <option /*value={this.state.pais}*/>
                Emirados Árabes Unidos
              </option>
              <option /*value={this.state.pais}*/>Afeganistão</option>
              <option /*value={this.state.pais}*/>Antígua e Barbuda</option>
              <option /*value={this.state.pais}*/>Anguilla</option>
              <option /*value={this.state.pais}*/>Albânia</option>
              <option /*value={this.state.pais}*/>Armênia</option>
              <option /*value={this.state.pais}*/>Angola</option>
              <option /*value={this.state.pais}*/>Antártica</option>
              <option /*value={this.state.pais}*/>Argentina</option>
              <option /*value={this.state.pais}*/>Samoa Americana</option>
              <option /*value={this.state.pais}*/>Áustria</option>
              <option /*value={this.state.pais}*/>Austrália</option>
              <option /*value={this.state.pais}*/>Aruba</option>
              <option /*value={this.state.pais}*/>Azerbaijão</option>
              <option /*value={this.state.pais}*/>Bósnia e Herzegovina</option>
              <option /*value={this.state.pais}*/>Barbados</option>
              <option /*value={this.state.pais}*/>Bangladesh</option>
              <option /*value={this.state.pais}*/>Bélgica</option>
              <option /*value={this.state.pais}*/>Burkina Faso</option>
              <option /*value={this.state.pais}*/>Bulgária</option>
              <option /*value={this.state.pais}*/>Barém</option>
              <option /*value={this.state.pais}*/>Burundi</option>
              <option /*value={this.state.pais}*/>Benin</option>
              <option /*value={this.state.pais}*/>São Bartolomeu</option>
              <option /*value={this.state.pais}*/>Bermuda</option>
              <option /*value={this.state.pais}*/>Brunei</option>
              <option /*value={this.state.pais}*/>Bolívia</option>
              <option /*value={this.state.pais}*/>Brasil</option>
              <option /*value={this.state.pais}*/>Bahamas</option>
              <option /*value={this.state.pais}*/>Butão</option>
              <option /*value={this.state.pais}*/>Ilha Bouvet</option>
              <option /*value={this.state.pais}*/>Botswana</option>
              <option /*value={this.state.pais}*/>Belarus</option>
              <option /*value={this.state.pais}*/>Belize</option>
              <option /*value={this.state.pais}*/>Canadá</option>
              <option /*value={this.state.pais}*/>Ilhas Cocos (Keeling)</option>
              <option /*value={this.state.pais}*/>
                Congo, República Democrática do
              </option>
              <option /*value={this.state.pais}*/>
                República Centro-Africana
              </option>
              <option /*value={this.state.pais}*/>Suíça</option>
              <option /*value={this.state.pais}*/>Congo, República do</option>
              <option /*value={this.state.pais}*/>Ilhas Cook</option>
              <option /*value={this.state.pais}*/>Costa do Marfim</option>
              <option /*value={this.state.pais}*/>Camarões</option>
              <option /*value={this.state.pais}*/>Chile</option>
              <option /*value={this.state.pais}*/>Colômbia</option>
              <option /*value={this.state.pais}*/>China</option>
              <option /*value={this.state.pais}*/>Cuba</option>
              <option /*value={this.state.pais}*/>Costa Rica</option>
              <option /*value={this.state.pais}*/>Curaçao</option>
              <option /*value={this.state.pais}*/>Cabo Verde</option>
              <option /*value={this.state.pais}*/>Ilha Christmas</option>
              <option /*value={this.state.pais}*/>Chipre</option>
              <option /*value={this.state.pais}*/>República Tcheca</option>
              <option /*value={this.state.pais}*/>Alemanha</option>
              <option /*value={this.state.pais}*/>Djibuti</option>
              <option /*value={this.state.pais}*/>Dinamarca</option>
              <option /*value={this.state.pais}*/>Dominica</option>
              <option /*value={this.state.pais}*/>República Dominicana</option>
              <option /*value={this.state.pais}*/>Argélia</option>
              <option /*value={this.state.pais}*/>Equador</option>
              <option /*value={this.state.pais}*/>Estônia</option>
              <option /*value={this.state.pais}*/>Egito</option>
              <option /*value={this.state.pais}*/>Saara Ocidental</option>
              <option /*value={this.state.pais}*/>Eritréia</option>
              <option /*value={this.state.pais}*/>Espanha</option>
              <option /*value={this.state.pais}*/>Etiópia</option>
              <option /*value={this.state.pais}*/>Finlândia</option>
              <option /*value={this.state.pais}*/>Fiji</option>
              <option /*value={this.state.pais}*/>
                Ilhas Falkland (Malvinas)
              </option>
              <option /*value={this.state.pais}*/>
                Micronésia, Estados Federados da
              </option>
              <option /*value={this.state.pais}*/>Ilhas Feroe</option>
              <option /*value={this.state.pais}*/>França</option>
              <option /*value={this.state.pais}*/>França Metropolitana</option>
              <option /*value={this.state.pais}*/>Gabão</option>
              <option /*value={this.state.pais}*/>Reino Unido</option>
              <option /*value={this.state.pais}*/>Grenada</option>
              <option /*value={this.state.pais}*/>Geórgia</option>
              <option /*value={this.state.pais}*/>Guiana Francesa</option>
              <option /*value={this.state.pais}*/>Guernsey</option>
              <option /*value={this.state.pais}*/>Gana</option>
              <option /*value={this.state.pais}*/>Gibraltar</option>
              <option /*value={this.state.pais}*/>Greenland</option>
              <option /*value={this.state.pais}*/>Gâmbia</option>
              <option /*value={this.state.pais}*/>Guiné</option>
              <option /*value={this.state.pais}*/>Guadelupe</option>
              <option /*value={this.state.pais}*/>Guiné Equatorial</option>
              <option /*value={this.state.pais}*/>Grécia</option>
              <option /*value={this.state.pais}*/>
                Geórgia do Sul e Ilhas
              </option>
              <option /*value={this.state.pais}*/>Guatemala</option>
              <option /*value={this.state.pais}*/>Guam</option>
              <option /*value={this.state.pais}*/>Guiné-Bissau</option>
              <option /*value={this.state.pais}*/>Guiana</option>
              <option /*value={this.state.pais}*/>Hong Kong</option>
              <option /*value={this.state.pais}*/>
                Ilhas Heard and McDonald
              </option>
              <option /*value={this.state.pais}*/>Honduras</option>
              <option /*value={this.state.pais}*/>Croácia</option>
              <option /*value={this.state.pais}*/>Haiti</option>
              <option /*value={this.state.pais}*/>Hungria</option>
              <option /*value={this.state.pais}*/>Indonésia</option>
              <option /*value={this.state.pais}*/>Irlanda</option>
              <option /*value={this.state.pais}*/>Israel</option>
              <option /*value={this.state.pais}*/>Ilha de Man</option>
              <option /*value={this.state.pais}*/>Índia</option>
              <option /*value={this.state.pais}*/>
                Território Britânico do Oceano Índico
              </option>
              <option /*value={this.state.pais}*/>Iraque</option>
              <option /*value={this.state.pais}*/>Irã</option>
              <option /*value={this.state.pais}*/>Islândia</option>
              <option /*value={this.state.pais}*/>Itália</option>
              <option /*value={this.state.pais}*/>Jersey</option>
              <option /*value={this.state.pais}*/>Jamaica</option>
              <option /*value={this.state.pais}*/>Jordânia</option>
              <option /*value={this.state.pais}*/>Japão</option>
              <option /*value={this.state.pais}*/>Quênia</option>
              <option /*value={this.state.pais}*/>Quirguistão</option>
              <option /*value={this.state.pais}*/>Camboja</option>
              <option /*value={this.state.pais}*/>Kiribati</option>
              <option /*value={this.state.pais}*/>Cômoros</option>
              <option /*value={this.state.pais}*/>São Cristóvão e Nevis</option>
              <option /*value={this.state.pais}*/>Coreia do Norte</option>
              <option /*value={this.state.pais}*/>Coreia do Sul</option>
              <option /*value={this.state.pais}*/>Kuwait</option>
              <option /*value={this.state.pais}*/>Ilhas Caiman</option>
              <option /*value={this.state.pais}*/>Cazaquistão</option>
              <option /*value={this.state.pais}*/>Laos</option>
              <option /*value={this.state.pais}*/>Líbano</option>
              <option /*value={this.state.pais}*/>Santa Lúcia</option>
              <option /*value={this.state.pais}*/>Liechtenstein</option>
              <option /*value={this.state.pais}*/>Sri Lanka</option>
              <option /*value={this.state.pais}*/>Libéria</option>
              <option /*value={this.state.pais}*/>Lesoto</option>
              <option /*value={this.state.pais}*/>Lituânia</option>
              <option /*value={this.state.pais}*/>Luxemburgo</option>
              <option /*value={this.state.pais}*/>Letônia</option>
              <option /*value={this.state.pais}*/>Líbia</option>
              <option /*value={this.state.pais}*/>Marrocos</option>
              <option /*value={this.state.pais}*/>Mônaco</option>
              <option /*value={this.state.pais}*/>Moldova</option>
              <option /*value={this.state.pais}*/>Montenegro</option>
              <option /*value={this.state.pais}*/>Saint Martin</option>
              <option /*value={this.state.pais}*/>Madagascar</option>
              <option /*value={this.state.pais}*/>Ilhas Marshall</option>
              <option /*value={this.state.pais}*/>Macedônia</option>
              <option /*value={this.state.pais}*/>Mali</option>
              <option /*value={this.state.pais}*/>Birmânia</option>
              <option /*value={this.state.pais}*/>Mongólia</option>
              <option /*value={this.state.pais}*/>Macao</option>
              <option /*value={this.state.pais}*/>
                Ilhas Marianas do Norte
              </option>
              <option /*value={this.state.pais}*/>Martinica</option>
              <option /*value={this.state.pais}*/>Mauritânia</option>
              <option /*value={this.state.pais}*/>Montserrat</option>
              <option /*value={this.state.pais}*/>Malta</option>
              <option /*value={this.state.pais}*/>Ilhas Maurício</option>
              <option /*value={this.state.pais}*/>Maldivas</option>
              <option /*value={this.state.pais}*/>Malawi</option>
              <option /*value={this.state.pais}*/>México</option>
              <option /*value={this.state.pais}*/>Malásia</option>
              <option /*value={this.state.pais}*/>Moçambique</option>
              <option /*value={this.state.pais}*/>Namíbia</option>
              <option /*value={this.state.pais}*/>Nova Caledônia</option>
              <option /*value={this.state.pais}*/>Níger</option>
              <option /*value={this.state.pais}*/>Ilha Norfolk</option>
              <option /*value={this.state.pais}*/>Nigéria</option>
              <option /*value={this.state.pais}*/>Nicarágua</option>
              <option /*value={this.state.pais}*/>Holanda</option>
              <option /*value={this.state.pais}*/>Noruega</option>
              <option /*value={this.state.pais}*/>Nepal</option>
              <option /*value={this.state.pais}*/>Nauru</option>
              <option /*value={this.state.pais}*/>Niue</option>
              <option /*value={this.state.pais}*/>Nova Zelândia</option>
              <option /*value={this.state.pais}*/>Omã</option>
              <option /*value={this.state.pais}*/>Panamá</option>
              <option /*value={this.state.pais}*/>Peru</option>
              <option /*value={this.state.pais}*/>Polinésia Francesa</option>
              <option /*value={this.state.pais}*/>Papua Nova Guiné</option>
              <option /*value={this.state.pais}*/>Filipinas</option>
              <option /*value={this.state.pais}*/>Paquistão</option>
              <option /*value={this.state.pais}*/>Polônia</option>
              <option /*value={this.state.pais}*/>
                Saint Pierre e Miquelon
              </option>
              <option /*value={this.state.pais}*/>Ilhas Pitcairn</option>
              <option /*value={this.state.pais}*/>Porto Rico</option>
              <option /*value={this.state.pais}*/>Faixa de Gaza</option>
              <option /*value={this.state.pais}*/>Cisjordânia</option>
              <option /*value={this.state.pais}*/>Portugal</option>
              <option /*value={this.state.pais}*/>Palau</option>
              <option /*value={this.state.pais}*/>Paraguai</option>
              <option /*value={this.state.pais}*/>Qatar</option>
              <option /*value={this.state.pais}*/>Reunião</option>
              <option /*value={this.state.pais}*/>Romênia</option>
              <option /*value={this.state.pais}*/>Sérvia</option>
              <option /*value={this.state.pais}*/>Rússia</option>
              <option /*value={this.state.pais}*/>Ruanda</option>
              <option /*value={this.state.pais}*/>Arábia Saudita</option>
              <option /*value={this.state.pais}*/>Ilhas Salomão</option>
              <option /*value={this.state.pais}*/>Seicheles</option>
              <option /*value={this.state.pais}*/>Sudão</option>
              <option /*value={this.state.pais}*/>Suécia</option>
              <option /*value={this.state.pais}*/>Cingapura</option>
              <option /*value={this.state.pais}*/>
                Santa Helena, Ascensão e Tristão da Cunha
              </option>
              <option /*value={this.state.pais}*/>Eslovênia</option>
              <option /*value={this.state.pais}*/>Svalbard</option>
              <option /*value={this.state.pais}*/>Eslováquia</option>
              <option /*value={this.state.pais}*/>Serra Leoa</option>
              <option /*value={this.state.pais}*/>San Marino</option>
              <option /*value={this.state.pais}*/>Senegal</option>
              <option /*value={this.state.pais}*/>Somália</option>
              <option /*value={this.state.pais}*/>Suriname</option>
              <option /*value={this.state.pais}*/>Sudão do Sul</option>
              <option /*value={this.state.pais}*/>São Tomé e Príncipe</option>
              <option /*value={this.state.pais}*/>El Salvador</option>
              <option /*value={this.state.pais}*/>São Martinho</option>
              <option /*value={this.state.pais}*/>Síria</option>
              <option /*value={this.state.pais}*/>Suazilândia</option>
              <option /*value={this.state.pais}*/>Ilhas Turks e Caicos</option>
              <option /*value={this.state.pais}*/>Chad</option>
              <option /*value={this.state.pais}*/>
                Sul da França e Antártica
              </option>
              <option /*value={this.state.pais}*/>Togo</option>
              <option /*value={this.state.pais}*/>Tailândia</option>
              <option /*value={this.state.pais}*/>Tadjiquistão</option>
              <option /*value={this.state.pais}*/>Toquelau</option>
              <option /*value={this.state.pais}*/>Timor-Leste</option>
              <option /*value={this.state.pais}*/>Turcomenistão</option>
              <option /*value={this.state.pais}*/>Tunísia</option>
              <option /*value={this.state.pais}*/>Tonga</option>
              <option /*value={this.state.pais}*/>Turquia</option>
              <option /*value={this.state.pais}*/>Trinidad e Tobago</option>
              <option /*value={this.state.pais}*/>Tuvalu</option>
              <option /*value={this.state.pais}*/>Taiwan</option>
              <option /*value={this.state.pais}*/>Tanzânia</option>
              <option /*value={this.state.pais}*/>Ucrânia</option>
              <option /*value={this.state.pais}*/>Uganda</option>
              <option /*value={this.state.pais}*/>
                Ilhas Menores Distantes dos Estados Unidos
              </option>
              <option /*value={this.state.pais}*/>Estados Unidos</option>
              <option /*value={this.state.pais}*/>Uruguai</option>
              <option /*value={this.state.pais}*/>Uzbequistão</option>
              <option /*value={this.state.pais}*/>
                Santa Sé (Cidade do Vaticano)
              </option>
              <option /*value={this.state.pais}*/>
                São Vicente e Granadinas
              </option>
              <option /*value={this.state.pais}*/>Venezuela</option>
              <option /*value={this.state.pais}*/>
                Ilhas Virgens Britânicas
              </option>
              <option /*value={this.state.pais}*/>
                Ilhas Virgens Americanas
              </option>
              <option /*value={this.state.pais}*/>Vietnã</option>
              <option /*value={this.state.pais}*/>Vanuatu</option>
              <option /*value={this.state.pais}*/>Ilhas Wallis e Futuna</option>
              <option /*value={this.state.pais}*/>Samoa</option>
              <option /*value={this.state.pais}*/>Kosovo</option>
              <option /*value={this.state.pais}*/>Iêmen</option>
              <option /*value={this.state.pais}*/>Maiote</option>
              <option /*value={this.state.pais}*/>África do Sul</option>
              <option /*value={this.state.pais}*/>Zâmbia</option>
              <option /*value={this.state.pais}*/>Zimbábue</option>
            </select>
          </div>
          <div className="col-md-6">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Nome do Representante:
            </label>
            <input
              className="inputFields col-md-12"
              type="text"
              id="nome"
              name="nome representante"
              placeholder="O nome do Representante"
              value={this.state.nomeRepresentante}
              onChange={e =>
                this.setState({ nomeRepresentante: e.target.value })
              }
              required
            />
          </div>
          <div className="col-md-3">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Telefone do Representante:
            </label>
            <input
              className="inputFields col-md-12"
              type="tel"
              id="tele"
              name="telefone"
              placeholder="Telefone do Representante"
              value={this.state.telefoneRepresentante}
              onChange={e =>
                this.setState({ telefoneRepresentante: e.target.value })
              }
              required
            />
          </div>
          <div className="col-md-3">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Celular do Representante:
            </label>
            <input
              className="inputFields col-md-12"
              type="tel"
              id="celular"
              name="celular"
              placeholder="Celular do Representante"
              value={this.state.celularRepresentante}
              onChange={e =>
                this.setState({ celularRepresentante: e.target.value })
              }
              required
            />
          </div>
          <div className="col-md-6">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              E-mail do Representante:
            </label>
            <input
              className="inputFields col-md-12"
              type="email"
              id="email"
              name="email"
              placeholder="E-mail do Representante "
              value={this.state.emailRepresentante}
              onChange={e =>
                this.setState({ emailRepresentante: e.target.value })
              }
              required
            />
          </div>
          <div className="col-md-6">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Departmento:
            </label>
            <input
              className="inputFields col-md-12"
              type="text"
              id="email"
              name="email"
              placeholder="E-mail do Representante "
              value={this.state.departamento}
              onChange={e => this.setState({ departamento: e.target.value })}
              required
            />
          </div>
          <div className="col-md-6">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Segmento da Empresa :
            </label>
            <input
              className="inputFields col-md-12"
              id="message"
              name="message"
              placeholder="Segmento da Empresa"
              onChange={e => this.setState({ segmentoEmpresa: e.target.value })}
              value={this.state.segmentoEmpresa}
            />
          </div>
          <label className="labelFields col-md-12" style={{ color: "red" }}>
            {this.state.error}
          </label>
          <Col className="col-md-12 d-flex justify-content-center">
            {this.props.id ? (
              <button
                type="button"
                onClick={() => this.props.history.push("/consultar-problema")}
                className="join-btn-no-transform mr-1 login"
                style={{ width: "25%", margin: "0px" }}
              >
                Consultar Problemas
              </button>
            ) : null}
            <div />
            <button
              type="button"
              onClick={() => {
                !this.props.id
                  ? this.createCompany("create")
                  : this.createCompany("update", this.props.id);
              }}
              className="join-btn-no-transform mr-1 login"
              style={{ width: "25%", margin: "0px" }}
            >
              {!this.props.id ? "Cadastrar " : "Editar"} Empresa
            </button>
          </Col>
        </form>
        <SweetAlert
          success
          show={this.state.sweetCreate}
          title="Atenção"
          onConfirm={() => this.setState({ sweetCreate: false })}
        >
          {`Cadastrado ${this.state.empresa} com sucesso!!!!}`}
        </SweetAlert>
      </div>
    );
  }
}
export default CompanyForm;
