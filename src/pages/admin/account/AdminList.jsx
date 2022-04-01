import { useEffect, useState } from "react"
import { Table ,Space,Button,Modal, message} from "antd"
import { useModel } from 'umi';
import { getAdminAccountList,deleteAdminAccount } from "@/services/ant-design-pro/api"

const AdminList = (props) => {
    // 表格数据
    const [items , setItems] = useState([])
    const [isModalVisible,setIsModalVisible] = useState(false)
    // 将选中行的信息传递给弹窗组件
    const [isChoose,setIsChoose] = useState({})
    // 设置是否更新来请求categorieslist接口
    const [isUpdate,setIsUpdate] = useState(false)

    const { initialState, setInitialState } = useModel('@@initialState');

    const fetchUserInfo = async (username) => {
        // app.js里面有个获取用户数据的方法
        const userInfo = await initialState?.fetchUserInfo?.(username);
        console.log(userInfo)
    
        if (userInfo) {
          await setInitialState((s) => ({ ...s, currentUser: userInfo }));
        }
      };



      const deleltCate = async (record) => {
        await fetchUserInfo(initialState.currentUser.name)  
        console.log(initialState.currentUser.name,record.creator)
        if(initialState.currentUser.name !== record.creator){
            message.error('你不是创建者，不呢删除')
            return
        }
        let msg = await deleteAdminAccount({
            _id:record._id
        })

        setIsUpdate(!isUpdate)
        message.success(msg.msg)
      }


    const columns = [
        {
            title:'ID',
            dataIndex:'_id',
            key:1
        },
        {
            title:'UserName',
            dataIndex:'username',
            key:2
        },
        {
            title:'Creator',
            dataIndex:'creator',
            key:3,
        },
        {
            title:'Action',
            key:4,
            render: (text, record) => (
                <Space size="middle">
                  <Button onClick={() => {deleltCate(record)}}>Delete</Button>
                </Space>
              ),
        }
    ]

    useEffect(async () => {
     let items = await getAdminAccountList()
     setItems(items)
    },[isUpdate])
    return (
        <div>
            <h1>PostersList</h1>
            <Table columns={columns} dataSource={items}></Table>
        </div>
    )
}

export default AdminList