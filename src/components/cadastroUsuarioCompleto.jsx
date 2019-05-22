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

      fotoperfil: "",
      dt_nascimento: "",
      genero: "",
      estado_civil: "",
      nacionalidade: "",
      uf: "",
      cidade: "",
      disponibilidade: "",
      resumo_profissional: "",
      categoria: "",

      nome_empresa: "",
      segmento: "",
      dt_empresa_inicio: "",
      dt_empresa_saida: "",
      cargo: "",
      atividades: "",

      //formação
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
    //TODO
  }

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
              Foto de Perfil:{" "}
            </label>
            <br />
            <FormGroup row>
              <Label for="exampleFile" />
              <Col sm={10}>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                  A foto escolhida será depositada em nosso banco de dados.
                </FormText>
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
                className="col-md-12"
                id="exampleDate"
                placeholder="date placeholder"
                value={this.state.dt_nascimento}
                onChange={e => this.setState({ dt_nascimento: e.target.value })}
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
              <option valeu="Viúvo">Viúvo(a)</option>
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
              <option value="Administração">Administração</option>
              <option valeu="Comércio Exterior">Comércio Exterior</option>
              <option value="Tecnologia">Tecnologia</option>
              <option value="Arquitetura">Arquitetura</option>
              <option value="Medicina">Medicina</option>
              <option value="Contábeis">Contábeis</option>
              <option value="Economia">Economia</option>
              <option value="Cinema e Audiovisual">Cinema e Audiovisual</option>
              <option value="Radio e TV">Radio e TV</option>
              <option value="Design">Design</option>
              <option value="Direito">Direito</option>
              <option value="Educação Física">Educação Física</option>
              <option value="Enfermagem">Enfermagem</option>
              <option value="Engenharia Civil">Engenharia Civil</option>
              <option value="Engenharia de Automação e Controle">
                Engenharia de Automação e Controle
              </option>
              <option value="Engenharia de Produção">
                Engenharia de Produção
              </option>
              <option value="Engenharia Elétrica">Engenharia Elétrica</option>
              <option value="Engenharia Eletrônica">
                Engenharia Eletrônica
              </option>
              <option value="Engenharia Mecânica">Engenharia Mecânica</option>
              <option value="ngenharia Química">Engenharia Química</option>
              <option value="Psicologia">Psicologia</option>
              <option value="Farmácia">Farmácia</option>
              <option value="Fisioterapia">Fisioterapia</option>
              <option value="Comercial">Comercial</option>
              <option value="Qualidade">Qualidade</option>
              <option value="Logística">Logística</option>
              <option value="Marketing">Marketing</option>
              <option value="Medicina Veterinária">Medicina Veterinária</option>
              <option value="Nutrição">Nutrição</option>
              <option value="Odontologia">Odontologia</option>
              <option value="Psicologia">Psicologia</option>
              <option value="Relações Públicas">Relações Públicas</option>
              <option value="Publicidade e Propagand">
                Publicidade e Propaganda
              </option>
              <option value="Turismo">Turismo</option>
              <option value="Outros">Outros</option>
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
    axios
      .get(env.API + "user/1")
      .then(response => {
        // handle success
        const data = response.data;
        this.setState({ user: data });
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
