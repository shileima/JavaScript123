import React from 'react';
import {Layout,Form,Icon,Input,Checkbox,Button,Cascader,Select,AutoComplete,Message} from 'antd';
import {addressOptions} from './constants';
import styled from 'styled-components';
import {connect} from 'dva';
const {Content} = Layout;
const FormItem = Form.Item;

class Login extends React.Component{
    handleSubmit = () => {
        let {form} = this.loginForm.props;
        let values = form.getFieldsValue(); // 表单的值
        debugger;
        this.props.dispatch({
            type: 'login/signup',
            payload:values
        })
        // form.validateFields([],(error,values)=>{ // validateFields必须接受两个参数，应该是空数组，另一个回调函数
        //     if(error){
        //         console.log(error)
        //         Message.error('表单字段输入不合法！')
        //     }else{
        //         console.log(values)
        //         this.props.dispatch({
        //             type: 'login/signup',
        //             payload:values
        //         })
        //     }
        //     debugger;
        // })
        
    }
    render(){
        return (
            <Layout>
                <Content>
                    <LoginForm 
                        onsubmit={this.handleSubmit} 
                        wrappedComponentRef={instance=>this.loginForm=instance}    
                    />
                </Content>
            </Layout>
        )
    }
}
@Form.create()
class LoginForm extends React.Component{
    state = {autoCompleteOptions:[],rePasswordDirty:false}
    handleRepasswordBlur = (event) => {
        this.setState({rePasswordDirty:this.state.rePasswordDirty||!!event.target.value})
        
    }
    handleWebsiteChange = (value) => {
        //debugger;
        let autoCompleteOptions = this.state.autoCompleteOptions;
        if(value){
            autoCompleteOptions = ['.com','.cn','.org'].map(domain=>value+domain);
        }else{
            autoCompleteOptions=[]
        }
        //console.log(autoCompleteOptions)
        this.setState({autoCompleteOptions})
    }
    // 自定义校验方法
    comparePassword = (rule,value,callback) => {
        //debugger;
        let password = this.props.form.getFieldValue('password');
        if(value === password){
            callback(null)
        }else{
            callback('密码和确认密码不一致')
        }
    }
    validatorRepassword = (rule,value,callback) => {
        this.state.rePasswordDirty&&this.props.form.validateFields(['repassword'],{force:true})
    }
    render(){
        let {onsubmit,form:{getFieldDecorator}} = this.props;
        const formItemLayout = {
            labelCol:{
                span:4
            },
            wrapperCol:{
                span:20
            }
        }
        const formTailItemLayout = {
            wrapperCol:{
                span:20,
                offset:4
            }
        }
        const countrySelector = getFieldDecorator('prefix',{
            initialValue:'086'
        })(<Select>
            <Select.Option value="086">86</Select.Option>
            <Select.Option value="087">87</Select.Option>
           </Select>)

        const websiteOptions = this.state.autoCompleteOptions.map(option=>(
            <AutoComplete.Option key={option}>{option}</AutoComplete.Option>
        ))
        return (
            <FormWrapper>
                <Form onSubmit={onsubmit} style={{width:'500px',textAlign:'left'}}>
                <h3>欢迎注册</h3>
                    <FormItem label="用户名" {...formItemLayout}>
                        {
                            getFieldDecorator('username',{
                                rules:[{required:true,message:'用户名必须输入!'}]
                            })(<Input prefix={<Icon type="user" style={{color:'rgba(0,0,0,.25)'}} />} />)
                        }
                    </FormItem>
                    <FormItem label="密码" {...formItemLayout}>
                        {
                            getFieldDecorator('password',{
                                rules:[{required:true,message:'密码必须输入!'},
                                {validator:this.validatorRepassword}]
                            })(<Input prefix={<Icon type="lock" style={{color:'rgba(0,0,0,.25)'}} />} />)
                        }
                    </FormItem>
                    <FormItem label="确认密码" {...formItemLayout}>
                        {
                            getFieldDecorator('repassword',{
                                rules:[{required:true,message:'确认密码必须输入!'},
                                {validator:this.comparePassword}]
                            })(<Input onBlur={this.handleRepasswordBlur} prefix={<Icon type="lock" style={{color:'rgba(0,0,0,.25)'}} />} />)
                        }
                    </FormItem>
                    <FormItem label="邮箱" {...formItemLayout}>
                        {
                            getFieldDecorator('email',{
                                rules:[{required:true,message:'邮箱必须输入!'},{email:true,message:'邮箱格式不合法!'}]
                            })(<Input prefix={<Icon type="mail" style={{color:'rgba(0,0,0,.25)'}} />} />)
                        }
                    </FormItem>
                    <FormItem label="住址" {...formItemLayout}>
                        {
                            getFieldDecorator('address',{
                                initialValue:["zhejiang","hangzhou","xihu"],
                                rules:[{required:true,type:'array',message:'邮箱必须输入!'}]
                            })(<Cascader options={addressOptions} />)
                        }
                    </FormItem>
                    <FormItem label="手机号" {...formItemLayout}>
                        {
                            getFieldDecorator('phone',{
                                rules:[{required:true,message:'手机号必须输入!'}]
                            })(<Input addonBefore={countrySelector} style={{width:'100%'}} />)
                        }
                    </FormItem>
                    <FormItem label="个人主页" {...formItemLayout}>
                        {
                            getFieldDecorator('website',{
                                rules:[{required:true,message:'邮箱必须输入!'}]
                            })(<AutoComplete dataSource={websiteOptions}
                                    onChange={this.handleWebsiteChange}
                                    placehold="请输入网址" //不是 placeholder
                                >
                                 <Input />
                               </AutoComplete>)
                        }
                    </FormItem>
                    <FormItem {...formTailItemLayout} style={{"textAlign":"left"}}>
                        {
                            getFieldDecorator('aggrement',{
                                valuePropName:'checked' // 默认从 value 取值
                            })(
                                <Checkbox>我已经阅读并同意<a href="#">协议</a></Checkbox>
                            )
                        }
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" style={{width:"100%"}}>注册</Button>
                        已有账号？<a href="#" onClick={this.props.changeLoginStatus}>立即登录</a>
                    </FormItem>
                    </Form>
            </FormWrapper>
        )
    }
}

const FormWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:calc(100vh);
    h3{
        text-align:center;
    }
    form{
        border:1px solid #999;
        border-radius:5px;
        padding:20px;
    }
`

export default connect(
    state=>state
)(Login);



