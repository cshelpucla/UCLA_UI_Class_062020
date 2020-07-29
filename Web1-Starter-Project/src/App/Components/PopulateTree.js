import React from "react";
import ReactDOM from "react-dom";

import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PropTypes from 'prop-types';

import { fade, makeStyles, withStyles } from '@material-ui/core/styles';

import MailIcon from '@material-ui/icons/Mail';
import BookIcon from '@material-ui/icons/Book';
import HouseIcon from '@material-ui/icons/House';
import GardenIcon from '@material-ui/icons/Flare';
import HammerIcon from '@material-ui/icons/Devices';
import StoryIcon from '@material-ui/icons/ChromeReaderMode';
import MusicIcon from '@material-ui/icons/SurroundSound';
import SettingsIcon from '@material-ui/icons/Settings';
import CalendarIcon from '@material-ui/icons/Schedule';

import styled from 'styled-components'

import { TreeViewItems } from "../Data/TreeViewItems";
import { MinusSquare, PlusSquare, CloseSquare, TransitionComponent}  from "./SvgIcons";

TransitionComponent.propTypes = {
  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,
};

const StyledTreeItem = withStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 400,
    textAlign: "left" 
  },
  iconContainer: {
    '& .close': {
      opacity: 0.3,
    },      
  },    
  group: {
    marginLeft: 7,
    paddingLeft: 8,
    borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`,    
    textAlign: "left" 
  }, 
  
}))((props) => <TreeItem {...props} TransitionComponent={TransitionComponent} />);


const getTreeItemsFromData = treeItems => {
  return treeItems.map(treeItemData => {
    let children = undefined;
    if (treeItemData.children && treeItemData.children.length > 0) {
      children = getTreeItemsFromData(treeItemData.children);
    }
    return (
      <StyledTreeItem
        key={treeItemData.id}
        nodeId={treeItemData.id}
        label={<><IconGet data={treeItemData}/>{treeItemData.name}</>}
        children={children}
        onClick={(e) =>{console.log (e.currentTarget)}}
      />
    );
  });
};

const IconGet = ({ props }) => {
  /*const { labelIcon: LabelIcon, labelInfo, ...other } = props;*/
  return (
    <MailIcon />
  );
};


const DataTreeView = ({ treeItems }) => {
  return (
    <TreeView
      defaultCollapseIcon={<MinusSquare />}
      defaultExpandIcon={<PlusSquare />}
      defaultEndIcon={<CloseSquare />}
      defaultExpanded={["1"]}
      onNodeToggle={console.log("change this")}
    >
      {getTreeItemsFromData(treeItems)}
    </TreeView>
  );
};

export default function PopulateTree() {
  return (
    <PopulateTreeStyled>
      <DataTreeView treeItems={TreeViewItems} />
    </PopulateTreeStyled>
  );
}

const PopulateTreeStyled = styled.div`
    min-height: 100%; 
    min-width: 100%; 
    margin-top: 0.5em;
    margin-left: 0.5em;
    margin-right: 0.5em;
    margin-bottom: 0.5em;
`;
