import { Form, Input, Button, Checkbox, message } from 'antd';
import { addAdminAccount } from '@/services/ant-design-pro/api';
import { useModel } from 'umi';

const AddAdmin = () => {

    const [form] = Form.useForm();
    const { initialState, setInitialState } = useModel('@@initialState');

    const fetchUserInfo = async (username) => {
        // app.js里面有个获取用户数据的方法
        const userInfo = await initialState?.fetchUserInfo?.(username);
        console.log(userInfo)
    
        if (userInfo) {
          await setInitialState((s) => ({ ...s, currentUser: userInfo }));
        }
      };

    const onFinish = async ({username,password}) => {
        await fetchUserInfo(initialState.currentUser.name)
       let {status,msg} =  await addAdminAccount({username,password,creator:initialState.currentUser.name})

       if(status === 0){
        message.error(msg)
       }
       else{
           message.success(msg)
           form.setFieldsValue({
            username:'',
            password:''
           })
       }

      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
      return (
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={form}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
    
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      );
}

export default AddAdmin