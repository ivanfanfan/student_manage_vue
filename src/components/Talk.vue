<template>
    <div>
        <div>
            <headerbar></headerbar>
        </div>
        <div>
            <div class="title" ><h1>{{title}}</h1></div>
            <div class="content">
                <el-card class="box-card" >{{content}}
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
    import headerbar from "./header/headerbar";
    export default {
        name: "Talk",
        data(){
            return{
                title: '',
                content: '',
            }
        },
        components: {
            headerbar
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
                this.title = res.data[5].title
                this.content = res.data[5].content

            }
        }
    }
</script>

<style scoped>
    .title{
        text-align: center;

    }
    .content{
        width: 800px;
        margin:0 auto;
    }
</style>