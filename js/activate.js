// JavaScript Document

function toggleVisibility() {
 
 var myPanelClasses = document.getElementById("panelHolder").classList;
 
 
 if (myPanelClasses.contains("active")) {
 
    myPanelClasses.remove("active");
 
 } else {
 
    myPanelClasses.add("active");
 
 }
 
 if (myPanelClasses.contains("disabled")) {
 
    myPanelClasses.remove("disabled");
 
 } else {
 
    myPanelClasses.add("disabled");
 
 }
 
}