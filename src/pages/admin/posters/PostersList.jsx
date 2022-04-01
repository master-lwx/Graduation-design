import { useEffect, useState } from "react"
import { Table ,Space,Button,Modal, message} from "antd"
import { getCategory,deleteCategory } from "@/services/ant-design-pro/api"
import EditModal from './components/editModal'

const PostersList = (props) => {
    // 表格数据
    const [items , setItems] = useState([])
    const [isModalVisible,setIsModalVisible] = useState(false)
    // 将选中行的信息传递给弹窗组件
    const [isChoose,setIsChoose] = useState({})
    // 设置是否更新来请求categorieslist接口
    const [isUpdate,setIsUpdate] = useState(false)



    const showModal = (record) => {
        setIsChoose(record)
        setIsModalVisible(true);
      };

      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

      const deleltCate = async (record) => {
        let msg = await deleteCategory({
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
            title:'Name',
            dataIndex:'name',
            key:2
        },
        {
            title:'Action',
            key:3,
            render: (text, record) => (
                <Space size="middle">
                  <Button onClick={() => {
                    //   如果要执行函数传值调用还得这么写，傻了不能直接showModal()
                      showModal(record)
                  }}>Edit</Button>
                  <Button onClick={() => {deleltCate(record)}}>Delete</Button>
                </Space>
              ),
        }
    ]

    useEffect(async () => {
     let items = await getCategory()
     setItems(items)
    },[isUpdate])
    return (
        <div>
            <h1>PostersList</h1>
            <Table columns={columns} dataSource={items}></Table>
            <EditModal
                        visible={isModalVisible}
                        onOK={handleOk}
                        onCancel={handleCancel}
                        record={isChoose}
                        setIsUpdate={setIsUpdate}
                        isUpdate={isUpdate}
                    />
        </div>
    )
}

export default PostersList