(function(){var e=YAHOO.util.Dom,i=YAHOO.util.Event;var c=Alfresco.util.encodeHTML;Alfresco.dashlet.WebView=function a(j){Alfresco.dashlet.WebView.superclass.constructor.call(this,"Alfresco.dashlet.WebView",j);this.configDialog=null;YAHOO.Bubbling.on("showPanel",this.onShowPanel,this);YAHOO.Bubbling.on("hidePanel",this.onHidePanel,this);return this};YAHOO.extend(Alfresco.dashlet.WebView,Alfresco.component.Base,{options:{componentId:"",webviewURI:"",webviewTitle:"",isDefault:true},configDialog:null,onReady:function d(){var j=e.get(this.id+"-configWebView-link");i.addListener(j,"click",this.onConfigWebViewClick,this,true);this.widgets.iframeWrapper=e.get(this.id+"-iframeWrapper")},onConfigWebViewClick:function g(m){i.stopEvent(m);var k=Alfresco.constants.URL_SERVICECONTEXT+"modules/webview/config/"+encodeURIComponent(this.options.componentId);if(!this.configDialog){this.configDialog=new Alfresco.module.SimpleDialog(this.id+"-configDialog").setOptions({width:"50em",templateUrl:Alfresco.constants.URL_SERVICECONTEXT+"modules/webview/config",onSuccess:{fn:function l(n){if(YAHOO.env.ua.ie===6){window.location.reload(true)}else{var q=e.get(this.id+"-iframeWrapper");q.innerHTML=n.serverResponse.responseText+'<div class="resize-mask"></div>';var o=e.getFirstChildBy(q,function(r){return(r.tagName.toUpperCase()=="IFRAME")});if(o){if(o.attributes.name){var p=e.get(this.id+"-title-link");p.href=this.options.webviewURI=o.attributes.src.value;this.options.webviewTitle=o.attributes.name.value;p.innerHTML=c(this.options.webviewTitle)}this.options.isDefault=false}}},scope:this},doSetupFormsValidation:{fn:function j(o){o.addValidation(this.configDialog.id+"-url",Alfresco.forms.validation.mandatory,null,"blur");o.addValidation(this.configDialog.id+"-url",Alfresco.forms.validation.url,null,"keyup");o.addValidation(this.configDialog.id+"-url",function(u,q,t,s,p,r){return(u.value.length<512)},null,"keyup");o.setShowSubmitStateDynamically(true,false);var n=e.get(this.configDialog.id+"-webviewTitle");if(n){n.value=this.options.webviewTitle}n=e.get(this.configDialog.id+"-url");if(n){n.value=this.options.isDefault?"http://":this.options.webviewURI}},scope:this}})}this.configDialog.setOptions({actionUrl:k}).show()},onShowPanel:function b(k,j){if(this._browserDestroysPanel()){e.setStyle(this.widgets.iframeWrapper,"visibility","hidden")}},onHidePanel:function h(k,j){if(this._browserDestroysPanel()){e.setStyle(this.widgets.iframeWrapper,"visibility","visible")}},_browserDestroysPanel:function f(){return(navigator.userAgent.indexOf("Windows")!==-1||(navigator.userAgent.indexOf("Macintosh")!==-1&&YAHOO.env.ua.gecko>0&&YAHOO.env.ua.gecko<1.9))}})})();