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

function create_eventlisteners()
{
  var dropdown_el;
  var i,subel;

    dropdown_el =document.getElementsByClassName("dropdown");
    dropdown_el[0].addEventListener("mouseover",function()
      {this.style.backgroundColor="red";})
    dropdown_el[0].addEventListener("mouseout",function()
      {this.style.backgroundColor="transparent";})

  dropdown_el = document.getElementById("dropdown-content");
  subel= dropdown_el.querySelectorAll("a");
  for(i=0;i<subel.length;i++)
    {
      subel[i].addEventListener("mouseover",function(){mOver_a(this);})
      subel[i].addEventListener("mouseout", function(){ mOut_a(this);})
    }
  dropdown_el = document.getElementById("dropdown-content1");
  subel= dropdown_el.querySelectorAll("a");
    for(i=0;i<subel.length;i++)
     {
      subel[i].addEventListener("mouseover",function(){ mOver_a(this);})
      subel[i].addEventListener("mouseout", function(){ mOut_a(this);})
    }

    dropdown_el =document.getElementsByClassName("dropdown");
    dropdown_el[0].addEventListener("mouseover",function()
      {document.getElementById("dropdown-content").style.display="block";})
    dropdown_el[0].addEventListener("mouseout",function()
      {document.getElementById("dropdown-content").style.display="none";})

      dropdown_el =document.getElementsByClassName("divicons");
    for(i=0;i<dropdown_el.length;i++)
    {
      subel = dropdown_el[i].getElementsByClassName("divicons1");
      subel[0].addEventListener("mouseover",function(){this.style.opacity = "1";});
      subel[0].addEventListener("mouseout",function(){this.style.opacity = "0";});
    }
    
  document.getElementById("a_flat").addEventListener("mouseover",function()
      {this.style.backgroundColor="red";});
  document.getElementById("a_flat").addEventListener("mouseout",function()
      {this.style.backgroundColor="transparent";});

  document.getElementById("a_work").addEventListener("mouseover",function()
      {this.style.backgroundColor="red";});
  document.getElementById("a_work").addEventListener("mouseout",function()
      {this.style.backgroundColor="transparent";});    

  document.getElementById("dropdown1").addEventListener("mouseover",
    function(){document.getElementById("dropbtn").style.backgroundColor="red";})
  document.getElementById("dropdown1").addEventListener("mouseout",
    function(){document.getElementById("dropbtn").style.backgroundColor="black";})   
        

     
}