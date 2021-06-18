import React, { useRef, useState, useEffect } from 'react';
import { Button } from 'components';
import { Form, Input, Radio, Select } from 'antd';
import { CommonService } from 'api/CommonService';
import { CommonApi } from 'api/CommonApi';
import axios from 'axios';
import './style.scss';
import { useRouter } from 'next/router';
import { UserService } from '../../api/UserService';
const LoginForm = ({ submitData, form }) => {
  return (
    <div className="login__form-login text-center text-lg-left">
      <h2 className="mb-lg-4">Login</h2>
      <p>Log into your account</p>
      <Form name="login" form={form} className="login__form--content" onFinish={submitData}>
        <Form.Item
          className="login__item mb-lg-4"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please, Enter your email account.'
            },
            {
              type: 'email',
              message: 'Email is not correctly',
            }
          ]}
        >
          <Input placeholder="Your email" style={{ borderRadius: 30 }} />
        </Form.Item>
        <Form.Item
          className="login__item mb-lg-4"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please, Enter your password.'
            },

          ]}
        >
          <Input.Password placeholder="Password" style={{ borderRadius: 30 }} />
        </Form.Item>

        <span className="d-block mb-lg-3">Forgot Password</span>
        {/* <Form.Item> */}
        <Button type="submit" text="Login Now" />
        {/* </Form.Item> */}
      </Form>
    </div>
  );
}

const RegisterForm = ({ form, submitData }) => {

  const [country, setCountry] = useState([]);
  const { Option } = Select;

  useEffect(() => {
    getCountries();
  }, [])

  const getCountries = () => {
    CommonApi.getCountTries({}, res => {
      setCountry(res.map(item => item.name));
    });
  }

  return (
    <div className="login__form-register text-center text-lg-left">
      <h2 className="mb-lg-4">Register Now !!!</h2>
      <p>Be cool and join today. Meet millions</p>
      <Form name="register" form={form} onFinish={submitData}>
        <div className="grid d-flex">
          <div className="col-6 ml-n4 mr-n4 pr-0">
            <Form.Item
              className="login__item mb-lg-4"
              name="first_name"
              rules={[
                {
                  required: true,
                  message: 'Please, Enter your first name',
                }
              ]}
            >
              <Input placeholder="First name" style={{ borderRadius: 30 }} />
            </Form.Item>
          </div>
          <div className="col-6 pl-0">
            <Form.Item
              className="login__item mb-lg-4"
              name="last_name"
              rules={[
                {
                  required: true,
                  message: 'Please, Enter your last name',
                }
              ]}
            >
              <Input placeholder="Last name" style={{ borderRadius: 30 }} />
            </Form.Item>
          </div>
        </div>
        <div className="grid">
          <Form.Item
            className="login__item mb-4 mr-4"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please, Enter your email account.'
              },
              {
                type: 'email',
                message: 'Email is not correctly',
              }
            ]}
          >
            <Input placeholder="Your email" style={{ borderRadius: 30 }} />
          </Form.Item>
        </div>
        <div className="grid">
          <Form.Item
            className="login__item mb-4 mr-4"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please, Enter your password.'
              },
              {
                pattern: CommonService.REGEX_PASSWORD,
                message: 'Please, Enter the correctly password.',
              }
            ]}
          >
            <Input.Password placeholder="Password" style={{ borderRadius: 30 }} />
          </Form.Item>
        </div>
        <div className="grid">
          <Form.Item
            className="login__item mb-4 mr-4"
            name="confirm"
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: 'Please, Confirm your password.'
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Confirm password is not correctly, Enter Again'));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm password"
              style={{ borderRadius: 30 }}
            />
          </Form.Item>
        </div>
        <div className="grid">
          <div className="login__date-birth mb-lg-3"><strong>Date Of Birdth</strong></div>
          <div className="grid d-flex flex-wrap">
            <div className="col-lg-3 ml-n4 pr-0 col-6">
              <Form.Item
                name="day"
                rules={[
                  {
                    required: true,
                    message: "Please,Enter this field !!!"
                  }
                ]}
              >
                <Select placeholder="Day">
                  {
                    CommonApi.days.map(item => (
                      <Option key={item} value={item + 1}>{item + 1}</Option>
                    ))
                  }
                </Select>
              </Form.Item>
            </div>
            <div className="col-lg-3 ml-n4 pr-0 col-6 mr-4 mr-lg-0">
              <Form.Item name="month" >
                <Select placeholder="Month">
                  {
                    CommonApi.months.map((item, index) => (
                      <Option value={index + 1}>{item}</Option>
                    ))
                  }
                </Select>
              </Form.Item>
            </div>
            <div className="col-lg-6 pl-0 col-12">
              <Form.Item
                name="year"
                rules={[
                  {
                    required: true,
                    message: "Please,Enter this field !!!"
                  }
                ]}
              >
                <Select placeholder="Year">
                  {
                    CommonApi.years.map((item) => (
                      <Option value={item + 1980}>{item + 1980}</Option>
                    ))
                  }
                </Select>
              </Form.Item>
            </div>
          </div>
        </div>
        <div className="grid text-center text-lg-left">
          <Form.Item
            name="gender"
            className="login__item mb-lg-2"
            rules={[
              {
                required: true,
                message: "Please,Choose this field !!!"
              }
            ]}
          >
            <Radio.Group>
              <Radio value={1}>Male</Radio>
              <Radio value={2}>Female</Radio>
            </Radio.Group>
          </Form.Item>
        </div>
        <div className="grid d-flex">
          <div className="col-lg-6 ml-n4 pr-lg-0 pr-4">
            <Form.Item
              name="city"
              className="login__item mb-4"
              rules={[
                {
                  required: true,
                  message: "Please,Enter this field !!!"
                }
              ]}
            >
              <Input placeholder="Your city"
                style={{ borderRadius: 30 }}
              />
            </Form.Item>
          </div>
          <div className="col-lg-6 pl-0">
            <Form.Item
              name="countries"
              className="login__item mb-4"
              rules={[
                {
                  required: true,
                  message: "Please,Choose this field !!!"
                }
              ]}
            >
              <Select placeholder="Country">
                {
                  country.map((item, index) => (
                    <Option value={item}>{item}</Option>
                  ))
                }
              </Select>
            </Form.Item>
          </div>
        </div>
        <h5 className="mb-4 text-center text-lg-left">Already have an account</h5>
        <Form.Item className="text-center text-lg-left">
          <Button type="submit" text="Register now" />
        </Form.Item>
      </Form>

    </div>
  );
}

