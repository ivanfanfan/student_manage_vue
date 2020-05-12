<template>
    <div class="header-bar">
        <div>
             <img src="../../assets/img/header.jpg" alt="">
        </div>
        <el-menu
                class="el-menu-demo"
                mode="horizontal"
                background-color="#FFFFFF"
                text-color="#222222"
                active-text-color="#ffd04b" :router="true">
            <el-menu-item index="1" :index="'/'+'home'">首页</el-menu-item>
            <el-menu-item index="2" :index="'/'+ 'dongtai'">考试动态 </el-menu-item>
            <el-menu-item index="3" :index="'/'+ 'dagang'">考试大纲</el-menu-item>
            <el-menu-item index="4" :index="'/'+ 'cet'">CET委员会</el-menu-item>
            <el-menu-item index="5" :index="'/'+ 'time'">考试时间</el-menu-item>
            <el-menu-item index="6" :index="'/'+ 'neirong'">考核内容</el-menu-item>
            <el-menu-item index="7" :index="'/'+ 'jiexi'">分数解析</el-menu-item>
            <el-menu-item index="8" :index="'/'+ ''">常见问题</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "headerbar"
    }
</script>

<style scoped>
    .header-bar{
        background-color: #ffffff;
        display: flex;
        justify-content: space-evenly;
    }
</style>