import React, {useState} from 'react';
import './App.css';
import {
    Button,
    Checkbox,
    DialogContentText,
    FormControl,
    FormControlLabel,
    FormLabel, InputLabel,
    Radio,
    RadioGroup,
    Select,
    TextField
} from "@material-ui/core";
import AcUnitIcon from '@material-ui/icons/AcUnit';
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';
import {FormikErrors, useFormik} from 'formik';
import {log} from "util";

type FormValuesType = {
    EnthernetIP: string
    EnthernetDNS: string
    EnthernetSubnetMask: string
    EnthernetDefaultGateway: string
    EnthernetAlternativeDNS: string
    WirelessNetworkName: string
    WirelessSecurityKey: string
    WirelessIP: string
    WirelessDNS: string
    WirelessSubnetMask: string
    WirelessDefaultGateway: string
    WirelessAlternativeDNS: string
}

function App() {
    const [value, setValue] = React.useState('');
    const [valueTwo, setValueTwo] = React.useState('');
    const [valueThree, setValueThree] = React.useState('');
    const [valueFour, setValueFour] = React.useState('');
    const [disabled, setDisabled] = useState(true)
    const [disabledTwo, setDisabledTwo] = useState(true)
    const [disabledThree, setDisabledThree] = useState(true)
    const [disabledFour, setDisabledFour] = useState(true)
    const [checked, setChecked] = React.useState(false);
    const [checkedTwo, setCheckedTwo] = React.useState(false);
    const [disabledChecked, setDisabledFourChecked] = useState(true)
    const [disabledSecurityKey, setDisabledSecurityKey] = useState(true)

    const handleChangeOne = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    }
    const handleChangeTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueTwo((event.target as HTMLInputElement).value);
    }
    const handleChangeThree = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueThree((event.target as HTMLInputElement).value);
    }
    const handleChangeFour = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueFour((event.target as HTMLInputElement).value);
    }

    const handleChangeChecked = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        setChecked(event.target.checked);

        setDisabledFourChecked(!disabledChecked)
    };
    const handleChangeCheckedTwo = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        setCheckedTwo(event.target.checked)
        setDisabledSecurityKey(!disabledSecurityKey)


    };

    const formik = useFormik({
        validate: (values: FormValuesType) => {
            let errors: FormikErrors<FormValuesType> = {}
            if (!values.EnthernetIP) {
                errors.EnthernetIP = 'Field is equired'
            } else if (!/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i.test(values.EnthernetIP)) {
                errors.EnthernetIP = 'Invalid IP address'
            }
            if (!values.EnthernetSubnetMask) {
                errors.EnthernetSubnetMask = 'Field is equired'
            } else if (!/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i.test(values.EnthernetSubnetMask)) {
                errors.EnthernetSubnetMask = 'Invalid subnetMask address'
            }
            if (!values.EnthernetDNS) {
                errors.EnthernetDNS = 'Field is equired'
            } else if (!/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i.test(values.EnthernetDNS)) {
                errors.EnthernetDNS = 'Invalid DNS address'
            }

            if (!values.WirelessIP) {
                errors.WirelessIP = 'Field is equired'
            } else if (!/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i.test(values.WirelessIP)) {
                errors.WirelessIP = 'Invalid IP address'
            }
            if (!values.WirelessSubnetMask) {
                errors.WirelessSubnetMask = 'Field is equired'
            } else if (!/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i.test(values.WirelessSubnetMask)) {
                errors.WirelessSubnetMask = 'Invalid subnetMask address'
            }
            if (!values.WirelessDNS) {
                errors.WirelessDNS = 'Field is equired'
            } else if (!/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i.test(values.WirelessDNS)) {
                errors.WirelessDNS = 'Invalid DNS address'
            }
            if (!values.WirelessNetworkName) {
                errors.WirelessNetworkName = 'Field is equired'}
            if (!values.WirelessSecurityKey) {
                errors.WirelessSecurityKey = 'Field is equired'}

            return errors
        },
        initialValues: {
            EnthernetIP: '',
            EnthernetSubnetMask: '',
            EnthernetDefaultGateway: '',
            EnthernetDNS: '',
            EnthernetAlternativeDNS: '',
            WirelessNetworkName: '',
            WirelessSecurityKey: '',
            WirelessIP: '',
            WirelessSubnetMask: '',
            WirelessDefaultGateway: '',
            WirelessDNS: '',
            WirelessAlternativeDNS: '',


        },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2))

        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div style={{display: 'flex', justifyContent: 'center', marginBottom: '10px'}}>
                <div style={{border: '1px solid black', display: 'flex', flexDirection: 'column', width: '50%'}}>
                    <div>
                        <FormControl>
                            <FormLabel><h2>Enthernet Settings</h2></FormLabel>

                            <RadioGroup name="radio1" value={value} onChange={handleChangeOne}>
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
                                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                    <DialogContentText> IP address: <AcUnitIcon
                                        style={{color: "red", height: '10px', width: '10px'}}/>

                                        <TextField size="small"
                                                   disabled={disabled}
                                                   variant="outlined"
                                                   id="EnthernetIP" {...formik.getFieldProps("EnthernetIP")}
                                                   value={formik.values.EnthernetIP}
                                                   onChange={formik.handleChange}
                                        />
                                        {formik.errors.EnthernetIP ? <div>{formik.errors.EnthernetIP}</div> : null}

                                    </DialogContentText>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                    <DialogContentText> Subnet Mask: <AcUnitIcon
                                        style={{color: "red", height: '10px', width: '10px'}}/>
                                        <TextField size="small" disabled={disabled} variant="outlined"
                                                   id="EnthernetSubnetMask" {...formik.getFieldProps("EnthernetSubnetMask")}
                                                   value={formik.values.EnthernetSubnetMask}
                                                   onChange={formik.handleChange}
                                        />
                                        {formik.errors.EnthernetSubnetMask ? <div>{formik.errors.EnthernetSubnetMask}</div> : null}
                                    </DialogContentText>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                    <DialogContentText> Default Gateway:
                                        <TextField size="small" disabled={disabled} variant="outlined"
                                                   id="EnthernetDefaultGateway" {...formik.getFieldProps("EnthernetDefaultGateway")}
                                                   value={formik.values.EnthernetDefaultGateway}
                                                   onChange={formik.handleChange}
                                        />
                                    </DialogContentText>
                                </div>
                            </div>
                        </FormControl>

                    </div>

                    <div>
                        <RadioGroup name="radio2" value={valueTwo} onChange={handleChangeTwo}>
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
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <DialogContentText> Perfered DNS server: <AcUnitIcon
                                style={{color: "red", height: '10px', width: '10px'}}/>
                                <TextField disabled={disabledTwo} size="small" variant="outlined"
                                           id="EnthernetDNS" {...formik.getFieldProps("EnthernetDNS")}
                                           onChange={formik.handleChange} value={formik.values.EnthernetDNS}
                                />
                                {formik.errors.EnthernetDNS ? <div>{formik.errors.EnthernetDNS}</div> : null}
                            </DialogContentText>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <DialogContentText> Alternative DNS server:
                                <TextField size="small" disabled={disabledTwo} variant="outlined"
                                           id="EnthernetAlternativeDNS" {...formik.getFieldProps("EnthernetAlternativeDNS")}
                                           onChange={formik.handleChange} value={formik.values.EnthernetAlternativeDNS}
                                />
                            </DialogContentText>
                        </div>
                    </div>
                </div>

                <div style={{border: '1px solid black', display: 'flex', flexDirection: 'column', width: '50%'}}>
                    <div>

                        <FormLabel style={{display: 'flex', justifyContent: 'start'}}><h2>Wireless Settings</h2>
                        </FormLabel>

                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                        }}>
                            <div>
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChangeChecked}
                                    inputProps={{'aria-label': 'primary checkbox'}}
                                />
                                <FormLabel>Enable wifi:</FormLabel>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                                <DialogContentText> Whireless Network Name: <AcUnitIcon
                                    style={{color: "red", height: '10px', width: '10px'}}/>

                                    <Select
                                        disabled={disabledChecked}
                                        variant="outlined"
                                        native
                                        style={{minWidth: '200px', height: '35px'}}
                                        id="WirelessNetworkName" {...formik.getFieldProps("WirelessNetworkName")}
                                        value={formik.values.WirelessNetworkName}
                                        onChange={formik.handleChange}
                                    >
                                        <option  value="" />
                                        <option value={10}>Ten</option>
                                        <option value={20}>Twenty</option>
                                        <option value={30}>Thirty</option>
                                    </Select>
                                     <RefreshOutlinedIcon/>
                                    {formik.errors.WirelessNetworkName ? <div>{formik.errors.WirelessNetworkName}</div> : null}
                                </DialogContentText>

                            </div>
                        </div>

                        <Checkbox
                            checked={checkedTwo}
                            onChange={handleChangeCheckedTwo}
                            inputProps={{'aria-label': 'primary checkbox'}}
                        />
                        <FormLabel>Enable Wireless Security:</FormLabel>
                        <div style={{display: 'flex', justifyContent: 'space-evenly', marginLeft: 'auto'}}>
                            <DialogContentText> Security Key: <AcUnitIcon
                                style={{color: "red", height: '10px', width: '10px'}}/>
                                <TextField size="small" disabled={disabledSecurityKey} variant="outlined"
                                           id="WirelessSecurityKey" {...formik.getFieldProps("WirelessSecurityKey")}
                                           value={formik.values.WirelessSecurityKey}
                                           onChange={formik.handleChange}
                                />
                                {formik.errors.WirelessSecurityKey ? <div>{formik.errors.WirelessSecurityKey}</div> : null}
                            </DialogContentText>
                        </div>

                        <RadioGroup name="radio1" value={valueThree} onChange={handleChangeThree}
                                    style={{marginLeft: '10px'}}>
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

                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <DialogContentText> IP address: <AcUnitIcon
                                style={{color: "red", height: '10px', width: '10px'}}/>
                                <TextField disabled={disabledThree} variant="outlined" size="small"
                                           id="WirelessIP" {...formik.getFieldProps("WirelessIP")}
                                           value={formik.values.WirelessIP}
                                           onChange={formik.handleChange}
                                />
                                {formik.errors.WirelessIP ? <div>{formik.errors.WirelessIP}</div> : null}
                            </DialogContentText>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <DialogContentText> Subnet Mask: <AcUnitIcon
                                style={{color: "red", height: '10px', width: '10px'}}/>
                                <TextField size="small" disabled={disabledThree} variant="outlined"
                                           id="WirelessSubnetMask" {...formik.getFieldProps("WirelessSubnetMask")}
                                           value={formik.values.WirelessSubnetMask}
                                           onChange={formik.handleChange}
                                />
                                {formik.errors.WirelessSubnetMask ?
                                    <div>{formik.errors.WirelessSubnetMask}</div> : null}
                            </DialogContentText>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <DialogContentText> Default Gateway:
                                <TextField size="small" disabled={disabledThree} variant="outlined"
                                           id="WirelessDefaultGateway" {...formik.getFieldProps("WirelessDefaultGateway")}
                                           value={formik.values.WirelessDefaultGateway}
                                           onChange={formik.handleChange}/>
                            </DialogContentText>
                        </div>

                    </div>

                    <div>
                        <RadioGroup name="radio2" value={valueFour} onChange={handleChangeFour}
                                    style={{marginLeft: '10px'}}>
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
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <DialogContentText> Perfered DNS server: <AcUnitIcon
                                style={{color: "red", height: '10px', width: '10px'}}/>
                                <TextField size="small" disabled={disabledFour} variant="outlined"
                                           id="WirelessDNS" {...formik.getFieldProps("WirelessDNS")}
                                           onChange={formik.handleChange} value={formik.values.WirelessDNS}
                                />
                                {formik.errors.WirelessDNS ? <div>{formik.errors.WirelessDNS}</div> : null}
                            </DialogContentText>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <DialogContentText> Alternative DNS server:
                                <TextField size="small" disabled={disabledFour} variant="outlined"
                                           id="WirelessAlternativeDNS" {...formik.getFieldProps("WirelessAlternativeDNS")}
                                           onChange={formik.handleChange} value={formik.values.WirelessAlternativeDNS}
                                />
                            </DialogContentText>
                        </div>
                    </div>
                </div>
            </div>

            <Button variant="contained" color="primary" type={'submit'}
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


