import React, {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import { Button, Divider } from 'rsuite';
import { Modal } from 'antd';
import {useHistory} from 'react-router-dom';

import {connect} from 'react-redux';
import {editPost} from '../store/actions/postsActions';
import useQuerry from './helpers/useQuerry';

function EditAPost(props) { 
    const { register, handleSubmit, errors, reset } = useForm();
    let query = useQuerry();
    const history = useHistory()

    let editId = query.get('editId');
    const {  editPost, posts} = props;
    const [showEditModal, setShowEditModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const postToEdit = editId && posts.postsData.filter(val => val.id === editId)
    
    const onSubmit = data => {
        setLoading(true)
        editPost(editId, data)
        reset()
    };

    const handleShowEditModal = () => {
        setShowEditModal(true)
    }

    const handleHideEditModal = () => {
        history.push('/posts')
        setShowEditModal(false)
    }


    useEffect(() => {
        if(editId ){
            handleShowEditModal();
        }else{
            handleHideEditModal();
        }

    }, [editId])

    useEffect(() => {
        if(posts.editPostSuccessTime){
            setLoading(false)
            handleHideEditModal()
        }
    }, [posts.editPostSuccessTime])
    
    return (
        <div>
            <Modal
          visible={showEditModal}
          title="Edit a Post"
          onOk={handleHideEditModal}
          onCancel={handleHideEditModal}
          footer={[
            <p onClick={handleHideEditModal}>Cancel</p>           
            ]}
            >
                <div>
                <form onSubmit={handleSubmit(onSubmit)} className="input-form">
                
                
                <div className="form-field">
                    
                    <input 
                    name="title"
                    placeholder="Post Title" 
                    defaultValue={editId && postToEdit[0].title}
                    ref={
                        register({
                          required: 'This field is required'
                        })
                      }
                    />
                    {errors.title && <span>{errors.title.message}</span>}
                </div>
                <div className="form-field">
                    <textarea 
                    name="article" 
                    placeholder="Post" 
                    defaultValue={editId && postToEdit[0].article}
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
                    <Button className="primary-btn" type="submit" loading={loading}>UPDATE</Button>
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
        editPost: (editId, postData) => dispatch(editPost(editId, postData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAPost);
