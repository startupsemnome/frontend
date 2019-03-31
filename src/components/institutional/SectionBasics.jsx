import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

// @material-ui/icons
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "./GridContainer.jsx";
import GridItem from "./GridItem.jsx";
import Button from "./Button.jsx";
import CustomInput from "./CustomInput.jsx";
import basicsStyle from "./basicsStyle.jsx";

class SectionBasics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [24, 22],
      selectedEnabled: "b",
      checkedA: true,
      checkedB: false
    };
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.sections}>
        <div className={classes.container}>
          <div className={classes.space50} />
          <div id="inputs">
            <div className={classes.title}>
              <h3>Entre em Contato</h3>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  id="nome"
                  inputProps={{
                    placeholder: "Nome"
                  }}
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="Nome da Empresa"
                  id="float"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="With material Icons"
                  id="material"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <People />
                      </InputAdornment>
                    )
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={4} md={4} lg={3}>
                <CustomInput
                  labelText="With Font Awesome Icons"
                  id="font-awesome"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <i className="fas fa-users" />
                      </InputAdornment>
                    )
                  }}
                />
              </GridItem>
            </GridContainer>
          </div>
          <div className={classes.space70} />
          <div id="checkRadios">
            <GridContainer>
              <GridItem xs={12} sm={6} md={4} lg={3}>
                <div className={classes.title}>
                  <h3>Categoria</h3>
                </div>
                <div
                  className={
                    classes.checkboxAndRadio +
                    " " +
                    classes.checkboxAndRadioHorizontal
                  }
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        tabIndex={-1}
                        onClick={() => this.handleToggle(21)}
                        checkedIcon={<Check className={classes.checkedIcon} />}
                        icon={<Check className={classes.uncheckedIcon} />}
                        classes={{ checked: classes.checked }}
                      />
                    }
                    classes={{ label: classes.label }}
                    label="Unchecked"
                  />
                </div>
                <div
                  className={
                    classes.checkboxAndRadio +
                    " " +
                    classes.checkboxAndRadioHorizontal
                  }
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        tabIndex={-1}
                        onClick={() => this.handleToggle(22)}
                        checked={
                          this.state.checked.indexOf(22) !== -1 ? true : false
                        }
                        checkedIcon={<Check className={classes.checkedIcon} />}
                        icon={<Check className={classes.uncheckedIcon} />}
                        classes={{ checked: classes.checked }}
                      />
                    }
                    classes={{ label: classes.label }}
                    label="Checked"
                  />
                </div>
                <div
                  className={
                    classes.checkboxAndRadio +
                    " " +
                    classes.checkboxAndRadioHorizontal
                  }
                >
                </div>
                <div
                  className={
                    classes.checkboxAndRadio +
                    " " +
                    classes.checkboxAndRadioHorizontal
                  }
                >
                </div>
              </GridItem>
            </GridContainer>
          </div>
          <div id="buttons">
            <div className={classes.title}>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <Button color="success">Success</Button>
                <Button color="warning">Warning</Button>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(basicsStyle)(SectionBasics);
