import React, {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faEdit, faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import SignedInHeader from './headers/SignedInHeader';
import {connect} from 'react-redux';
import '../styles/posts.css';
import gif from '../img/gif.gif';
import placeholder from '../img/placeholder.png';
import MakeAPost from './MakeAPost';
import EditAPost from './EditAPost';
import Comments from './Comments';
import {getPosts} from '../store/actions/postsActions';

var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

function Posts({getPosts, posts}) {
    const commentIcon = <FontAwesomeIcon icon={faComment} />
    const editIcon = <FontAwesomeIcon icon={faEdit} />
    const deleteIcon = <FontAwesomeIcon icon={faTrash} />
    const WriteIcon = <FontAwesomeIcon icon={faPenSquare} />

    const [showPostModal, setShowPostModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [openCommentsDrawer, setOpenCommentsDrawer] = useState(false);

    const handleShowPostModal = () => {
        setShowPostModal(true)
    }

    const handleHidePostModal = () => {
        setShowPostModal(false)
    }

    const handleShowEditModal = () => {
        setShowEditModal(true)
    }

    const handleHideEditModal = () => {
        setShowEditModal(false)
    }

    const handleOpenDrawer = () => {
        setOpenCommentsDrawer(true)
    }

    const handleCloseDrawer = () => {
        setOpenCommentsDrawer(false)
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div>
            <header>
                <SignedInHeader />
            </header>
            <section className="posts-container">
              <div className="posts-wrapper">
                <div className="make-post">
                    <p className="icon" onClick={handleShowPostModal}>
                        {WriteIcon}
                    </p>
                    <p>Make a post</p>    
                </div>
                {posts && posts.length > 0 
                ?
                    posts.map((val) => {
                        return (
                            <div key={val.id}>
                                <div className="post-owners-div">
                        <div className="flexed-post-container">
                        <div className="img-placeholder">
                            <img src={placeholder} alt="display pic"/>
                        </div>
                        <div className="flexed-name-div">
                            <div className="name-time">
                                <h6>{val.firstname + " " + val.lastname}</h6>
                                <p>
                                    <span>{dayjs(val.createdat).fromNow()}</span>
                                    
                                    <span>{val.jobrole}</span>
                                </p>
                            </div>
                            <div className="del-edit">
                                <p onClick={handleShowEditModal}>
                                    {editIcon}
                                </p>
                                <p>
                                    {deleteIcon}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="user-post">
                            <div className="post-section">
                                
                                <div className="post">
                                    <p>{val.title}</p>
                                    <p>{val.article}</p>
                                </div>
                                <div className="gif">
                                    <img src={val.git ? val.gif : gif} alt="gif" />
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
                        )
                    })
                :
                <p>No Posts yet</p>    
                }
               
                
                </div>
            </section>
            <MakeAPost showPostModal={showPostModal} handleClosePostModal={handleHidePostModal}/>
            <EditAPost showEditModal={showEditModal} handleCloseEditModal={handleHideEditModal}/>
            <Comments open={openCommentsDrawer} handleClose={handleCloseDrawer}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    console.log(state.posts.postsData);
    return {
        posts: state.posts.postsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: (entry) => dispatch(getPosts(entry))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
