/**
 * Created by dengxianzhi on 2017/1/29.
 */
$(function(){

    // 表单验证
    $("#dataForm").validationEngine("attach", {
        promptPosition : "topLeft",
        autoHidePrompt : true,
        autoHideDelay : 3000,
        scroll : false
    });

    //下拉框设置
    createSel($('#sexSel'),'sex','common/getSexItems.infc',true);
    createSel($('#classSel'),'classId','class/getClassInfoItems.infc',true);
    createSel($('#gradeSel'),'grade','common/getGradeItems.infc',true);
    createSel($('#nationSel'),'nation','common/getNationItems.infc',true);
    createSel($('#eduTypeSel'),'eduType','common/getEduTypeItems.infc',true);
    createSel($('#majorSel'),'majorId','common/getSubMajorItems.infc',true);
    createSel($('#politicalStatusSel'),'politicalStatus','common/getPoliticalStatusItems.infc',false);
    createSel($('#provinceSel'),'registryProvinceCode','common/getProvinceItems.infc',false);
    createSel($('#stuTypeSel'),'type','common/getStudentTypeItems.infc',false);
    createSel($('#stuSortSel'),'studentSort','common/getStudentSortItems.infc',false);
    createSel($('#studyTypeSel'),'learnType','common/getLearnTypeItems.infc',false);
    createSel($('#recruitTypeSel'),'recruitType','common/getRecruitTypeItems.infc',false);
    createSel($('#teachPlaceSel'),'teachPlace','common/getTeachPlaceItems.infc',false);
    createSel($('#studentFromSel'),'studentFrom','common/getStudentFromItems.infc',false);
    createSel($('#registryTypeSel'),'registryType','common/getRegistryTypeItems.infc',false);

    //省区域级联
    $(document).on('change','#registryProvinceCode',function(){
        var provinceId = $(this).val();
        var citySelObj = $('#citySel');
        citySelObj.empty();
        $('#districtSel').empty();
        if(provinceId != ''){
            createSel(citySelObj,'registryCityCode','common/getAreaItemsByPid.infc?pid='+provinceId,false);
        }
    });
    //市区域级联
    $(document).on('change','#registryCityCode',function(){
        var cityId = $(this).val();
        var districtSelObj = $('#districtSel');
        districtSelObj.empty();
        if(cityId != ''){
            createSel(districtSelObj,'registryDistrictCode','common/getAreaItemsByPid.infc?pid='+cityId,false);
        }
    });

    //方向变化级联教学计划
    $(document).on('change','#majorId',function(){
        var majorId = $(this).val();
        if(majorId != ''){
            var tchPlanSelObj = $('#tchPlanSel');
            tchPlanSelObj.empty();
            createSel(tchPlanSelObj,'tchPlanId','teachingPlan/doGetTeachingPlanItems.infc?subMajorId='+majorId,true);
        }
    });

    ////方向教学计划验证
    //$(document).on('change','#registryProvinceCode',function(){
    //    var provinceId = $(this).val();
    //    var citySelObj = $('#citySel');
    //    citySelObj.empty();
    //    $('#districtSel').empty();
    //    if(provinceId != ''){
    //        createSel(citySelObj,'registryCityCode','common/getAreaItemsByPid.infc?pid='+provinceId,false);
    //    }
    //});

    /**
     * 新增
     */
    $("#addBtn").click(function(){
        var bol = $("#dataForm").validationEngine("validate");
        if (bol) {
            var params = $('#dataForm').getValue();
            $.loadingBox.show();
            $.ajaxConnSend(this, 'student/doAddStudent.infc', params, function(data) {
                if (data.status == '1' && data.object) {
                    $.alert_success('新增成功!');
                    window.location.href = "../student/arcStudent.html";
                } else {
                    $.alert_error('新增失败');
                }
            }, function() {
                $.loadingBox.close();
            });
        }
    });




    /**
     * 构造本页面的下拉框控件
     * @param obj
     * @param url
     */
    function createSel(obj,name,url,isRequired){
        var optionHtml = '<div class="data_input">';
        optionHtml += '<div class="select_box noborder">';
        if(isRequired){
            optionHtml += '<select id="'+name+'" name="'+name+'" class="validate[required]">';
        }else{
            optionHtml += '<select id="'+name+'" name="'+name+'">';
        }
        optionHtml += '<option value ="">--请选择--</option>';
        $.ajaxConnSend(this, url,null, function(data) {
            var items = data['object'];
            for(var i = 0; i < items.length; i++){
                var item = items[i];
                optionHtml += '<option value ="'+item['code']+'">'+item['text']+'</option>';
            }
            //if(isRequired){
            //    optionHtml += '</select></div><i>*</i>';
            //}else{
                optionHtml += '</select></div>';
            //}
            obj.append(optionHtml);
        });

    }

});