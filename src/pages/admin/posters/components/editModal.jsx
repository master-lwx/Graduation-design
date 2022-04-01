import React, { useEffect, useState } from 'react';
import { Modal, Button, Form ,Input, message} from 'antd';
import { updateCategory } from '@/services/ant-design-pro/api';

const EditModal = ({visible,onOK,onCancel,record,setIsUpdate,isUpdate}) => {
    const [form] = Form.useForm();
    const onFinish = async (values) => {
        let msg = await updateCategory({
            name:values.name,
            _id:record._id
        })

        message.success(msg.msg)
        setIsUpdate(!isUpdate)
        onCancel()
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <>
            <Modal
                visible={visible}
                onOk={onOK}
                onCancel={onCancel}
                title='edit'
                // 销毁了Modal里面的元素,不然Form不会重新构建，initialValues一直都是最初的
                destroyOnClose={true}
            >
                <Form
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    initialValues={{
                        name:record.name
                    }}
                >
                    <Form.Item
                        label='name'
                        name='name'
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>

        </>
    )
}

export default EditModal