const Login = ({ pathName }) => {
  const [form] = Form.useForm();
  const [isRegister, setIsRegister] = useState(false)
  const router = useRouter();

  const submitData = (values) => {
    checkLogin(values)
    form.resetFields();

  }

  const checkLogin = (values) => {
    const data = {
      ...values
    }
    UserService.checkAccount(data, res => {
      if (res.errorCode === 0)
        router.push("/timeline");
    })
  }

  const handleRegister = () => {
    setIsRegister(!isRegister)
  }
  return (
    <div className="grid__full-width login">
      <div className="grid d-lg-flex">
        <div className="col-lg-5 ml-lg-n4 mr-lg-n4 col-12">
          <div className="login__intro text-center text-lg-left">
            <div className="login__title mb-5">
              <h1>Make Cool Friends !!!</h1>
            </div>
            <div className="login__text">
              <p className="mb-lg-4">You And Me is a social network that can be used to connect people. This is a greate website with lots of useful features created by Le Dinh Khiem - Full stack : Java - React js</p>
              <p className="mb-lg-5">Come here? You and Me? Together ?</p>
            </div>
            <div className="login__learn-more">
              <a className="m-lg-0 m-auto">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="login__form">
            <div className="login__form--choose-btn d-flex">
              <p className={!isRegister ? "active" : ""} onClick={handleRegister}>Login</p>
              <p className={isRegister ? "active" : ""} onClick={handleRegister}>Register</p>
            </div>
            {!isRegister &&
              <LoginForm submitData={submitData} form={form} />
            }
            {
              isRegister &&
              <RegisterForm submitData={submitData} form={form} />
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;