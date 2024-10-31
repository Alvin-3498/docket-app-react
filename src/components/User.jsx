import React from 'react'
import searchicon from '../images/search.svg'
import contacticon from '../images/contact.png'
import UploadDocument from '../components/UploadDocument'
import CaseFiles from '../components/CaseFiles'
import StatusUpdation from '../components/StatusUpdation'
import CaseDrafting from '../components/CaseDrafting'
import Drafts from '../components/Drafts'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Login from './Login';


const User = () => {
    return (
        <div>
            
            <div className="user-main">
                <div className="hctr1">
                    <div className="hctr1-left">
                        <h2 className='user-text'>Hi User</h2>
                        <form action="">
                            <input className='searchtext' type="text" name='textsearch' placeholder='Search' />
                        </form>
                        <img className='searchicon' src={searchicon} alt="search" />
                    </div>
                    <div className="hctr1-right">
                        <img className='contacticon' src={contacticon} alt="demo contact icon" />
                    </div>
                </div>
                <div className="vctr">
                    <div className="vctr1">
                        <h2 className='user-hd1'>User Dashboard</h2>

                        <hr className='user-line1' />

                        <div className="userlinks-div">
                            <Link className='user-link' to='upload'>Upload Document</Link><br /><br />
                            <Link className='user-link' to='casefiles'>Case Files</Link><br /><br />
                            <Link className='user-link' to='casedrafting'>Case Drafting</Link><br /><br />
                            <Link className='user-link' to='drafts'>Drafts</Link><br /><br />
                            <Link className='user-link' to='status'>Status Updation</Link><br /><br />
                            
                            
                        </div>
                        <div className='userlinks-div2'>
                            <Link className='user-link' to='/login'>SignOut</Link>
                        </div>
                    </div>
                    <div className="vctr2">
                
                        <Routes>
                            <Route path='upload' element={<UploadDocument/>}/>
                            <Route path='casefiles' element={<CaseFiles/>}/>
                            <Route path='status' element={<StatusUpdation/>}/>
                            <Route path='casedrafting' element={<CaseDrafting/>}/>
                            <Route path='drafts' element={<Drafts/>}/>
                        </Routes>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default User