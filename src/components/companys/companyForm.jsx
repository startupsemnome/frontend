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
            this.props.history.push("/consultar-empresa");
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
            this.props.handleChangeEdit();
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
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AM">AM</option>
              <option value="AP">AP</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MG">MG</option>
              <option value="MS">MS</option>
              <option value="MT">MT</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="PR">PR</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="RS">RS</option>
              <option value="SC">SC</option>
              <option value="SE">SE</option>
              <option value="SP">SP</option>
              <option value="TO">TO</option>
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
              <option value="Andorra">Andorra</option>
              <option value="Emirados Árabes Unidos">
                Emirados Árabes Unidos
              </option>
              <option value="Afeganistão">Afeganistão</option>
              <option value="Antígua e Barbuda">Antígua e Barbuda</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Albânia">Albânia</option>
              <option value="Armênia">Armênia</option>
              <option value="Angola">Angola</option>
              <option value="Antártica">Antártica</option>
              <option value="Argentina">Argentina</option>
              <option value="Samoa Americana">Samoa Americana</option>
              <option value="Áustria">Áustria</option>
              <option value="Austrália">Austrália</option>
              <option value="Aruba">Aruba</option>
              <option value="Azerbaijão">Azerbaijão</option>
              <option value="Bósnia e Herzegovina">Bósnia e Herzegovina</option>
              <option value="Barbados">Barbados</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Bélgica">Bélgica</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Bulgária">Bulgária</option>
              <option value="Barém">Barém</option>
              <option value="Burundi">Burundi</option>
              <option value="Benin">Benin</option>
              <option value="São Bartolomeu">São Bartolomeu</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Brunei">Brunei</option>
              <option value="Bolívia">Bolívia</option>
              <option value="Brasil">Brasil</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Butão">Butão</option>
              <option value="Ilha Bouvet">Ilha Bouvet</option>
              <option value="Botswana">Botswana</option>
              <option value="Belarus">Belarus</option>
              <option value="Belize">Belize</option>
              <option value="Canadá">Canadá</option>
              <option value="Ilhas Cocos (Keeling)">
                Ilhas Cocos (Keeling)
              </option>
              <option value=" Congo, República Democrática do">
                Congo, República Democrática do
              </option>
              <option value="República Centro-Africana">
                República Centro-Africana
              </option>
              <option value="Suíça">Suíça</option>
              <option value="Congo, República do">Congo, República do</option>
              <option value="Ilhas Cook">Ilhas Cook</option>
              <option value="Costa do Marfim">Costa do Marfim</option>
              <option value="Camarões">Camarões</option>
              <option value="Chile">Chile</option>
              <option value="Colômbia">Colômbia</option>
              <option value="China">China</option>
              <option value="Cuba">Cuba</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Curaçao">Curaçao</option>
              <option value="Cabo Verde">Cabo Verde</option>
              <option value="Ilha Christmas">Ilha Christmas</option>
              <option value="Chipre">Chipre</option>
              <option value="República Tcheca">República Tcheca</option>
              <option value="Alemanha">Alemanha</option>
              <option value="Djibuti">Djibuti</option>
              <option value="Dinamarca">Dinamarca</option>
              <option value="Dominica">Dominica</option>
              <option value="República Dominicana">República Dominicana</option>
              <option value="Argélia">Argélia</option>
              <option value="Equador">Equador</option>
              <option value="Estônia">Estônia</option>
              <option value="Egito">Egito</option>
              <option value="Saara Ocidental">Saara Ocidental</option>
              <option value="Eritréia">Eritréia</option>
              <option value="Espanha">Espanha</option>
              <option value="Etiópia">Etiópia</option>
              <option value="Finlândia">Finlândia</option>
              <option value="Fiji">Fiji</option>
              <option value="Ilhas Falkland (Malvinas)">
                Ilhas Falkland (Malvinas)
              </option>
              <option value="Micronésia, Estados Federados da">
                Micronésia, Estados Federados da
              </option>
              <option value="Ilhas Feroe">Ilhas Feroe</option>
              <option value="França">França</option>
              <option value="França Metropolitana">França Metropolitana</option>
              <option value="Gabão">Gabão</option>
              <option value="Reino Unido">Reino Unido</option>
              <option value="Grenada">Grenada</option>
              <option value="Geórgia">Geórgia</option>
              <option value="Guiana Francesa">Guiana Francesa</option>
              <option value="Guernsey">Guernsey</option>
              <option value="Gana">Gana</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Greenland">Greenland</option>
              <option value="Gâmbia">Gâmbia</option>
              <option value="Guiné">Guiné</option>
              <option value="Guadelupe">Guadelupe</option>
              <option value="Guiné Equatorial">Guiné Equatorial</option>
              <option value="Grécia">Grécia</option>
              <option value="Geórgia do Sul e Ilhas">
                Geórgia do Sul e Ilhas
              </option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guam">Guam</option>
              <option value="Guiné-Bissau">Guiné-Bissau</option>
              <option value="Guiana">Guiana</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Ilhas Heard and McDonald">
                Ilhas Heard and McDonald
              </option>
              <option value="Honduras">Honduras</option>
              <option value="Croácia">Croácia</option>
              <option value="Haiti">Haiti</option>
              <option value="Hungria">Hungria</option>
              <option value="Indonésia">Indonésia</option>
              <option value="Irlanda">Irlanda</option>
              <option value="Israel">Israel</option>
              <option value="Ilha de Man">Ilha de Man</option>
              <option value="Índia">Índia</option>
              <option value="Território Britânico do Oceano Índico">
                Território Britânico do Oceano Índico
              </option>
              <option value="Iraque">Iraque</option>
              <option value="Irã">Irã</option>
              <option value="Islândia">Islândia</option>
              <option value="Itália">Itália</option>
              <option value="Jersey">Jersey</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Jordânia">Jordânia</option>
              <option value="Japão">Japão</option>
              <option value="Quênia">Quênia</option>
              <option value="Quirguistão">Quirguistão</option>
              <option value="Camboja">Camboja</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Cômoros">Cômoros</option>
              <option value="São Cristóvão e Nevis">
                São Cristóvão e Nevis
              </option>
              <option value="Coreia do Norte">Coreia do Norte</option>
              <option value="Coreia do Sul">Coreia do Sul</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Ilhas Caiman">Ilhas Caiman</option>
              <option value="Cazaquistão">Cazaquistão</option>
              <option value="Laos">Laos</option>
              <option value="Líbano">Líbano</option>
              <option value="Santa Lúcia">Santa Lúcia</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Libéria">Libéria</option>
              <option value="Lesoto">Lesoto</option>
              <option value="Lituânia">Lituânia</option>
              <option value="Luxemburgo">Luxemburgo</option>
              <option value="Letônia">Letônia</option>
              <option value="Líbia">Líbia</option>
              <option value="Marrocos">Marrocos</option>
              <option value="Mônaco">Mônaco</option>
              <option value="Moldova">Moldova</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Saint Martin">Saint Martin</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Ilhas Marshall">Ilhas Marshall</option>
              <option value="Macedônia">Macedônia</option>
              <option value="Mali">Mali</option>
              <option value="Birmânia">Birmânia</option>
              <option value="Mongólia">Mongólia</option>
              <option value="Macao">Macao</option>
              <option value="Ilhas Marianas do Norte">
                Ilhas Marianas do Norte
              </option>
              <option value="Martinica">Martinica</option>
              <option value="Mauritânia">Mauritânia</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Malta">Malta</option>
              <option value="Ilhas Maurício">Ilhas Maurício</option>
              <option value="Maldivas">Maldivas</option>
              <option value="Malawi">Malawi</option>
              <option value="México">México</option>
              <option value="Malásia">Malásia</option>
              <option value="Moçambique">Moçambique</option>
              <option value="Namíbia">Namíbia</option>
              <option value="Nova Caledônia">Nova Caledônia</option>
              <option value="Níger">Níger</option>
              <option value="Ilha Norfolk">Ilha Norfolk</option>
              <option value="Nigéria">Nigéria</option>
              <option value="Nicarágua">Nicarágua</option>
              <option value="Holanda">Holanda</option>
              <option value="Noruega">Noruega</option>
              <option value="Nepal">Nepal</option>
              <option value="Nauru">Nauru</option>
              <option value="Niue">Niue</option>
              <option value="Nova Zelândia">Nova Zelândia</option>
              <option value="Omã">Omã</option>
              <option value="Panamá">Panamá</option>
              <option value="Peru">Peru</option>
              <option value="Polinésia Francesa">Polinésia Francesa</option>
              <option value="Papua Nova Guiné">Papua Nova Guiné</option>
              <option value="Filipinas">Filipinas</option>
              <option value="Paquistão">Paquistão</option>
              <option value="Polônia">Polônia</option>
              <option value="Saint Pierre e Miquelon">
                Saint Pierre e Miquelon
              </option>
              <option value="Ilhas Pitcairn">Ilhas Pitcairn</option>
              <option value="Porto Rico">Porto Rico</option>
              <option value="Faixa de Gaza">Faixa de Gaza</option>
              <option value="Cisjordânia">Cisjordânia</option>
              <option value="Portugal">Portugal</option>
              <option value="Palau">Palau</option>
              <option value="Paraguai">Paraguai</option>
              <option value="Qatar">Qatar</option>
              <option value="Reunião">Reunião</option>
              <option value="Romênia">Romênia</option>
              <option value="Sérvia">Sérvia</option>
              <option value="Rússia">Rússia</option>
              <option value="Ruanda">Ruanda</option>
              <option value="Arábia Saudita">Arábia Saudita</option>
              <option value="Ilhas Salomão">Ilhas Salomão</option>
              <option value="Seicheles">Seicheles</option>
              <option value="Sudão">Sudão</option>
              <option value="Suécia">Suécia</option>
              <option value="Cingapura">Cingapura</option>
              <option value=" Santa Helena, Ascensão e Tristão da Cunha">
                Santa Helena, Ascensão e Tristão da Cunha
              </option>
              <option value="Eslovênia">Eslovênia</option>
              <option value="Svalbard">Svalbard</option>
              <option value="Eslováquia">Eslováquia</option>
              <option value="Serra Leoa">Serra Leoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Senegal">Senegal</option>
              <option value="Somália">Somália</option>
              <option value="Suriname">Suriname</option>
              <option value="Sudão do Sul">Sudão do Sul</option>
              <option value="São Tomé e Príncipe">São Tomé e Príncipe</option>
              <option value="El Salvador">El Salvador</option>
              <option value="São Martinho">São Martinho</option>
              <option value="Síria">Síria</option>
              <option value="Suazilândia">Suazilândia</option>
              <option value="Ilhas Turks e Caicos">Ilhas Turks e Caicos</option>
              <option value="Chad">Chad</option>
              <option value="Sul da França e Antártica">
                Sul da França e Antártica
              </option>
              <option value="Togo">Togo</option>
              <option value="Tailândia">Tailândia</option>
              <option value="Tadjiquistão">Tadjiquistão</option>
              <option value="Toquelau">Toquelau</option>
              <option value="Timor-Leste">Timor-Leste</option>
              <option value="Turcomenistão">Turcomenistão</option>
              <option value="Tunísia">Tunísia</option>
              <option value="Tonga">Tonga</option>
              <option value="Turquia">Turquia</option>
              <option value="Trinidad e Tobago">Trinidad e Tobago</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tanzânia">Tanzânia</option>
              <option value="Ucrânia">Ucrânia</option>
              <option value="Uganda">Uganda</option>
              <option value="Ilhas Menores Distantes dos Estados Unidos">
                Ilhas Menores Distantes dos Estados Unidos
              </option>
              <option value="Estados Unidos">Estados Unidos</option>
              <option value="Uruguai">Uruguai</option>
              <option value="Uzbequistão">Uzbequistão</option>
              <option value="Santa Sé (Cidade do Vaticano)">
                Santa Sé (Cidade do Vaticano)
              </option>
              <option value="São Vicente e Granadinas">
                São Vicente e Granadinas
              </option>
              <option value="Venezuela">Venezuela</option>
              <option value="Ilhas Virgens Britânicas">
                Ilhas Virgens Britânicas
              </option>
              <option value=" Ilhas Virgens Americanas">
                Ilhas Virgens Americanas
              </option>
              <option value="Vietnã">Vietnã</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Ilhas Wallis e Futuna">
                Ilhas Wallis e Futuna
              </option>
              <option value="Samoa">Samoa</option>
              <option value="Kosovo">Kosovo</option>
              <option value="Iêmen">Iêmen</option>
              <option value="Maiote">Maiote</option>
              <option value="África do Sul">África do Sul</option>
              <option value="Zâmbia">Zâmbia</option>
              <option value="Zimbábue">Zimbábue</option>
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
                onClick={this.props.handleChangeEdit}
                className="join-btn-no-transform mr-1 login"
                style={{ width: "25%", margin: "0px" }}
              >
                Voltar Empresas
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
