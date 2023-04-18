var appUrl = 'https://groupin.app/ajax-request.php';
//var appUrl = 'http://localhost:8012/groupin_website/ajax-request.php';

function submit_early_access(formid){
    var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var flag = 1;
    $('#div_' + formid + ' .errors').html('').show();
    var email_address = $('#' + formid + ' #email_address').val();
    if (email_address == "") {
        $('#error_email_address').html('We need your email to notify you');
        flag = 0;
    }
    if(!emailPattern.test(email_address)) {
        $('#error_email_address').html('Please enter valid email');
        flag = 0;
    }
    if (flag == 0) {
        return false;
    } else {
        $(".btnsubmit").prop("disabled", true);
        $.ajax({
            url: appUrl,
            type: 'post',
            data: '&nodename=earlyaccess&email_address=' + email_address,
            success: function (response) {
                $("#" +formid+ " .btnsubmit").prop("disabled", false);
                try {
                    var obj = $.parseJSON(response);
                    if (obj.status == 'success') {
                        $('#' + formid)[0].reset();
                        if (obj.message != undefined && obj.message != "") {
                            alert(obj.message);
                        }
                    } else {
                        $.each(obj['errors'], function (key, value) {
                            $('#div_' + formid + ' #error_' + key).html(value);
                        });
                        if (obj.message != undefined && obj.message != "") {
                            alert(obj.message);
                        }
                    }
                } catch (e) {
                    $("#" +formid+ " .btnsubmit").prop("disabled", false);
                    return false;
                }
            }
        });
    }
}


function send_contact_us(formid) {
    var mobilePattern= /[0-5]{1}[0-9]{9}/;
    var mobilePatternChar =/[^0-9]/g;
    var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var flag = 1;
    $('#' + formid + ' .errors').html('').show();
    var fullname = $('#' + formid + ' #fullname').val();
    var emailaddress = $('#' + formid + ' #emailaddress').val();
    var mobilenumber = $('#' + formid + ' #mobilenumber').val();
    var message = $('#' + formid + ' #message').val();
    if (fullname == "") {
        $('#error_fullname').html('Name is required');
        flag = 0;
    }
    if (fullname.length < 3) {
        $('#error_fullname').html('Name should contains more than 2 letters');
        flag = 0;
    }    
    if (emailaddress == "") {
        $('#error_emailaddress').html('email is required');
        flag = 0;
    }
    if(!emailPattern.test(emailaddress)) {
        $('#error_emailaddress').html('Please enter valid email');
        flag = 0;
    }
    if (mobilenumber == "") {
        $('#error_mobilenumber').html('Mobile number is required');
        flag = 0;
    }
    if(mobilenumber.length!=10) {
        $('#error_mobilenumber').html('Please enter 10 digit mobile number');
        flag = 0;
    }
    if(mobilePattern.test(mobilenumber)) {
        $('#error_mobilenumber').html('Please enter valid number');
        flag = 0;
    }
    if(mobilePatternChar.test(mobilenumber)) {
        $('#error_mobilenumber').html('Please enter only numbers');
        flag = 0;
    }
    if (flag == 0) {
        return false;
    } else {
        $("#"+formid+" .btnsubmit").prop("disabled", true);
        $.ajax({
            url: appUrl,
            type: 'post',
            data: '&nodename=contactus&fullname=' + fullname + '&emailaddress=' + emailaddress + '&mobilenumber=' + mobilenumber + '&message=' + message,
            success: function (response) {
                $(".btnsubmit").prop("disabled", false);
                try {
                    var obj = $.parseJSON(response);
                    if (obj.status == 'success') {
                        $('#' + formid)[0].reset();
                        if (obj.message != undefined && obj.message != "") {
                            alert(obj.message);
                        }
                    } else {
                        $.each(obj['errors'], function (key, value) {
                            $('#' + formid + ' #error_' + key).html(value);
                        });
                        if (obj.message != undefined && obj.message != "") {
                            alert(obj.message);
                        }
                    }
                } catch (e) {
                    $("#"+formid+" .btnsubmit").prop("disabled", false);
                    return false;
                }
            }
        });
    }
}

