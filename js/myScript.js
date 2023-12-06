/*
Colby Mei
Nov 2023
GUI1
*/

var TABLEMADE = false;
var TABINDEX = 1;

function generateNewTable(event) { // get data from labels
  let mincols = parseInt(document.getElementById("mincols").value);
  let maxcols = parseInt(document.getElementById("maxcols").value);
  let minrows = parseInt(document.getElementById("minrows").value);
  let maxrows = parseInt(document.getElementById("maxrows").value);

  // console.log(mincols); // tests
  // console.log(maxcols);
  // console.log(minrows);
  // console.log(maxrows);

  var cols = maxcols - mincols; // differences
  var rows = maxrows - minrows;

  // console.log(cols); // tests
  // console.log(rows);
  // console.log(this);

  if (mincols > maxcols){ // checks valid column inputs
    document.querySelector(".column-error").innerHTML = "Make sure the maximum column value is larger than the minimum column value.";
    document.querySelector(".column-error").style.display = "block";
    // event.preventDefault();
    return false;
 }
  document.querySelector(".column-error").innerHTML = ""; // removes error when right

 if (minrows > maxrows){ // checks valid rows
    document.querySelector(".row-error").innerHTML = "Make sure the maximum row value is larger than the minimum row value.";
    document.querySelector(".row-error").style.display = "block";
    // event.preventDefault();
    return false;
 }
  document.querySelector(".row-error").innerHTML = ""; // removes error when right

  var html = "<thead> <tr> <th id=\"brick\"> </th>"; // sets table

  for (var i = minrows; i <= maxrows ;i++) { // top header row
    html += "<th>" + i + "</th>";
  }
  html += "</tr> </thead> <tbody> ";

  for (var i = mincols; i <= maxcols; i++){
    html += "<tr> <th>" + i + "</td>"; // left header column

      for(var j = minrows; j <= maxrows; j++){
        html += "<td>" + i*j + "</td>"; // comutes multiplication
        // console.log("data: " + i*j); // tests
      }

    html += "</tr>"; // ends row
  }
  html += "</tbody>"; // ends table

  // console.log(html); // tests
  // console.log(document.getElementById("table"));
  var num_tabs = $("div#tabs ul li").length;
  // console.log(num_tabs);
  document.getElementById("table" + num_tabs).innerHTML=html; // updates table in html
  TABLEMADE = true;
}

function updateTable(event) { // get data from labels
  let mincols = parseInt(document.getElementById("mincols").value);
  let maxcols = parseInt(document.getElementById("maxcols").value);
  let minrows = parseInt(document.getElementById("minrows").value);
  let maxrows = parseInt(document.getElementById("maxrows").value);

  // console.log(mincols); // tests
  // console.log(maxcols);
  // console.log(minrows);
  // console.log(maxrows);

  var cols = maxcols - mincols; // differences
  var rows = maxrows - minrows;

  // console.log(cols); // tests
  // console.log(rows);
  // console.log(this);

  if (mincols > maxcols){ // checks valid column inputs
    document.querySelector(".column-error").innerHTML = "Make sure the maximum column value is larger than the minimum column value.";
    document.querySelector(".column-error").style.display = "block";
    // event.preventDefault();
    return false;
 }
  document.querySelector(".column-error").innerHTML = ""; // removes error when right

 if (minrows > maxrows){ // checks valid rows
    document.querySelector(".row-error").innerHTML = "Make sure the maximum row value is larger than the minimum row value.";
    document.querySelector(".row-error").style.display = "block";
    // event.preventDefault();
    return false;
 }
  document.querySelector(".row-error").innerHTML = ""; // removes error when right

  var html = "<thead> <tr> <th id=\"brick\"> </th>"; // sets table

  for (var i = minrows; i <= maxrows ;i++) { // top header row
    html += "<th>" + i + "</th>";
  }
  html += "</tr> </thead> <tbody> ";

  for (var i = mincols; i <= maxcols; i++){
    html += "<tr> <th>" + i + "</td>"; // left header column

      for(var j = minrows; j <= maxrows; j++){
        html += "<td>" + i*j + "</td>"; // comutes multiplication
        // console.log("data: " + i*j); // tests
      }

    html += "</tr>"; // ends row
  }
  html += "</tbody>"; // ends table

  // console.log(html); // tests
  // console.log(document.getElementById("table"));
  document.getElementById("table" + TABINDEX).innerHTML=html; // updates table in html
  TABLEMADE = true;
}

$(document).ready(function(){
  $("#colsrows").validate({ // validate rules for each of the 4 inputs
    rules:{
      mincols:{
        required: true,
        checkInt: true,
        range: [-50, 50]
      },
      maxcols:{
        required: true,
        checkInt: true,
        range: [-50, 50],
      },
      minrows:{
        required: true,
        checkInt: true,
        range: [-50, 50]
      },
      maxrows:{
        required: true,
        checkInt: true,
        range: [-50, 50]
      }
    },
    messages:{ // custom error message when not in range
      mincols:{
        range: "Please enter a value within the range -50 and 50."
      },
      maxcols:{
        range: "Please enter a value within the range -50 and 50."
      },
      minrows:{
        range: "Please enter a value within the range -50 and 50."
      },
      maxrows:{
        range: "Please enter a value within the range -50 and 50."
      }
    }
  });

  // $('#button').click(generateTable);
});

