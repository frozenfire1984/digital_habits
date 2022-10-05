import React, {useRef} from 'react';
import logo from './logo.svg';
import './App.scss';
import {Player} from './components/Player/'
import {Table} from "./components/Table/Table";
import {TableBody} from "./components/Table/TableBody";
import {TableHead} from "./components/Table/TableHead";
import {TableRow} from "./components/Table/TableRow";
import {TableCell} from "./components/Table/TableCell";

function App() {
  
 
  
  return (
    <div className="App">
      <div className="player-wrapper">
        <Player
          video_url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          preview_url="https://placeimg.com/640/480/any"
        />
        {/*<Table>
          <TableHead>
            <TableRow>
              <TableCell>
                name
              </TableCell>
              <TableCell>
                last name
              </TableCell>
              <TableCell>
                rating
              </TableCell>
            </TableRow>
          </TableHead>
          
          <TableBody>
            <TableRow>
              <TableCell ref={tdRef} onClick={() => console.log("test")}>
                John
              </TableCell>
              <TableCell>
                Jones
              </TableCell>
              <TableCell>
                5
              </TableCell>
            </TableRow>
  
            <TableRow>
              <TableCell>
                John
              </TableCell>
              <TableCell>
                Jones
              </TableCell>
              <TableCell>
                5
              </TableCell>
            </TableRow>
            
            
          </TableBody>
        
        </Table>*/}
        
      </div>
    </div>
  );
}

export default App;
