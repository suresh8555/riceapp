import React from "react";
import { Card, Avatar, Button, Form, Input, Row, Col } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import "animate.css";

const Profile = () => {
  return (
    <div className="profile-container fade-in">
      <Row gutter={[24, 24]} align="middle">
        {/* Profile Card Section */}
        <Col xs={24} md={8}>
          <Card variant="outlined" hoverable style={{ textAlign: "center" }}>
            <Avatar
              size={100}
              src='https://wallpapers.com/images/hd/cool-profile-picture-ld8f4n1qemczkrig.jpg'
              alt="Profile"
              style={{ border: "2px solid #1890ff" }}
            />
            <h2 style={{ marginTop: 16 }}>User Name</h2>
            <Button type="primary" icon={<LogoutOutlined />} danger>
              Logout
            </Button>
          </Card>
        </Col>

        {/* Edit Profile Form Section */}
        <Col xs={24} md={16}>
          <Card title="Edit Profile" variant="outlined">
            <Form layout="vertical">
              <Form.Item label="Username" name="name">
                <Input placeholder="Enter your username" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your Email!" },
                  { type: "email", message: "Invalid email format!" },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: "Please enter your Password!" }]}
              >
                <Input.Password placeholder="Enter your password" />
              </Form.Item>

              <Form.Item label="Role" name="role">
                <Input disabled />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Update Profile
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
