<template>
    <div class="login_container">
        <div class="login_box">
            <!--            头像区域-->
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="">
            </div>
            <!--            登陆表单区域-->
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
                <el-form-item label="">
                    <el-select v-model="loginForm.id" placeholder="请选择登陆方式">
                        <el-option label="身份证登陆" value= "1"></el-option>
                        <el-option label="手机号登陆" value= "2"></el-option>
                    </el-select>
                </el-form-item>
                <!--                用户名-->
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
                </el-form-item>
                <!--                密码-->
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" prefix-icon="el-icon-unlock" type="password"></el-input>
                </el-form-item>
                <!--                按钮区域-->
                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登陆</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                    <a><router-link to="/register">没有账号进行注册</router-link>>></a>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                //登陆表单数据对象
                stId: '1',
                loginForm :{
                    username: '620524199508134654',
                    id: '1',
                    password: '123',
                },
                //这是表单的验证规则
                loginFormRules: {
                    //验证账号
                    username: [
                        { required: true,message: "请输入登陆账号", trigger: "blur"},
                        { min: 3, max: 20, message: "长度在3到10个字符", trigger: "blur" }
                    ],
                    password: [
                        { required: true, message: "请输入密码", trigger: "blur" },
                        { min: 3, max: 15, message: "长度在6到15个字符中间", trigger: "blur" }
                    ]
                    //验证密码
                }
            }
        },
        methods: {
            //表单重置
            resetLoginForm(){
                this.$refs.loginFormRef.resetFields();
            },
            //表单登陆预验证
            login(){
                this.$refs.loginFormRef.validate(async valid => {
                    if(!valid)return
                    //发起请求
                    console.log(this.loginForm.id);
                    console.log(this.loginForm);
                    const {data: res}=await this.$http.post('http://127.0.0.1:9001/login', this.loginForm)
                    console.log(res);
                    if(res.code !==200){
                        this.$message.error("添加失败")
                    }
                    this.$message.success("添加成功")
                    this.stId = this.loginForm.id
                    await this.$router.push('/signin')

                });
            }
        }
    }

</script>


<style lang="less" scoped>
    .login_container{
        background-color: #2b4b6b;
        height: 100%;
    }
    .login_box{
        width: 450px;
        height: 400px;
        background-color: #fff;
        border-radius: 3px;
        position :absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);

        .avatar_box{
            height: 130px;
            width: 130px;
            border: 1px solid  #eee;
            border-radius: 50%;
            padding: 10%;
            box-shadow: 0 0 10px #ddd;
            position: absolute;
            left: 50%;
            transform: translate(-50%,-50%);
            background-color: #fff;
            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background-color: #eee;
            }
        }
    }
    .login_form {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 10px;
        box-sizing: border-box;
    }
    .btns {
        display: flex;
        justify-content: flex-end;
    }

</style>