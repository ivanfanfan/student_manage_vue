<template>
    <el-container class="orderContainer">

        <el-header>
            <headerBar></headerBar>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>

    import headerBar from "./headerbar";
    export default {
        name: "news",
        components: {
            headerBar,
        }
    }
</script>

<style scoped>

</style>