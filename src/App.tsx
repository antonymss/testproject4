import React, {useState} from 'react';
import './App.css';
import {
    Checkbox,
    DialogContentText,
    FormControl,
    FormControlLabel,
    FormLabel, NativeSelect,
    Radio,
    RadioGroup, Select,
    TextField
} from "@material-ui/core";
import AcUnitIcon from '@material-ui/icons/AcUnit';
import {Button} from '@material-ui/core';
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';
import Brightness1OutlinedIcon from '@material-ui/icons/Brightness1Outlined';

function App() {
    const [value, setValue] = React.useState('');
    const [disabled, setDisabled] = useState(true)
    const [disabledTwo, setDisabledTwo] = useState(true)
    const [disabledThree, setDisabledThree] = useState(true)
    const [disabledFour, setDisabledFour] = useState(true)
    const [checked, setChecked] = React.useState(false);
    const [checkedTwo, setCheckedTwo] = React.useState(false);
    const [disabledChecked, setDisabledFourChecked] = useState(true)
    const [disabledSecurityKey, setDisabledSecurityKey] = useState(true)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    }
    const handleChangeChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    const handleChangeCheckedTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedTwo(event.target.checked);
    };

    return (
        <form>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{border: '1px solid black'}}>
                    <div>
                        <FormControl component="fieldset">
                            <FormLabel><h2>Enthernet Settings</h2></FormLabel>

                            <RadioGroup name="radio1" value={value} onChange={handleChange}>
                                <FormControlLabel value="first"
                                                  control={<Radio onChange={(event, checked) => {
                                                      if (checked) {
                                                          setDisabled(true)
                                                      }
                                                  }}/>}
                                                  label="Obtain an IP address automatically (DHCP/BootP)"/>
                                <FormControlLabel value="second" control={<Radio onChange={(event, checked) => {
                                    if (checked) {
                                        setDisabled(false)
                                    }
                                }}/>} label="Use following IP address:"/>
                            </RadioGroup>
                            <div>
                                <DialogContentText> IP address: <AcUnitIcon
                                    style={{color: "red", height: '10px', width: '10px'}}/>
                                    <TextField
                                        disabled={disabled} variant="outlined"/> </DialogContentText>
                                <DialogContentText> Subnet Mask: <AcUnitIcon
                                    style={{color: "red", height: '10px', width: '10px'}}/> <TextField
                                    disabled={disabled} variant="outlined"/> </DialogContentText>
                                <DialogContentText> Default Gateway: <TextField disabled={disabled} variant="outlined"/>
                                </DialogContentText>
                            </div>
                        </FormControl>

                    </div>

                    <div>
                        <RadioGroup name="radio2" value={value} onChange={handleChange}>
                            <FormControlLabel value="third" control={<Radio onChange={(event, checked) => {
                                if (checked) {
                                    setDisabledTwo(true)
                                }
                            }}/>}
                                              label="Obtain DNS server address automatically"/>
                            <FormControlLabel value="fourth" control={<Radio onChange={(event, checked) => {
                                if (checked) {
                                    setDisabledTwo(false)
                                }
                            }}/>} label="Use following DS server address:"/>
                        </RadioGroup>
                        <DialogContentText> Perfered DNS server: <AcUnitIcon
                            style={{color: "red", height: '10px', width: '10px'}}/>
                            <TextField disabled={disabledTwo}
                                       variant="outlined"/> </DialogContentText>
                        <DialogContentText> Alternative DNS server: <TextField disabled={disabledTwo}
                                                                               variant="outlined"/>
                        </DialogContentText>
                    </div>
                </div>
                <div style={{border: '1px solid black'}}>
                    <div>

                        <FormLabel><h2>Wireless Settings</h2></FormLabel>

                        <Checkbox
                            checked={checked}
                            // onChange={handleChangeChecked}
                            inputProps={{'aria-label': 'primary checkbox'}}
                            onChange={(event, checked) => {
                                if (checked) {
                                    setDisabledFourChecked(true)
                                }
                            }}
                        /><FormLabel>Enable wifi:</FormLabel>

                        <DialogContentText> Whireless Network Name: <AcUnitIcon
                            style={{color: "red", height: '10px', width: '10px'}}/>
                            <Select
                                disabled={disabledChecked}
                                variant="outlined"
                                native
                                value='Please select'
                            >

                            </Select> <Brightness1OutlinedIcon/> <RefreshOutlinedIcon/> </DialogContentText>

                        <Checkbox
                            checked={checkedTwo}
                            // onChange={handleChangeCheckedTwo}
                            inputProps={{'aria-label': 'primary checkbox'}}
                            onChange={(event, checked) => {
                                if (checked) {
                                    setDisabledSecurityKey(true)
                                }
                            }}
                        /><FormLabel>Enable Wireless Security:</FormLabel>

                        <DialogContentText> Security Key: <AcUnitIcon
                            style={{color: "red", height: '10px', width: '10px'}}/>
                            <TextField disabled={disabledSecurityKey} variant="outlined"/> </DialogContentText>


                        <FormControl component="fieldset">
                            <RadioGroup name="radio1" value={value} onChange={handleChange}>
                                <FormControlLabel value="first"
                                                  control={<Radio onChange={(event, checked) => {
                                                      if (checked) {
                                                          setDisabledThree(true)
                                                      }
                                                  }}/>}
                                                  label="Obtain an IP address automatically (DHCP/BootP)"/>
                                <FormControlLabel value="second" control={<Radio onChange={(event, checked) => {
                                    if (checked) {
                                        setDisabledThree(false)
                                    }
                                }}/>} label="Use following IP address:"/>
                            </RadioGroup>
                            <div>
                                <DialogContentText> IP address: <AcUnitIcon
                                    style={{color: "red", height: '10px', width: '10px'}}/>
                                    <TextField
                                        disabled={disabledThree} variant="outlined"/> </DialogContentText>
                                <DialogContentText> Subnet Mask: <AcUnitIcon
                                    style={{color: "red", height: '10px', width: '10px'}}/> <TextField
                                    disabled={disabledThree} variant="outlined"/> </DialogContentText>
                                <DialogContentText> Default Gateway: <TextField disabled={disabledThree}
                                                                                variant="outlined"/>
                                </DialogContentText>
                            </div>
                        </FormControl>

                    </div>

                    <div>
                        <RadioGroup name="radio2" value={value} onChange={handleChange}>
                            <FormControlLabel value="third" control={<Radio onChange={(event, checked) => {
                                if (checked) {
                                    setDisabledFour(true)
                                }
                            }}/>}
                                              label="Obtain DNS server address automatically"/>
                            <FormControlLabel value="fourth" control={<Radio onChange={(event, checked) => {
                                if (checked) {
                                    setDisabledFour(false)
                                }
                            }}/>} label="Use following DS server address:"/>
                        </RadioGroup>
                        <DialogContentText> Perfered DNS server: <AcUnitIcon
                            style={{color: "red", height: '10px', width: '10px'}}/>
                            <TextField disabled={disabledFour}
                                       variant="outlined"/> </DialogContentText>
                        <DialogContentText> Alternative DNS server: <TextField disabled={disabledFour}
                                                                               variant="outlined"/>
                        </DialogContentText>
                    </div>
                </div>
            </div>

            <Button variant="contained" color="primary"
                    style={{marginRight: '10px', backgroundColor: "#06c7f3", borderRadius: '20px', width: '110px'}}>
                Save
            </Button>
            <Button variant="outlined"
                    style={{color: "#06c7f3", borderRadius: '20px', width: '110px', border: '1px solid #06c7f3'}}>
                Cancel
            </Button>

        </form>
    )
}

export default App;


