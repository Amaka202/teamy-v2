import React, {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import { Link } from "react-router-dom";
import { Loader } from 'rsuite';
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
import useQuerry from './helpers/useQuerry';
import { getUser } from '../store/actions/userActions';

var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

function Posts({getPosts, posts, getPostsSuccessTime, getUser, user}) {
    const commentIcon = <FontAwesomeIcon icon={faComment} />
    const editIcon = <FontAwesomeIcon icon={faEdit} />
    const deleteIcon = <FontAwesomeIcon icon={faTrash} />
    const WriteIcon = <FontAwesomeIcon icon={faPenSquare} />

    let query = useQuerry();
    const [loading, setLoading] = useState(true)
    const [showPostModal, setShowPostModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);


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

    useEffect(() => {
        getPosts()
        getUser()
    }, [])

    useEffect(() => {
        if(getPostsSuccessTime){
            setLoading(false)
        }
    })

    if(loading){
        <Loader backdrop content="loading..." vertical />
    }

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
                {posts.postsData && posts.postsData.length > 0 
                ?
                    posts.postsData.map((val) => {
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
                            {user.userData && val.user_id === user.userData[0].id 
                            &&
                            <div className="del-edit">
                                <p onClick={handleShowEditModal}>
                                    {editIcon}
                                </p>
                                <p>
                                    {deleteIcon}
                                </p>
                            </div>
                            }
                        </div>
                    </div>
                    <div className="user-post">
                            <div className="post-section">
                                
                                <div className="post">
                                    <p>{val.title}</p>
                                    <p>{val.article}</p>
                                </div>
                                <div className="gif">
                                    <img src={val.gif ? val.gif : gif} alt="gif" />
                                </div>
                                <div className="post-comment">
                                    <Link to={`/posts?commentId=${val.id}`}>
                                        <p >
                                            {commentIcon}
                                        </p>
                                    </Link>
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
            <Comments postId={query.get('id')}/>
            {loading && <Loader speed="fast" center backdrop content="" />}

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        user: state.user,
        getPostsSuccessTime: state.posts.getPostsSuccessTime
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: (entry) => dispatch(getPosts(entry)),
        getUser: (entry) => dispatch(getUser(entry))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
