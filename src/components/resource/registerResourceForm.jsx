import React, { Component } from "react";
import { Row, Col, ModalHeader, FormGroup, Form, Label, Input, ModalBody, ModalFooter, Modal, Button, Table, FormText, CustomInput } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios";
import env from "./../../consts";


class RegisterResourceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fotoperfil: "",
      dt_nascimento: "",
      genero: "",
      estado_civil: "",
      nascionalidade: "",
      uf: "",
      cidade: "",
      disponibilidade: "",
      resumo_profissional: "",
      nome_empresa: "",
      segmento: "",
      dt_tempo: "",
      cargo: "",
      atividades: "",
      //formação
      curso: "",
      instituicao: "",
      nivel_curso: "",
      info_complementares: "",
      //ANTERIOR
      // nome: "",
      // sobrenome: "",
      // email: "",
      // formacao: "",
      // endereco: "",
      // telefone: "",
      // celular: "",
      // cidade: "",
      // estado: "",
      // habilidade: "",
      // area_interesse: "",
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

    if (!this.hasErros()) {

      if (method == "create") {
        axios
          .post(env.API + "resource", {
            fotoperfil: this.state.fotoperfil,
            dt_nascimento: this.state.dt_nascimento,
            genero: this.state.genero,
            estado_civil: this.state.estado_civil,
            nascionalidade: this.state.nascionalidade,
            uf: this.state.uf,
            cidade: this.state.cidade,
            disponibilidade: this.state.disponibilidade,

            resumo_profissional: this.state.resumo_profissional,
            empresa: this.state.empresa,
            segmento: this.state.segmento,
            dt_tempo: this.state.dt_tempo,
            cargo: this.state.cargo,
            atividades: this.state.atividades,
            curso: this.state.curso,
            instituicao: this.state.instituicao,
            nivel_curso: this.state.nivel_curso,
            info_complementares: this.state.info_complementares,
            //ANTERIOR
            // nome: this.state.nome,
            // sobrenome: this.state.sobrenome,
            // email: this.state.email,
            // endereco: this.state.endereco,
            // telefone: this.state.telefone,
            // celular: this.state.celular,
            // formacao: this.state.formacao,
            // cidade: this.state.cidade,
            // estado: this.state.estado,
            // habilidade: this.state.habilidade,
            // area_interesse: this.state.area_interesse,
            message1: this.state.message1

          })
          .then(function (response) {

            console.log(response);
            this.props.history.push("/cadastro-recurso");
            this.props.handleEdit();
          })
          .catch(function (error) {
            console.log(error);
          });
      } else if (method = "update") {
        axios
          .put(env.API + "resource/" + id, {
            fotoperfil: this.state.fotoperfil,
            dt_nascimento: this.state.dt_nascimento,
            genero: this.state.genero,
            estado_civil: this.state.estado_civil,
            nascionalidade: this.state.nascionalidade,
            uf: this.state.uf,
            cidade: this.state.cidade,
            disponibilidade: this.state.disponibilidade,

            resumo_profissional: this.state.resumo_profissional,
            empresa: this.state.empresa,
            segmento: this.state.segmento,
            dt_tempo: this.state.dt_tempo,
            cargo: this.state.cargo,
            atividades: this.state.atividades,
            curso: this.state.curso,
            instituicao: this.state.instituicao,
            nivel_curso: this.state.nivel_curso,
            info_complementares: this.state.info_complementares,
            // nome: this.state.nome,
            // sobrenome: this.state.sobrenome,
            // email: this.state.email,
            // endereco: this.state.endereco,
            // telefone: this.state.telefone,
            // celular: this.state.celular,
            // formacao: this.state.formacao,
            // cidade: this.state.cidade,
            // estado: this.state.estado,
            // habilidade: this.state.habilidade,
            // area_interesse: this.state.area_interesse,
            message1: this.state.message1

          })
          .then(function (response) {
            console.log(response);
            this.props.history.push("/consultar-recurso");
            this.props.handleEdit();
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
          this.setState({
            fotoperfil: data.fotoperfil,
            dt_nascimento: data.dt_nascimento,
            genero: data.genero,
            estado_civil: data.estado_civil,
            nascionalidade: data.nascionalidade,
            uf: data.uf,
            cidade: data.cidade,
            disponibilidade: data.disponibilidade,

            resumo_profissional: data.resumo_profissional,
            empresa: data.empresa,
            segmento: data.segmento,
            dt_tempo: data.dt_tempo,
            cargo: data.cargo,
            atividades: data.atividades,
            curso: data.curso,
            instituicao: data.instituicao,
            nivel_curso: data.nivel_curso,
            info_complementares: data.info_complementares,
            // nome: data.nome,
            // formacao: data.formacao,
            // sobrenome: data.sobrenome,
            // email: data.email,
            // endereco: data.endereco,
            // telefone: data.telefone,
            // celular: data.celular,
            // cidade: data.cidade,
            // estado: data.estado,
            // habilidade: data.habilidade,
            // area_interesse: data.areai,
            message1: data.message1
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  goToConsulta() {
    this.props.history.push("consultar-recurso");
    this.props.handleEdit();
  }


  hasErros() {
    // if (this.state.fotoperfil === "") {
    //   this.setState({ error: "preencha o campo fotoperfil" });
    //   return true;
    // } 
    // if (this.state.dt_nascimento === "") {
    //   this.setState({ error: "preencha o campo nascimento" });
    //   return true;
    // } 

    if (this.state.genero === "") {
      this.setState({ error: "preencha o campo genero" });
      return true;
    } else if (this.state.estado_civil === "") {
      this.setState({ error: "preencha o campo estado civil" });
      return true;
    } else if (this.state.nacionalidade === "") {
      this.setState({ error: "preencha o campo nacionalidade" });
      return true;
    } else if (this.state.uf === "") {
      this.setState({ error: "preencha o campo uf" });
      return true;
    } else if (this.state.cidade === "") {
      this.setState({ error: "preencha o campo cidade" });
      return true;
    }

    // else if (this.state.disponibilidade === "") {
    //   this.setState({ error: "preencha o campo disponibilidade" });
    //   return true;
    // } 

    else if (this.state.resumo_profissional === "") {
      this.setState({ error: "preencha o campo do resumo profissional" });
      return true;
    } else if (this.state.empresa === "") {
      this.setState({ error: "preencha o campo empresa" });
      return true;
    } else if (this.state.segmento === "") {
      this.setState({ error: "preencha o campo segmento" });
      return true;
    }

    // else if (this.state.dt_tempo === "") {
    //   this.setState({ error: "preencha o campo data inicial e final" });
    //   return true;
    // } 

    else if (this.state.cargo === "") {
      this.setState({ error: "preencha o campo cargo" });
      return true;
    } else if (this.state.atividades === "") {
      this.setState({ error: "preencha o campo atividades" });
      return true;
    } else if (this.state.curso === "") {
      this.setState({ error: "preencha o campo curso" });
      return true;
    } else if (this.state.instituicao === "") {
      this.setState({ error: "preencha o campo instituicao" });
      return true;
    } else if (this.state.nivel_curso === "") {
      this.setState({ error: "preencha o campo nivel curso" });
      return true;
    } else if (this.state.info_complementares === "") {
      this.setState({ error: "preencha o campo informações complementares" });
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="loginUser col-md-12">
        <form className="signupForm form-inline">
          <div className="col-md-4">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Dados Pessoais:{" "}
            </label>
            <br></br>
          </div>

          <div className="col-md-12">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Foto de Perfil:{" "}
            </label>
            <br></br>
            <FormGroup row>
              <Label for="exampleFile"></Label>
              <Col sm={10}>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                  A foto escolhida será depositada em nosso banco de dados.
              </FormText>
              </Col>
            </FormGroup>
            <br></br>
          </div>

          <div className="col-md-12">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Data de Nascimento:
            </label>
            <br></br>
            <FormGroup>
              <Label for="labelFields"></Label>
              <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="date placeholder"
              />
              <br></br>
            </FormGroup>
            <br></br>
          </div>

          <div className="col-md-12">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Gênero:
            </label>
            <Input
              select
              className="inputFields col-md-12"
              type="select"
              select="multiple"
              name="civilstatus"
              id="optioncivilstatus"
              style={{ width: "100%" }}

              value={this.state.genero}
              onChange={e => this.setState({ genero: e.target.value })}
              required
            >
              <option value="">Selecione</option>
              <option value="1">Masculino</option>
              <option value="2">Feminino</option>
              <option value="3">Outro</option>
            </Input>
          </div>

          <div className="col-md-12">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Estado Civil:
            </label>
            <Input
              select
              className="inputFields col-md-12"
              type="select"
              select="multiple"
              name="civilstatus"
              id="optioncivilstatus"
              style={{ width: "100%" }}

              value={this.state.estado_civil}
              onChange={e => this.setState({ estado_civil: e.target.value })}
              required
            >
              <option value="">Selecione</option>
              <option value="1">Solteiro(a)</option>
              <option valeu="2">Casado(a)</option>
              <option valeu="3">Viúvo(a)</option>
              <option valeu="4">Divorciado(a)</option>
            </Input>
          </div>

          <div className="col-md-12">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Nacionalidade:
            </label>
            <Input
              select
              className="inputFields col-md-12"
              type="select"
              select="multiple"
              name="nationality"
              id="optionnationality"
              style={{ width: "100%" }}

              value={this.state.nacionalidade}
              onChange={e => this.setState({ nacionalidade: e.target.value })}
              required
            >
              <option value="">Selecione</option>
              <option value="1">Brasileiro(a)</option>
              <option valeu="2">Mexicano(a)</option>
              <option value="3">Argentino(a)</option>
              <option value="4">Italiano(a)</option>
              <option valeu="5">Norte Americano(a)</option>
              <option value="6">Español(a)</option>
            </Input>
          </div>

          <div className="col-md-12">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              UF:
            </label>
            <Input
              select
              className="inputFields col-md-12"
              type="select"
              select="multiple"
              name="nationality"
              id="optionnationality"
              style={{ width: "100%" }}

              value={this.state.uf}
              onChange={e => this.setState({ uf: e.target.value })}
              required

            >
              <option value="">Selecione</option>
              <option value="1">AC</option>
              <option valeu="2">AL</option>
              <option value="3">AP</option>
              <option value="4">AM</option>
              <option value="5">BA</option>
              <option value="6">CE</option>
              <option value="7">DF</option>
              <option value="8">ES</option>
              <option value="9">GO</option>
              <option value="10">MA</option>
              <option value="11">MT</option>
              <option value="12">MS</option>
              <option value="13">MG</option>
              <option value="14">PA</option>
              <option value="15">PB</option>
              <option value="16">PR</option>
              <option value="17">PE</option>
              <option value="18">PI</option>
              <option value="19">RJ</option>
              <option value="19">RN</option>
              <option value="20">RS</option>
              <option value="21">RO</option>
              <option value="22">RR</option>
              <option value="23">SC</option>
              <option value="24">SP</option>
              <option value="25">SE</option>
              <option value="26">TO</option>
            </Input>
          </div>

          {/* CIDADE - POR ESTADOS*/}
          <div className="col-md-12">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Cidade:
            </label>
            <Input
              select
              className="inputFields col-md-12"
              type="select"
              select="multiple"
              name="nationality"
              id="optionnationality"
              style={{ width: "100%" }}

              value={this.state.cidade}
              onChange={e => this.setState({ cidade: e.target.value })}
              required
            >
              {/* AC - ACRE */}
              <option value="0">Selecione</option>
              <option value="ac-1">Acrelândia (AC)</option>
              <option value="ac-2">Assis Brasil (AC)</option>
              <option value="ac-3">Brasiléia (AC)</option>
              <option value="ac-4">Bujari (AC)</option>
              <option value="ac-5">Capixaba (AC)</option>
              <option value="ac-6">Cruzeiro do Sul (AC)</option>
              <option value="ac-7">Epitaciolândia (AC)</option>
              <option value="ac-8">Feijó (AC)</option>
              <option value="ac-9">Jordão (AC)</option>
              <option value="ac-10">Mâncio Lima (AC)</option>
              <option value="ac-11">Manoel Urbano (AC)</option>
              <option value="ac-12">Marechal Thaumaturgo (AC)</option>
              <option value="ac-13">Plácido de Castro (AC)</option>
              <option value="ac-14">Porto Acre (AC)</option>
              <option value="ac-15">Porto Walter (AC)</option>
              <option value="ac-16">Rio Branco (AC)</option>
              <option value="ac-17">Rodrigues Alves (AC)</option>
              <option value="ac-18">Santa Rosa do Purus (AC)</option>
              <option value="ac-19">Sena Madureira (AC)</option>
              <option value="ac-20">Senador Guiomard (AC)</option>
              <option value="ac-21">Tarauacá (AC)</option>
              <option value="ac-22">Xapuri (AC)</option>

              {/* AL - ALAGOAS */}
              <option value="al-1">Água Branca (AL)</option>
              <option value="al-2">Anadia (AL)</option>
              <option value="al-3">Arapiraca (AL)</option>
              <option value="al-4">Atalaia (AL)</option>
              <option value="al-5">Barra de Santo Antônio (AL)</option>
              <option value="al-6">Barra de São Miguel (AL)</option>
              <option value="al-7">Batalha (AL)</option>
              <option value="al-8">Belém (AL)</option>
              <option value="al-9">Belo Monte (AL)</option>
              <option value="al-10">Boca da Mata (AL)</option>
              <option value="al-11">Branquinha (AL)</option>
              <option value="al-12">Cacimbinhas (AL)</option>
              <option value="al-13">Viçosa (AL)</option>
              <option value="al-14">Cajueiro (AL)</option>
              <option value="al-15">Campestre (AL)</option>
              <option value="al-16">Campo Alegre (AL)</option>
              <option value="al-17">Canapi (AL)</option>
              <option value="al-18">Capela (AL)</option>
              <option value="al-19">Carneiros (AL)</option>
              <option value="al-20">Chã Preta (AL)</option>
              <option value="al-21">Coité do Nóia (AL)</option>
              <option value="al-22">Colônia Leopoldina (AL)</option>
              <option value="al-23">Coqueiro Seco (AL)</option>
              <option value="al-24">Coruripe (AL)</option>
              <option value="al-25-">Craíbas (AL)</option>
              <option value="al-26">Delmiro Gouveia (AL)</option>
              <option value="al-27">Dois Riachos (AL)</option>
              <option value="al-28">Estrela de Alagoas (AL)</option>
              <option value="al-29">Feira Grande</option>
              <option value="al-30">Feliz Deserto (AL)</option>
              <option value="al-31">Flexeiras (AL)</option>
              <option value="al-32">Girau do Ponciano (AL)</option>
              <option value="al-33">Ibateguara (AL)</option>
              <option value="al-34">Igaci (AL)</option>
              <option value="al-35">Igreja Nova (AL)</option>
              <option value="al-36">Inhapi (AL)</option>
              <option value="al-37">Jacaré dos Homens (AL)</option>
              <option value="al-38">Jacuípe (AL)</option>
              <option value="al-39">Japaratinga (AL)</option>
              <option value="al-40">Jaramataia (AL)</option>
              <option value="al-41">Jequiá da Praia (AL)</option>
              <option value="al-42">Joaquim Gomes (AL)</option>
              <option value="al-43">Jundiá (AL)</option>
              <option value="al-44">Junqueiro (AL)</option>
              <option value="al-45">Lagoa da Canoa (AL)</option>
              <option value="al-46">Limoeiro de Anadia (AL)</option>
              <option value="al-47">Maceió (AL)</option>
              <option value="al-48">Major Isidoro (AL)</option>
              <option value="al-49">Mar Vermelho (AL)</option>
              <option value="al-50">Maragogi (AL)</option>
              <option value="al-51">Maravilha (AL)</option>
              <option value="al-52">Marechal Deodoro (AL)</option>
              <option value="al-53">Maribondo (AL)</option>
              <option value="al-54">Mata Grande (AL)</option>
              <option value="al-55">Matriz de Camaragibe (AL)</option>
              <option value="al-56">Messias (AL)</option>
              <option value="al-57">Minador do Negrão (AL)</option>
              <option value="al-58">Monteirópolis (AL)</option>
              <option value="al-59">Murici (AL)</option>
              <option value="al-60">Novo Lino (AL)</option>
              <option value="al-61">Olho d'Água das Flores (AL)</option>
              <option value="al-62">Olho d'Água do Casado (AL)</option>
              <option value="al-63">Olho d'Água Grande (AL)</option>
              <option value="al-64">Olivença (AL)</option>
              <option value="al-65">Ouro Branco (AL)</option>
              <option value="al-66">Palestina (AL)</option>
              <option value="al-67">Palmeira dos Índios (AL)</option>
              <option value="al-68">Pão de Açúcar (AL)</option>
              <option value="al-68">Pariconha (AL)</option>
              <option value="al-69">Paripueira (AL)</option>
              <option value="al-70">Passo de Camaragibe (AL)</option>
              <option value="al-71">Paulo Jacinto (AL)</option>
              <option value="al-72">Penedo (AL)</option>
              <option value="al-73">Piaçabuçu (AL)</option>
              <option value="al-74">ilar (AL)</option>
              <option value="al-75">Pindoba (AL)</option>
              <option value="al-76">Piranhas (AL)</option>
              <option value="al-77">Poço das Trincheiras (AL)</option>
              <option value="al-78">Porto Calvo (AL)</option>
              <option value="al-79">Porto de Pedras (AL)</option>
              <option value="al-80">Porto Real do Colégio (AL)</option>
              <option value="al-81">Quebrangulo (AL)</option>
              <option value="al-82">Rio Largo (AL)</option>
              <option value="al-83">Roteiro (AL)</option>
              <option value="al-84">Santa Luzia do Norte (AL)</option>
              <option value="al-85">Santana do Ipanema (AL)</option>
              <option value="al-86">Santana do Mundaú (AL)</option>
              <option value="al-87">São Brás (AL)</option>
              <option value="al-88">São José da Laje (AL)</option>
              <option value="al-89">São José da Tapera (AL)</option>
              <option value="al-90">São Luís do Quitunde (AL)</option>
              <option value="al-91">São Miguel dos Campos (AL)</option>
              <option value="al-92">São Miguel dos Milagres (AL)</option>
              <option value="al-93">São Sebastião (AL)</option>
              <option value="al-94">Satuba (AL)</option>
              <option value="al-95">Senador Rui Palmeira (AL)</option>
              <option value="al-96">Tanque d'Arca (AL)</option>
              <option value="al-97">Taquarana (AL)</option>
              <option value="al-98">Teotônio Vilela (AL)</option>
              <option value="al-99">Traipu (AL)</option>
              <option value="al-100">União dos Palmares (AL)</option>
            </Input>
          </div>

          <div className="col-md-12">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Informe a disponibilidade da atuação:
            </label>
            <br />
          </div>
          <div className="col-md-12">
            <div className="">
              <table className="table table">
                <thead>
                  <tr>
                    <th scope="col" style={{ display: "none" }}>
                      ID
                    </th>
                    <th scope="col">Período</th>
                    <th scope="col">Segunda-feira</th>
                    <th scope="col">Terça-feira</th>
                    <th scope="col">Quarta-feira</th>
                    <th scope="col">Quinta-feira</th>
                    <th scope="col">Sexta-feira</th>
                    <th scope="col">Sábado</th>
                    <th scope="col">Domingo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Manhã</td>
                    <td>
                      <input name="segunda" type="checkbox" id="m-segunda" />
                    </td>
                    <td>
                      <input name="terça" type="checkbox" id="m-terca" />
                    </td>
                    <td>
                      <input name="quarta" type="checkbox" id="m-quarta" />
                    </td>
                    <td>
                      <input name="quinta" type="checkbox" id="m-quinta" />
                    </td>
                    <td>
                      <input name="sexta" type="checkbox" id="m-sexta" />
                    </td>
                    <td>
                      <input name="sabado" type="checkbox" id="m-sabado" />
                    </td>
                    <td>
                      <input name="domingo" type="checkbox" id="m-domingo" />
                    </td>
                  </tr>
                  {/* LINHA - TARDE */}
                  <tr>
                    <td>Tarde</td>
                    <td>
                      <input name="segunda" type="checkbox" id="t-segunda" />
                    </td>
                    <td>
                      <input name="terca" type="checkbox" id="t-terca" />
                    </td>
                    <td>
                      <input name="quarta" type="checkbox" id="t-quarta" />
                    </td>
                    <td>
                      <input name="quinta" type="checkbox" id="t-quinta" />
                    </td>
                    <td>
                      <input name="sexta" type="checkbox" id="t-sexta" />
                    </td>
                    <td>
                      <input name="sabado" type="checkbox" id="t-sabado" />
                    </td>
                    <td>
                      <input name="domingo" type="checkbox" id="t-domingo" />
                    </td>
                    {/* LINHA - NOITE */}
                  </tr>
                  <tr>
                    <td>Noite</td>
                    <td>
                      <input name="segunda" type="checkbox" id="n-segunda" />
                    </td>
                    <td>
                      <input name="terca" type="checkbox" id="n-terca" />
                    </td>
                    <td>
                      <input name="quarta" type="checkbox" id="n-quarta" />
                    </td>
                    <td>
                      <input name="quinta" type="checkbox" id="n-quinta" />
                    </td>
                    <td>
                      <input name="sexta" type="checkbox" id="n-sexta" />
                    </td>
                    <td>
                      <input name="sabado" type="checkbox" id="n-sabado" />
                    </td>
                    <td>
                      <input name="domingo" type="checkbox" id="n-domingo" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-md-12">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Resumo Profissional:
            </label>
            <textarea
              className="inputFields col-md-12"
              type="text"
              placeholder="Descreva sua trajetória profissional"

              value={this.state.resumo_profissional}
              onChange={e => this.setState({ resumo_profissional: e.target.value })}
              required
            />
          </div>

          <div className="col-md-12">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Experiência Profissional
            </label>
            <br></br>
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Empresa:
            </label>
            <textarea
              className="inputFields col-md-12"
              type="text"
              placeholder="Informe o nome da empresa em que trabalhou"

              value={this.state.empresa}
              onChange={e => this.setState({ empresa: e.target.value })}
              required
            />

            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Segmento:
            </label>
            <textarea
              className="inputFields col-md-12"
              type="text"
              placeholder="Informe o segmento da empresa em que trabalhou"

              value={this.state.segmento}
              onChange={e => this.setState({ segmento: e.target.value })}
              required
            />

            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Data de Ínicio e Saída:
            </label>
            <br></br>
            <FormGroup>
              <Label for="labelFields"></Label>
              <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="date placeholder"
              />
              <br></br>
            </FormGroup>
            <br></br>

            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Cargo:
            </label>
            <textarea
              className="inputFields col-md-12"
              type="text"
              placeholder="Informe o seu ultimo cargo na empresa em que trabalhou"

              value={this.state.cargo}
              onChange={e => this.setState({ cargo: e.target.value })}
              required
            />

            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Atividades:
            </label>
            <textarea
              className="inputFields col-md-12"
              type="text"
              placeholder="Descreve um pouco sobre as atividades exercidas na empresa em que trabalhou"

              value={this.state.atividades}
              onChange={e => this.setState({ atividades: e.target.value })}
              required
            />
          </div>

          <div className="col-md-12">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Formação
            </label>
            <br></br>
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Nome do Curso
            </label>
            <textarea
              className="inputFields col-md-12"
              type="text"
              placeholder="Informe o nome do curso"
              value={this.state.curso}
              onChange={e => this.setState({ curso: e.target.value })}
              required
            />

            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Nome da Instituição
            </label>
            <textarea
              className="inputFields col-md-12"
              type="text"
              placeholder="Informe o nome da instituição onde estudou"
              value={this.state.instituicao}
              onChange={e => this.setState({ instituicao: e.target.value })}
              required
            />
          </div>

          <div className="col-md-12">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Nível do Curso:
            </label>
            <Input
              select
              className="inputFields col-md-12"
              type="select"
              select="multiple"
              name="curso"
              id="nivelcurso"
              style={{ width: "100%" }}

              value={this.state.nivel_curso}
              onChange={e => this.setState({ nivel_curso: e.target.value })}
              required
            >
              <option value="0">Selecione</option>
              <option value="1">Graduação</option>
              <option valeu="2">Pós Graduação</option>
              <option value="3">Especialização</option>
              <option value="4">Mestrado</option>
              <option value="5">Doutorado</option>
              <option value="6">PhD</option>
              <option value="7">Complementares</option>
            </Input>
          </div>

          <div className="col-md-12">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Data de Ínicio e Conclusão:
            </label>
            <br></br>
            <FormGroup>
              <Label for="labelFields"></Label>
              <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="date placeholder"
              />
              <br></br>
            </FormGroup>
            <br></br>
          </div>

          <div className="col-md-12">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Informações Complementares:
            </label>
            <textarea
              className="inputFields col-md-12"
              type="text"
              placeholder="Digite algumas informações adicionais"

              value={this.state.info_complementares}
              onChange={e => this.setState({ info_complementares: e.target.value })}
              required
            />
          </div>

          <label className="labelFields col-md-12" style={{ color: "red" }}>
            {this.state.error}
          </label>
          <Col className="col-md-12 d-flex justify-content-center">
            {this.props.id ? (
              <button
                type="button"
                onClick={() => this.goToConsulta("/consultar-recurso")}
                className="join-btn-no-transform mr-1 login"
                style={{ width: "25%", margin: "0px" }}
              >
                Consultar Recurso
              </button>
            ) : null}
            <div />
            <button
              type="button"
              onClick={() => { !this.props.id ? this.createResource("create") : this.createResource("update", this.props.id) }}
              className="join-btn-no-transform mr-1 login"
              style={{ width: "25%", margin: "0px" }}
            >
              Cadastrar Recurso
            </button>
          </Col>
        </form>
        <SweetAlert
          success
          show={this.state.sweetCreate}
          title="Atenção"
          onConfirm={() => this.setState({ sweetCreate: false })}
        >
          {`Cadastrado ${this.state.fname} com sucesso!`}
        </SweetAlert>
      </div>
    );
  }
}
export default RegisterResourceForm;
