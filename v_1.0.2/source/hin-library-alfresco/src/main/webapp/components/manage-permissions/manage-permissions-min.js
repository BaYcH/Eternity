(function(){var e=YAHOO.util.Dom;var w=Alfresco.util.encodeHTML,A=Alfresco.util.siteURL;Alfresco.component.ManagePermissions=function(D){Alfresco.component.ManagePermissions.superclass.constructor.call(this,"Alfresco.component.ManagePermissions",D,["button","menu","container","datasource","datatable","paginator","json"]);YAHOO.Bubbling.on("nodeDetailsAvailable",this.onNodeDetailsAvailable,this);YAHOO.Bubbling.on("itemSelected",this.onAuthoritySelected,this);this.deferredReady=new Alfresco.util.Deferred(["onPermissionsLoaded","onNodeDetailsAvailable"],{fn:this.onDeferredReady,scope:this});this.nodeData=null;this.settableRoles=null;this.settableRolesMenuData=null;this.permissions={isInherited:false,inherited:[],current:[]};this.showingAuthorityFinder=false;this.inheritanceWarning=false;return this};YAHOO.extend(Alfresco.component.ManagePermissions,Alfresco.component.Base,{deferredReady:null,nodeData:null,settableRoles:null,settableRolesMenuData:null,permissions:null,showingAuthorityFinder:null,inheritanceWarning:null,onReady:function n(){this.widgets.inherited=Alfresco.util.createYUIButton(this,"inheritedButton",this.onInheritedButton);this.widgets.saveButton=Alfresco.util.createYUIButton(this,"okButton",this.onSaveButton);this.widgets.cancelButton=Alfresco.util.createYUIButton(this,"cancelButton",this.onCancelButton);this._setupDataSources();this._setupDataTables();Alfresco.util.Ajax.request({url:Alfresco.constants.URL_SERVICECONTEXT+"components/people-finder/authority-finder",dataObj:{htmlid:this.id+"-authorityFinder"},successCallback:{fn:this.onAuthorityFinderLoaded,scope:this},failureMessage:this.msg("message.authorityFinderFail"),execScripts:true});e.setStyle(this.id+"-body","visibility","visible")},onInheritedButton:function v(F,H){var D=this;if(this.permissions.isInherited&&!this.inheritanceWarning){Alfresco.util.PopupManager.displayPrompt({title:this.msg("message.confirm.inheritance.title"),text:this.msg("message.confirm.inheritance.description"),noEscape:true,buttons:[{text:this.msg("button.yes"),handler:function G(){this.destroy();D.inheritanceWarning=true;D.permissions.isInherited=!D.permissions.isInherited;D._updateInheritedUI()}},{text:this.msg("button.no"),handler:function E(){this.destroy()},isDefault:true}]})}else{this.permissions.isInherited=!this.permissions.isInherited;this._updateInheritedUI()}},_updateInheritedUI:function m(){var D=this.permissions.isInherited;e.removeClass(this.id+"-inheritedButtonContainer","inherited-"+(D?"off":"on"));e.addClass(this.id+"-inheritedButtonContainer","inherited-"+(D?"on":"off"));if(D){e.removeClass(this.id+"-inheritedContainer","hidden")}else{e.addClass(this.id+"-inheritedContainer","hidden")}},onAuthorityFinderLoaded:function u(E){var D=e.get(this.id+"-authorityFinder");if(D){D.innerHTML=E.serverResponse.responseText;this.widgets.authorityFinder=D;this.modules.authorityFinder=Alfresco.util.ComponentManager.get(this.id+"-authorityFinder");this.modules.authorityFinder.setOptions({dataWebScript:Alfresco.constants.URL_SERVICECONTEXT+"components/people-finder/authority-query",viewMode:Alfresco.AuthorityFinder.VIEW_MODE_COMPACT,singleSelectMode:true,minSearchTermLength:3});this.widgets.addUserGroup=Alfresco.util.createYUIButton(this,"addUserGroupButton",this.onAddUserGroupButton,{type:"checkbox",checked:false});var F=e.getRegion(this.id+"-addUserGroupButton");e.setStyle(this.widgets.authorityFinder,"top",(F.bottom+4)+"px")}Alfresco.util.Ajax.jsonGet({url:Alfresco.constants.PROXY_URI+"slingshot/doclib/permissions/"+this.options.nodeRef.uri,successCallback:{fn:this.onPermissionsLoaded,scope:this},failureMessage:this.msg("message.permissionsGetFail")})},onNodeDetailsAvailable:function k(E,D){this.nodeData=D[1].nodeDetails;this.deferredReady.fulfil("onNodeDetailsAvailable")},onPermissionsLoaded:function a(D){var G=D.json;this.permissions={originalIsInherited:G.isInherited,isInherited:G.isInherited,canReadInherited:G.canReadInherited,inherited:G.inherited,original:Alfresco.util.deepCopy(G.direct),current:Alfresco.util.deepCopy(G.direct)};if(!this.permissions.canReadInherited){this.widgets.dtInherited.set("MSG_EMPTY",this.msg("message.empty.no-permission"))}this.inheritanceWarning=!G.isInherited;this.settableRoles=G.settable;this.settableRolesMenuData=[];for(var E=0,F=G.settable.length;E<F;E++){this.settableRoles[G.settable[E]]=true;this.settableRolesMenuData.push({text:G.settable[E],value:G.settable[E]})}this.deferredReady.fulfil("onPermissionsLoaded")},onDeferredReady:function d(){e.get(this.id+"-title").innerHTML=this.msg("title",this.nodeData.displayName);var E=this;var D=function F(I,H){var G=YAHOO.Bubbling.getOwnerByTagName(H[1].anchor,"div");if(G!==null){if(typeof E[G.className]=="function"){H[1].stop=true;var J=E.widgets.dtDirect.getRecord(H[1].target.offsetParent).getData();E[G.className].call(E,J,G)}}return true};YAHOO.Bubbling.addDefaultAction("action-link",D);this.render()},onAddUserGroupButton:function C(E,D){if(!this.showingAuthorityFinder){this.modules.authorityFinder.clearResults();e.addClass(this.widgets.authorityFinder,"active");e.addClass(this.id+"-inheritedContainer","table-mask");e.addClass(this.id+"-directContainer","table-mask");e.get(this.id+"-authorityFinder-search-text").focus();this.showingAuthorityFinder=true}else{e.removeClass(this.widgets.authorityFinder,"active");e.removeClass(this.id+"-inheritedContainer","table-mask");e.removeClass(this.id+"-directContainer","table-mask");this.showingAuthorityFinder=false}},onAuthoritySelected:function q(E,D){this.permissions.current.push({authority:{name:D[1].itemName,displayName:D[1].displayName,iconUrl:D[1].iconUrl},role:this.settableRoles[this.settableRoles.length-1],created:true});this.widgets.addUserGroup.set("checked",false);e.removeClass(this.widgets.authorityFinder,"active");e.removeClass(this.id+"-inheritedContainer","table-mask");e.removeClass(this.id+"-directContainer","table-mask");this.showingAuthorityFinder=false;this.render()},fnRenderCellAuthorityIcon:function y(){var E=this;return function D(H,G,J,L){e.setStyle(H,"width",J.width+"px");e.setStyle(H.parentNode,"width",J.width+"px");var I=G.getData("authority"),K=I.name.indexOf("GROUP_")===0,F=Alfresco.constants.URL_RESCONTEXT+"components/images/"+(K?"group":"no-user-photo")+"-64.png";if(I.avatar&&I.avatar.length!==0){F=Alfresco.constants.PROXY_URI+I.avatar+"?c=queue&ph=true"}else{if(I.iconUrl){F=I.iconUrl}}H.innerHTML='<img class="icon32" src="'+F+'" alt="icon" />'}},fnRenderCellText:function g(){var D=this;return function E(G,F,H,I){e.setStyle(G,"width",H.width+"px");e.setStyle(G.parentNode,"width",H.width+"px");G.innerHTML=w(I)}},_i18nRole:function j(D){return this.msg("roles."+D.toLowerCase())},fnRenderCellRoleText:function c(G,F,H,I){var E=this;return function D(K,J,L,M){arguments[3]=E._i18nRole(arguments[3]);E.fnRenderCellText().apply(E,arguments)}},fnRenderCellRole:function t(){var D=this;return function E(O,P,L,F){e.setStyle(O,"width",L.width+"px");e.setStyle(O.parentNode,"width",L.width+"px");var I=P.getData("role"),M=P.getData("index"),N="roles-"+P.getId(),K=[];if(!D.settableRoles.hasOwnProperty(I)){O.innerHTML="<span>"+w(D._i18nRole(P.getData("role")))+"</span>"}else{K=K.concat(D.settableRolesMenuData);for(var H=0,J=K.length;H<J;H++){K[H].text=D._i18nRole(K[H].value)}O.innerHTML='<span id="'+N+'"></span>';var G=new YAHOO.widget.Button({container:N,type:"menu",menu:K});G.getMenu().subscribe("click",function(R,Q){return function S(V,U){var T=Q[1];if(T){V.set("label",D._i18nRole(T.value));D.onRoleChanged.call(D,Q[1],U)}}(G,M)});G.set("label",w(D._i18nRole(P.getData("role"))))}}},fnRenderCellActions:function l(){var D=this;return function E(H,G,I,J){e.setStyle(H,"width",I.width+"px");e.setStyle(H.parentNode,"width",I.width+"px");var F='<div id="'+D.id+"-actions-"+G.getId()+'" class="hidden action-set">';F+='<div class="onActionDelete"><a class="action-link" title="'+D.msg("button.delete")+'"><span>'+D.msg("button.delete")+"</span></a></div>";F+="</div>";H.innerHTML=F}},render:function i(){this._updateInheritedUI();this.widgets.dsInherited.sendRequest(this.permissions.inherited,{success:this.widgets.dtInherited.onDataReturnInitializeTable,failure:this.widgets.dtInherited.onDataReturnInitializeTable,scope:this.widgets.dtInherited});this.widgets.dsDirect.sendRequest(this.permissions.current,{success:this.widgets.dtDirect.onDataReturnInitializeTable,failure:this.widgets.dtDirect.onDataReturnInitializeTable,scope:this.widgets.dtDirect})},generateData:function h(H){var I=[],G;for(var E=0,F=H.length;E<F;E++){G=H[E];if(!G.removed){I.push({index:E,authority:G.authority,displayName:G.authority.displayName,isGroup:G.authority.name.indexOf("GROUP_")==0,role:G.role})}}function D(K,J){return(!K.isGroup&&J.isGroup)?1:(K.isGroup&&!J.isGroup)?-1:(K.displayName>J.displayName)?1:(K.displayName<J.displayName)?-1:0}return I.sort(D)},_setupDataSources:function o(){this.widgets.dsInherited=new YAHOO.util.DataSource(this.generateData,{responseType:YAHOO.util.DataSource.TYPE_JSFUNCTION,scope:this});this.widgets.dsDirect=new YAHOO.util.DataSource(this.generateData,{responseType:YAHOO.util.DataSource.TYPE_JSFUNCTION,scope:this})},_setupDataTables:function b(){var D=[{key:"icon",label:"",sortable:false,formatter:this.fnRenderCellAuthorityIcon(),width:32},{key:"displayName",label:this.msg("column.authority"),sortable:false},{key:"role",label:this.msg("column.role"),sortable:false,formatter:this.fnRenderCellRoleText(),width:240}];this.widgets.dtInherited=new YAHOO.widget.DataTable(this.id+"-inheritedPermissions",D,this.widgets.dsInherited,{initialLoad:false,MSG_EMPTY:this.msg("message.empty"),MSG_LOADING:this.msg("message.loading")});D=[{key:"icon",label:"",sortable:false,formatter:this.fnRenderCellAuthorityIcon(),width:32},{key:"displayName",label:this.msg("column.authority"),sortable:false},{key:"role",label:this.msg("column.role"),sortable:false,formatter:this.fnRenderCellRole(),width:240},{key:"actions",label:this.msg("column.actions"),sortable:false,formatter:this.fnRenderCellActions(),width:120}];this.widgets.dtDirect=new YAHOO.widget.DataTable(this.id+"-directPermissions",D,this.widgets.dsDirect,{initialLoad:false,MSG_EMPTY:this.msg("message.empty"),MSG_LOADING:this.msg("message.loading")});this.widgets.dtDirect.subscribe("rowMouseoverEvent",this.onEventHighlightRow,this,true);this.widgets.dtDirect.subscribe("rowMouseoutEvent",this.onEventUnhighlightRow,this,true)},onEventHighlightRow:function s(D){this.widgets.dtDirect.onEventHighlightRow.call(this.widgets.dtDirect,D);e.removeClass(this.id+"-actions-"+D.target.id,"hidden")},onEventUnhighlightRow:function z(D){this.widgets.dtDirect.onEventUnhighlightRow.call(this.widgets.dtDirect,D);e.addClass(this.id+"-actions-"+D.target.id,"hidden")},onRoleChanged:function p(G,F){var E=this.permissions.current[F],D=this.permissions.original;E.role=G.value;E.modified=(F<=D.length&&E.role!==D[F].role)},onActionDelete:function x(E){var D=this.permissions.current[E.index];D.removed=true;this.render()},onSaveButton:function f(I,D){this.widgets.saveButton.set("disabled",true);var H=[],G;for(var E=0,F=this.permissions.current.length;E<F;E++){G=this.permissions.current[E];if((G.created&&!G.removed)||(!G.created&&(G.removed||G.modified))){if(G.modified&&!G.created){H.push({authority:G.authority.name,role:this.permissions.original[E].role,remove:true})}H.push({authority:G.authority.name,role:G.role,remove:G.removed})}}if(H.length>0||this.permissions.isInherited!==this.permissions.originalIsInherited){Alfresco.util.Ajax.jsonPost({url:Alfresco.constants.PROXY_URI+"slingshot/doclib/permissions/"+this.options.nodeRef.uri,dataObj:{permissions:H,isInherited:this.permissions.isInherited},successCallback:{fn:function(J){this._navigateForward()},scope:this},failureCallback:{fn:function(J){var K=Alfresco.util.parseJSON(J.serverResponse.responseText);Alfresco.util.PopupManager.displayPrompt({title:this.msg("message.failure"),text:this.msg("message.failure.text",K.message)});this.widgets.saveButton.set("disabled",false)},scope:this}})}else{this._navigateForward()}},onCancelButton:function r(E,D){this.widgets.cancelButton.set("disabled",true);this._navigateForward()},_navigateForward:function B(){if(document.referrer.match(/documentlibrary([?]|$)/)||document.referrer.match(/repository([?]|$)/)){history.go(-1)}else{window.location.href=A(this.nodeData.type+"-details?nodeRef="+this.nodeData.nodeRef)}}})})();