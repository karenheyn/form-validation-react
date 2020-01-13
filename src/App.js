import React, { useState } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  //MUI styling
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

function App() {
  const classes = useStyles();
  const [disabled, setDisabled] = useState(true); //setting inital states
  const [sampleSize, setSampleSize] = useState(NaN);
  const [sampleMean, setSampleMean] = useState(NaN);
  const [standardDeviation, setStandardDeviation] = useState(NaN);
  const [hypothesizedMean, setHypothesizedMean] = useState(NaN);
  const [sampleSizeError, setSampleSizeError] = useState(false);
  const [sampleMeanError, setSampleMeanError] = useState(false);
  const [standardDeviationError, setStandardDeviationError] = useState(false);
  const [hypothesizedMeanError, setHypothesizedMeanError] = useState(false);
  let isValid;
  const validateForm = () => {
    if (sampleSize < 2 || isNaN(sampleSize)) {
      setSampleSizeError(true);
      return false;
    } else if (isNaN(sampleMean)) {
      setSampleMeanError(true);
      return false;
    } else if (standardDeviation <= 0 || isNaN(sampleSize)) {
      setStandardDeviationError(true);
      return false;
    } else if (!disabled && isNaN(hypothesizedMean)) {
      setHypothesizedMeanError(true);
      return false;
    } else {
      console.log("hooray its valid");
      return true;
    }
  };

  const handleSubmit = evt => {
    //handlesSubmit will have the callback validateForm
    evt.preventDefault();
    isValid = validateForm();
    isValid ? console.log("yay") : console.log("nayyyy");
  };

  return (
    <div className='App'>
      <form className={classes.root} autoComplete='off'>
        <TextField
          id='outlined-basic'
          label='Sample size'
          variant='outlined'
          error={sampleSizeError}
          helperText={sampleSizeError ? "must be a whole number >= 2" : null}
          onChange={evt => setSampleSize(evt.target.value)}
        />
        <TextField
          id='outlined-basic'
          label='Sample mean'
          variant='outlined'
          error={sampleMeanError}
          helperText={sampleMeanError ? " must be a numeric value" : null}
          onChange={evt => setSampleMean(evt.target.value)}
        />
        <TextField
          id='outlined-basic'
          label='Standard deviation'
          variant='outlined'
          error={standardDeviationError}
          helperText={
            standardDeviationError ? "must be a numeric value > 0" : null
          }
          onChange={evt => setStandardDeviation(evt.target.value)}
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={
                () =>
                  disabled === true ? setDisabled(false) : setDisabled(true) //sets state of lower textfield
              }
              value='checkedB'
              color='primary'
            />
          }
          label='Perform hypothesis test'
        />
        <TextField
          id='outlined-basic'
          label='Hypothesized mean'
          variant='outlined'
          disabled={disabled}
          error={hypothesizedMeanError}
          helperText={hypothesizedMeanError ? "must be a numeric value" : null}
          onChange={evt => setHypothesizedMean(evt.target.value)}
        />
        <div>
          <Button variant='contained' color='primary' onClick={handleSubmit}>
            Submit
          </Button>
          <Button variant='contained' color='primary'>
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
}

export default App;
