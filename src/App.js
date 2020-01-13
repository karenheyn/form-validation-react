import React, { useState } from "react";
import "./App.css";
import DataTable from "./table";
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
    },
    "& .MuiButton-root": {
      margin: theme.spacing(1.5)
    }
  }
}));

function App() {
  const classes = useStyles();
  const [disabled, setDisabled] = useState(true); //setting inital states
  const [sampleSize, setSampleSize] = useState("");
  const [sampleMean, setSampleMean] = useState("");
  const [standardDeviation, setStandardDeviation] = useState("");
  const [hypothesizedMean, setHypothesizedMean] = useState("");
  const [sampleSizeError, setSampleSizeError] = useState(false);
  const [sampleMeanError, setSampleMeanError] = useState(false);
  const [standardDeviationError, setStandardDeviationError] = useState(false);
  const [hypothesizedMeanError, setHypothesizedMeanError] = useState(false);
  const [valid, setValid] = useState(false);

  let isValid;

  const validateForm = () => {
    if (sampleSize < 2 || Number.isInteger(sampleSize) === false) {
      setSampleSizeError(true);
      return false;
    } else if (sampleSize >= 2 || Number.isInteger(sampleSize)) {
      setSampleSizeError(false);
    }
    if (isNaN(sampleMean) || sampleMean === "") {
      setSampleMeanError(true);
      return false;
    } else if (isNaN(sampleMean) === false) {
      setSampleMeanError(false);
    }
    if (isNaN(standardDeviation) || standardDeviation <= 0) {
      setStandardDeviationError(true);
      return false;
    } else if (standardDeviation > 0 || isNaN(standardDeviation) === false) {
      setStandardDeviationError(false);
    }
    if (!disabled && (isNaN(hypothesizedMean) || hypothesizedMean === "")) {
      setHypothesizedMeanError(true);
      return false;
    } else if (disabled || isNaN(hypothesizedMean) === false) {
      setHypothesizedMeanError(false);
      return true;
    } else {
      console.log("hooray its valid");
      return true;
    }
  };

  const handleSubmit = evt => {
    //handlesSubmit will have the callback validateForm
    evt.preventDefault();
    isValid = validateForm();

    if (isValid) {
      setValid(true);
    }
  };
  console.log(isValid);

  return (
    <div className='App'>
      <h1>React Form Validator</h1>
      <div className='content'>
        <form className={classes.root} autoComplete='off'>
          <TextField
            id='outlined-basic'
            label='Sample size'
            variant='outlined'
            value={sampleSize}
            error={sampleSizeError}
            helperText={sampleSizeError ? "must be a whole number >= 2" : null}
            onChange={evt => setSampleSize(1 * evt.target.value)}
          />
          <TextField
            id='outlined-basic'
            label='Sample mean'
            variant='outlined'
            value={sampleMean}
            error={sampleMeanError}
            helperText={sampleMeanError ? " must be a numeric value" : null}
            onChange={evt => setSampleMean(evt.target.value)}
          />
          <TextField
            id='outlined-basic'
            label='Standard deviation'
            variant='outlined'
            value={standardDeviation}
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
                    disabled === true
                      ? setDisabled(false)
                      : (setDisabled(true), setHypothesizedMean("")) //sets state of lower textfield
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
            value={hypothesizedMean}
            error={hypothesizedMeanError}
            helperText={
              hypothesizedMeanError ? "must be a numeric value" : null
            }
            onChange={evt => setHypothesizedMean(evt.target.value)}
          />
          <div>
            <Button variant='contained' color='primary' onClick={handleSubmit}>
              Submit
            </Button>
            <Button
              variant='contained'
              color='default'
              onClick={() => {
                setHypothesizedMean("");
                setSampleMean("");
                setSampleSize("");
                setStandardDeviation("");
                setValid(false);
              }}
            >
              Reset
            </Button>
          </div>
        </form>

        {valid && (
          <div className='padding-control'>
            <DataTable
              sampleSize={sampleSize}
              sampleMean={sampleMean}
              standardDeviation={standardDeviation}
              hypothesizedMean={hypothesizedMean}
            ></DataTable>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
