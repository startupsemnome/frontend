import React from './node_modules/react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from './node_modules/reactstrap';

class Notificacao extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}> {this.props.buttonLabel} Notificação</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <div className="row">
            <div className="col-md-12">
              <ModalHeader toggle={this.toggle}>Notificação da Instituição</ModalHeader>
              <div >
                <ModalBody>

                </ModalBody>
              </div>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Saiba Mais</Button>{' '}
                <Button color="success" onClick={this.toggle}>Recusar</Button>
              </ModalFooter>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
export default Notificacao;
