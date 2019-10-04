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
  var element,subelement;
  var i;

  element = document.getElementById("dropdown-content");
  subelement= element.querySelectorAll("a");
  for(i=0;i<subelement.length;i++)
    {
      subelement[i].onmouseover=function(){mOver_a(this);};
      subelement[i].onmouseout=function(){ mOut_a(this);};
    }
    element = document.getElementById("dropdown-content1");
    subelement= element.querySelectorAll("a");
    for(i=0;i<subelement.length;i++)
     {
      subelement[i].onmouseover=function(){ mOver_a(this);};
      subelement[i].onmouseout=function(){ mOut_a(this);};
    }

    element =document.getElementsByClassName("dropdown");
    element[0].onmouseover=function()
      {document.getElementById("dropdown-content").style.display="block";
       this.style.backgroundColor="red";};
       element[0].onmouseout=function()
      {document.getElementById("dropdown-content").style.display="none";
        this.style.backgroundColor="transparent";};

        element =document.getElementsByClassName("divicons");
    for(i=0;i<element.length;i++)
    {
      subelement = element[i].getElementsByClassName("divicons1");
      subelement[0].onmouseover=function(){this.style.opacity = "1";};
      subelement[0].onmouseout=function(){this.style.opacity = "0";};
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
        
    element=document.getElementById("buttquit");
    element.onmouseover=function(){this.style.backgroundColor="red";};
    element.onmouseout=function(){this.style.backgroundColor="green";};
     
}