
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
//import 'bootstrap/dist/css/bootsrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './component/Sidebar'
import Createpost from './component/Createpost'
import Postlist from './component/Postlist'
import { useState } from 'react'
import PostListProvider from './store/post-list-store'
//import Post from './component/Post'
function App() {

  const [selectedTab, setSelectedTab] = useState("Create post");
  return (
    <PostListProvider>
      <div className="container-div">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? (
            <Postlist></Postlist>
          ) : (
            <Createpost></Createpost>
          )}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  )
}

export default App;
