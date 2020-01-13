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
  const [disabled, setDisabled] = useState(true); //hook to set state of HM prop onclick
  const [sampleSize, setSampleSize] = useState("");
  const [sampleMean, setSampleMean] = useState("");
  const [standardDeviation, setStandardDeviation] = useState("");
  const [hypothesizedMean, setHypothesizedMean] = useState("");
  const [sampleSizeError, setSampleSizeError] = useState(false);
  const [sampleMeanError, setSampleMeanError] = useState(false);
  const [standardDeviationError, setStandardDeviationError] = useState(false);
  const [hypothesizedMeanError, HypothesizedMeanError] = useState(false);

  const handleSubmit = evt => {
    //handlesSubmit will have the callback validateForm
    evt.preventDefault();
    console.log("hello");
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
        />
        <TextField
          id='outlined-basic'
          label='Sample mean'
          variant='outlined'
          error={sampleMeanError}
          helperText={sampleMeanError ? " must be a numeric value" : null}
        />
        <TextField
          id='outlined-basic'
          label='Standard deviation'
          variant='outlined'
          error={standardDeviationError}
          helperText={
            standardDeviationError ? "must be a numeric value > 0" : null
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              // checked={state.checkedB}
              onChange={() =>
                disabled === true ? setDisabled(false) : setDisabled(true)
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
          error={standardDeviationError}
          helperText={standardDeviationError ? "must be a numeric value" : null}
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
