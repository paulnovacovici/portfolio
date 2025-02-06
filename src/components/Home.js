import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import data from "../data";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import SchoolIcon from "@material-ui/icons/School";
import Paper from "@material-ui/core/Paper";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Link from "@material-ui/core/Link";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px",
  },
  experiencePanel: {
    boxSizing: "border-box",
  },
  rightPanelGrid: {
    // Subtract appbar height and fill page
    maxHeight: "calc(100vh - 48px)",
    [theme.breakpoints.up("sm")]: {
      overflow: "unset",
    },
    [theme.breakpoints.up("md")]: {
      overflowY: "scroll",
    },
  },
  leftPanelGrid: {
    backgroundColor: "#03a9f4",
    color: "white",
    // Subtract appbar height and fill page
    height: "calc(100vh - 48px)",
    paddingLeft: "12px",
    paddingRight: "12px",
  },
  fullName: {
    fontWeight: 500,
  },
  avatar: {
    boxShadow: theme.shadows[4],
    width: 250,
    height: 250,
    "& img": {
      objectPosition: "0 10%",
    },
  },
}));

function AboutMeItem({ Icon, text }) {
  return (
    <Box mt={2} display="flex" alignItems="center">
      <Icon />
      <Box ml={1}>
        <Typography variant="h6" style={{ fontWeight: "300" }}>
          {text}
        </Typography>
      </Box>
    </Box>
  );
}

function MediumSVG() {
  return (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
    >
      <path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.237 4.999-5 5zm.97-5.649v-.269l-1.247-1.224c-.11-.084-.165-.222-.142-.359v-8.998c-.023-.137.032-.275.142-.359l1.277-1.224v-.269h-4.422l-3.152 7.863-3.586-7.863h-4.638v.269l1.494 1.799c.146.133.221.327.201.523v7.072c.044.255-.037.516-.216.702l-1.681 2.038v.269h4.766v-.269l-1.681-2.038c-.181-.186-.266-.445-.232-.702v-6.116l4.183 9.125h.486l3.593-9.125v7.273c0 .194 0 .232-.127.359l-1.292 1.254v.269h6.274z" />
    </svg>
  );
}

function LinkedCareerIcons() {
  return (
    <Box mt={2} display="flex" justifyContent="center" style={{ gap: "12px" }}>
      <Link
        href="https://medium.com/@paulnovacovici"
        target="_blank"
        color="inherit"
      >
        <MediumSVG />
      </Link>
      <Link
        href="https://www.linkedin.com/in/paul-novacovici/"
        target="_blank"
        color="inherit"
      >
        <LinkedInIcon />
      </Link>
      <Link
        href="https://github.com/paulnovacovici"
        target="_blank"
        color="inherit"
      >
        <GitHubIcon />
      </Link>
    </Box>
  );
}

function LeftPanel() {
  const classes = useStyles();

  return (
    <Box className={classes.leftPanel}>
      <Box
        display="flex"
        m={2}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Avatar
          alt={data.name}
          src={data.avatarImg}
          className={classes.avatar}
        />
        <Box mt={1}>
          <Typography variant="h4" className={classes.fullName}>
            {data.name}
          </Typography>
          <Box display="flex" justifyContent="center">
            <Typography variant="subtitle1">{data.jobTitle}</Typography>
          </Box>
        </Box>
      </Box>
      {/* <AboutMeItem Icon={PhoneAndroidIcon} text={data.phoneNumber}/> */}
      <AboutMeItem Icon={MailOutlineIcon} text={data.email} />
      <AboutMeItem Icon={SchoolIcon} text={data.school} />
      <LinkedCareerIcons />
    </Box>
  );
}

function JobExperienceCard({
  icon,
  title,
  company,
  yearsWorked,
  description,
  technologies,
}) {
  const classes = useStyles();

  return (
    <Box sm={12} className={classes.experiencePanel} mt={2}>
      <Paper elevation={3}>
        <Box p={2}>
          <Box display="flex">
            {icon != null && (
              <Box>
                <img src={icon} alt="company icon" style={{ height: "2rem" }} />
              </Box>
            )}
            <Box flex="1" marginLeft={icon != null ? "8px" : "0px"}>
              <Typography variant="h5">{company}</Typography>
            </Box>
            <Box>
              <Typography variant="caption">{yearsWorked}</Typography>
            </Box>
          </Box>
          <Typography variant="subtitle1">{title}</Typography>
          <Typography variant="body2">{description}</Typography>
          {technologies ? (
            <Typography component={Box} mt={1} variant="caption">
              {technologies}
            </Typography>
          ) : (
            <React.Fragment />
          )}
        </Box>
      </Paper>
    </Box>
  );
}

function ProjectCard({
  title,
  link,
  description,
  technologies,
  demo_src,
  icon,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box xs={12} className={classes.experiencePanel} mt={2}>
      <Link href={link} target="_blank">
        <Paper elevation={3}>
          <Box
            display="flex"
            alignItems="center"
            p={2}
            flexDirection={`${isSmall ? "column" : "row"}`}
          >
            <Box flex="1">
              <Box display="flex" gridGap={8}>
                {icon != null && (
                  <Box>
                    <img
                      src={icon}
                      alt="company icon"
                      style={{ height: "2rem" }}
                    />
                  </Box>
                )}
                <Typography variant="h5">{title}</Typography>
              </Box>
              <Typography variant="body2">{description}</Typography>
              {technologies != null && (
                <Typography component={Box} mt={1} variant="caption">
                  {technologies}
                </Typography>
              )}
            </Box>
            {demo_src && (
              <Box marginLeft={1}>
                <img
                  src={demo_src}
                  alt="gif demo"
                  style={{ width: "100%", height: "200px" }}
                />
              </Box>
            )}
          </Box>
        </Paper>
      </Link>
    </Box>
  );
}

function JobExperienceSection() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h4" className={classes.sectionTitle}>
        Work Experience
      </Typography>
      {data.jobExperience.map((job) => (
        <JobExperienceCard
          icon={job.icon}
          technologies={job.tech}
          title={job.title}
          company={job.companyName}
          yearsWorked={job.yearRange}
          description={job.desc}
        />
      ))}
    </React.Fragment>
  );
}

function ProjectSection() {
  const classes = useStyles();

  if (data.projects && data.projects.length > 0) {
    return (
      <Box mt={2}>
        <Typography variant="h4" className={classes.sectionTitle}>
          Projects
        </Typography>
        {data.projects.map((project) => (
          <ProjectCard
            title={project.projectName}
            demo_src={project.demo}
            technologies={project.tech}
            description={project.desc}
            link={project.projectLink}
            icon={project.icon}
          />
        ))}
      </Box>
    );
  } else {
    return <React.Fragment />;
  }
}

function RightPanel() {
  return (
    <Box p={2}>
      <JobExperienceSection />
      <ProjectSection />
    </Box>
  );
}

export function NestedGrid() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container style={{ width: "100%" }}>
        <Grid
          container
          item
          justify="center"
          sm={12}
          md={4}
          className={classes.leftPanelGrid}
        >
          <LeftPanel />
        </Grid>
        <Grid container item sm={12} md={8} className={classes.rightPanelGrid}>
          <RightPanel />
        </Grid>
      </Grid>
    </Container>
  );
}

export default function Home() {
  return <NestedGrid />;
}
