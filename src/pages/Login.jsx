import React from "react";
import {Row, Col, Form, Input} from 'antd';

const Login = () => {
    return (
        <div className="login">
            <Row gutter={16}>
                <Col lg={16}></Col>
                <Col lg={8} className="text-left">
                    <Form layout="vertical" className="login-form">
                        <h1>Login</h1>
                        <hr />
                        <Form.Item name="username" label="Username" rules={[{required: true}]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="password" label="Password" rules={[{required: true}]}>
                            <Input />
                        </Form.Item>

                        <button className="btn1">Login</button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
};

export default Login;