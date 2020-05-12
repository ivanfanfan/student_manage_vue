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
                <el-menu-item index="1"><router-link to="home">首页</router-link></el-menu-item>
                <el-menu-item index="2">考试动态</el-menu-item>
                <el-menu-item index="3">考试大纲</el-menu-item>
                <el-menu-item index="4">CET委员会</el-menu-item>
                <el-menu-item index="5">考试时间</el-menu-item>
                <el-menu-item index="6">考核内容</el-menu-item>
                <el-menu-item index="7">分数解析</el-menu-item>
                <el-menu-item index="8">常见问题</el-menu-item>
            </el-menu>
        </el-header>

        <el-main class="studentSignin">
            <el-form ref="signFormRef" :model="signForm" label-width="80px">
                <el-form-item label="" prop="stCardId">
                    <a>为了确保是您本人操作请再次输入您的证件号</a>
                </el-form-item>
                <el-form-item label="证件号" prop="stCardId">
                    <el-input v-model.text="signForm.username"></el-input>
                </el-form-item>
                <el-form-item label="科目选择">
                    <el-select  v-model="signForm.id" placeholder="请选择报考的科目">
                        <el-option label="英语四级" value=1></el-option>
                        <el-option label="英语六级" value=2></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="signEnglish">提交</el-button>
                </el-form-item>
            </el-form>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        data(){
            return{
                signForm: {
                    username: '',
                    id: "英语四级",
                }
            }
        },
        methods: {
        async signEnglish(){
            //发起请求
            const {data: res}=await this.$http.put('http://127.0.0.1:9001/english',this.signForm)
            console.log(res);
            if(res.code !==200){
                this.$message.error("添加失败")
            }
            this.$message.success("添加成功")

        }
    }
    }
</script>

<style scoped>
    .studentSignin{
        margin-top: 80px;
        width: 700px;
    }
</style>