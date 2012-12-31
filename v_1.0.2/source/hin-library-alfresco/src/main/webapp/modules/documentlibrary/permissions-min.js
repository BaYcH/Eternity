(function(){var h=YAHOO.util.Dom;var e=Alfresco.util.encodeHTML;Alfresco.module.DoclibPermissions=function(n){Alfresco.module.DoclibPermissions.superclass.constructor.call(this,"Alfresco.module.DoclibPermissions",n,["button","container","connection","json"]);this.rolePickers={};this.hiddenRoles={};return this};YAHOO.extend(Alfresco.module.DoclibPermissions,Alfresco.component.Base,{options:{siteId:"",roles:null,files:null,width:"44em"},rolePickers:null,hiddenRoles:null,containerDiv:null,showDialog:function f(){this.hiddenRoles={};if(!this.modules.actions){this.modules.actions=new Alfresco.module.DoclibActions()}if(!this.containerDiv){Alfresco.util.Ajax.request({url:Alfresco.constants.URL_SERVICECONTEXT+"modules/documentlibrary/permissions",dataObj:{htmlid:this.id,site:this.options.siteId},successCallback:{fn:this.onTemplateLoaded,scope:this},failureMessage:"Could not load Document Library Permissions template",execScripts:true})}else{this._showDialog()}},onTemplateLoaded:function c(o){this.containerDiv=document.createElement("div");this.containerDiv.setAttribute("style","display:none");this.containerDiv.innerHTML=o.serverResponse.responseText;var s=h.getFirstChild(this.containerDiv);while(s&&s.tagName.toLowerCase()!="div"){s=h.getNextSibling(s)}this.widgets.dialog=Alfresco.util.createYUIPanel(s,{width:this.options.width});this.widgets.okButton=Alfresco.util.createYUIButton(this,"ok",this.onOK);this.widgets.cancelButton=Alfresco.util.createYUIButton(this,"cancel",this.onCancel);var r=YAHOO.util.Selector.query("button.site-group",this.widgets.dialog.element),t,n;for(var q=0,p=r.length;q<p;q++){t=r[q].id;n=r[q].value;this.rolePickers[n]=new YAHOO.widget.Button(t,{type:"menu",menu:t+"-select"});this.rolePickers[n].getMenu().subscribe("click",this.onRoleSelected,this.rolePickers[n])}this.widgets.resetAll=Alfresco.util.createYUIButton(this,"reset-all",this.onResetAll);this._showDialog()},onRoleSelected:function m(o,n,p){var q=n[1];p.set("label",q.cfg.getProperty("text"));p.set("name",q.value)},onResetAll:function b(n,o){this._applyPermissions("reset-all")},onOK:function i(o,p){var n=this._parseUI();this._applyPermissions("set",n)},_applyPermissions:function d(q,t){var o,w=[];o=this.options.files;for(var s=0,r=o.length;s<r;s++){w.push(o[s].node.nodeRef)}var v=function u(A){var x,B=A.json.successCount,C=A.json.failureCount;this._hideDialog();if(!A.json.overallSuccess){Alfresco.util.PopupManager.displayMessage({text:this.msg("message.permissions.failure")});return}YAHOO.Bubbling.fire("filesPermissionsUpdated",{successCount:B,failureCount:C});for(var z=0,y=A.json.totalResults;z<y;z++){x=A.json.results[z];if(x.success){YAHOO.Bubbling.fire(x.type=="folder"?"folderPermissionsUpdated":"filePermissionsUpdated",{multiple:true,nodeRef:x.nodeRef})}}Alfresco.util.PopupManager.displayMessage({text:this.msg("message.permissions.success",B)})};var p=function n(x){this._hideDialog();Alfresco.util.PopupManager.displayMessage({text:this.msg("message.permissions.failure")})};this.modules.actions.genericAction({success:{callback:{fn:v,scope:this}},failure:{callback:{fn:p,scope:this}},webscript:{method:Alfresco.util.Ajax.POST,name:"permissions/{operation}/site/{site}",params:{site:this.options.siteId,operation:q}},config:{requestContentType:Alfresco.util.Ajax.JSON,dataObj:{nodeRefs:w,permissions:t}}});this.widgets.okButton.set("disabled",true);this.widgets.cancelButton.set("disabled",true)},onCancel:function a(n,o){this._hideDialog()},_showDialog:function g(){var s,r;this.widgets.okButton.set("disabled",false);this.widgets.cancelButton.set("disabled",false);var p=h.get(this.id+"-title");if(YAHOO.lang.isArray(this.options.files)){p.innerHTML=this.msg("title.multi",this.options.files.length)}else{var n='<span class="light">'+e(this.options.files.displayName)+"</span>";p.innerHTML=this.msg("title.single",n);this.options.files=[this.options.files]}for(var v in this.rolePickers){if(this.rolePickers.hasOwnProperty(v)){this.rolePickers[v].set("name","");this.rolePickers[v].set("label",this.msg("role.None"))}}var q=this.options.files[0].node.permissions.roles,u;for(s=0,r=q.length;s<r;s++){u=q[s].split(";");if(u[1] in this.rolePickers){this.rolePickers[u[1]].set("name",u[2]);var o=this.msg("role."+u[2]);if(o==="role."+u[2]){o=u[2]}this.rolePickers[u[1]].set("label",o)}else{this.hiddenRoles[u[1]]={user:u[1],role:u[2]}}}var t=new YAHOO.util.KeyListener(document,{keys:YAHOO.util.KeyListener.KEY.ESCAPE},{fn:function(x,w){this.onCancel()},scope:this,correctScope:true});t.enable();this.widgets.dialog.show()},_hideDialog:function j(){var n=h.get(this.id+"-form");Alfresco.util.undoCaretFix(n);this.widgets.dialog.hide()},_parseUI:function k(){var p=[],q;for(var n in this.hiddenRoles){p.push({group:this.hiddenRoles[n].user,role:this.hiddenRoles[n].role})}for(var o in this.rolePickers){if(this.rolePickers.hasOwnProperty(o)){q=this.rolePickers[o].get("name");if((q!="")&&(q!="None")){p.push({group:this.rolePickers[o].get("value"),role:q})}}}return p}});var l=new Alfresco.module.DoclibPermissions("null")})();