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
import axios from 'axios';

const Home = (props) => {
  let { data, loading } = useSelector((s) => s.users)
  const dispatch = useDispatch()
  const [inputUser, setInputUser] = useState('')
  const [query, setQuery] = useState({})
  const [repos, setRepos] = useState()
  const [refetch, setRefetch] = useState();

  useEffect(() => {
    dispatch(GetUsers(query))
  }, [dispatch, query])
  const handleChange = (e) => {
    setInputUser(e.target.value)
    setRefetch(!refetch)
  }
  const HandleClick = (e) => {
    e.preventDefault()
    setQuery(inputUser)
    setRefetch(!refetch)
  }
  async function HandleGetRepo(username) {
    await axios({
      method: 'GET',
      url: `https://api.github.com/users/${username}/repos`,

    }).then((res) => {
      setRepos(res.data)
      setRefetch(!refetch)
    }).catch((err) => {
      console.log(err)
    })
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
                  <button className='btn-search' onClick={HandleClick}><BiSearchAlt size='30px' color='#fbfafa' className='logo-search' /></button>
                </div>
              </form>
              <div className="wrapper-first text-center">
                <div className="text-search">Please Input Username...</div>
                <img src={Searching} alt='searching' width='60%' className='img-search' />
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
                  <button className='btn-search' onClick={HandleClick}><BiSearchAlt size='30px' color='#fbfafa' className='logo-search' /></button>
                </div>
              </form>
              <div className="wrapper-loader">
                {query !== inputUser ? <MyLoader /> : loading ? <MyLoader /> : data.items.length < 1 ?
                  <div className='wrapper-empty text-center'>
                    <div className="text-search">Username Not Found</div>
                    <img src={EmptyState} alt='EmptyState' width='60%' className='empty-logo' />
                  </div> :
                  <div className="wrapper-data">
                    <div className="wrapper-data-user">
                      {data.items.map((dataUser, index) => {
                        return (
                          <div className="wrapper-data-user-detail" key={index}>
                            <img src={dataUser.avatar_url} alt='avatar' className='wrapper-img-avatar' />
                            <div className="wrapper-user-right">
                              <div className="wrapper-name">{dataUser.login}</div>
                              <button className="wrapper-btn-detail" data-bs-toggle="modal" data-bs-target="#modalRepos" onClick={() => HandleGetRepo(dataUser.login)} >Detail repositories</button>
                            </div>
                          </div>
                        )
                      })
                      }
                    </div>
                  </div>}

                {/* MODAL */}
                <div className="modal fade" id="modalRepos" tabindex="-1" aria-labelledby="modalReposLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="modalReposLabel">Repositories</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      {repos?.length < 1 ? <img src={EmptyState} alt='EmptyState' className='empty-logo' /> : <div className="modal-body">
                        {repos?.map((dataRepo, index) => {
                          return (
                            <div className="wrapper-repo" key={index}>
                              <div className="row">
                                <div className="row">
                                  <div className="col-7 col-sm-7 name-repo">
                                    {dataRepo.name}
                                  </div>
                                  <div className="col-5 col-sm-5">
                                    <a className=" btn-repo" href={dataRepo.html_url} role="button" target="_blank" rel="noreferrer">Link Repo</a>
                                  </div>
                                </div>
                              </div>
                              <hr />
                            </div>
                          )
                        })}
                      </div>}

                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
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