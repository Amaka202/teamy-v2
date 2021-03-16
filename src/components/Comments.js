import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { Drawer, Divider, Loader, Alert } from 'rsuite';
import { useForm } from "react-hook-form";
import {useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux';
import {getComments, createComment} from '../store/actions/commentsActions';
import gif from '../img/gif.gif';
import placeholder from '../img/placeholder.png';
import '../styles/comments.css';
import useQuerry from './helpers/useQuerry';

var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

function Comments({ getComments, commentsData, posts, createComment}) { 
const { register, handleSubmit, errors, reset } = useForm();
const [openCommentsDrawer, setOpenCommentsDrawer] = useState(false);
const [loading, setLoading] = useState(true);
const history = useHistory()
let query = useQuerry()
let commentId = query.get('commentId')

const sendCommentIcon = <FontAwesomeIcon icon={faPaperPlane} />

const onSubmit = data => {
    createComment(commentId, data)
    reset()
};

let individualPost = posts.postsData && posts.postsData.filter(val => val.id === commentId)
individualPost = posts.postsData && individualPost[0];
const handleOpenDrawer = () => {
    setOpenCommentsDrawer(true)
}

const handleCloseDrawer = () => {
    history.push('/posts')
    setOpenCommentsDrawer(false)
}

    useEffect(() => {
        if(commentsData.getCommentsSuccessTime){
            setLoading(false)
        }
    }, [commentsData.getCommentsSuccessTime])

    useEffect(() => {
        if(commentId ){
            handleOpenDrawer();
            getComments(commentId)
        }else{
            handleCloseDrawer();
        }

    }, [commentId ])

    useEffect(() => {
        if( commentsData.postCommentsSuccessTime){
            getComments(commentId)
        }
    }, [commentsData.postCommentsSuccessTime])

   return (
        <div>
            <Drawer
                full
                size={'xs'}
                placement={'bottom'}
                show={openCommentsDrawer}
                className="drawer"
                onHide={handleCloseDrawer}
            >
                <Drawer.Header></Drawer.Header>
                <Drawer.Body className="drawer-body">
                    <div className="comments-container">
                        <h5>Thread</h5>
                        <div className="post-owners-div">
                    <div className="flexed-post-container">
                        <div className="img-placeholder">
                            <img src={placeholder} alt="display pic"/>
                        </div>
                        <div className="flexed-name-div">
                            <div className="name-time">
                                <h6>{individualPost && individualPost.firstname + " " + individualPost.lastname}</h6>
                                <p>{individualPost && dayjs(individualPost.createdat).fromNow()}</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="user-post">
                            <div className="post-section">
                                
                                <div className="post">
                                    <p>{individualPost && individualPost.title}</p>
                                    <p>{individualPost && individualPost.article}</p>
                                </div>
                                <div className="gif">
                                    <img src={individualPost && individualPost.gif ? individualPost.gif : gif} alt="gif" />
                                </div>
                            </div>
                            
                        </div>
                </div>
                    <Divider>Comments</Divider>
                    <div className="comments-wrapper">
                    {commentsData.commentsData && commentsData.commentsData.length > 0 
                    ?
                    commentsData.commentsData.map(comment => {
                        return (
                            <div className="post-owners-div">
                    <div className="flexed-post-container">
                        <div className="img-placeholder">
                            <img src={placeholder} alt="display pic"/>
                        </div>
                        <div className="flexed-name-div">
                            <div className="name-time">
                                <h6>{comment.firstname + " " + comment.lastname}</h6>
                                <p>{dayjs(comment.createdat).fromNow()}</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="user-post">
                            <div className="post-section">
                                
                                <div className="comment">
                                    <p>{comment.comment}</p>
                                </div>
                            </div>                
                        </div>
                        </div>
                        )
                    })
                    :
                    <p>No Comments yet</p>
                }
                    </div>
                    <div className="make-a-comment">
                    <form onSubmit={handleSubmit(onSubmit)} className="input-form">
                        <div className="comment-input">

                            <input name="comment" placeholder="Comment" 
                                ref={
                                    register({
                                    required: 'This field is required'
                                    })
                                }
                            />
                            {errors.title && <span>{errors.title.message}</span>}
                            <div className="send-comment-icon">
                                <button>
                                {sendCommentIcon}

                                </button>
                            </div>
                        </div>
                    </form>

                    </div>
                    {loading && <Loader speed="fast" center backdrop content="" />}

                    </div>
                </Drawer.Body> 
            </Drawer>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        commentsData: state.comments,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getComments: (postId) => dispatch(getComments(postId)),
        createComment: (postId, comment) => dispatch(createComment(postId, comment))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Comments);