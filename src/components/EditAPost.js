import React from 'react';
import { useForm } from "react-hook-form";
import { Button, Divider } from 'rsuite';
import { Modal } from 'antd';

function EditAPost(props) {
    const { register, handleSubmit, errors } = useForm();

    const {show, handleClose} = props;
    console.log('here too');
    const onSubmit = data => {
        console.log(data);
    };
    
    return (
        <div>
            <Modal
          visible={show}
          title="Edit a Post"
          onOk={handleClose}
          onCancel={handleClose}
          footer={[
            <p onClick={handleClose}>Cancel</p>           
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
                    <textarea name="post" placeholder="Post" ref={register}/>
                </div>
                <Divider />
                <div>
                    <input ref={register} type="file" name="gif" />
                </div>
                <div className="auth-btn">
                    <Button className="primary-btn" type="submit">UPDATE</Button>
                </div>
            </form>
                </div>
            </Modal>
        </div>
    )
}

export default EditAPost;
