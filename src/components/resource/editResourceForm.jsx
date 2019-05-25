import React, { Component } from "react";

class EditResourceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeUsuario: "José da Silva Pinto",
      telefone: "(11)2242-7589",
      celular: "(11)92242-7589",
      endereco: "Rua 01",
      objetivo: "Estágio",
      resumoProfissional: "Sem experiência",
      areaInteresse: "TI"
    };
  }
  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <div>
          <form className="signupForm">
            <label className="labelFields">Nome do Usuario:</label><br />
            <input className="inputFields" type="text" value={this.state.nome}
              onChange={e => this.setState({ nome: e.target.value })} />
            <br /><br />

            <label className="labelFields">Sobrenome:</label><br />
            <input className="inputFields" type="text" value={this.state.sobrenome}
              onChange={e => this.setState({ sobrenome: e.target.value })} />
            <br /><br />

            <label className="labelFields">Email:</label><br />
            <input className="inputFields" type="text" value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })} />
            <br /><br />

            <label className="labelFields">Senha:</label><br />
            <input className="inputFields" type="text" value={this.state.senha}
              onChange={e => this.setState({ senha: e.target.value })} />
            <br /><br />

            <div>
              <ul>
                <label className="labelFields">Dados Pessoais:</label><br />
                <br />
                <label className="labelFields">Data de Nascimento:</label><br />
                <input className="inputFields" type="text" value={this.state.dt_nascimento}
                  onChange={e => this.setState({ dt_nascimento: e.target.value })} /> <br />

                <label className="labelFields">Gênero:</label><br />
                <input className="inputFields" type="text" value={this.state.genero}
                  onChange={e => this.setState({ genero: e.target.value })} /><br />

                <label className="labelFields">Estado Civil:</label><br />
                <input className="inputFields" type="text" value={this.state.estado_civil}
                  onChange={e => this.setState({ estado_civil: e.target.value })} /><br />

                <label className="labelFields">Nacionalidade:</label><br />
                <input className="inputFields" type="text" value={this.state.nacionalidade}
                  onChange={e => this.setState({ nacionalidade: e.target.value })} /><br />

                <label className="labelFields">Estado:</label><br />
                <input className="inputFields" type="text" value={this.state.uf}
                  onChange={e => this.setState({ uf: e.target.value })} /><br />

                <label className="labelFields">Cidade:</label><br />
                <input className="inputFields" type="text" value={this.state.cidade}
                  onChange={e => this.setState({ cidade: e.target.value })} /><br />

                <label className="labelFields">Categoria:</label><br />
                <input className="inputFields" type="text" value={this.state.categoria}
                  onChange={e => this.setState({ categoria: e.target.value })} /><br />

                <label className="labelFields">Disponibilidade:</label><br />
                <input className="inputFields" type="text" value={this.state.disponibilidade}
                  onChange={e => this.setState({ disponibilidade: e.target.value })} /><br />
              </ul>
            </div>
            <br /><br />

            <div>
              <ul>
                <label className="labelFields">Resumo Profissional:</label><br />
                <br />
                <input className="inputFields" type="text" value={this.state.resumo_profissional}
                  onChange={e => this.setState({ resumo_profissional: e.target.value })} /><br />

                <label className="labelFields">Empresa:</label><br />
                <br />
                <input className="inputFields" type="text" value={this.state.empresa}
                  onChange={e => this.setState({ empresa: e.target.value })} /><br />

                <label className="labelFields">Segmento:</label><br />
                <br />
                <input className="inputFields" type="text" value={this.state.segmento}
                  onChange={e => this.setState({ segmento: e.target.value })} /><br />

                <label className="labelFields">Data de Início da Empresa:</label><br />
                <br />
                <input className="inputFields" type="text" value={this.state.dt_empresa_inicio}
                  onChange={e => this.setState({ dt_empresa_inicio: e.target.value })} /><br />

                <label className="labelFields">Data de Saída da Empresa:</label><br />
                <br />
                <input className="inputFields" type="text" value={this.state.dt_empresa_saida}
                  onChange={e => this.setState({ dt_empresa_saida: e.target.value })} /><br />

                <label className="labelFields">Cargo:</label><br />
                <br />
                <input className="inputFields" type="text" value={this.state.cargo}
                  onChange={e => this.setState({ cargo: e.target.value })} /><br />

                <label className="labelFields">Atividade:</label><br />
                <br />
                <input className="inputFields" type="text" value={this.state.atividade}
                  onChange={e => this.setState({ atviidade: e.target.value })} /><br />

              </ul>
            </div>
            <br /><br />
            <div>
              <ul>
                <label className="labelFields">Curso:</label><br />
                <br />
                <input className="inputFields" type="text" value={this.state.curso}
                  onChange={e => this.setState({ curso: e.target.value })} /><br />

                <label className="labelFields">Instituição de Ensino:</label><br />
                <br />
                <input className="inputFields" type="text" value={this.state.instituicao}
                  onChange={e => this.setState({ instituicao: e.target.value })} /><br />

                <label className="labelFields">Nível do Curso:</label><br />
                <br />
                <input className="inputFields" type="text" value={this.state.nivel_curso}
                  onChange={e => this.setState({ nivel_curso: e.target.value })} /><br />

                <label className="labelFields">Data de Início do Curso:</label><br />
                <br />
                <input className="inputFields" type="text" value={this.state.dt_curso_inicio}
                  onChange={e => this.setState({ dt_curso_inicio: e.target.value })} /><br />

                <label className="labelFields">Data de Conclusão do Curso:</label><br />
                <br />
                <input className="inputFields" type="text" value={this.state.dt_curso_conclusao}
                  onChange={e => this.setState({ dt_curso_conclusao: e.target.value })} /><br />

                <label className="labelFields">Informações Complementares:</label><br />
                <br />
                <input className="inputFields" type="text" value={this.state.info_complementares}
                  onChange={e => this.setState({ info_complementares: e.target.value })} /><br />

              </ul>
            </div>
            <br />
            <br />
            <input
              type="submit"
              onClick={e => this.handleFormSubmit(e)}
              value="Editar"
              className="join-btn"
            />
            <input
              type="button"
              onClick={e => this.handleFormSubmit(e)}
              value="Cancelar"
              className="btn btn-warning"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default EditResourceForm;
