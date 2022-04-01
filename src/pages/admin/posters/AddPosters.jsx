import { Form, Input, Button, Checkbox,message } from 'antd';
import { addCategory,addRule } from '@/services/ant-design-pro/api';

const AddPosters = () => {

    const onFinish = async (values) => {
        let msg = await addCategory({...values})
        console.log(msg)
        if(msg.msg == '分类已存在'){
            message.error(msg.msg)
        }
        else
        message.success('保存成功')

      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <div>
            <h1>AddPosters</h1>

            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
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
        </div>
    )
}

export default AddPosters