import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import ModelComponent from "./../Topic/topicModel";
import "./topic.css";
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 1078
  }
}));

const Topic = props => {
  const classes = useStyles();
  const [topicValue,setTopicValue] = React.useState({name:'',des:''})
  // const [examdesign,setexamDesin] = React.useState({question:''})
  // const [examAnsDesign,setexamAnsDesign] = React.useState({answer1:'',answer2:'',answer3:'',answer:[]})
  const [open, setOpen] = React.useState(false);
  const [openUpdate, setopenUpdate] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpenUpdate = () => {
    setopenUpdate(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseUpdate = () => {
    setopenUpdate(false);
  };
//   const handleAnswerSubmit = (e) => {
// e.preventDefault();
// console.log(examAnsDesign,'submit value successfully')
//   }
  console.log(props.topic);
  const { topic, heading } = props;
  // console.log(topicValue,'updated topic value')
  // console.log(examdesign,'exam desin updated')
  // console.log(examAnsDesign,'examAnsDesign state update')
  return (
    <div>
      <h1 className="topicHead">{heading}</h1>
      {topic.map(item => {
        return (
          <div className="cardStyl">
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    {item.topicName}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={handleOpenUpdate}>
                  Update
                </Button>
                <ModelComponent
                  open={openUpdate}
                  handleClose={handleCloseUpdate}
                  classes={classes}
                />
                {/* <Button size="small" color="primary">
                  Learn More
                </Button> */}
              </CardActions>
            </Card>
          </div>
        );
      })}
      <div className="addTopic">
        <span>
          <b>Add topic</b>
        </span>
        <button className="addBtn" type="button" onClick={handleOpen}>
          +
        </button>
        <ModelComponent
          open={open}
          handleClose={handleClose}
          classes={classes}
          setTopicValue={setTopicValue}
          topicValue={topicValue}
          // setexamDesin={setexamDesin}
          // examdesign={examdesign}
          // examAnsDesign={examAnsDesign}
          // setexamAnsDesign={setexamAnsDesign}
          // handleAnswerSubmit ={handleAnswerSubmit}
        />
      </div>
    </div>
  );
};
const mapStateToprops = () => {
  return {
    heading: "Craete Topic",
    topic: [
      {
        topicName: "humen resources",
        description:
          " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging\
            across all continents except Antarctica fwefwef fwefwef fewf wefefwfe fwef wcdc c sc sc d sc dcs "
      },
      {
        topicName: "resource Managemnt",
        description:
          " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging\
            across all continents except Antarctica fwefwef fwefwef fewf wefefwfe fwef wcdc c sc sc d sc dcs "
      },
      {
        topicName: "resource Managemnt",
        description:
          " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging\
            across all continents except Antarctica fwefwef fwefwef fewf wefefwfe fwef wcdc c sc sc d sc dcs "
      },
      {
        topicName: "human resources",
        description:
          " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging\
            across all continents except Antarctica fwefwef fwefwef fewf wefefwfe fwef wcdc c sc sc d sc dcs "
      },
      {
        topicName: "resource Managemnt",
        description:
          " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging\
            across all continents except Antarctica fwefwef fwefwef fewf wefefwfe fwef wcdc c sc sc d sc dcs "
      },
      {
        topicName: "human resources",
        description:
          " Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging\
            across all continents except Antarctica fwefwef fwefwef fewf wefefwfe fwef wcdc c sc sc d sc dcs "
      }
    ]
  };
};
export default connect(mapStateToprops, null)(Topic);
