
    var settingscard = []; //settings menu cards
    var settingscardlabel = []; // text for setting card
    settingscardlabel.push("Preferences cookies");
    settingscardlabel.push("Settings 2");
    settingscardlabel.push("Settings 3");
    

    function Chxbox_rule0(boxindex)  
     {  
      var inp=settingscard[0].getElementsByTagName("INPUT");
      if(boxindex==0)
      {
        inp[1].checked = false;
        inp[0].checked = true; 
      }
      if(boxindex==1)
     {
      inp[0].checked = false;
      inp[1].checked = true;    
    }
  
    }
    function Chxbox_rule1(boxindex)  
     {  
      var inp=settingscard[1].getElementsByTagName("INPUT");
      if(boxindex==0)
      {
        inp[1].checked = false;
        inp[0].checked = true;
      }
      if(boxindex==1)
     {
      inp[0].checked = false;
      inp[1].checked = true;
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

    function create_settcard1(disp) 
    {
      settingscard[1] = document.createElement("fieldset"); //get fieldset
     var leg = document.createElement("legend");
     var i =0,input_el,text_el;
     var vartext = [];
     vartext.push("Prop. 1(TBD) <br>");
     vartext.push("Prop. 2(TBD)  <br>");
     vartext.push("Prop. 3(TBD)  <br>");
     settingscard[1].setAttribute("id", "field1");
     settingscard[1].style.display = "none";
     if(disp>0) settingscard[1].style.display = "block";
     leg.innerHTML = "seeting tool 1";
     
     //settingscard[1].appendChild(leg);
     for(i=0;i<3;i++)
     {
      text_el=document.createElement("text"); 
      input_el=document.createElement("INPUT");
      input_el.setAttribute("type", "checkbox");
      input_el.setAttribute("onClick", "Chxbox_rule1("+i+")");
      text_el.innerHTML = vartext[i];
      settingscard[1].appendChild(input_el);
      settingscard[1].appendChild(text_el); 
    }
    document.getElementById("aftermenu").appendChild(settingscard[1]);
     
    }
    function display_settcard(card_index) 
    {
      document.getElementById("dropbtn").innerHTML=settingscardlabel[card_index];
      document.getElementById("dropdown-content1").style.display = "none";
      settingscard[0].style.display = "none"; 
      settingscard[1].style.display = "none";
      if (card_index == 0) 
      settingscard[0].style.display = "block";
      if (card_index == 1) 
      settingscard[1].style.display = "block";
    }
   