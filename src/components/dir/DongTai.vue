<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>考试动态</el-breadcrumb-item>
        </el-breadcrumb>
        <el-table :data="DongTaiList" class="dongtai">
            <!--            编号-->
            <el-table-column type="index"></el-table-column>
            <el-table-column  prop="time"  :formatter="dateFormat" label="公告时间" width="120">
            </el-table-column>
            <el-table-column prop="title" label="公告标题">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import moment from 'moment'
    export default {
        name: "DongTai",
        data() {
            return{
                DongTaiList: [],
                time: Date,
                title: '',
            }
        },
        created() {
            this.getDongTaiList();
        },
        methods: {
            async getDongTaiList(){
                const {data: res} =await this.$http.get("http://localhost:9001/dongtai")
                console.log(res);
                if(res.code !== 200) {
                    return this.$message.error('获取列表失败');
                }
                this.DongTaiList = res.data

            },
            dateFormat:function(row,column){
                const date = row[column.property];
                if(date == undefined){return ''};
                return moment(date).format("YYYY-MM-DD")

            },
        }
    }
</script>

<style scoped>
    .el-breadcrumb{
        padding-left: 500px;
    }
    .dongtai{
        padding-left: 550px;
        text-align: center;
    }
</style>