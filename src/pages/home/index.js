import React, { useEffect } from 'react';
import Metatags from '../../components/Metatags';
import './index.css'
import Searching from '../../assets/Web-search-cuate.png'
import { BiSearchAlt } from 'react-icons/bi'
import MyLoader from '../../components/MyLoader';
import EmptyState from '../../assets/No-data-cuate.png'
import { useDispatch, useSelector } from 'react-redux';
import GetUsers from '../../redux/actions/users'
import { useState } from 'react';
// import GetRepo from '../../redux/actions/repo'
// import { useNavigate } from 'react-router-dom';
// import BeforeInput from '../../components/BeforeInput';

const Home = (props) => {
  let { data, loading } = useSelector((s) => s.users)
  // let { repo } = useSelector((s) => s.repo)
  const dispatch = useDispatch()
  const [inputUser, setInputUser] = useState('')
  const [query, setQuery] = useState({})
  // const [username, setUsername] = useState('')
  const [Refetch, setRefetch] = useState();
  // const navigate = useNavigate()

  useEffect(() => {
    dispatch(GetUsers(query))
    // dispatch(GetRepo(username))
  }, [dispatch, query])
  const handleChange = (e) => {
    setInputUser(e.target.value)
    setRefetch(true)
  }
  const HandleClick = (e) => {
    e.preventDefault()
    setQuery(inputUser)
    setRefetch(true)
  }

  switch (!inputUser) {
    case true:
      return (
        <>
          <Metatags title={'Home'} />
          <main>
            <section>
              <div className='wrapper-header'>
                <div className='text-header'>Github Repositories Explorer</div>
              </div>
              <form className="wrapper-search">
                <input action="text" placeholder="Search Username..." className='input-form' onChange={handleChange} />
                <div className='wrapper-btn-search'>
                  <button className='btn-search' onClick={HandleClick}><BiSearchAlt size='30px' color='#fbfafa' /></button>
                </div>
              </form>
              <div className="wrapper-first text-center">
                <div className="text-search">Please Input Username...</div>
                <img src={Searching} alt='searching' width='60%' />
              </div>
            </section>
          </main>
        </>
      )
      break;
    case false:
      return (
        <>
          <Metatags title={'Home'} />
          <main>
            <section>
              <div className='wrapper-header'>
                <div className='text-header'>Github Repositories Explorer</div>
              </div>
              <form className="wrapper-search">
                <input action="text" placeholder="Search Username..." className='input-form' onChange={handleChange} />
                <div className='wrapper-btn-search'>
                  <button className='btn-search' onClick={HandleClick}><BiSearchAlt size='30px' color='#fbfafa' /></button>
                </div>
              </form>
              <div className="wrapper-loader">
                {query !== inputUser ? <MyLoader /> : loading ? <MyLoader /> : data.items.length < 1 ?
                  <div className='wrapper-empty text-center'>
                    <div className="text-search">Username Not Found</div>
                    <img src={EmptyState} alt='EmptyState' width='60%' />
                  </div> :
                  <div className="wrapper-data">
                    <div className="wrapper-data-user">
                      {data.items.map((dataUser, index) => {

                        return (
                          <div className="wrapper-data-user-detail" key={index}>
                            <img src={dataUser.avatar_url} alt='avatar' className='wrapper-img-avatar' />
                            <div className="wrapper-user-right">
                              <div className="wrapper-name">{dataUser.login}</div>
                              <button className="wrapper-btn-detail" value={dataUser.repos_url} >Detail repositories</button>
                            </div>
                          </div>

                        )
                      })

                      }
                    </div>


                  </div>}

              </div>
            </section>
          </main>
        </>
      )
      break;
    default:
      return null;
  }
}


export default Home