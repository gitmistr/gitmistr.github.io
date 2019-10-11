    var settingscardnum = 0; //settings card number active
    var settingscard = []; //settings cards objects
    var settingscardlabel = []; // text for setting card
    settingscardlabel.push("Preferences cookie");
    settingscardlabel.push("Background color");
    settingscardlabel.push("Text color");
    
    function settcard0_action(chkbox0,chkbox1) //cookie selection sett. card
    {
      if(chkbox0 == true)
      {
        if(cookie_sel==0) //cookie disabled?
        {//coookie enable
        cookie_sel=1; //enable cookie, write settings to cookie
        cvalue=values_to_Cstring();
        setCookie("cookie#1", cvalue, 30);
        }
      }
     if(chkbox1== true) //cookie disabled
      {
        if(cookie_sel==1) //cookie enabeld?
       { //delete cookie
         cookie_sel=0;
         cvalue = "DELETED";
         setCookie("cookie#1", cvalue, 30);
        }

      }
    }
    function settcard1_action(new_index) //background color settings card
    {
      if(new_index == bgcolor_index) return;
      bgcolor_index=new_index;
      cvalue=values_to_Cstring();
      if(cookie_sel==1)  setCookie("cookie#1", cvalue, 30);
      mywebcolors();
    }

    function settcard2_action(new_index) //txt color settings card
    {
      if(new_index == txtcolor_index) return;
      txtcolor_index=new_index;
      cvalue=values_to_Cstring();
      if(cookie_sel==1)  setCookie("cookie#1", cvalue, 30);
      mywebcolors();
    }

    function Chxbox_rule0(boxindex)  
     {  
      var inp=settingscard[0].getElementsByTagName("INPUT");
      if(boxindex==0)
      {
        inp[1].checked = false;
        inp[0].checked = true; 
        settcard0_action(true,false);
      }
      if(boxindex==1)
     {
      inp[0].checked = false;
      inp[1].checked = true;  
      settcard0_action(false,true);
      
    }
       
    }

    function Chxbox_rule1(boxindex)  
     {  
      var inp=settingscard[1].getElementsByTagName("INPUT");
      var i;
      for(i=0;i<inp.length;i++)
      {
        inp[i].checked = false;
        if(boxindex==i)   
        {
          inp[i].checked = true;
          settcard1_action(i);
        }
      }
    }    
    function Chxbox_rule2(boxindex)  
     {  
      var inp=settingscard[2].getElementsByTagName("INPUT");
      var i;
      for(i=0;i<inp.length;i++)
      {
        inp[i].checked = false;
        if(boxindex==i)   
        {
          inp[i].checked = true;
          settcard2_action(i);
        }
      }
    }    
   
    function create_settcard0(disp) 
    {
     settingscard[0] = document.createElement("fieldset"); //get fieldset
     var leg = document.createElement("legend");
     var i =0,input_el,text_el;
     vartext = [];
     vartext.push("Enabled, automatic <br>");
     vartext.push("Disabled, cleared  <br>");
     //setmenucard[0].setAttribute("id", "field0");
     settingscard[0].style.display = "none";
     if(disp>0) settingscard[0].style.display = "block";
     leg.innerHTML = "Preferences Cookie";
     //settingscard[0].appendChild(leg);
     for(i=0;i<2;i++)
     {
      text_el=document.createElement("text"); 
      input_el=document.createElement("INPUT");
      if(cookie_sel==0)
       {
         if(i==1) input_el.checked = true; 
       }
      if(cookie_sel==1)
       {
         if(i==0) input_el.checked = true; 
       }
      input_el.setAttribute("type", "checkbox");
      input_el.setAttribute("onClick", "Chxbox_rule0("+i+")");
      text_el.innerHTML = vartext[i];
      settingscard[0].appendChild(input_el);
      settingscard[0].appendChild(text_el); 
    }
    document.getElementById("aftermenu").appendChild(settingscard[0]);
     
    }

    function create_settcard1(disp)  //background color
    {
      settingscard[1] = document.createElement("fieldset"); //get fieldset
     var leg = document.createElement("legend");
     var i =0,input_el,text_el;
     var vartext = [];
     vartext.push("whitesmoke <br>");vartext.push("black  <br>");
     vartext.push("grey  <br>");vartext.push("rosybrown  <br>");
     vartext.push("blue  <br>");vartext.push("olive  <br>");
     settingscard[1].setAttribute("id", "field1");
     settingscard[1].style.display = "none";
     if(disp>0) settingscard[1].style.display = "block";
     leg.innerHTML = "seeting tool 1";
     
     //settingscard[1].appendChild(leg);
     for(i=0;i<6;i++)
     {
      text_el=document.createElement("text"); 
      input_el=document.createElement("INPUT");
      input_el.checked = false;
      if(i==bgcolor_index) input_el.checked = true;
      input_el.setAttribute("type", "checkbox");
      input_el.setAttribute("onClick", "Chxbox_rule1("+i+")");
      text_el.innerHTML = vartext[i];
      settingscard[1].appendChild(input_el);
      settingscard[1].appendChild(text_el); 
    }
    document.getElementById("aftermenu").appendChild(settingscard[1]);
     
    }
    function create_settcard2(disp) 
    {
      settingscard[2] = document.createElement("fieldset"); //get fieldset
     var leg = document.createElement("legend");
     var i =0,input_el,text_el;
     var vartext = [];
     vartext.push("whitesmoke <br>");vartext.push("black  <br>");
     vartext.push("grey  <br>");vartext.push("red  <br>");
     vartext.push("blue  <br>");vartext.push("green  <br>");
     settingscard[2].setAttribute("id", "field2");
     settingscard[2].style.display = "none";
     if(disp>0) settingscard[2].style.display = "block";
     leg.innerHTML = "seeting tool 2";
     
     //settingscard[2].appendChild(leg);
     for(i=0;i<6;i++)
     {
      text_el=document.createElement("text"); 
      input_el=document.createElement("INPUT");
      input_el.checked = false;
      if(i==txtcolor_index) input_el.checked = true;
      input_el.setAttribute("type", "checkbox");
      input_el.setAttribute("onClick", "Chxbox_rule2("+i+")");
      text_el.innerHTML = vartext[i];
      settingscard[2].appendChild(input_el);
      settingscard[2].appendChild(text_el); 
    }
    document.getElementById("aftermenu").appendChild(settingscard[2]);
     
    }
    function display_settcard(card_index) 
    {
      var txtbtn= settingscardlabel[card_index]+" "+"&#9660" ;
      settingscardnum=card_index;
      document.getElementById("dropbtn").innerHTML=txtbtn;
      document.getElementById("dropdown-content1").style.display = "none";
      settingscard[0].style.display = "none"; 
      settingscard[1].style.display = "none";
      settingscard[settingscardnum].style.display = "block";
    }
   