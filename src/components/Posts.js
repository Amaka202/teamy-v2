import React, {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import { Link } from "react-router-dom";
import { Alert, Loader, Badge } from 'rsuite';
import { Popconfirm } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faEdit, faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import SignedInHeader from './headers/SignedInHeader';
import {connect} from 'react-redux';
import '../styles/posts.css';
import gif from '../img/gif.gif';
import MakeAPost from './MakeAPost';
import EditAPost from './EditAPost';
import Comments from './Comments';

import {getPosts, deletePost} from '../store/actions/postsActions';
import {getComments} from '../store/actions/commentsActions';

import useQuerry from './helpers/useQuerry';
import { getUser } from '../store/actions/userActions';
import { InitialsAvatar } from './InitialsAvatar';
import MyFooter from './MyFooter';

var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

function Posts({getPosts, posts, getPostsSuccessTime, getUser, user, deletePost, getComments, getPostsErrorTime, commentsData}) {
    const commentIcon = <FontAwesomeIcon icon={faComment} />
    const editIcon = <FontAwesomeIcon icon={faEdit} />
    const deleteIcon = <FontAwesomeIcon icon={faTrash} />
    const WriteIcon = <FontAwesomeIcon icon={faPenSquare} />

    let query = useQuerry();
    const [loading, setLoading] = useState(true)
    const [showPostModal, setShowPostModal] = useState(false);


    const handleShowPostModal = () => {
        setShowPostModal(true)
    }

    const handleHidePostModal = () => {
        setShowPostModal(false)
    }

    const handlePostDelete = (postId) => {
        deletePost(postId)
    }

    const handlecancel = () => { 
        return;
    }

    const commentsLength = (id) => {
        getComments(id)
    }

    useEffect(() => {
        getPosts()
        getUser()
    }, [posts.createPostSuccessTime, posts.editPostSuccessTime, posts.deletePostSuccessTime, commentsData.postCommentsSuccessTime])

    useEffect(() => {
        if(getPostsSuccessTime || getPostsErrorTime){
            setLoading(false)
        }
    }, [getPostsSuccessTime, getPostsErrorTime])

    useEffect(() => {
        if(getPostsErrorTime){
            setLoading(false)
            Alert.error('Server error', 5000)
        }
    }, [ getPostsErrorTime])

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
                        <InitialsAvatar letter={val.firstname + " " + val.lastname} rounded={true} />
                            {/* <img src={placeholder} alt="display pic"/> */}
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
                                <Link to={`/posts?editId=${val.id}`}>
                                    <p >
                                        {editIcon}
                                    </p>
                                 </Link>
                                <p>
                                    <Popconfirm
                                        title="Are you sure to delete this post?"
                                        onConfirm={() => handlePostDelete(val.id)}
                                        onCancel={handlecancel}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <a href="#">
                                            <div style={{color: '#959595'}}>
                                            {deleteIcon}
                                            </div>
                                        </a>
                                    </Popconfirm>
                                </p>
                            </div>
                            }
                        </div>
                    </div>
                    <div className="user-post">
                            <div className="post-section">
                                
                                <div className="post">
                                    <p>{val.title}
                                    </p>
                                    <p>{val.article}
                                    <span> {val.isedited && "edited"}</span>
                                    
                                    </p>
                                    
                                </div>
                                <div className="gif">
                                    {/* <img src={val.gif ? val.gif : gif} alt="gif" /> */}
                                </div>
                                <div className="post-comment">
                                    <Link to={`/posts?commentId=${val.id}`}>
                                        <Badge content={val.comment_count}>
                                            
                                            <p > 
                                                {commentIcon}
                                            </p>

                                        </Badge>
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
            <EditAPost postId={query.get('id')}/>
            <Comments postId={query.get('id')}/>
            {loading && <Loader speed="fast" center backdrop content="" />}
            <MyFooter />
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state.posts);
    return {
        posts: state.posts,
        user: state.user,
        getPostsSuccessTime: state.posts.getPostsSuccessTime,
        getPostsErrorTime: state.posts.getPostsErrorTime,
        commentsData: state.comments,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => dispatch(getPosts()),
        getUser: () => dispatch(getUser()),
        getComments: (postId) => dispatch(getComments(postId)),
        deletePost: (postId) => dispatch(deletePost(postId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
