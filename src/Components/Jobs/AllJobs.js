import React from 'react';
import PageHeader from '../Reuseables/PageHeader';

import Styles from '../../Styles/Jobs Styles/AllJobsStyles';
import { Grid, useTheme, Box } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Slider from '@material-ui/core/Slider';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';

const AllJobs = (props) => {
   const theme = useTheme();
   const styleProps = {
      ...props,
      theme,
   };

   const classes = Styles(styleProps);

   const [state, setState] = React.useState({
      graphic: true,
      engr: false,
      medic: false,
   });
   const [state2, setState2] = React.useState({
      lahore: true,
      karachi: false,
      isb: false,
   });
   const [state3, setState3] = React.useState({
      html: true,
      css: false,
      js: false,
      react: false,
      node: false,
   });
   const [value, setValue] = React.useState([2000, 5000]);

   const [select1, setSelect1] = React.useState(1);

   const handleSelect1Change = (event) => {
      setSelect1(event.target.value);
   };

   const handleSliderChange = (event, newValue) => {
      setValue(newValue);
   };

   const handleChange = (event) => {
      setState({
         ...state,
         [event.target.name]: event.target.checked,
      });
   };
   const handleChange2 = (event) => {
      setState2({
         ...state2,
         [event.target.name]: event.target.checked,
      });
   };
   const handleChange3 = (event) => {
      setState3({
         ...state3,
         [event.target.name]: event.target.checked,
      });
   };

   const { gilad, jason, antoine } = state;
   const error =
      [gilad, jason, antoine].filter((v) => v).length !== 2;
   return (
      <>
         <PageHeader
            title={'Job Listing'}
            pathName={'Job Listing'}
            path={'/jobs/allJobs'}
         />
         <Grid
            container
            spacing={4}
            className={classes.GridContainer}
         >
            <Grid item xs={12} md={3} sm={12}>
               <Grid container>
                  <Grid
                     item
                     style={{
                        marginBottom: 30,
                     }}
                     xs={12}
                  >
                     <div
                        style={{
                           textAlign: 'center',
                           border: '1px solid #e2e2e2',
                        }}
                     >
                        <h3 className={classes.Section2Header}>
                           Basic Information
                        </h3>
                        <div
                           style={{
                              padding: '30px 10px',
                           }}
                        >
                           <FormControl
                              component='fieldset'
                              className={classes.formControl}
                           >
                              <FormGroup>
                                 <FormControlLabel
                                    control={
                                       <Checkbox
                                          checked={gilad}
                                          onChange={handleChange}
                                          name='graphic'
                                       />
                                    }
                                    label='Graphic Designer (1550 Jobs)'
                                 />
                                 <FormControlLabel
                                    control={
                                       <Checkbox
                                          checked={jason}
                                          onChange={handleChange}
                                          name='engr'
                                       />
                                    }
                                    label='Engineering Jobs (1220-16655)'
                                 />
                                 <FormControlLabel
                                    control={
                                       <Checkbox
                                          checked={antoine}
                                          onChange={handleChange}
                                          name='medic'
                                       />
                                    }
                                    label='Medical Jobs (1000-1200)'
                                 />
                              </FormGroup>
                           </FormControl>

                           <a href='#' className={classes.PinkA}>
                              View All Categories
                           </a>
                        </div>
                     </div>
                  </Grid>

                  <Grid
                     item
                     style={{
                        marginBottom: 30,
                     }}
                     xs={12}
                  >
                     <div
                        style={{
                           textAlign: 'center',
                           border: '1px solid #e2e2e2',
                        }}
                     >
                        <h3 className={classes.Section2Header}>
                           Jobs By Location
                        </h3>
                        <div
                           style={{
                              padding: '30px 10px',
                           }}
                        >
                           <FormControl
                              component='fieldset'
                              className={classes.formControl}
                           >
                              <FormGroup>
                                 <FormControlLabel
                                    control={
                                       <Checkbox
                                          checked={state2.lahore}
                                          onChange={handleChange2}
                                          name='lahore'
                                       />
                                    }
                                    label='Jobs In Lahore'
                                 />
                                 <FormControlLabel
                                    control={
                                       <Checkbox
                                          checked={state2.isb}
                                          onChange={handleChange2}
                                          name='isb'
                                       />
                                    }
                                    label='Jobs In Islamabad'
                                 />
                                 <FormControlLabel
                                    control={
                                       <Checkbox
                                          checked={state2.karachi}
                                          onChange={handleChange2}
                                          name='karachi'
                                       />
                                    }
                                    label='Jobs in Karachi'
                                 />
                              </FormGroup>
                           </FormControl>

                           <a href='#' className={classes.PinkA}>
                              View All Categories
                           </a>
                        </div>
                     </div>
                  </Grid>
                  <Grid
                     item
                     style={{
                        marginBottom: 30,
                     }}
                     xs={12}
                  >
                     <div
                        style={{
                           textAlign: 'center',
                           border: '1px solid #e2e2e2',
                        }}
                     >
                        <h3 className={classes.Section2Header}>
                           Your Skills
                        </h3>
                        <div
                           style={{
                              padding: '30px 10px',
                           }}
                        >
                           <FormControl
                              component='fieldset'
                              className={classes.formControl}
                           >
                              <FormGroup>
                                 <FormControlLabel
                                    control={
                                       <Checkbox
                                          checked={state3.js}
                                          onChange={handleChange3}
                                          name='js'
                                       />
                                    }
                                    label='Javascript'
                                 />
                                 <FormControlLabel
                                    control={
                                       <Checkbox
                                          checked={state3.html}
                                          onChange={handleChange3}
                                          name='html'
                                       />
                                    }
                                    label='HTML 5'
                                 />
                                 <FormControlLabel
                                    control={
                                       <Checkbox
                                          checked={state3.css}
                                          onChange={handleChange3}
                                          name='css'
                                       />
                                    }
                                    label='CSS 3'
                                 />
                                 <FormControlLabel
                                    control={
                                       <Checkbox
                                          checked={state3.react}
                                          onChange={handleChange3}
                                          name='react'
                                       />
                                    }
                                    label='React Js'
                                 />
                                 <FormControlLabel
                                    control={
                                       <Checkbox
                                          checked={state3.node}
                                          onChange={handleChange3}
                                          name='node'
                                       />
                                    }
                                    label='Node js'
                                 />
                              </FormGroup>
                           </FormControl>

                           <a href='#' className={classes.PinkA}>
                              View All Categories
                           </a>
                        </div>
                     </div>
                  </Grid>
                  <Grid
                     item
                     style={{
                        marginBottom: 30,
                     }}
                     xs={12}
                  >
                     <h3 className={classes.Section2Header}>
                        Salary
                     </h3>
                     <div
                        style={{
                           textAlign: 'center',
                           border: '1px solid #e2e2e2',
                           padding: 20,
                        }}
                     >
                        <Slider
                           className={classes.Slider}
                           value={value}
                           onChange={handleSliderChange}
                           // aria-labelledby='range-slider'
                           aria-labelledby='input-slider'
                           min={999}
                           max={10000}
                           // step={500}
                        />
                        ${value[0]} - ${value[1]}
                     </div>
                  </Grid>
               </Grid>
            </Grid>
            <Grid item xs={12} md={9} sm={12}>
               <Grid container>
                  <Grid
                     item
                     xs={12}
                     style={{
                        marginBottom: 30,
                     }}
                  >
                     <Box
                        style={{
                           padding: 20,
                           border: '1px solid #ccc',
                           display: 'flex',
                           justifyContent: 'space-between',
                           alignItems: 'center',
                        }}
                     >
                        <div
                           style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              width: '55%',
                           }}
                        >
                           <FormControl
                              className={classes.formControl2}
                              fullWidth
                              variant='filled'
                           >
                              <Select
                                 value={select1}
                                 onChange={handleSelect1Change}
                                 displayEmpty
                                 className={classes.selectEmpty}
                                 inputProps={{
                                    'aria-label': 'Without label',
                                 }}
                              >
                                 <MenuItem value={1}>Ten</MenuItem>
                                 <MenuItem value={2}>Twenty</MenuItem>
                                 <MenuItem value={33}>
                                    Thirty
                                 </MenuItem>
                              </Select>
                           </FormControl>
                           <div className={classes.Is}>
                              <i
                                 className={`fas fa-th-large ${classes.iGrey}`}
                                 style={{
                                    marginRight: 15,
                                 }}
                              ></i>
                              <i
                                 className={`fas fa-list ${classes.iPink}`}
                              ></i>
                           </div>
                        </div>
                        <div>
                           <p className={`${classes.iPink}`}>
                              You're Watching 01 To 20
                           </p>
                        </div>
                     </Box>
                  </Grid>
               </Grid>
            </Grid>
         </Grid>
      </>
   );
};

export default AllJobs;
