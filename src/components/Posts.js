import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faEdit, faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import SignedInHeader from './headers/SignedInHeader';
import '../styles/posts.css';
import gif from '../img/gif.gif';
import placeholder from '../img/placeholder.png';
import MakeAPost from './MakeAPost';
import EditAPost from './EditAPost';
import Comments from './Comments';

function Posts() {
    const commentIcon = <FontAwesomeIcon icon={faComment} />
    const editIcon = <FontAwesomeIcon icon={faEdit} />
    const deleteIcon = <FontAwesomeIcon icon={faTrash} />
    const WriteIcon = <FontAwesomeIcon icon={faPenSquare} />

    const [showModal, setShowModal] = useState(false);
    const [openCommentsDrawer, setOpenCommentsDrawer] = useState(false);

    const handleShowModal = () => {
        setShowModal(true)
    }

    const handleHideModal = () => {
        setShowModal(false)
    }

    const handleOpenDrawer = () => {
        setOpenCommentsDrawer(true)
    }

    const handleCloseDrawer = () => {
        setOpenCommentsDrawer(false)
    }

    return (
        <div>
            <header>
                <SignedInHeader />
            </header>
            <section className="posts-container">
              <div className="posts-wrapper">
                <div className="make-post">
                    <p className="icon" onClick={handleShowModal}>
                        {WriteIcon}
                    </p>
                    <p>Make a post</p>    
                </div>
               <div className="post-owners-div">
                    <div className="flexed-post-container">
                        <div className="img-placeholder">
                            <img src={placeholder} alt="display pic"/>
                        </div>
                        <div className="user-post">
                            <div className="post-section">
                                <div className="flexed-name-div">
                                    <div className="name-time">
                                        <h6>Umeh Chiamaka</h6>
                                        <p>1 hour ago</p>
                                    </div>
                                    <div className="del-edit">
                                        <p onClick={showModal}>
                                            {editIcon}
                                        </p>
                                        <p>
                                            {deleteIcon}
                                        </p>
                                    </div>
                                </div>
                                <div className="post">
                                    <p>Unresonsiveness</p>
                                    <p>Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo perferendis quos provident delectus ducimus necessitatibus reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel odio?</p>
                                </div>
                                <div className="gif">
                                    <img src={gif} alt="gif" />
                                </div>
                                <div className="post-comment">
                                    <p onClick={handleOpenDrawer}>
                                        {commentIcon}
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="non-post-div">
                    <div className="flexed-post-container">
                        <div className="img-placeholder">
                            <img src={placeholder} alt="display pic"/>
                        </div>
                        <div className="user-post">
                            <div className="post-section">
                                <div className="flexed-name-div">
                                    <div className="name-time">
                                        <h6>Umeh Chiamaka</h6>
                                        <p>1 hour ago</p>
                                    </div>
                                </div>
                                <div className="post">
                                    <p>Unresonsiveness</p>
                                    <p>Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo perferendis quos provident delectus ducimus necessitatibus reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel odio?</p>
                                </div>
                                <div className="gif">
                                    <img src={gif} alt="gif" />
                                </div>
                                <div className="post-comment">
                                    <p>
                                    {commentIcon}
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
               </div>
            </section>
            <MakeAPost show={showModal} handleClose={handleHideModal}/>
            <EditAPost show={showModal} handleClose={handleHideModal}/>
            <Comments open={openCommentsDrawer} handleClose={handleCloseDrawer}/>
        </div>
    )
}

export default Posts
