<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>考试大纲</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="title" ><h1>{{title}}</h1></div>
        <div class="content">
            <el-card class="box-card" >{{content}}
            </el-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DaGang",
        data(){
            return{
                title: '',
                content: '',
            }
        },
        created() {
            this.getContent();
        },
        methods: {
            async getContent(){
                const {data: res} = await this.$http.get("http://localhost:9001/article")
                console.log(res);
                if(res.code !== 200){
                    return this.$message.error("获取文章失败");
                }
                this.title = res.data[0].title
                this.content = res.data[0].content

            }
        }
    }
</script>

<style scoped>
    .el-breadcrumb{
        padding-left: 500px;
    }
    .title{
        text-align: center;

    }
    .content{
        width: 800px;
        margin:0 auto;
    }
</style>