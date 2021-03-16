import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Button, Divider } from 'rsuite';
import { Modal } from 'antd';
import {connect} from 'react-redux';
import {createPost} from '../store/actions/postsActions';


function MakeAPost(props) {
    const { register, handleSubmit, errors } = useForm();
    const [loading, setLoading] = useState(false);
    const {showPostModal, handleClosePostModal, createPost, posts} = props;
    const onSubmit = data => {
        setLoading(true)
        createPost(data)
    };

    useEffect(() => {
        if(posts.createPostSuccessTime){
            setLoading(false)
            handleClosePostModal()
        }
    }, [posts.createPostSuccessTime])
    
    return (
        <div>
            <Modal
          visible={showPostModal}
          title="Make a Post"
          onOk={handleClosePostModal}
          onCancel={handleClosePostModal}
          footer={[
            <p onClick={handleClosePostModal}>Cancel</p>           
            ]}
            >
                <div>
                <form onSubmit={handleSubmit(onSubmit)} className="input-form">
                
                
                <div className="form-field">
                    
                    <input name="title" placeholder="Post Title" 
                        ref={
                            register({
                              required: 'This field is required'
                            })
                          }
                    />
                    {errors.title && <span>{errors.title.message}</span>}
                </div>
                <div className="form-field">
                    <textarea name="article" placeholder="Post" 
                        ref={
                            register({
                              required: 'This field is required'
                            })
                          }
                    />
                    {errors.article && <span>{errors.article.message}</span>}

                </div>
                <Divider />
                <div className="auth-btn">
                    <Button className="primary-btn" type="submit" loading={loading}>POST</Button>
                </div>
            </form>
                </div>
            </Modal>

        </div>
    )
}
 
const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (postData) => dispatch(createPost(postData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MakeAPost);
