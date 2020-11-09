import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

export default function Demo(props: any) {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    return (
        <Form initialValues={{ remember: true }} onFinish={onFinish}>
            <Form.Item
                label="用户名"
                name="username"
                rules={[{ required: true}]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true}]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
                <Checkbox>保存密码</Checkbox>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    提交
                </Button>
                <Button type="default">
                    重置
                </Button>
            </Form.Item>
        </Form>
    );
};