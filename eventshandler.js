function mOver_a(ele)
{
    ele.style.backgroundColor = "aquamarine";
    ele.style.borderColor = "black"; 
}
function mOut_a(ele)
{
    ele.style.backgroundColor = "whitesmoke";
    ele.style.borderColor = "transparent";
}

function create_eventsfunctions()
{
  var dropdown_el;
  var i,subel;

    dropdown_el =document.getElementsByClassName("dropdown");
    dropdown_el[0].onmouseover=function(){this.style.backgroundColor="red";};
    dropdown_el[0].onmouseout=function() {this.style.backgroundColor="transparent";};

  dropdown_el = document.getElementById("dropdown-content");
  subel= dropdown_el.querySelectorAll("a");
  for(i=0;i<subel.length;i++)
    {
      subel[i].onmouseover=function(){mOver_a(this);};
      subel[i].onmouseout=function(){ mOut_a(this);};
    }
  dropdown_el = document.getElementById("dropdown-content1");
  subel= dropdown_el.querySelectorAll("a");
    for(i=0;i<subel.length;i++)
     {
      subel[i].onmouseover=function(){ mOver_a(this);};
      subel[i].onmouseout=function(){ mOut_a(this);};
    }

    dropdown_el =document.getElementsByClassName("dropdown");
    dropdown_el[0].onmouseover=function()
      {document.getElementById("dropdown-content").style.display="block";};
    dropdown_el[0].onmouseout=function()
      {document.getElementById("dropdown-content").style.display="none";};

      dropdown_el =document.getElementsByClassName("divicons");
    for(i=0;i<dropdown_el.length;i++)
    {
      subel = dropdown_el[i].getElementsByClassName("divicons1");
      subel[0].onmouseover=function(){this.style.opacity = "1";};
      subel[0].onmouseout=function(){this.style.opacity = "0";};
    }
    
  document.getElementById("a_flat").onmouseover=function()
    {this.style.backgroundColor="red";};
  document.getElementById("a_flat").onmouseout=function()
      {this.style.backgroundColor="transparent";};

  document.getElementById("a_work").onmouseover=function()
      {this.style.backgroundColor="red";};
  document.getElementById("a_work").onmouseout=function()
      {this.style.backgroundColor="transparent";};    

  document.getElementById("dropdown1").onmouseover=function()
    {document.getElementById("dropbtn").style.backgroundColor="red";};
  document.getElementById("dropdown1").onmouseout=function()
    {document.getElementById("dropbtn").style.backgroundColor="black";};  
        

     
}