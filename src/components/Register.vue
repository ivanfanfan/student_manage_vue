<template>
    <el-container>
        <el-header>
            <div>
                <img src="../assets/img/header.jpg" alt="">
            </div>
            <el-menu
                    class="el-menu-demo"
                    mode="horizontal"
                    background-color="#FFFFFF"
                    text-color="#222222"
                    active-text-color="#ffd04b">
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">考试动态</el-menu-item>
                <el-menu-item index="3">考试大纲</el-menu-item>
                <el-menu-item index="4">CET委员会</el-menu-item>
                <el-menu-item index="5">考试时间</el-menu-item>
                <el-menu-item index="6">考核内容</el-menu-item>
                <el-menu-item index="7">分数解析</el-menu-item>
                <el-menu-item index="8">常见问题</el-menu-item>
            </el-menu>
        </el-header>
        <el-main>
            <div class="studentRegister">
                <el-form :model="studentForm" status-icon :rules="addFormrules" ref="addFormRef" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="电子邮箱" prop="email">
                        <el-input  v-model="studentForm.email" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号" prop="stPho">
                        <el-input v-model="studentForm.stPho" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="studentForm.password" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="studentForm.cheakPass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="证件号" prop="stCardId">
                        <el-input v-model.number="studentForm.stCardId"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名" prop="stName">
                        <el-input v-model.number="studentForm.stName"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="addstudent">提交</el-button>
                        <el-button @click="resetForm('ruleForm2')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "Register",
        data() {
            // var validatePass = (rule, value, callback) => {
            //     if (value === '') {
            //         callback(new Error('请输入密码'));
            //     } else {
            //         if (this.studentForm.cheakPass !== '') {
            //             this.$refs.studentFrom.validateField('checkPass');
            //         }
            //         callback();
            //     }
            // };
            // var validatePass2 = (rule, value, callback) => {
            //     if (value === '') {
            //         callback(new Error('请再次输入密码'));
            //     } else if (value !== this.studentForm.password) {
            //         callback(new Error('两次输入密码不一致!'));
            //     } else {
            //         callback();
            //     }
            // };
            //验证邮箱规则
            var checkEmail = (rule, value, callback)=>{
                //验证邮箱的正则表达式
                const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
                if(regEmail.test(value))
                    return callback;
                callback(new Error('请输入合法邮箱'))
            };
            var checkMobile = (rule, value, callback)=>{
                //验证手机号的正则表达式
                const regMobile = /^(0|86|17951)?(13[0-9]|15[0123456789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
                if(regMobile.test(value))
                    return callback;

                callback(new Error('请输入合法手机号'))
            };
            return{
                studentForm:{
                    stName: '往而烦',
                    stCardId: '620524199508135555',
                    email : 'ivan_sir@163.com',
                    stPho: '1253302455',
                    password: '123456',
                    cheakPass: '123456',
                },
                addFormrules: {
                    // stName: [
                    //     { required: true, message: '请输入您的真实姓名', trigger:'blur' },
                    //     { min:2, max: 6, message: '用户名长度在2~6个字符之间'}
                    // ],
                    // password: [
                    //     { validator: validatePass, trigger: 'blur' }
                    // ],
                    // checkPass: [
                    //     { validator: validatePass2, trigger: 'blur' }
                    // ],
                    // email: [
                    //     { required: true, message: '请输入邮箱', trigger: 'blur' },
                    //     { validator: checkEmail, trigger: 'blur'}
                    // ]
                },
            };

        },

        methods: {
            addstudent(){
                //预校验
                this.$refs.addFormRef.validate(async valid => {
                    if(!valid)return
                    //发起请求
                   const {data: res}=await this.$http.post('http://127.0.0.1:9001/student', this.studentForm)
                    console.log(res);
                    if(res.code !==200){
                        this.$message.error("添加失败")
                    }
                    this.$message.success("添加成功")
                    await this.$router.push('/login')
                })
            }
        }
    }
</script>

<style scoped>
    .studentRegister{
        margin-top: 80px;
        width: 700px;
    }
</style>