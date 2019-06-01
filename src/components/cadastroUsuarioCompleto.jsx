import React, { Component, PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./../bootstrap.min.css";
import ReactDOM from "react-dom";
import { Button } from "@progress/kendo-react-buttons";
import { Link } from "react-router-dom";
import { Doughnut, defaults, Chart, Bar } from "react-chartjs-2";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { Card } from "react-materialize";

import {
  Row,
  Col,
  ModalHeader,
  FormGroup,
  Form,
  Label,
  Input,
  ModalBody,
  ModalFooter,
  Modal,
  Table,
  FormText,
  CustomInput
} from "reactstrap";

import SweetAlert from "react-bootstrap-sweetalert";

import axios from "axios";
import env from "./../consts";

import Disponibilidade from "./disponibilidade";
import ComposedResponsive from "./graphics/composedResponsive.jsx";

import { setNavbarOpen } from "./../redux/actions/navbarAction";

class CadastroUsuarioCompleto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      nome: "",
      sobrenome: "",
      email: "",
      senha: "",
      disponibilidade: null,
      fotoperfil: "",
      dt_nascimento: "",
      genero: "",
      estado_civil: "",
      nacionalidade: "",
      uf: "",
      cidade: "",
      resumo_profissional: "",
      categoria: "",
      nome_empresa: "",
      segmento: "",
      dt_empresa_inicio: "",
      dt_empresa_saida: "",
      cargo: "",
      atividades: "",
      curso: "",
      instituicao: "",
      formacao: "",
      dt_curso_inicio: "",
      dt_curso_conclusao: "",
      info_complementares: "",
      message1: "",
      sweetCreate: false
    };
  }

  atualizarMeuCadastro() {
    console.log({
      nome: this.state.nome,
      sobrenome: this.state.sobrenome,
      email: this.state.email,
      senha: this.state.senha,
      fotoperfil: this.state.fotoperfil,
      dt_nascimento: this.state.dt_nascimento,
      genero: this.state.genero,
      estado_civil: this.state.estado_civil,
      nacionalidade: this.state.nacionalidade,
      uf: this.state.uf,
      cidade: this.state.cidade,
      resumo_profissional: this.state.resumo_profissional,
      categoria: this.state.categoria,
      nome_empresa: this.state.empresa,
      segmento: this.state.segmento,
      dt_empresa_inicio: this.state.dt_empresa_inicio,
      dt_empresa_saida: this.state.dt_empresa_saida,
      cargo: this.state.cargo,
      atividades: this.state.atividades,
      curso: this.state.curso,
      instituicao: this.state.instituicao,
      formacao: this.state.formacao,
      dt_curso_inicio: this.state.dt_curso_inicio,
      dt_curso_conclusao: this.state.dt_curso_conclusao,
      info_complementares: this.state.info_complementares,
      message1: this.state.message1,
      disponibilidade: this.state.disponibilidade
    });
    return;

    //TODO
    let userID = JSON.parse(localStorage.getItem("userId"));
    axios
      .put(env.API + "resource/" + userID, {
        nome: this.state.nome,
        sobrenome: this.state.sobrenome,
        email: this.state.email,
        senha: this.state.senha,
        fotoperfil: this.state.fotoperfil,
        dt_nascimento: this.state.dt_nascimento,
        genero: this.state.genero,
        estado_civil: this.state.estado_civil,
        nacionalidade: this.state.nacionalidade,
        uf: this.state.uf,
        cidade: this.state.cidade,
        resumo_profissional: this.state.resumo_profissional,
        category_id: this.state.categoria,
        nome_empresa: this.state.nome_empresa,
        segmento: this.state.segmento,
        dt_empresa_inicio: this.state.dt_empresa_inicio,
        dt_empresa_saida: this.state.dt_empresa_saida,
        cargo: this.state.cargo,
        atividades: this.state.atividades,
        curso: this.state.curso,
        instituicao: this.state.instituicao,
        formacao: this.state.formacao,
        dt_curso_inicio: this.state.dt_curso_inicio,
        dt_curso_conclusao: this.state.dt_curso_conclusao,
        info_complementares: this.state.info_complementares,
        message1: this.state.message1,
        disponibilidade: this.state.disponibilidade
      })
      .then(response => {
        // handle success
        console.log(response);
      })
      .catch(error => {
        console.log(error + "Erro na API");
      });
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleChangeDisp = disponibilidade => {
    this.setState({ disponibilidade }, () =>
      console.log(this.state.disponibilidade)
    );
  };

  render() {
    return (
      <div className="loginUser col-md-12" id="header3">
        <form className="signupForm form-inline">
          <div className="col-md-12 text-center">
            <h1>
              Complete Seu Cadastro Para Aumentar suas chances de ser Chamado
            </h1>
            <br />
          </div>

          <div className="col-md-12">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Nome:
            </label>
            <input
              className="inputFields col-md-12"
              type="text"
              select="multiple"
              name="civilstatus"
              id="optioncivilstatus"
              style={{ width: "100%" }}
              value={this.state.nome}
              onChange={e => this.setState({ nome: e.target.value })}
              required
            />
          </div>
          <div className="col-md-12">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Sobrenome:
            </label>
            <input
              className="inputFields col-md-12"
              type="text"
              select="multiple"
              name="civilstatus"
              id="optioncivilstatus"
              style={{ width: "100%" }}
              value={this.state.sobrenome}
              onChange={e => this.setState({ sobrenome: e.target.value })}
              required
            />
          </div>

          <div className="col-md-12">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Foto de Perfil:{" "}
            </label>
            <br />
            <FormGroup row>
              <Label for="exampleFile" />
              <Col sm={10}>
                <Input
                  type="file"
                  name="file"
                  id="exampleFile"
                  className="join-btn-no-transform mr-1 col-md-12"
                />
              </Col>
            </FormGroup>
            <br />
          </div>

          <div className="col-md-12">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Data de Nascimento:
            </label>
            <br />
            <FormGroup>
              <Label for="labelFields" />
              <Input
                type="date"
                name="date"
                className="inputFields col-md-12"
                id="exampleDate"
                placeholder="date placeholder"
                value={this.state.dt_nascimento}
                onChange={e =>
                  this.setState(
                    { dt_nascimento: e.target.value },
                    console.log(this.state.dt_nascimento)
                  )
                }
                required
              />
              <br />
            </FormGroup>
            <br />
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
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outro">Outro</option>
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
              <option value="Solteiro">Solteiro(a)</option>
              <option valeu="Casado">Casado(a)</option>
              <option valeu="Viuvo">Viúvo(a)</option>
              <option valeu="Divorciado">Divorciado(a)</option>
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
              <option value="Brasileiro(a)">Brasileiro(a)</option>
              <option valeu="Mexicano(a)">Mexicano(a)</option>
              <option value="Argentino(a">Argentino(a)</option>
              <option value="Italiano(a)">Italiano(a)</option>
              <option valeu="Norte Americano(a)">Norte Americano(a)</option>
              <option value="Español(a)">Español(a)</option>
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
              <option value="AC">AC</option>
              <option valeu="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
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
              <option value="Acrelândia (AC)">Acrelândia (AC)</option>
              <option value="Assis Brasil (AC)">Assis Brasil (AC)</option>
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
            </Input>
          </div>

          <div className="col-md-12">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Categoria:
            </label>
            <Input
              select
              className="inputFields col-md-12"
              type="select"
              select="multiple"
              name="category"
              id="optioncategory"
              style={{ width: "100%" }}
              value={this.state.categoria}
              onChange={e => this.setState({ categoria: e.target.value })}
              required
            >
              <option value="">Selecione</option>
              <option value="1">Tecnologia</option>
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
          {this.state.disp ? (
            <Disponibilidade
              disp={this.state.disp}
              handleChangeDisp={this.handleChangeDisp}
            />
          ) : null}
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
              onChange={e =>
                this.setState({ resumo_profissional: e.target.value })
              }
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
            <br />
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
          </div>

          <div className="col-md-12">
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
          </div>

          <div className="col-md-6">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Data de Ínicio:
            </label>
            <br />
            <FormGroup>
              <Label for="labelFields" />
              <Input
                type="date"
                name="date1"
                className="col-md-12"
                id="dt_inicio"
                placeholder="date placeholder"
                value={this.state.dt_empresa_inicio}
                onChange={e =>
                  this.setState({ dt_empresa_inicio: e.target.value })
                }
                required
              />
              <br />
            </FormGroup>
            <br />
          </div>

          <div className="col-md-6">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Data de Saída:
            </label>
            <br />
            <FormGroup>
              <Label for="labelFields" />
              <Input
                type="date"
                name="date2"
                className="col-md-12"
                id="dt_saida"
                placeholder="date placeholder"
                value={this.state.dt_empresa_saida}
                onChange={e =>
                  this.setState({ dt_empresa_saida: e.target.value })
                }
                required
              />
              <br />
            </FormGroup>
            <br />
          </div>
          <br />

          <div className="col-md-12">
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
          </div>

          <div className="col-md-12">
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
            <br />
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
              value={this.state.formacao}
              onChange={e => this.setState({ formacao: e.target.value })}
              required
            >
              <option value="0">Selecione</option>
              <option value="Ensino Fundamental">Ensino Fundamental</option>
              <option value="Ensino Médio">Ensino Médio</option>
              <option value="Ensino Técnico">Ensino Técnico</option>
              <option value="Ensino Superior">Ensino Superior</option>
              <option valeu="Pós Graduação">Pós Graduação</option>
              <option value="Especialização">Especialização</option>
              <option value="Mestrado">Mestrado</option>
              <option value="Doutorado">Doutorado</option>
              <option value="PhD">PhD</option>
              <option value="Complementares">Complementares</option>
            </Input>
          </div>

          <div className="col-md-6">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Data de Ínicio:
            </label>
            <br />
            <FormGroup>
              <Label for="labelFields" />
              <Input
                type="date"
                name="date1"
                id="dt_inicio"
                className="col-md-12"
                placeholder="date placeholder"
                value={this.state.dt_curso_inicio}
                onChange={e =>
                  this.setState({ dt_curso_inicio: e.target.value })
                }
                required
              />
              <br />
            </FormGroup>
            <br />
          </div>

          <div className="col-md-6">
            <label
              className="labelFields"
              style={{ display: "flex", justifyContent: "end" }}
            >
              Data de Conclusão:
            </label>
            <br />
            <FormGroup>
              <Label for="labelFields" />
              <Input
                type="date"
                className="col-md-12"
                name="date2"
                id="dt_conclusao"
                placeholder="date placeholder"
                value={this.state.dt_curso_conclusao}
                onChange={e =>
                  this.setState({ dt_curso_conclusao: e.target.value })
                }
                required
              />
              <br />
            </FormGroup>
            <br />
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
              onChange={e =>
                this.setState({ info_complementares: e.target.value })
              }
              required
            />
          </div>

          <label className="labelFields col-md-12" style={{ color: "red" }}>
            {this.state.error}
          </label>
          <Col className="col-md-12 d-flex justify-content-center">
            <button
              type="button"
              onClick={() => this.atualizarMeuCadastro()}
              className="join-btn-no-transform mr-1 login"
              style={{ width: "25%", margin: "0px" }}
            >
              Atualizar Cadastro
            </button>
          </Col>
        </form>
        <SweetAlert
          success
          show={this.state.sweetCreate}
          title="Atenção"
          onConfirm={() => this.setState({ sweetCreate: false })}
        >
          {/* ALTERAR */}
          {`Cadastrado ${this.state.fname} com sucesso!`}
        </SweetAlert>
      </div>
    );
  }

  loadUserInfor() {
    // Carregando a quantidade de usuários
    let userID = JSON.parse(localStorage.getItem("userId"));

    axios
      .get(env.API + "resource/" + userID)
      .then(response => {
        // handle success
        const data = response.data;
        this.setState({
          nome: data.nome,
          sobrenome: data.sobrenome,
          email: data.email,
          senha: data.senha,
          fotoperfil: data.fotoperfil,
          dt_nascimento: data.dt_nascimento,
          genero: data.genero,
          estado_civil: data.estado_civil,
          nacionalidade: data.nacionalidade,
          uf: data.uf,
          cidade: data.cidade,
          resumo_profissional: data.resumo_profissional,
          categoria: data.category.id,
          nome_empresa: data.nome_empresa,
          segmento: data.segmento,
          dt_empresa_inicio: data.dt_empresa_inicio,
          dt_empresa_saida: data.dt_empresa_saida,
          cargo: data.cargo,
          atividades: data.atividades,
          curso: data.curso,
          instituicao: data.instituicao,
          formacao: data.formacao,
          dt_curso_inicio: data.dt_curso_inicio,
          dt_curso_conclusao: data.dt_curso_conclusao,
          info_complementares: data.info_complementares,
          message1: data.message1,
          disp: data.disponibilidade
        });
      })
      .catch(error => {
        // handle error
        console.log(error + "Erro na API");
      });
  }

  componentDidMount() {
    this.loadUserInfor();
  }
}

const mapStateToProps = state => ({ login: state.login });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ setNavbarOpen }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CadastroUsuarioCompleto);
