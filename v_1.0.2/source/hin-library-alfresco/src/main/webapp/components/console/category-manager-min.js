(function(){var a=YAHOO.util.Dom,u=YAHOO.util.Event,p=YAHOO.util.Element,l=YAHOO.util.KeyListener;var q=Alfresco.util.encodeHTML,h=Alfresco.util.combinePaths;Alfresco.CategoryManager=function(v){this.name="Alfresco.CategoryManager";Alfresco.CategoryManager.superclass.constructor.call(this,v);Alfresco.util.ComponentManager.register(this);Alfresco.util.YUILoaderHelper.require(["treeview","json"],this.onComponentsLoaded,this);var x=this;w=function w(){w.superclass.constructor.call(this,"category")};YAHOO.extend(w,Alfresco.ConsolePanelHandler,{});new w();return this};YAHOO.extend(Alfresco.CategoryManager,Alfresco.ConsoleTool,{insituEditors:null,onReady:function o(){var v=this;this.fnLoadNodeData=function w(B,y){var z=B.data.path;var A=v._buildTreeNodeUrl.call(v,z);var D={success:function x(H){var G=YAHOO.lang.JSON.parse(H.responseText),I,J;if(G.parent&&B.data.nodeRef.length===0){B.data.nodeRef=G.parent.nodeRef}if(G.items){for(var F=0,E=G.items.length;F<E;F++){I=G.items[F];I.path=h(z,I.name);J=this._buildTreeNode(I,B,false);if(!I.hasChildren){J.isLeaf=true}}}if(G.resultsTrimmed){tempNode=new YAHOO.widget.TextNode({label:"&lt;"+this.msg("message.folders-trimmed")+"&gt;",style:"folders-trimmed"},B,false)}H.argument.fnLoadComplete()},failure:function C(H){if(H.status==401){window.location.reload()}else{try{var G=YAHOO.lang.JSON.parse(H.responseText);var F=this.widgets.treeview.getRoot();var E=F.children[0];E.isLoading=false;E.isLeaf=true;E.label=G.message;E.labelStyle="ygtverror";F.refresh()}catch(I){}}},scope:v,argument:{node:B,fnLoadComplete:y}};YAHOO.util.Connect.asyncRequest("GET",A,D)};this._buildTree();this.isReady=true},onExpandComplete:function d(w){this.widgets.treeview.render();var v;for(i=0,j=this.insituEditors.length;i<j;i++){v=this.insituEditors[i];Alfresco.util.createInsituEditor(v.context,v.params,v.callback)}},onNodeClicked:function t(v){u.stopEvent(v.event);return false},_buildTree:function g(){this.insituEditors=[];var v=new YAHOO.widget.TreeView(this.id+"-category-manager");this.widgets.treeview=v;YAHOO.widget.TreeView.FOCUS_CLASS_NAME="";v.setDynamicLoad(this.fnLoadNodeData);var w=v.getRoot();this._buildTreeNode({name:Alfresco.util.message("node.root",this.name),path:"/",nodeRef:""},w,true);v.subscribe("clickEvent",this.onNodeClicked,this,true);v.subscribe("expandComplete",this.onExpandComplete,this,true);v.subscribe("dblClickEvent",v.onEventEditNode);v.render()},_sortNodeChildren:function r(y,z){if(y.isLeaf){y.isLeaf=false;this.widgets.treeview.render();return}var w=y.data.path;var x=this._buildTreeNodeUrl(w);var B={success:function v(F){var J=YAHOO.lang.JSON.parse(F.responseText);if(J.items){var C=F.argument.node.children;var M=J.items;for(var K=0,I=M.length;K<I;K++){if((C.length<=K)||(C[K].data.nodeRef!=M[K].nodeRef)){var D=false;for(var G=K,E=C.length;G<E;G++){if(C[G].data.nodeRef==M[K].nodeRef){var N=C[K];C[K]=C[G];C[G]=N;D=true;break}}if(!D){var O=M[K];O.path=h(F.argument.node.data.path,O.name);var H=this._buildTreeNode(O);if(!O.hasChildren){H.isLeaf=true}if(C.length===0){var L=F.argument.node;L.isLeaf=false;H.appendTo(L)}else{if(C.length>K){H.insertBefore(C[K])}else{H.insertAfter(C[C.length-1])}}}}}this.widgets.treeview.render();this.onExpandComplete(y)}},failure:function A(C){Alfresco.logger.error("DLT_sNC_failure",C)},argument:{node:y,onSortComplete:z},scope:this,timeout:7000};YAHOO.util.Connect.asyncRequest("GET",x,B)},_buildTreeNode:function b(w,A,z){var C=new YAHOO.widget.TextNode({label:q(w.name),path:w.path,nodeRef:w.nodeRef,description:w.description,editable:false},A,z);var y=this;var v=C.labelElId;var B=function x(D,E){E.data.path=E.data.path.replace(E.label,D.json.name);E.setUpLabel(D.json.name);E.parent.toggle();E.refresh();E.parent.toggle();return true};if(w.nodeRef!==null){y.insituEditors.push({context:v,params:{treeNode:C,component:this,type:"textBoxCategory",nodeRef:w.nodeRef,name:"name",value:w.name,validations:[{type:Alfresco.forms.validation.nodeName,when:"keyup",message:y.msg("validation-hint.nodeName")},{type:Alfresco.forms.validation.length,args:{min:1,max:255,crop:true},when:"keyup",message:y.msg("validation-hint.length.min.max",1,255)}],title:y.msg("tool.category-manager.edit-category"),errorMessage:y.msg("tool.category-manager.edit-category.failure"),titleAdd:y.msg("tool.category-manager.add-category"),errorAddMessage:y.msg("tool.category-manager.add-category.failure"),titleDelete:y.msg("tool.category-manager.delete-category"),errorDeleteMessage:y.msg("tool.category-manager.delete-category.failure")},callback:{fn:B,scope:y,obj:C}})}return C},_buildTreeNodeUrl:function k(w){var v=new Alfresco.util.NodeRef(this.options.nodeRef),x="slingshot/doclib/categorynode/node/"+h(encodeURI(v.uri),Alfresco.util.encodeURIPath(w));return Alfresco.constants.PROXY_URI+x+"?perms=false&children=true"}});Alfresco.widget.InsituEditor.textBoxCategory=function(w){this.params=YAHOO.lang.merge({},w);var x=new Alfresco.util.NodeRef(this.params.nodeRef),v=new p(document.createElement("form"),{id:Alfresco.util.generateDomId(),method:"post",action:Alfresco.constants.PROXY_URI+"api/category/"+x.uri+"?alf_method=PUT"});this.elEditForm=v;this.editForm=v.get("element");this.form=new Alfresco.forms.Form(this.editForm);this.form.setAJAXSubmit(true,{successCallback:{fn:function(y){this.onPersistSuccess.apply(this,arguments);if(y.json.message){Alfresco.util.PopupManager.displayMessage({text:y.json.message})}},scope:this},failureCallback:{fn:this.onPersistFailure,scope:this}});this.form.setSubmitAsJSON(true);v.addClass("insitu-edit");v.on("submit",function(y){u.stopEvent(y)});this.addIcon=new Alfresco.widget.InsituEditorIconAdd(this,w);if(this.params.nodeRef!==""){this.editorIcon=new Alfresco.widget.InsituEditorIconEdit(this,w);this.deleteIcon=new Alfresco.widget.InsituEditorIconDelete(this,w)}this.params.context.parentNode.appendChild(this.editForm,this.params.context);this.balloon=null;this.contextStyle=null;this.keyListener=null;this.enterKeyListener=null;this.markupGenerated=false;return this};YAHOO.extend(Alfresco.widget.InsituEditor.textBoxCategory,Alfresco.widget.InsituEditor.textBox,{doHide:function s(v){Alfresco.widget.InsituEditor.textBoxCategory.superclass.doHide.call(this,v);this.enterKeyListener.disable()},doShow:function c(){Alfresco.widget.InsituEditor.textBoxCategory.superclass.doShow.call(this,null);this.enterKeyListener.enable()},_generateMarkup:function e(){if(this.markupGenerated){return}var C=new p(document.createElement("input"),{type:"text",name:this.params.name,value:this.params.value}),y=new p(document.createElement("a"),{href:"#",innerHTML:Alfresco.util.message("button.save")}),w=new p(document.createElement("a"),{href:"#",innerHTML:Alfresco.util.message("button.cancel")});this.elEditForm.appendChild(C);this.elEditForm.appendChild(y);this.elEditForm.appendChild(w);C.on("blur",function(D){if(this.balloon){this.balloon.hide()}},this,true);y.on("click",function(D){this.form._submitInvoked(D)},this,true);w.on("click",function(D){u.stopEvent(D);this.inputBox.value=this.params.value;this.doHide(true)},this,true);this.inputBox=C.get("element");this.keyListener=new l(this.inputBox,{keys:[l.KEY.ESCAPE]},{fn:function(E,D){u.stopEvent(D[1]);this.inputBox.value=this.params.value;this.doHide(true)},scope:this,correctScope:true});this.enterKeyListener=new l(this.inputBox,{keys:[l.KEY.ENTER]},{fn:function(E,D){u.stopEvent(D[1]);this.form._submitInvoked(D);this.doHide(true)},scope:this,correctScope:true});this.balloon=Alfresco.util.createBalloon(this.inputBox);this.balloon.onClose.subscribe(function(D){try{this.inputBox.focus()}catch(D){}},this,true);var B=this.params.validations;for(var x=0,A=B.length;x<A;x++){this.form.addValidation(this.inputBox,B[x].type,B[x].args,B[x].when,B[x].message)}var z=this;this.form.addError=function v(E,D){z.balloon.html(E);z.balloon.show()};this.form.init();this.markupGenerated=true}});Alfresco.widget.InsituEditorIconEdit=function(v,w){this.editor=v;this.params=YAHOO.lang.merge({},w);this.disabled=w.disabled;this.editIcon=document.createElement("span");this.editIcon.title=Alfresco.util.encodeHTML(w.title);a.addClass(this.editIcon,"insitu-edit-category");this.params.context.appendChild(this.editIcon,this.params.context);u.on(this.params.context,"mouseover",this.onContextMouseOver,this);u.on(this.params.context,"mouseout",this.onContextMouseOut,this);u.on(this.editIcon,"mouseover",this.onContextMouseOver,this);u.on(this.editIcon,"mouseout",this.onContextMouseOut,this)};YAHOO.extend(Alfresco.widget.InsituEditorIconEdit,Alfresco.widget.InsituEditorIcon,{});Alfresco.widget.InsituEditorIconAdd=function(v,w){this.editor=v;this.params=YAHOO.lang.merge({},w);this.disabled=w.disabled;this.editIcon=document.createElement("span");this.editIcon.title=Alfresco.util.encodeHTML(w.titleAdd);if(v.params.nodeRef===""){a.addClass(this.editIcon,"insitu-add-root-category")}else{a.addClass(this.editIcon,"insitu-add-category")}this.params.context.appendChild(this.editIcon,this.params.context);u.on(this.params.context,"mouseover",this.onContextMouseOver,this);u.on(this.params.context,"mouseout",this.onContextMouseOut,this);u.on(this.editIcon,"mouseover",this.onContextMouseOver,this);u.on(this.editIcon,"mouseout",this.onContextMouseOut,this)};YAHOO.extend(Alfresco.widget.InsituEditorIconAdd,Alfresco.widget.InsituEditorIconEdit,{onIconClick:function n(x,w){if(w.disabled){return}u.stopEvent(x);if(Alfresco.logger.isDebugEnabled()){Alfresco.logger.debug("onIconClick",x)}Alfresco.util.PopupManager.getUserInput({title:Alfresco.util.message("tool.category-manager.add-category"),text:Alfresco.util.message("tool.category-manager.label.category-name"),input:"text",callback:{fn:function v(z,A){url=this._buildAddNodeUrl(this.params.nodeRef);var y={method:"POST",url:url,successCallback:{fn:function(B,D){var C=this.params.treeNode;this.params.component._sortNodeChildren(C);C.toggle();C.refresh();C.toggle();if(B.json.message){Alfresco.util.PopupManager.displayMessage({text:B.json.message})}},scope:this},failureCallback:{fn:function(B,C){Alfresco.util.PopupManager.displayMessage({text:Alfresco.util.message("tool.category-manager.add-category.failure")})},scope:this},dataObj:{name:z}};Alfresco.util.Ajax.jsonRequest(y)},obj:{},scope:w}})},_buildAddNodeUrl:function f(v){var v=new Alfresco.util.NodeRef(v),w="api/category/"+encodeURI(v.uri);return Alfresco.constants.PROXY_URI+w}});Alfresco.widget.InsituEditorIconDelete=function(v,w){this.editor=v;this.params=YAHOO.lang.merge({},w);this.disabled=w.disabled;this.editIcon=document.createElement("span");this.editIcon.title=Alfresco.util.encodeHTML(w.titleDelete);a.addClass(this.editIcon,"insitu-delete-category");this.params.context.appendChild(this.editIcon,this.params.context);u.on(this.params.context,"mouseover",this.onContextMouseOver,this);u.on(this.params.context,"mouseout",this.onContextMouseOut,this);u.on(this.editIcon,"mouseover",this.onContextMouseOver,this);u.on(this.editIcon,"mouseout",this.onContextMouseOut,this)};YAHOO.extend(Alfresco.widget.InsituEditorIconDelete,Alfresco.widget.InsituEditorIconEdit,{onIconClick:function n(y,x){if(x.disabled){return}u.stopEvent(y);if(Alfresco.logger.isDebugEnabled()){Alfresco.logger.debug("onIconClick",y)}Alfresco.util.PopupManager.displayPrompt({title:Alfresco.util.message("tool.category-manager.message.confirm.delete.title"),text:Alfresco.util.message("tool.category-manager.message.confirm.delete",this,x.params.treeNode.label),buttons:[{text:Alfresco.util.message("button.delete"),handler:function w(){this.destroy();url=x._buildDeleteNodeUrl(x.params.nodeRef);var z={method:"DELETE",url:url,successCallback:{fn:function(B,E){var D=x.params.treeNode;var A=D.tree;var C=D.parent;A.removeNode(D);C.toggle();C.toggle();if(B.json.message){Alfresco.util.PopupManager.displayMessage({text:B.json.message})}},scope:x},failureCallback:{fn:function(A,B){Alfresco.util.PopupManager.displayMessage({text:Alfresco.util.message("tool.category-manager.delete-category.failure")})},scope:x}};Alfresco.util.Ajax.jsonRequest(z)}},{text:Alfresco.util.message("button.cancel"),handler:function v(){this.destroy()},isDefault:true}]})},_buildDeleteNodeUrl:function m(v){var v=new Alfresco.util.NodeRef(v),w="api/category/"+encodeURI(v.uri);return Alfresco.constants.PROXY_URI+w}})})();