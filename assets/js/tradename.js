$(document).ready(function () {
  $("#btn_trade_pricing_detail_data").click(function () {
    var error_newReg = "";
    var error_renewal = "";

    if ($("#newReg").prop("checked") || $("#renewal").prop("checked")) {
      $("#trade_pricing_detail").removeClass("active active_tab1");
      $("#trade_pricing_detail").removeAttr("href data-toggle");
      $("#trade_pricing_detail_data").removeClass("active");
      $("#trade_pricing_detail").addClass("inactive_tab1");
      $("#trade_business_detail").removeClass("inactive_tab1");
      $("#trade_business_detail").addClass("active_tab1 active");
      $("#trade_business_detail").attr("href", "#trade_business_detail_data");
      $("#trade_business_detail").attr("data-toggle", "tab");
      $("#trade_business_detail_data").addClass("active in");
    } else {
      error_newReg = "Please select one";
      $("#error_newReg_renewal").text(error_newReg);
      $("#email").addClass("has-error");
      return false;
    }
  });

  $("#previous_btn_trade_business_detail_data").click(function () {
    $("#trade_business_detail").removeClass("active active_tab1");
    $("#trade_business_detail").removeAttr("href data-toggle");
    $("#trade_business_detail_data").removeClass("active in");
    $("#trade_business_detail").addClass("inactive_tab1");
    $("#trade_pricing_detail").removeClass("inactive_tab1");
    $("#trade_pricing_detail").addClass("active_tab1 active");
    $("#trade_pricing_detail").attr("href", "#trade_pricing_detail_data");
    $("#trade_pricing_detail").attr("data-toggle", "tab");
    $("#trade_pricing_detail_data").addClass("active in");
  });

  $("#btn_trade_business_detail_data").click(function () {
    var error_businessnameone = "";
    var error_businessIdentificationNo = "";
    var error_corporationName = "";
    var error_corporationNumber = "";
    var error_jurisdiction = "";
    var error_business_street_name = "";
    var error_business_city = "";
    var error_business_postal_code = "";
    var error_business_phone = "";
    var error_business_email = "";

    if ($.trim($("#businessnameone").val()).length == 0) {
      error_businessnameone = "Enter Business name";
      $("#error_businessNameone").text(error_businessnameone);
      $("#businessnameone").addClass("has-error");
    } else {
      error_businessnameone = "";
      $("#error_businessNameone").text(error_businessnameone);
      $("#businessnameone").removeClass("has-error");
    }

    if ($.trim($("#businessIdentificationNo").val()).length == 0) {
      error_businessIdentificationNo = "Enter Identification Number";
      $("#error_businessIdentificationNo").text(error_businessIdentificationNo);
      $("#businessIdentificationNo").addClass("has-error");
    } else {
      error_businessIdentificationNo = "";
      $("#error_businessIdentificationNo").text(error_businessIdentificationNo);
      $("#businessIdentificationNo").removeClass("has-error");
    }

    if ($.trim($("#corporationName").val()).length == 0) {
      error_corporationName = "Enter Corporation Name";
      $("#error_corporationName").text(error_corporationName);
      $("#corporationName").addClass("has-error");
    } else {
      error_corporationName = "";
      $("#error_corporationName").text(error_corporationName);
      $("#corporationName").removeClass("has-error");
    }

    if ($.trim($("#corporationNumber").val()).length == 0) {
      error_corporationNumber = "Enter Corporation Number";
      $("#error_corporationNumber").text(error_corporationNumber);
      $("#corporationNumber").addClass("has-error");
    } else {
      error_corporationNumber = "";
      $("#error_corporationNumber").text(error_corporationNumber);
      $("#corporationNumber").removeClass("has-error");
    }

    if ($.trim($("#jurisdiction").val()).length == 0) {
      error_jurisdiction = "Enter Jurisdiction";
      $("#error_jurisdiction").text(error_jurisdiction);
      $("#corporationNumber").addClass("has-error");
    } else {
      error_jurisdiction = "";
      $("#error_jurisdiction").text(error_corporationNumber);
      $("#jurisdiction").removeClass("has-error");
    }

    if ($.trim($("#business_street_name").val()).length == 0) {
      error_business_street_name = "Enter Street Name";
      $("#error_business_street_name").text(error_business_street_name);
      $("#business_street_name").addClass("has-error");
    } else {
      error_business_street_name = "";
      $("#error_business_street_name").text(error_business_street_name);
      $("#business_street_name").removeClass("has-error");
    }

    if ($.trim($("#business_city").val()).length == 0) {
      error_business_city = "Enter city name";
      $("#error_business_city").text(error_business_city);
      $("#business_city").addClass("has-error");
    } else {
      error_business_city = "";
      $("#error_business_city").text(error_business_city);
      $("#business_city").removeClass("has-error");
    }

    if ($.trim($("#business_postal_code").val()).length == 0) {
      error_business_postal_code = "Enter postal code";
      $("#error_business_postal_code").text(error_business_postal_code);
      $("#business_postal_code").addClass("has-error");
    } else {
      error_business_postal_code = "";
      $("#error_business_postal_code").text(error_business_postal_code);
      $("#business_postal_code").removeClass("has-error");
    }

    if ($.trim($("#business_phone").val()).length == 0) {
      error_business_phone = "Enter phone";
      $("#error_business_phone").text(error_business_phone);
      $("#business_phone").addClass("has-error");
    } else {
      error_business_phone = "";
      $("#error_business_phone").text(error_business_phone);
      $("#business_phone").removeClass("has-error");
    }

    if ($.trim($("#business_email").val()).length == 0) {
      error_business_email = "Enter email";
      $("#error_business_email").text(error_business_email);
      $("#business_email").addClass("has-error");
    } else {
      error_business_email = "";
      $("#error_business_email").text(error_business_email);
      $("#business_email").removeClass("has-error");
    }

    if (
      $("#businessnameone").val() != "" &&
      $("#businessIdentificationNo").val() != "" &&
      $("#corporationName").val() != "" &&
      $("#corporationNumber").val() != "" &&
      $("#jurisdiction").val() != "" &&
      $("#business_street_name").val() != "" &&
      $("#business_city").val() != "" &&
      $("#business_postal_code").val() != "" &&
      $("#business_phone").val() != "" &&
      $("#business_email").val() != ""
    ) {
      $("#trade_business_detail").removeClass("active active_tab1");
      $("#trade_business_detail").removeAttr("href data-toggle");
      $("#trade_business_detail_data").removeClass("active");
      $("#trade_business_detail").addClass("inactive_tab1");
      $("#trade_mailing_detail").removeClass("inactive_tab1");
      $("#trade_mailing_detail").addClass("active_tab1 active");
      $("#trade_mailing_detail").attr("href", "#trade_mailing_detail_data");
      $("#trade_mailing_detail").attr("data-toggle", "tab");
      $("#trade_mailing_detail_data").addClass("active in");
    } else {
      return false;
    }
  });

  $("#previous_btn_trade_mailing_detail_data").click(function () {
    $("#trade_mailing_detail").removeClass("active active_tab1");
    $("#trade_mailing_detail").removeAttr("href data-toggle");
    $("#trade_mailing_detail_data").removeClass("active in");
    $("#trade_mailing_detail").addClass("inactive_tab1");
    $("#trade_business_detail").removeClass("inactive_tab1");
    $("#trade_business_detail").addClass("active_tab1 active");
    $("#trade_business_detail").attr("href", "#trade_business_detail_data");
    $("#trade_business_detail").attr("data-toggle", "tab");
    $("#trade_business_detail_data").addClass("active in");
  });

  $("#btn_trade_mailing_detail_data").click(function () {
    var error_mail_street_name = "";
    var error_mail_city = "";
    var error_mail_province_state = "";
    var error_mail_country = "";
    var error_mail_postal_code = "";
    var error_mail_phone = "";
    var error_mail_email = "";

    if ($.trim($("#mail_street_name").val()).length == 0) {
      error_mail_street_name = "Enter street name";
      $("#error_mail_street_name").text(error_mail_street_name);
      $("#mail_street_name").addClass("has-error");
    } else {
      error_mail_street_name = "";
      $("#error_mail_street_name").text(error_mail_street_name);
      $("#mail_street_name").removeClass("has-error");
    }

    if ($.trim($("#mail_city").val()).length == 0) {
      error_mail_city = "Enter city";
      $("#error_mail_city").text(error_mail_city);
      $("#mail_city").addClass("has-error");
    } else {
      error_mail_city = "";
      $("#error_mail_city").text(error_mail_city);
      $("#mail_city").removeClass("has-error");
    }

    if ($.trim($("#mail_province_state").val()).length == 0) {
      error_mail_province_state = "Enter province/state";
      $("#error_mail_province_state").text(error_mail_province_state);
      $("#mail_province_state").addClass("has-error");
    } else {
      error_mail_province_state = "";
      $("#error_mail_province_state").text(error_mail_province_state);
      $("#mail_province_state").removeClass("has-error");
    }

    if ($.trim($("#mail_country").val()).length == 0) {
      error_mail_country = "Enter country";
      $("#error_mail_country").text(error_mail_country);
      $("#mail_country").addClass("has-error");
    } else {
      error_mail_country = "";
      $("#error_mail_country").text(error_mail_country);
      $("#mail_country").removeClass("has-error");
    }

    if ($.trim($("#mail_postal_code").val()).length == 0) {
      error_mail_postal_code = "Enter postal code";
      $("#error_mail_postal_code").text(error_mail_postal_code);
      $("#mail_postal_code").addClass("has-error");
    } else {
      error_mail_postal_code = "";
      $("#error_mail_postal_code").text(error_mail_postal_code);
      $("#mail_postal_code").removeClass("has-error");
    }

    if ($.trim($("#mail_phone").val()).length == 0) {
      error_mail_phone = "Enter phone";
      $("#error_mail_phone").text(error_mail_phone);
      $("#mail_phone").addClass("has-error");
    } else {
      error_mail_phone = "";
      $("#error_mail_phone").text(error_mail_phone);
      $("#mail_phone").removeClass("has-error");
    }

    if ($.trim($("#mail_email").val()).length == 0) {
      error_mail_email = "Enter email";
      $("#error_mail_email").text(error_mail_email);
      $("#mail_email").addClass("has-error");
    } else {
      error_mail_email = "";
      $("#error_mail_email").text(error_mail_email);
      $("#mail_email").removeClass("has-error");
    }

    if (
      $("#mail_street_name").val() != "" &&
      $("#mail_city").val() != "" &&
      $("#mail_province_state").val() != "" &&
      $("#mail_country").val() != "" &&
      $("#mail_postal_code").val() != "" &&
      $("#mail_phone").val() != "" &&
      $("#mail_email").val() != ""
    ) {
      $("#trade_mailing_detail").removeClass("active active_tab1");
      $("#trade_mailing_detail").removeAttr("href data-toggle");
      $("#trade_mailing_detail_data").removeClass("active");
      $("#trade_mailing_detail").addClass("inactive_tab1");

      $("#trade_owner_detail").removeClass("inactive_tab1");
      $("#trade_owner_detail").addClass("active_tab1 active");
      $("#trade_owner_detail").attr("href", "#trade_owner_detail_data");
      $("#trade_owner_detail").attr("data-toggle", "tab");
      $("#trade_owner_detail_data").addClass("active in");
    } else {
      return false;
    }
  });

  $("#previous_btn_business_owner__detail_data").click(function () {
    $("#trade_owner_detail").removeClass("active active_tab1");
    $("#trade_owner_detail").removeAttr("href data-toggle");
    $("#trade_owner_detail_data").removeClass("active in");
    $("#trade_owner_detail").addClass("inactive_tab1");
    $("#trade_mailing_detail").removeClass("inactive_tab1");
    $("#trade_mailing_detail").addClass("active_tab1 active");
    $("#trade_mailing_detail").attr("href", "#trade_mailing_detail_data");
    $("#trade_mailing_detail").attr("data-toggle", "tab");
    $("#trade_mailing_detail_data").addClass("active in");
  });

  $("#btn_trade_owner_detail_data").click(function () {
    var error_director_fname = "";
    var error_director_lname = "";
    var error_director_contact = "";
    var error_director_emailid = "";
    var error_director_street_name = "";
    var error_director_city = "";
    var error_director_province_state = "";
    var error_director_postal_code = "";
    var error_director_country = "";
    var error_director_phone = "";
    var error_director_email = "";

    if ($.trim($("#director_fname").val()).length == 0) {
      error_director_fname = "Enter first name";
      $("#error_director_fname").text(error_director_fname);
      $("#director_fname").addClass("has-error");
    } else {
      error_director_fname = "";
      $("#error_director_fname").text(error_director_fname);
      $("#director_fname").removeClass("has-error");
    }

    if ($.trim($("#director_lname").val()).length == 0) {
      error_director_lname = "Enter last name";
      $("#error_director_lname").text(error_director_lname);
      $("#director_lname").addClass("has-error");
    } else {
      error_director_lname = "";
      $("#error_director_lname").text(error_director_lname);
      $("#director_lname").removeClass("has-error");
    }

    if ($.trim($("#director_contact").val()).length == 0) {
      error_director_contact = "Enter contact no";
      $("#error_director_contact").text(error_director_contact);
      $("#director_contact").addClass("has-error");
    } else {
      error_director_contact = "";
      $("#error_director_contact").text(error_director_contact);
      $("#director_contact").removeClass("has-error");
    }

    if ($.trim($("#director_emailid").val()).length == 0) {
      error_director_emailid = "Enter email id";
      $("#error_director_emailid").text(error_director_emailid);
      $("#director_emailid").addClass("has-error");
    } else {
      error_director_emailid = "";
      $("#error_director_emailid").text(error_director_emailid);
      $("#director_emailid").removeClass("has-error");
    }

    if ($.trim($("#director_street_name").val()).length == 0) {
      error_director_street_name = "Enter street name";
      $("#error_director_street_name").text(error_director_street_name);
      $("#director_street_name").addClass("has-error");
    } else {
      error_director_street_name = "";
      $("#error_director_street_name").text(error_director_street_name);
      $("#director_street_name").removeClass("has-error");
    }

    if ($.trim($("#director_city").val()).length == 0) {
      error_director_city = "Enter city";
      $("#error_director_city").text(error_director_city);
      $("#director_city").addClass("has-error");
    } else {
      error_director_city = "";
      $("#error_director_city").text(error_director_city);
      $("#director_city").removeClass("has-error");
    }

    if ($.trim($("#director_province_state").val()).length == 0) {
      error_director_province_state = "Enter province/state";
      $("#error_owner_province_state_one").text(error_director_province_state);
      $("#director_province_state").addClass("has-error");
    } else {
      error_director_province_state = "";
      $("#error_director_province_state").text(error_director_province_state);
      $("#director_province_state").removeClass("has-error");
    }

    if ($.trim($("#director_postal_code").val()).length == 0) {
      error_director_postal_code = "Enter postal code";
      $("#error_director_postal_code").text(error_director_postal_code);
      $("#director_postal_code").addClass("has-error");
    } else {
      error_director_postal_code = "";
      $("#error_director_postal_code").text(error_director_postal_code);
      $("#director_postal_code").removeClass("has-error");
    }

    if ($.trim($("#director_country").val()).length == 0) {
      error_director_country = "Enter country";
      $("#error_director_country").text(error_director_country);
      $("#director_country").addClass("has-error");
    } else {
      error_director_country = "";
      $("#error_director_country").text(error_director_country);
      $("#director_country").removeClass("has-error");
    }

    if ($.trim($("#director_phone").val()).length == 0) {
      error_director_phone = "Enter phone";
      $("#error_director_phone").text(error_director_phone);
      $("#director_phone").addClass("has-error");
    } else {
      error_director_phone = "";
      $("#error_director_phone").text(error_director_phone);
      $("#director_phone").removeClass("has-error");
    }

    if ($.trim($("#director_email").val()).length == 0) {
      error_director_email = "Enter email";
      $("#error_director_email").text(error_director_email);
      $("#director_email").addClass("has-error");
    } else {
      error_director_email = "";
      $("#error_director_email").text(error_director_email);
      $("#director_email").removeClass("has-error");
    }

    if (
      $("#director_fname").val() != "" &&
      $("#director_lname").val() != "" &&
      $("#director_contactno").val() != "" &&
      $("#director_emailid").val() != "" &&
      $("#director_street_name").val() != "" &&
      $("#director_city").val() != "" &&
      $("#director_province_state").val() != "" &&
      $("#director_postal_code").val() != "" &&
      $("#director_country").val() != "" &&
      $("#director_phone").val() != "" &&
      $("#director_email").val() != ""
    ) {
      $("#trade_owner_detail").removeClass("active active_tab1");
      $("#trade_owner_detail").removeAttr("href data-toggle");
      $("#trade_owner_detail_data").removeClass("active");
      $("#trade_owner_detail").addClass("inactive_tab1");

      $("#additional_detail").removeClass("inactive_tab1");
      $("#additional_detail").addClass("active_tab1 active");
      $("#additional_detail").attr("href", "#additional_detail_data");
      $("#additional_detail").attr("data-toggle", "tab");
      $("#additional_detail_data").addClass("active in");
    } else {
      return false;
    }
  });

  $("#previous_btn_additional_detail_data").click(function () {
    $("#additional_detail").removeClass("active active_tab1");
    $("#additional_detail").removeAttr("href data-toggle");
    $("#additional_detail_data").removeClass("active in");
    $("#additional_detail").addClass("inactive_tab1");
    $("#trade_owner_detail").removeClass("inactive_tab1");
    $("#trade_owner_detail").addClass("active_tab1 active");
    $("#trade_owner_detail").attr("href", "#trade_owner_detail_data");
    $("#trade_owner_detail").attr("data-toggle", "tab");
    $("#trade_owner_detail_data").addClass("active in");
  });
});
