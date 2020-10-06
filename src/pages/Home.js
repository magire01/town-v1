import React, { useState } from "react";
import { Container, Grid, Paper, Typography, Button } from "@material-ui/core";

import Header from "../components/Header";
import UserHome from "./UserHome";


const Home = () => {
    
    const [pageNav, setPageNav] = useState({
        page: "Authed"
    })

    const [userAuth, setUserAuth] = useState({
        authed: false
    })

    const submitLogin = (evt) => {
        evt.preventDefault();

        setPageNav({ page: "Authed" })
        setUserAuth({ authed: true })

    }

    switch (pageNav.page) {
        case "SignUp":
            return (
                <div>
                    <Header auth={false}/>
                    <Container>
                        <Paper elevation={1}>
                            <Grid container justify="center" alignContent="center">
                                <Grid item md="12">
                                    <Typography variant="h5">Sign Up!</Typography>
                                </Grid>

                                <Grid item md="12">
                                    <form>
                                        <Typography variant="subtitle1">Name</Typography>
                                        <input />
                                        <Typography variant="subtitle1">Email</Typography>
                                        <input />
                                        <Typography variant="subtitle1">Password</Typography>
                                        <input />
                                        <Typography variant="subtitle1">Confirm Password</Typography>
                                        <input />
                                        <Grid item md="12">
                                            <Button onClick={() => setPageNav({ page: "LogIn" })} style={{ backgroundColor: "blue", color: "white" }}>Create Account</Button>
                                        </Grid>
                                    </form>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Container>
                </div>
        
            )
        case "Authed":
            return (
                <div>
                    <Header auth={true} />
                    <UserHome />
                </div>
            )
        default:
            return (
                <div>
                    <Header auth={false} />
                    <Button onClick={()=> setPageNav({ page: "SignUp" })}>Click Here to create an account!</Button>

                    <Container>
                        <Paper elevation={1}>
                            <Grid container justify="center" alignContent="center">
                                <Grid item md="12">
                                    <Typography variant="h5">Log In</Typography>
                                </Grid>

                                <Grid item md="12">
                                    <form>
                                        <Typography variant="subtitle1">Email</Typography>
                                        <input />
                                        <Typography variant="subtitle1">Password</Typography>
                                        <input />
                                        <Grid item md="12">
                                            <Button onClick={(evt) => submitLogin(evt)} style={{ backgroundColor: "blue", color: "white" }}>Submit</Button>
                                        </Grid>
                                    </form>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Container>
                </div>
            )
    }  

}

export default Home;