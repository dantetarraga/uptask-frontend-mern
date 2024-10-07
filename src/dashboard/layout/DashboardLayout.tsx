import {
  Avatar,
  Button,
  Divider,
  Flex,
  Input,
  Layout,
  List,
  MenuProps,
  Segmented,
  Space,
} from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  CalendarDays,
  FolderOpen,
  LayoutGrid,
  ChartColumn,
  Settings,
  LogOut,
  Search,
  User,
  LeafIcon,
  ArrowRight,
  ChevronRight,
  Zap,
} from 'lucide-react';
import Item, { Meta } from 'antd/es/list/Item';
import Title from 'antd/es/typography/Title';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode
): MenuItem {
  return {
    key,
    icon,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', '1', <LayoutGrid />),
  getItem('Files', '2', <FolderOpen />),
  getItem('Calendar', '3', <CalendarDays />),
  getItem('Reports', '4', <ChartColumn />),
  getItem('Settings', '5', <Settings />),
  getItem('Logout', '6', <LogOut />),
];

const DashBoardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => setCollapsed((prevState) => !prevState);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsed={false}
        width={348}
        theme='light'
        className='p-5 border-r-2'
      >
        <img src='/logo.svg' alt='logo' width={150} />
        <Space direction='vertical' size='middle' style={{ width: '308px' }}>
          <Input
            placeholder='Search Project'
            prefix={<Search size={20} />}
            style={{ padding: '12px' }}
          />
          <Segmented
            className=''
            block={true}
            options={['Active', 'On Hold', 'Closed']}
          />
          <List
            loading={false}
            itemLayout='horizontal'
            dataSource={[1, 2, 3, 4, 5]}
            renderItem={(item) => (
              <Item
                actions={[
                  <Button
                    type='link'
                    shape='circle'
                    icon={<ChevronRight size={20} color='black' />}
                    size='small'
                  />,
                ]}
              >
                <Meta
                  avatar={<LeafIcon size={34} />}
                  title='Project Name'
                  description='Project Description'
                />
              </Item>
            )}
          />
        </Space>
      </Sider>

      <Layout>
        <Header className='flex items-center justify-between bg-white p-5 border-b-2'>
          <Flex gap='middle' align='center'>
            <Title level={3} style={{ margin: 0 }}>
              Project Name
            </Title>
            <Zap color='#FFD700' size={24} />
          </Flex>
          <Flex
            gap='small'
            align='center'
            justify='end'
          >
            <Avatar
              size='default'
              icon={<User size={20} />}
              style={{ backgroundColor: '#f56a00' }}
            />
            <Button type='text' icon={<LogOut size={20} />} />
          </Flex>
        </Header>
        <Content className='p-5'>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashBoardLayout;
