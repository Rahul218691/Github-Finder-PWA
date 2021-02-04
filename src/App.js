import React,{useEffect,useState} from 'react'
import {Nav,Search,Profile,Repos,Paginate} from './components';
import {Container,Row,Col} from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux';
import {getUserDetails} from './actions/GitActions';
import './App.css';

const App = () =>{

  const {userInfo} = useSelector(state=>state.userDetails);
   const {repos} = useSelector(state=>state.userRepo);
   const [currentPage,setCurrentPage] = useState(1);
   const [reposPerPage] = useState(8);
   const [dark,setDark] = useState(true);

   const onUpdate = () =>{
      setDark(!dark)
      // console.log(dark)
   }

  const dispatch = useDispatch();

  useEffect(() => {
      if(localStorage.getItem('GitUser')){
          dispatch(getUserDetails(localStorage.getItem('GitUser')));
      }
  }, [dispatch])

  const indexOfLastPost = currentPage * reposPerPage;
  const indexOfFirstPost = indexOfLastPost - reposPerPage;
  const currentRepo = repos !== undefined ? repos.slice(indexOfFirstPost,indexOfLastPost) : [];

  // console.log(currentRepo);

  const paginate = (pageNumber) =>{
    setCurrentPage(pageNumber)
  }

  return (
    <div>
        <Nav dark={dark} onUpdate={onUpdate}/>
       <div className={dark ? 'dark-theme' : 'light-theme'}>
       <Container fluid="md">
            <Row>
             <Col md="2"></Col>
             <Col md="8"><Search /></Col>
             <Col md="2"></Col>
            </Row>
            <Row>
              <Col md="4">
                   <Profile />
                  {userInfo &&  <hr />}
              </Col>
              <Col md="8">
                 <Repos repos={currentRepo}/>
              </Col>
            </Row>
       </Container>
       {
         repos !== undefined  ? (
          <Container fluid="md">
          <Row>
             <Col md="4"></Col>
             <Col md="8" className="paginate-div">
                 <Paginate reposPerPage={reposPerPage} totalRepos={repos !== undefined ? repos.length : 0} paginate={paginate}/>
             </Col>
           </Row>
      </Container>
         ) :null 
       }
       {/* <Container fluid>
          <Row>
            <Col>
            <Footer />
            </Col>
          </Row>
       </Container> */}
       </div>
    </div>
  );
}

export default App;
