$(document).ready(function () {
  $("#btn_pricing_detail_data").click(function () {
    var error_newReg = "";
    var error_renewal = "";

    if ($("#newReg").prop("checked") || $("#renewal").prop("checked")) {
      $("#pricing_detail").removeClass("active active_tab1");
      $("#pricing_detail").removeAttr("href data-toggle");
      $("#pricing_detail_data").removeClass("active");
      $("#pricing_detail").addClass("inactive_tab1");
      $("#business_detail").removeClass("inactive_tab1");
      $("#business_detail").addClass("active_tab1 active");
      $("#business_detail").attr("href", "#business_detail_data");
      $("#business_detail").attr("data-toggle", "tab");
      $("#business_detail_data").addClass("active in");
    } else {
      error_newReg = "Please select one";
      $("#error_newReg_renewal").text(error_newReg);
      $("#email").addClass("has-error");
      return false;
    }
  });

  $("#previous_btn_business_detail_data").click(function () {
    $("#business_detail").removeClass("active active_tab1");
    $("#business_detail").removeAttr("href data-toggle");
    $("#business_detail_data").removeClass("active in");
    $("#business_detail").addClass("inactive_tab1");
    $("#pricing_detail").removeClass("inactive_tab1");
    $("#pricing_detail").addClass("active_tab1 active");
    $("#pricing_detail").attr("href", "#pricing_detail_data");
    $("#pricing_detail").attr("data-toggle", "tab");
    $("#pricing_detail_data").addClass("active in");
  });

  $("#btn_business_detail_data").click(function () {
    var error_businessnameone = "";
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
      $("#business_street_name").val() != "" &&
      $("#business_city").val() != "" &&
      $("#business_postal_code").val() != "" &&
      $("#business_phone").val() != "" &&
      $("#business_email").val() != ""
    ) {
      $("#business_detail").removeClass("active active_tab1");
      $("#business_detail").removeAttr("href data-toggle");
      $("#business_detail_data").removeClass("active");
      $("#business_detail").addClass("inactive_tab1");
      $("#mailing_detail").removeClass("inactive_tab1");
      $("#mailing_detail").addClass("active_tab1 active");
      $("#mailing_detail").attr("href", "#mailing_detail_data");
      $("#mailing_detail").attr("data-toggle", "tab");
      $("#mailing_detail_data").addClass("active in");
    } else {
      return false;
    }
  });

  $("#previous_btn_mailing_detail_data").click(function () {
    $("#mailing_detail").removeClass("active active_tab1");
    $("#mailing_detail").removeAttr("href data-toggle");
    $("#mailing_detail_data").removeClass("active in");
    $("#mailing_detail").addClass("inactive_tab1");
    $("#business_detail").removeClass("inactive_tab1");
    $("#business_detail").addClass("active_tab1 active");
    $("#business_detail").attr("href", "#business_detail_data");
    $("#business_detail").attr("data-toggle", "tab");
    $("#business_detail_data").addClass("active in");
  });

  $("#btn_mailing_detail_data").click(function () {
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
      $("#mailing_detail").removeClass("active active_tab1");
      $("#mailing_detail").removeAttr("href data-toggle");
      $("#mailing_detail_data").removeClass("active");
      $("#mailing_detail").addClass("inactive_tab1");

      $("#business_owner_detail").removeClass("inactive_tab1");
      $("#business_owner_detail").addClass("active_tab1 active");
      $("#business_owner_detail").attr("href", "#business_owner_detail_data");
      $("#business_owner_detail").attr("data-toggle", "tab");
      $("#business_owner_detail_data").addClass("active in");
    } else {
      return false;
    }
  });

  $("#previous_btn_business_owner__detail_data").click(function () {
    $("#business_owner_detail").removeClass("active active_tab1");
    $("#business_owner_detail").removeAttr("href data-toggle");
    $("#business_owner_detail_data").removeClass("active in");
    $("#business_owner_detail").addClass("inactive_tab1");
    $("#mailing_detail").removeClass("inactive_tab1");
    $("#mailing_detail").addClass("active_tab1 active");
    $("#mailing_detail").attr("href", "#mailing_detail_data");
    $("#mailing_detail").attr("data-toggle", "tab");
    $("#mailing_detail_data").addClass("active in");
  });

  $("#btn_business_owner_detail_data").click(function () {
    var error_owner_fname_one = "";
    var error_owner_lname_one = "";
    var error_owner_contactno = "";
    var error_owner_emailid = "";
    var error_owner_street_name_one = "";
    var error_owner_city_one = "";
    var error_owner_province_state_one = "";
    var error_owner_postal_code_one = "";
    var error_owner_country_one = "";
    var error_owner_phone = "";
    var error_owner_email = "";

    if ($.trim($("#owner_fname_one").val()).length == 0) {
      error_owner_fname_one = "Enter first name";
      $("#error_owner_fname_one").text(error_owner_fname_one);
      $("#owner_fname_one").addClass("has-error");
    } else {
      error_owner_fname_one = "";
      $("#error_owner_fname_one").text(error_owner_fname_one);
      $("#owner_fname_one").removeClass("has-error");
    }

    if ($.trim($("#owner_lname_one").val()).length == 0) {
      error_owner_lname_one = "Enter last name";
      $("#error_owner_lname_one").text(error_owner_lname_one);
      $("#owner_lname_one").addClass("has-error");
    } else {
      error_owner_lname_one = "";
      $("#error_owner_lname_one").text(error_owner_lname_one);
      $("#owner_lname_one").removeClass("has-error");
    }

    if ($.trim($("#owner_contactno").val()).length == 0) {
      error_owner_contactno = "Enter contact no";
      $("#error_owner_contactno").text(error_owner_contactno);
      $("#owner_contactno").addClass("has-error");
    } else {
      error_owner_contactno = "";
      $("#error_owner_contactno").text(error_owner_contactno);
      $("#owner_contactno").removeClass("has-error");
    }

    if ($.trim($("#owner_emailid").val()).length == 0) {
      error_owner_emailid = "Enter email id";
      $("#error_owner_emailid").text(error_owner_emailid);
      $("#owner_emailid").addClass("has-error");
    } else {
      error_owner_emailid = "";
      $("#error_owner_emailid").text(error_owner_emailid);
      $("#owner_emailid").removeClass("has-error");
    }

    if ($.trim($("#street_name").val()).length == 0) {
      error_owner_street_name_one = "Enter street name";
      $("#error_owner_street_name_one").text(error_owner_street_name_one);
      $("#street_name").addClass("has-error");
    } else {
      error_owner_street_name_one = "";
      $("#error_owner_street_name_one").text(error_owner_street_name_one);
      $("#street_name").removeClass("has-error");
    }

    if ($.trim($("#city").val()).length == 0) {
      error_owner_city_one = "Enter city";
      $("#error_owner_city_one").text(error_owner_city_one);
      $("#city").addClass("has-error");
    } else {
      error_owner_city_one = "";
      $("#error_owner_city_one").text(error_owner_city_one);
      $("#city").removeClass("has-error");
    }

    if ($.trim($("#province_state").val()).length == 0) {
      error_owner_province_state_one = "Enter province/state";
      $("#error_owner_province_state_one").text(error_owner_province_state_one);
      $("#province_state").addClass("has-error");
    } else {
      error_owner_province_state_one = "";
      $("#error_owner_province_state_one").text(error_owner_province_state_one);
      $("#province_state").removeClass("has-error");
    }

    if ($.trim($("#postal_code").val()).length == 0) {
      error_owner_postal_code_one = "Enter postal code";
      $("#error_owner_postal_code_one").text(error_owner_postal_code_one);
      $("#postal_code").addClass("has-error");
    } else {
      error_owner_postal_code_one = "";
      $("#error_owner_postal_code_one").text(error_owner_postal_code_one);
      $("#postal_code").removeClass("has-error");
    }

    if ($.trim($("#country").val()).length == 0) {
      error_owner_country_one = "Enter country";
      $("#error_owner_country_one").text(error_owner_country_one);
      $("#country").addClass("has-error");
    } else {
      error_owner_country_one = "";
      $("#error_owner_country_one").text(error_owner_country_one);
      $("#country").removeClass("has-error");
    }

    if ($.trim($("#phone").val()).length == 0) {
      error_owner_phone = "Enter phone";
      $("#error_owner_phone").text(error_owner_phone);
      $("#phone").addClass("has-error");
    } else {
      error_owner_phone = "";
      $("#error_owner_phone").text(error_owner_phone);
      $("#phone").removeClass("has-error");
    }

    if ($.trim($("#email").val()).length == 0) {
      error_owner_email = "Enter email";
      $("#error_owner_email").text(error_owner_email);
      $("#email").addClass("has-error");
    } else {
      error_owner_email = "";
      $("#error_owner_email").text(error_owner_email);
      $("#email").removeClass("has-error");
    }

    if (
      $("#owner_fname_one").val() != "" &&
      $("#owner_lname_one").val() != "" &&
      $("#owner_contactno").val() != "" &&
      $("#owner_emailid").val() != "" &&
      $("#street_name").val() != "" &&
      $("#city").val() != "" &&
      $("#province_state").val() != "" &&
      $("#postal_code").val() != "" &&
      $("#country").val() != "" &&
      $("#phone").val() != "" &&
      $("#email").val() != ""
    ) {
      $("#business_owner_detail").removeClass("active active_tab1");
      $("#business_owner_detail").removeAttr("href data-toggle");
      $("#business_owner_detail_data").removeClass("active");
      $("#business_owner_detail").addClass("inactive_tab1");

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
    $("#business_owner_detail").removeClass("inactive_tab1");
    $("#business_owner_detail").addClass("active_tab1 active");
    $("#business_owner_detail").attr("href", "#business_owner_detail_data");
    $("#business_owner_detail").attr("data-toggle", "tab");
    $("#business_owner_detail_data").addClass("active in");
  });
});
