<template>
    <el-container>
        <el-header>
            <headerbar></headerbar>
        </el-header>

        <el-main class="studentSignin">
            <el-form ref="signFormRef" :model="signForm" label-width="80px">

                <el-form-item label="科目选择">
                    <el-select  v-model="signForm.enId" placeholder="请选择报考的科目">
                        <el-option label="英语四级" value='1'></el-option>
                        <el-option label="英语六级" value='2'></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="证件选择">
                    <el-select  v-model="signForm.username" placeholder="请选择证件">
                        <el-option label="身份证号" value='1'></el-option>
                        <el-option label="手机号码" value='2'></el-option>
                        <el-option label="邮箱" value=3></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="" prop="stCardId">
                    <a>为了确保是您本人操作请再次输入您的证件号</a>
                </el-form-item>
                <el-form-item label="号码" prop="stCardId">
                    <el-input v-model.text="signForm.id"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="queryEnglish" >提交</el-button>
                </el-form-item>
            </el-form>
            <el-dialog
                    title="成绩"
                    :visible.sync="addDialogVisible"
                    width="50%"
                    >
<!--                内容主题区域-->

                <el-table
                        :data="scoreList"
                        style="width: 100%">
                    <el-table-column
                            prop="writtenScore"
                            label="口语"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="oralScore"
                            label="笔试"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="score"
                            label="总分">
                    </el-table-column>
                </el-table>

                <span slot="footer" class="dialog-footer">
                    <el-button @click="addDialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="addDialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>
        </el-main>
    </el-container>
</template>
<script>
    import headerbar from "./header/headerbar";
    export default {
        components:{
            headerbar
        },
        data(){
            return{
                signForm:{
                    username: '身份证号',
                    id:'',
                    enId: '',
                },
                addDialogVisible: false,
                scoreList:[],
                oralScore: parseInt,
                writtenScore: parseInt,
                score: parseInt,
            }
        },
        methods: {
            async queryEnglish(){
                this.addDialogVisible = true
                //发起请求
                const {data: res}=await this.$http.post('http://127.0.0.1:9001/query',this.signForm)
                console.log(res);
                if(res.code !==200){
                    this.$message.error("查询失败")
                }
                this.$message.success("查询成功")
                this.scoreList.push(res.data)
                console.log(this.scoreList)
            }

        },
        created() {
        }
    }
</script>

<style scoped>
    .studentSignin{
        margin-top: 80px;
        width: 700px;
    }
</style>