<template>
    <el-container class="orderContainer">

        <el-header>
            <headerbar></headerbar>
        </el-header>
        <!--        主体部分-->
        <el-main>
            <div id="Content1">

                <div class="logonline" >
                    <div class="w1150">
                        <div class="object_key">
                            <span class="ReportIDname"><a href="/html1/report/20042/2157-1.htm">关于调整2020年上半年部分考试的公告</a></span>
                            <span id="ReportIDLogograph">为落实国家关于新冠肺炎疫情防控工作部署及教育部相关通知要求，切实保障考生、
                        考试工作人员的身体健康和生命安全，经研究决定，取消原定于..
                        </span>
                        </div>
                        <div class="object_list">
                            <ul>
                                <li class="ReportIDname">
                                    <a href="" target="_blank">关于推迟2020年上半年全国大学英语四六级考试、全国大学英语四六级口语考试、全国...</a>
                                </li>
                                <li class="ReportIDname">
                                    <a href="" target="_blank"> 2019年下半年考试成绩发布通知</a>
                                </li>
                                更多&gt;&gt;
                            </ul>

                        </div>

                    </div>
                </div>
            </div>


            <!--            下面四个框-->
            <div id="Content3">
                <div class="funbox fun01">
                    <a href="">
                        <div class="fun-title">
                            项目介绍
                        </div>
                    </a>
                    <div class="fun-con">
                        <span class="Description">全国大学英语四、六级考试(CET)系教育部主办、教育部考试中心主持和实施的一项大…</span>
                    </div>
                    <div class="mores">
                        <a><router-link to="/project">详细>></router-link></a>
                    </div>
                </div>
                <div class="funbox fun02">
                    <a href="">
                        <div class="fun-title">
                            CET笔试
                        </div>
                    </a>
                    <div class="fun-con">
                        <span class="Description">全国大学英语四、六级考试(CET)系教育部主办、教育部考试中心主持和实施的一项大…</span>
                    </div>
                    <div class="mores">
                        <a class href=""><router-link to="/write">详细>></router-link></a>
                    </div>
                </div>
                <div class="funbox fun03">
                    <a href="">
                        <div class="fun-title">
                            CET口试
                        </div>
                    </a>
                    <div class="fun-con">
                        <span class="Description">全国大学英语四、六级考试(CET)系教育部主办、教育部考试中心主持和实施的一项大…</span>
                    </div>
                    <div class="mores">
                        <a> <router-link to="/talk">详细>></router-link></a>
                    </div>
                </div>
                <div class="funbox fun04">
                    <div class="fun-title">
                        考生服务
                    </div>
                    <div class="fun-con2">
                        <dl>
                            <dd><a href=""><router-link to="/login">在线报名</router-link></a></dd>
                            <dd><a href=""><router-link to="/query">成绩查询</router-link></a></dd>
                            <dd><a href="">补办证明</a></dd>
                            <dd><a href="">口语培训</a></dd>
                            <dd><a href="">成绩核查</a></dd>
                            <dd><a href="">成绩证明</a></dd>
                        </dl>
                    </div>
                </div>


            </div>
        </el-main>
        <!--        尾部-->
        <el-footer>  Footer


        </el-footer>
    </el-container>
</template>

<script>
    import headerbar from "./header/headerbar";
    export default {
        name: "Home",
        components: {
            headerbar
        },
        methods: {
            orderlogin(){
                this.$router.push('/login');
            },
        }
    }
</script>

<style scoped>
    .orderContainer {
        height: 100%;
    }

    .el-main {
        background-color: #ffffff;

    }
    .el-footer {
        background-color: #ffffff;
    }
    .object_key {
        width: 530px;
        margin-left: 15px;
        padding-top: 45px;
    }
    .object_key #ReportIDname {
        display: block;
        color: #EC0000;
        font-size: 24px;
        text-align: left;
        line-height: 160%;
    }
    .logonline {
        border-bottom: solid 1px #E4E4E4;
        /* overflow: hidden; */

        height: 320px;
        background-image: url("../assets/img/main.jpg");

    }
    .w1150 {
        width: 1150px;
        position: relative;
        margin: 0 auto;
        text-align: left;
    }
    .object_key #ReportIDLogograph {
        padding-top: 20px;
        display: block;
        color: #838383;
        line-height: 200%;
        text-align: left;
        text-indent: 2em;
        font-size: 14px;
    }
    .object_list li {
        margin-bottom: 10px;
        padding-left: 11px;
        text-align: left;

    }
    #Content3 {
        width: 1150px;
        margin: 50px auto 0;
        padding-bottom: 50px;
        overflow: hidden;
    }
    .funbox {
        margin-left: 14px;
        float: left;
        width: 275px;
        height: 240px;
        border: solid 1px #E4E4E4;
        transition: background-image 1s;
        background: #fff;
    }
    .fun01 {
        margin-left: 0px;
    }
    .fun-title {
        height: 95px;
        margin: 0 7px;
        border-bottom: 1px solid #CCCCCC;
        background: url("../assets/img/011.png") no-repeat 10px center;
        font-size: 25px;
        color: #111111;
        padding-left: 95px;
        text-align: left;
        line-height: 95px;
        /* background-size: 50px auto; */
    }
    .fun-con {
        overflow: hidden;
        width: 210px;
        margin: 0 auto;
        color: #646464;
        line-height: 200%;
        padding-top: 15px;
        text-align: left;
        height: 80px;
        font-size: 14px;
    }
    .fun-con #Description {
        display: block;
    }
    .mores {
        text-align: right;
        margin: 15px 30px 0 0;
    }
    .fun-con2 {
        position: relative;
        margin: 0 auto;
        color: #646464;
        line-height: 200%;
        padding: 25px 0 0 18px;
        text-align: left;
        overflow: hidden;
    }
    dl {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    .fun-con2 dd {
        height: 33px;
        line-height: 33px;
        margin-bottom: 8px;
        margin-left: 5px;
        float: left;
        width: 100px;
        text-align: center;
        background: url("../assets/img/160230189.png") left top no-repeat;
        margin-right: 0px;
    }
    a { text-decoration: none;}
</style>