import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import data from '../data';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SchoolIcon from '@material-ui/icons/School';
import Paper from '@material-ui/core/Paper';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px"
  },
  experiencePanel: {
    width: '100%',
    boxSizing: 'border-box'
  },
  sectionTitle: {
    textDecoration: "underline"
  },
  rightPanelGrid: {
    // Subtract appbar height and fill page
    maxHeight: "calc(100vh - 48px)",
    overflow: "scroll"
  },
  leftPanelGrid: {
    backgroundColor: '#03a9f4',
    color: "white",
    // Subtract appbar height and fill page
    height: "calc(100vh - 48px)"
  },
  fullName: {
    fontWeight: 500
  },
  avatar: {
    boxShadow: theme.shadows[4],
    width: 250,
    height: 250,
    '& img' : {
      objectPosition: "0 10%"
    }
  },
}));

function AboutMeItem({Icon, text}) {
  return (
    <Box mt={2} display="flex" alignItems="center">
      <Icon />
      <Box ml={1}>
        <Typography variant="h6" style={{fontWeight: "300"}}>{text}</Typography>
      </Box>
    </Box>
  )
}

function LeftPanel() {
  const classes = useStyles();

  return (
    <Box className={classes.leftPanel}>
      <Box display="flex" m={2} justifyContent="center" alignItems="center" flexDirection="column">
        <Avatar alt={data.name} src={data.avatarImg} className={classes.avatar} />
        <Box mt={1}>
          <Typography variant="h4" className={classes.fullName}>{data.name}</Typography>
          <Box display="flex" justifyContent="center">
            <Typography variant="subtitle1" >{data.jobTitle}</Typography>
          </Box>
        </Box>
      </Box>
      <AboutMeItem Icon={PhoneAndroidIcon} text={data.phoneNumber}/>
      <AboutMeItem Icon={MailOutlineIcon} text={data.email}/>
      <AboutMeItem Icon={SchoolIcon} text={data.school}/>
    </Box>
  )
}

function JobExperienceCard({title, company, yearsWorked, description}) {
  const classes = useStyles();

  return (
    <Box xs={12} className={classes.experiencePanel} mt={2}>
      <Paper elevation={3}>
        <Box p={2}>
          <Box display="flex" >
            <Box flex="1">
              <Typography variant="h5">{company}</Typography>
            </Box>
            <Box>
            <Typography variant="caption">{yearsWorked}</Typography>
            </Box>
          </Box>
          <Typography variant="subtitle1">{title}</Typography>
          <Typography variant="body2">{description}</Typography>
        </Box>
      </Paper>
    </Box>
  )
}

function ProjectCard({title, link, description}) {
  const classes = useStyles();

  return (
    <Box xs={12} className={classes.experiencePanel} mt={2}>
      <Link href={link} target="_blank">
        <Paper elevation={3}>
          <Box p={2}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="body2">{description}</Typography>
          </Box>
        </Paper>
      </Link>
    </Box>
  )
}

function JobExperienceSection() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h4" className={classes.sectionTitle}>Work Experience</Typography>
      {
        data.jobExperience.map((job) => (
          <JobExperienceCard title={job.title} company={job.companyName} yearsWorked={job.yearRange} description={job.desc}/>
        ))
      }
    </React.Fragment>
  )
}

function ProjectSection() {
  const classes = useStyles();

  if (data.projects && data.projects.length > 0) {
    return (
      <Box mt={2}>
        <Typography variant="h4" className={classes.sectionTitle}>Projects</Typography>
        {
          data.projects.map((project) => (
            <ProjectCard title={project.projectName} description={project.desc} link={project.projectLink}/>
          ))
        }
      </Box>
    );
  } else {
    return <React.Fragment/>;
  }
}

function RightPanel() {
  return (
    <Box p={2}>
      <JobExperienceSection/>
      <ProjectSection/>
    </Box>
  )
}

export function NestedGrid() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container style={{width: "100%"}}>
        <Grid container item justify="center" xs={12} sm={4} className={classes.leftPanelGrid}>
          <LeftPanel />
        </Grid>
        <Grid container item xs={12} sm={8} className={classes.rightPanelGrid}>
          <RightPanel />
        </Grid>
      </Grid>
    </Container>
  );
}



export default function Home() {
	return (
    <NestedGrid/>
	)
}