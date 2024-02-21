import * as React from 'react';
import { Box, ThemeProvider, Typography, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView, TreeItem } from '@mui/x-tree-view';
import { Link, Outlet } from "react-router-dom";
import './App.css';
import sftheme from './sftheme';
import styled from '@emotion/styled';

const StLink = styled(Link)`
  :any-link {
    color: ${props => props.theme.palette.secondary.main};
    text-decoration: none;
    display: inline-block;
    width: 100%;
  }
`;

function App() {
  return (
    <ThemeProvider theme={sftheme()}>
     
      <Box sx={{ flexGrow: 1, color: 'primary.main' }} className="App">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <TreeView
              aria-label="menu navigator"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              sx={{ flexGrow: 1, overflowY: 'auto' }}
            >
              <TreeItem nodeId="convention" label={<Typography><StLink to={`convention`}>About Convention</StLink></Typography>} />
              <TreeItem nodeId="sanfrancisco" label={<StLink to={`sanfrancisco`}>About San Francisco</StLink>} />
              <TreeItem nodeId="callers" label={<StLink to={`callers`}>Callers</StLink>} />
              <TreeItem nodeId="hotel" label={<StLink to={`hotel`}>Marriott: Hotel</StLink>} />
              <TreeItem nodeId="venue" label={<StLink to={`venue`}>Marriott: Venue</StLink>} />
            </TreeView>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
