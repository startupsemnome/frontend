import React from './node_modules/react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from './node_modules/reactstrap';

class ModalLearnMore extends React.Component {
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
    const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

    return (
      <div>
        <Button color="info" onClick={this.toggle}>{this.props.buttonLabel}Saiba mais!</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>Atenção!</ModalHeader>
          <ModalBody>
            Agradecemos por escolher!
              <br></br>
            <br></br>
            Em breve, entraremos em contato contigo! :)
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggle}>Ok</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalLearnMore;