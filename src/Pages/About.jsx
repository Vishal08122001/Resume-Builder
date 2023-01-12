import { Stack, Typography } from "@mui/material";
import "../Styles/About.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import Navbar from "../Components/NavBar/NavBar"
import EmailIcon from "@mui/icons-material/Email";
import { Box } from "@mui/system";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";






export default function About() {



    // Icon links to my linkdin, whatsapp, github accounts
    const linkdin = () => {
        window.open("https://www.linkedin.com/in/vishal-chauhan-059601229/")
    }
    const whatsapp = () => {
        window.open('https://wa.me/918076929271')
    }
    const Email = () => {
        window.open("mailto:vc31142@gmail.com");
    }
    const gitHub = () => {
        window.open("https://github.com/Vishal08122001")
    }

    return (
        <>
            <Navbar active={""} />
            <h2 className="title">ABOUT</h2>
            <Stack className="stack"
                p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px " }}>

                <Stack
                    className="midContainer"
                    direction={{
                        xs: "column-reverse",
                        sm: "column-reverse",
                        md: "column-reverse",
                        lg: "row",
                    }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    mt="20px">
                    <Typography
                        sx={{
                            fontSize: {
                                xs: "13px",
                                sm: "15px",
                                md: "17px",
                                lg: "19px",
                            },
                            paddingRight: {
                                xs: "15px",
                                sm: "18px",
                                lg: "25px",
                            },
                            paddingLeft: {
                                xs: "15px",
                                sm: "18px",
                                lg: "25px",
                            },

                            textAlign: "justify"
                        }}>
                        You’ve just graduated and you’re ready to take on the world. But where do you start? The Job Search of
                        course and that one document that can make or break your chances of Landing you your dream Job is your
                        Resume, CV, and Cover Letter. Resume Builder provides you a plenty of resume template which you can use
                        to create your resume.

                        Take a peek at our database that contains Resume Templates. Pick an illustration that not only fits your
                        personal taste but also illustrates the kind of work you would like to do in the future. Every one of
                        these Resume Templates is produced in PDF format. We have a large number
                        of ideas that are already in usable form. Utilize any one of our ready examples!


                    </Typography>
                    <Stack>
                        <img
                            src="https://news.utexas.edu/wp-content/uploads/2021/01/TCE_BlogPostImage_ResumeBuilding-100-600x400-c-default.jpg"
                            alt="About_Image"
                        />
                    </Stack>
                </Stack>
                <Box mt="25px">
                    <Typography
                        sx={{
                            fontSize: {
                                xs: "22px",
                                sm: "25px",
                                md: "27px",
                                lg: "30px",
                            },
                            fontWeight: "400",
                            color: "dark",
                        }}>
                        Connect with us-
                    </Typography>
                    <Box className="icons">
                        <LinkedInIcon
                            style={{ cursor: "pointer" }}
                            onClick={linkdin}
                            sx={{ fontSize: "40px", paddingLeft: "15px" }}
                            color="primary"
                        />
                        <GithubIcon
                            onClick={gitHub}
                            style={{ cursor: "pointer" }}
                            sx={{ fontSize: "40px", paddingLeft: "15px" }}
                            color="black"
                        />
                        <WhatsAppIcon
                            style={{ cursor: "pointer" }}
                            onClick={whatsapp}
                            sx={{ fontSize: "40px", paddingLeft: "15px" }}
                            color="success"
                        />
                        <EmailIcon
                            style={{ cursor: "pointer" }}
                            onClick={Email}
                            sx={{ fontSize: "40px", paddingLeft: "15px" }}
                            color="error"
                        />

                    </Box>
                </Box>
            </Stack>
        </>
    );
}
