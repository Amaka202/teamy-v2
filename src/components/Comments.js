import React from 'react'
import { Drawer, Divider } from 'rsuite';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import gif from '../img/gif.gif';
import placeholder from '../img/placeholder.png';
import '../styles/comments.css';

function Comments({open, handleClose}) { const { register, handleSubmit, errors } = useForm();
const sendCommentIcon = <FontAwesomeIcon icon={faPaperPlane} />

const onSubmit = data => {
    console.log(data);
};
    return (
        <div>
            <Drawer
                full
                size={'xs'}
                placement={'bottom'}
                show={open}
                className="drawer"
                onHide={handleClose}
            >
                <Drawer.Header></Drawer.Header>
                <Drawer.Body className="drawer-body">
                    <div className="comments-container">
                        <h5>Umeh Chiamaka's Post</h5>
                        <div className="post-owners-div">
                    <div className="flexed-post-container">
                        <div className="img-placeholder">
                            <img src={placeholder} alt="display pic"/>
                        </div>
                        <div className="flexed-name-div">
                            <div className="name-time">
                                <h6>Umeh Chiamaka</h6>
                                <p>1 hour ago</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="user-post">
                            <div className="post-section">
                                
                                <div className="post">
                                    <p>Unresonsiveness</p>
                                    <p>Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo perferendis quos provident delectus ducimus necessitatibus reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel odio?</p>
                                </div>
                                <div className="gif">
                                    <img src={gif} alt="gif" />
                                </div>
                            </div>
                            
                        </div>
                </div>
                    <Divider>Comments</Divider>
                    <div className="comments-wrapper">
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
                                <div className="comment">
                                    <p>Consequatur rerum amet fuga expedita sunt et tempora saepe? </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                    <div className="make-a-comment">
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
                                {sendCommentIcon}
                            </div>
                        </div>
                    </div>
                    </div>
                </Drawer.Body> 
            </Drawer>
        </div>
    )
}

export default Comments
