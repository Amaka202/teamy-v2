import React from 'react';
import { useForm } from "react-hook-form";
import { Button, Divider } from 'rsuite';
import { Modal } from 'antd';

function MakeAPost(props) {
    const { register, handleSubmit, errors } = useForm();

    const {showPostModal, handleClosePostModal} = props;
    const onSubmit = data => {
        console.log(data);
    };
    
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
                    <textarea name="post" placeholder="Post" ref={register}/>
                </div>
                <Divider />
                <div>
                    <input ref={register} type="file" name="gif" />
                </div>
                <div className="auth-btn">
                    <Button className="primary-btn" type="submit">POST</Button>
                </div>
            </form>
                </div>
            </Modal>
        </div>
    )
}

export default MakeAPost