jQuery.validator.addMethod("checkInt", function(value, element) { // custom rule to check int
  return this.optional(element) || (Number.isInteger(parseFloat(value)));
}, "Please enter a valid integer.");

$(function () {
  $("#slider1").slider({ // the 4 sliders for each input
    min: -50, max: 50, step: 1, value: 0,
    slide: function(event, ui) { // binds slider to update box
      $("#mincols").val(ui.value);
    }
  });
  $("#slider2").slider({
    min: -50, max: 50, step: 1, value: 0,
    slide: function(event, ui) {
      $("#maxcols").val(ui.value);
    }
  });
  $("#slider3").slider({
    min: -50, max: 50, step: 1, value: 0,
    slide: function(event, ui) {
      $("#minrows").val(ui.value);
    }
  });
  $("#slider4").slider({
    min: -50, max: 50, step: 1, value: 0,
    slide: function(event, ui) {
      $("#maxrows").val(ui.value);
    }
  });
  $("#tabs").tabs({
    activate: function (event, ui) {
        // console.log(ui.newTab.index());
        // TABINDEX = ui.newTab.index() + 1;
        // console.log(TABINDEX);
    }
});

  var initialValue = $("#slider1").slider("option", "value"); // initializes each input to 0
  $("#mincols").val(initialValue);
  $("#maxcols").val(initialValue);
  $("#minrows").val(initialValue);
  $("#maxrows").val(initialValue);
  $("#mincols").change(function() { // binds box to update the 4 sliders
    var oldVal = $("#slider1").slider("option", "value");
    var newVal = $(this).val();
    if (isNaN(newVal) || newVal < -50 || newVal > 50) {
      $("#mincols").val(oldVal);
    } else {
      $("#slider1").slider("option", "value", newVal);
    }
  });
  $("#maxcols").change(function() {
    var oldVal = $("#slider2").slider("option", "value");
    var newVal = $(this).val();
    if (isNaN(newVal) || newVal < -50 || newVal > 50) {
      $("#maxcols").val(oldVal);
    } else {
      $("#slider2").slider("option", "value", newVal);
    }
  });
  $("#minrows").change(function() {
    var oldVal = $("#slider3").slider("option", "value");
    var newVal = $(this).val();
    if (isNaN(newVal) || newVal < -50 || newVal > 50) {
      $("#minrows").val(oldVal);
    } else {
      $("#slider3").slider("option", "value", newVal);
    }
  });
  $("#maxrows").change(function() {
    var oldVal = $("#slider4").slider("option", "value");
    var newVal = $(this).val();
    if (isNaN(newVal) || newVal < -50 || newVal > 50) {
      $("#maxrows").val(oldVal);
    } else {
      $("#slider4").slider("option", "value", newVal);
    }
  });
});

$(document).on('mouseup keyup', function () { // dynamically updates tables and activates button
  TABINDEX = $("#tabs").tabs('option', 'active') + 1;
  console.log(TABINDEX);
  if ($('#colsrows').validate().checkForm()) {
    $('#button').prop('disabled', false);
    // console.log("update");
    if(TABLEMADE) {
      // console.log(TABINDEX);
      updateTable(TABINDEX);
    }
  }
  else {
    $('#button').prop('disabled', true);
  }
});

$(document).ready(function() { // tabs demo
  $("div#tabs").tabs();

  $("button#button").click(function() {

    var num_tabs = $("div#tabs ul li").length + 1;

    $("div#tabs ul").append(
      "<li><a href='#tab" + num_tabs + "'>" +
      $("#mincols").val() + " to " +
      $("#maxcols").val() + " by " +
      $("#minrows").val() + " to " +
      $("#maxrows").val()
      + "</a></li>"
    );
    $("div#tabs").append(
      "<div id='tab" + num_tabs + "'>#" + num_tabs + 
      "<table id='table" + num_tabs + "'>" + "</table>" +
      "</div>"
    );

    $("div#tabs").tabs("refresh");
    generateNewTable();
    $("div#tabs").tabs("refresh");
  });

  $("button#rem-tab").click(function() {
    var tabIdStr = "#tab" + $("#tabrem").val();
    // console.log($("#mincols").val());
    // console.log(tabIdStr);
    // Remove the panel
    $( tabIdStr ).remove();
    // Refresh the tabs widget
    $("div#tabs").tabs("refresh");

    // Remove the tab
    var hrefStr = "a[href='" + tabIdStr + "']";
    $( hrefStr ).closest("li").remove();
    $( hrefStr ).closest("div").remove();
    $("div#tabs").tabs("refresh");
  });

  $("button#destroy").click(function() {
    var num_tabs = $("div#tabs ul li").length + 1;
    for (var i = 0; i < num_tabs; i++) {
      var tabIdStr = "#tab" + i;

      // console.log(tabIdStr);
      // Remove the panel
      $( tabIdStr ).remove();
      // Refresh the tabs widget
      $("div#tabs").tabs("refresh");

      // Remove the tab
      var hrefStr = "a[href='" + tabIdStr + "']";
      $( hrefStr ).closest("li").remove();
      $( hrefStr ).closest("div").remove();
      $("div#tabs").tabs("refresh");
    }
    TABINDEX = 1;
  });
});