function submit_enquiry(formid) {
    var mobilePattern= /[0-5]{1}[0-9]{9}/;
    var mobilePatternChar =/[^0-9]/g;
    var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var flag = 1;
    $('#' + formid + ' .errors').html('').show();
    var enq_full_name = $('#' + formid + ' #enq_full_name').val();
    var enq_mobile_number = $('#' + formid + ' #enq_mobile_number').val();
    var enq_email_address = $('#' + formid + ' #enq_email_address').val();
    var enq_purpose = $('#' + formid + ' #enq_purpose').val();
    var enq_message = $('#' + formid + ' #enq_message').val();
    var enq_partner_type = $('#' + formid + ' #enq_partner_type').val();
    if (enq_full_name == "") {
        $('#error_enq_full_name').html('Please write your name');
        flag = 0;
    }
    if (enq_full_name.length < 3) {
        $('#error_enq_full_name').html('Name should contains more than 2 letters');
        flag = 0;
    } 
    if (enq_mobile_number == "") {
        $('#error_enq_mobile_number').html('Mobile number not provided');
        flag = 0;
    }
    if(enq_mobile_number.length!=10) {
        $('#error_enq_mobile_number').html('Please enter 10 digit mobile number');
        flag = 0;
    }
    if(mobilePattern.test(enq_mobile_number)) {
        $('#error_enq_mobile_number').html('Please enter valid number');
        flag = 0;
    }
    if(mobilePatternChar.test(enq_mobile_number)) {
        $('#error_enq_mobile_number').html('Please enter only numbers');
        flag = 0;
    }
    if (enq_email_address == "") {
        $('#error_enq_email_address').html('E-mail not provided');
        flag = 0;
    }
    if(!emailPattern.test(enq_email_address)) {
        $('#error_enq_email_address').html('Please enter valid email');
        flag = 0;
    }
    if (enq_partner_type == "") {
        $('#error_enq_partner_type').html('Select your partnership');
        flag = 0;
    }
    if (enq_message == "") {
        $('#error_enq_message').html('Share your Enquiry');
        flag = 0;
    }
    if (flag == 0) {
        return false;
    } else {
        $("#"+formid+" .btnsubmit").prop("disabled", true);
        $.ajax({
            url: appUrl,
            type: 'post',
            data: '&nodename=enquiry&enq_full_name=' + enq_full_name + '&enq_mobile_number=' + enq_mobile_number + '&enq_email_address=' + enq_email_address + '&enq_purpose=' + enq_purpose + '&enq_message=' + enq_message + '&enq_partner_type=' + enq_partner_type,
            success: function (response) {
                $(".formsubmited").prop("disabled", false);
                try {
                    var obj = $.parseJSON(response);
                    if (obj.status == 'success') {
                        $('#' + formid)[0].reset();
                        if (obj.message != undefined && obj.message != "") {
                            alert(obj.message);
                        }
                    } else {
                        $.each(obj['errors'], function (key, value) {
                            $('#' + formid + ' #error_' + key).html(value);
                        });
                        if (obj.message != undefined && obj.message != "") {
                            alert(obj.message);
                        }
                    }
                } catch (e) {
                    $("#"+formid+" .btnsubmit").prop("disabled", false);
                    return false;
                }
            }
        });
    }
}

function submit_job_application(formid) {
    var mobilePattern= /[0-5]{1}[0-9]{9}/;
    var mobilePatternChar =/[^0-9]/g;
    var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var resumeval= /(\.pdf|\.doc|\.docx)$/i;
    var flag = 1;
    $('#' + formid + ' .errors').html('').show();
    var name = $('#' + formid + ' #name').val();
    var email_address = $('#' + formid + ' #email_address').val();
    var mobile_number = $('#' + formid + ' #mobile_number').val();
    var experience = $('#' + formid + ' #experience').val();
    var resume = $('#' + formid + ' #resume').val();
    if (name == "") {
        $('#error_name').html('Your name is required');
        flag = 0;
    }
    if (name.length < 3) {
        $('#error_name').html('Name should contains more than 2 letters');
        flag = 0;
    }
    if (email_address == "") {
        $('#error_email_address').html('Your email address is required');
        flag = 0;
    }
    if(!emailPattern.test(email_address)) {
        $('#error_email_address').html('Please enter valid email');
        flag = 0;
    }
    if (mobile_number == "") {
        $('#error_mobile_number').html('Mobile number is required');
        flag = 0;
    }
    if(mobile_number.length!=10) {
        $('#error_mobile_number').html('Please enter 10 digit mobile number');
        flag = 0;
    }
    if(mobilePattern.test(mobile_number)) {
        $('#error_mobile_number').html('Please enter valid number');
        flag = 0;
    }
    if(mobilePatternChar.test(mobile_number)) {
        $('#error_mobile_number').html('Please enter only numbers');
        flag = 0;
    }
    if (mobile_number == "") {
        $('#error_position').html('You have to select position');
        flag = 0;
    }
    if (experience == "") {
        $('#error_experience').html('You have to give your experience');
        flag = 0;
    }
    if (resume == "") {
        $('#error_resume').html('Resume not uploaded');
        flag = 0;
    }
    if(!resumeval.exec(resume)) {
        $('#error_resume').html('Please upload .pdf or .doc formate');
        flag = 0;
    }
    if (flag == 0) {
        return false;
    } else {
        var formData = new FormData($("form#" + formid)[0]);
        formData.append('nodename', 'careers');
        $.ajax({
            url: appUrl,
            type: 'post',
            data: formData,
            async: false,
            cache: false,
            contentType: false,
            processData: false,
            success: function (response) {
                $(".formsubmited").prop("disabled", false);
                try {
                    var obj = $.parseJSON(response);
                    if (obj.status == 'success') {
                        $('#' + formid)[0].reset();
                        if (obj.message != undefined && obj.message != "") {
                            alert(obj.message);
                        }
                    } else {
                        $.each(obj['errors'], function (key, value) {
                            $('#' + formid + ' #error_' + key).html(value);
                        });
                        if (obj.message != undefined && obj.message != "") {
                            alert(obj.message);
                        }
                    }
                } catch (e) {
                    $(".formsubmited").prop("disabled", false);
                    return false;
                }
            }
        });
    }
}