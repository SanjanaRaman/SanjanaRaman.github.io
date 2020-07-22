import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import SwipeableViews from 'react-swipeable-views';
import Stock from "./projects/Stock";


const styles = {
  tabs: {
    background: 'black',
    color: 'white',
  },
  slide: {
    color: 'white',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
  slide4: {
    backgroundColor: '#6AC0FF',
  },
  slide5: {
    backgroundColor: '#6AC0FF',
  }
};

class ProjectTabs extends React.Component {
  state = {
    index: 0,
  };

  handleChange = (event, value) => {
    this.setState({
      index: value,
    });
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  render() {
    const { index } = this.state;

    return (
      <div className="project-tabs">
        <Tabs value={index} variant="fullWidth" onChange={this.handleChange} style={styles.tabs}>
          <Tab label="tab n°1" />
          <Tab label="tab n°2" />
          <Tab label="tab n°3" />
          <Tab label="project 4" />
          <Tab label="project 5" />

        </Tabs>
        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
          <div style={Object.assign({}, styles.slide)}><Stock /></div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            slide n°2
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
          <div style={Object.assign({}, styles.slide, styles.slide4)}>slide n°3</div>
          <div style={Object.assign({}, styles.slide, styles.slide5)}>slide n°3</div>

        </SwipeableViews>
      </div>
    );
  }
}

export default ProjectTabs;
