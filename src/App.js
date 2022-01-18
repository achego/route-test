import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
// import AddPost from './Screens/AddPost/AddPost';
import Display from './Screens/Display/Display';
import Posts from './Screens/Posts/Posts';
import { Routes, Route } from 'react-router-dom'
import asynComponent from './hoc/asyncComponent';

const AddPost = asynComponent(() => import('./Screens/AddPost/AddPost'))

class App extends Component {

  render() {    
   
    return (
      <BrowserRouter>
        <div className='App'>
          <div>
            <NavBar />
            {/* <Posts /> */}
            {/* <Display /> */}
            {/* <AddPost /> */}
          </div>
          <Routes >
            {/* <Route path='' element={<Posts />} /> */}
            <Route path='posts' element={<Posts />}>
              <Route index element={<Display />} />
              <Route path=':postId' element={<Display />} />
            </Route>
            <Route path='new-post' element={<AddPost />}/>
            <Route path='*' element={<p>Opps something went wrong</p>} />
          </Routes>
        </div>
      </BrowserRouter>
    )

  }
}

export default App;
