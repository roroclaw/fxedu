<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>武汉音乐学院</title>
    <jsp:include page="../../common/common_top.jsp"/>
</head>

<body>
<!--菜单star-->
<jsp:include page="../../common/leftMenu.jsp"/>
<!--菜单end-->
<!--头部star-->
<jsp:include page="../../common/header.jsp"/>
<!--头部end-->

<!--内容数据star-->
<div class="UI_main">
    <!--系统地图 star-->
    <div class="UI_address">
        <span></span>
        <a href="###">系统管理</a><i>>></i><a href="###">用户管理</a>
    </div>
    <!--系统地图 end-->

    <!--数据显示区域 star-->
    <div id="divRowPart_1">
        <div class="col-md-12">
            <div class="UI_data">
                <div class="data_title clear"><i class="iconfont icon-hangbiao"></i><span>用户管理</span></div>
                    <form id="queryForm">
                        <div class="data_box clear">
                            <div class="data_input">
                                <span>用户姓名：</span>
                                <input type="text" name="realName"/>
                            </div>
                            <!--下拉框 star-->
                            <div class="data_input statusSel">
                            </div>
                            <!--下拉框 end-->
                            <!--时间选择 star-->
                            <div class="data_input">
                                <span>注册时间：</span>
                                <input name="regTimeStart" type="text" style="width:100px;"
                                       onclick="laydate({istime: true, format: 'YYYY-MM-DD'})"/>
                                <span>-</span>
                                <input name="regTimeEnd" type="text" style="width:100px;"
                                       onclick="laydate({istime: true, format: 'YYYY-MM-DD'})"/>
                            </div>
                            <!--时间选择 end-->
                            <div class="data_seach" id="queryBtn" style="cursor:pointer">搜索</div>
                        </div>
                    </form>
                    <div class="UI_table data_box dataTable">
                    </div>
                <!--数据显示区域 end-->
            </div>
        </div>
    </div>

        <!--table按钮-->
        <div class="operBar">
            <div class="oper_btn" id="addBtn" style="cursor:pointer">新增</div>
            <div class="oper_btn" id="passWordReset" style="cursor:pointer">密码重置</div>
        </div>
    </div>
    <!--内容数据end-->
    <script type="text/javascript" src="${contextpath}/js/modules/sys/user/sysuser.js"></script>
    <jsp:include page="../../common/basic.jsp"/>
</body>
</html>
