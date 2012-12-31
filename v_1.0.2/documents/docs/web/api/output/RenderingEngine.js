Ext.data.JsonP.RenderingEngine({"tagname":"class","name":"RenderingEngine","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-RenderingEngine","members":{"cfg":[],"property":[{"name":"appController","tagname":"property","owner":"RenderingEngine","meta":{},"id":"property-appController"},{"name":"broadcastEvent","tagname":"property","owner":"RenderingEngine","meta":{},"id":"property-broadcastEvent"},{"name":"childComponents","tagname":"property","owner":"RenderingEngine","meta":{},"id":"property-childComponents"},{"name":"className","tagname":"property","owner":"RenderingEngine","meta":{},"id":"property-className"},{"name":"renderingEngine","tagname":"property","owner":"RenderingEngine","meta":{},"id":"property-renderingEngine"}],"method":[{"name":"closeModalDialog","tagname":"method","owner":"RenderingEngine","meta":{},"id":"method-closeModalDialog"},{"name":"eventHandler","tagname":"method","owner":"RenderingEngine","meta":{},"id":"method-eventHandler"},{"name":"eventQueue","tagname":"method","owner":"RenderingEngine","meta":{},"id":"method-eventQueue"},{"name":"getChildComponent","tagname":"method","owner":"RenderingEngine","meta":{},"id":"method-getChildComponent"},{"name":"getComponent","tagname":"method","owner":"RenderingEngine","meta":{},"id":"method-getComponent"},{"name":"getEventQueue","tagname":"method","owner":"RenderingEngine","meta":{},"id":"method-getEventQueue"},{"name":"loadPage","tagname":"method","owner":"RenderingEngine","meta":{},"id":"method-loadPage"},{"name":"loadTemplatePage","tagname":"method","owner":"RenderingEngine","meta":{},"id":"method-loadTemplatePage"},{"name":"openModalDialog","tagname":"method","owner":"RenderingEngine","meta":{},"id":"method-openModalDialog"},{"name":"openPromptOkCancelModalDialog","tagname":"method","owner":"RenderingEngine","meta":{},"id":"method-openPromptOkCancelModalDialog"},{"name":"registerClickEvent","tagname":"method","owner":"RenderingEngine","meta":{},"id":"method-registerClickEvent"},{"name":"showBusy","tagname":"method","owner":"RenderingEngine","meta":{},"id":"method-showBusy"},{"name":"showFailure","tagname":"method","owner":"RenderingEngine","meta":{},"id":"method-showFailure"},{"name":"showIdle","tagname":"method","owner":"RenderingEngine","meta":{},"id":"method-showIdle"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"RenderingEngine.js","href":"RenderingEngine.html#RenderingEngine"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/RenderingEngine.html#RenderingEngine' target='_blank'>RenderingEngine.js</a></div></pre><div class='doc-contents'><p>Rendering Engine is a child component of Application Controller. It renders\nevents to all of its Components. It has child components like appController,\nLogin, AppList, Contacts, Header, DefaultServices, MyOrg, Settings, Support,\nProfilePicture and MessageDocumentView. It catches the events from other\ncomponents and broadcasts the same events to all components except from which\nthat event triggers and which broadcasts that event. If required it handles\nthe events here itself.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-appController' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RenderingEngine'>RenderingEngine</span><br/><a href='source/RenderingEngine.html#RenderingEngine-property-appController' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RenderingEngine-property-appController' class='name not-expandable'>appController</a><span> : Object</span></div><div class='description'><div class='short'><p>appController is a private variable used to refer the Application\nController</p>\n</div><div class='long'><p>appController is a private variable used to refer the Application\nController</p>\n</div></div></div><div id='property-broadcastEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RenderingEngine'>RenderingEngine</span><br/><a href='source/RenderingEngine.html#RenderingEngine-property-broadcastEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RenderingEngine-property-broadcastEvent' class='name not-expandable'>broadcastEvent</a><span> : Object</span></div><div class='description'><div class='short'><p>Broadcasts the events to all of its components except event source and\nbroadcaster</p>\n</div><div class='long'><p>Broadcasts the events to all of its components except event source and\nbroadcaster</p>\n</div></div></div><div id='property-childComponents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RenderingEngine'>RenderingEngine</span><br/><a href='source/RenderingEngine.html#RenderingEngine-property-childComponents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RenderingEngine-property-childComponents' class='name not-expandable'>childComponents</a><span> : Object</span></div><div class='description'><div class='short'><p>Components has objects of child components</p>\n</div><div class='long'><p>Components has objects of child components</p>\n</div></div></div><div id='property-className' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RenderingEngine'>RenderingEngine</span><br/><a href='source/RenderingEngine.html#RenderingEngine-property-className' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RenderingEngine-property-className' class='name expandable'>className</a><span> : String</span></div><div class='description'><div class='short'>className is used to refer the RenderingEngine class name in other\ncomponents ...</div><div class='long'><p>className is used to refer the RenderingEngine class name in other\ncomponents</p>\n<p>Defaults to: <code>&quot;RenderingEngine&quot;</code></p></div></div></div><div id='property-renderingEngine' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RenderingEngine'>RenderingEngine</span><br/><a href='source/RenderingEngine.html#RenderingEngine-property-renderingEngine' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RenderingEngine-property-renderingEngine' class='name not-expandable'>renderingEngine</a><span> : Object</span></div><div class='description'><div class='short'><p>renderingEngine is used to refer the RenderingEngine class object</p>\n</div><div class='long'><p>renderingEngine is used to refer the RenderingEngine class object</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-closeModalDialog' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RenderingEngine'>RenderingEngine</span><br/><a href='source/RenderingEngine.html#RenderingEngine-method-closeModalDialog' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RenderingEngine-method-closeModalDialog' class='name expandable'>closeModalDialog</a>( <span class='pre'></span> ) : void</div><div class='description'><div class='short'>Close the opened modal dialog ...</div><div class='long'><p>Close the opened modal dialog</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-eventHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RenderingEngine'>RenderingEngine</span><br/><a href='source/RenderingEngine.html#RenderingEngine-method-eventHandler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RenderingEngine-method-eventHandler' class='name expandable'>eventHandler</a>( <span class='pre'>event</span> ) : void</div><div class='description'><div class='short'>Handles the events from components ...</div><div class='long'><p>Handles the events from components</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-eventQueue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RenderingEngine'>RenderingEngine</span><br/><a href='source/RenderingEngine.html#RenderingEngine-method-eventQueue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RenderingEngine-method-eventQueue' class='name expandable'>eventQueue</a>( <span class='pre'></span> ) : void</div><div class='description'><div class='short'>eventQueue is used to add the events in queue to handle ...</div><div class='long'><p>eventQueue is used to add the events in queue to handle</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getChildComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RenderingEngine'>RenderingEngine</span><br/><a href='source/RenderingEngine.html#RenderingEngine-method-getChildComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RenderingEngine-method-getChildComponent' class='name expandable'>getChildComponent</a>( <span class='pre'>componentClassName</span> ) : Component</div><div class='description'><div class='short'>Provides the RenderingEnginge's child components based on the\ncomponentClassName ...</div><div class='long'><p>Provides the RenderingEnginge's child components based on the\ncomponentClassName</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>componentClassName</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       its a string value holds the class name under RenderingEngine.\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Component</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RenderingEngine'>RenderingEngine</span><br/><a href='source/RenderingEngine.html#RenderingEngine-method-getComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RenderingEngine-method-getComponent' class='name expandable'>getComponent</a>( <span class='pre'>componentClassName</span> ) : Object</div><div class='description'><div class='short'>Provides the Appcontroller's child components based on the\ncomponentClassName * ...</div><div class='long'><p>Provides the Appcontroller's child components based on the\ncomponentClassName *</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>componentClassName</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       its a string value holds the class name under\n       ApplicationController.\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getEventQueue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RenderingEngine'>RenderingEngine</span><br/><a href='source/RenderingEngine.html#RenderingEngine-method-getEventQueue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RenderingEngine-method-getEventQueue' class='name expandable'>getEventQueue</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>It gets the EventQueue from Application Controller. ...</div><div class='long'><p>It gets the EventQueue from Application Controller.</p>\n</div></div></div><div id='method-loadPage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RenderingEngine'>RenderingEngine</span><br/><a href='source/RenderingEngine.html#RenderingEngine-method-loadPage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RenderingEngine-method-loadPage' class='name expandable'>loadPage</a>( <span class='pre'>pageUrl, placeHolderId, event, callback</span> ) : void</div><div class='description'><div class='short'>It loads the html from the pageUrl using ajax method. ...</div><div class='long'><p>It loads the html from the pageUrl using ajax method. The html data\nshould be placed where the place holder is mentioned.Event and callback\nwill be triggered after html page is loaded.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pageUrl</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its a string,hold the location of the page\n</code></pre>\n</div></li><li><span class='pre'>placeHolderId</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its a string value,the html data will be appended to this\n       place holder.\n</code></pre>\n</div></li><li><span class='pre'>event</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       It is string value, which will be triggered as next event.\n</code></pre>\n</div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its a function which will be called after the completion of\n       the method.\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-loadTemplatePage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RenderingEngine'>RenderingEngine</span><br/><a href='source/RenderingEngine.html#RenderingEngine-method-loadTemplatePage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RenderingEngine-method-loadTemplatePage' class='name expandable'>loadTemplatePage</a>( <span class='pre'>templatePath, func, event</span> ) : void</div><div class='description'><div class='short'>It loads the template.html from the templatePath using ajax method. ...</div><div class='long'><p>It loads the template.html from the templatePath using ajax method.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>templatePath</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its a string,hold the location of the template path\n</code></pre>\n</div></li><li><span class='pre'>func</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its a function which will be called after the completion of\n       the method.\n</code></pre>\n</div></li><li><span class='pre'>event</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       It is string value, which will be triggered as next event.\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-openModalDialog' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RenderingEngine'>RenderingEngine</span><br/><a href='source/RenderingEngine.html#RenderingEngine-method-openModalDialog' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RenderingEngine-method-openModalDialog' class='name expandable'>openModalDialog</a>( <span class='pre'>message</span> ) : void</div><div class='description'><div class='short'>Modal dialog will block to access the UI and provide the proper\ninformation to the end user. ...</div><div class='long'><p>Modal dialog will block to access the UI and provide the proper\ninformation to the end user.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its a string which hold the message to be displayed.\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-openPromptOkCancelModalDialog' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RenderingEngine'>RenderingEngine</span><br/><a href='source/RenderingEngine.html#RenderingEngine-method-openPromptOkCancelModalDialog' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RenderingEngine-method-openPromptOkCancelModalDialog' class='name expandable'>openPromptOkCancelModalDialog</a>( <span class='pre'>message, callback</span> ) : void</div><div class='description'><div class='short'>Prompt the end user, options like 'ok' or 'cancel' and based on the input\nit will be provided the result as a callbac...</div><div class='long'><p>Prompt the end user, options like 'ok' or 'cancel' and based on the input\nit will be provided the result as a callback method to the end user.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its a string , holds the message to be displayed.\n</code></pre>\n</div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its a function which will be called after the completion of\n       the method and the result should be passed as parameter.\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-registerClickEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RenderingEngine'>RenderingEngine</span><br/><a href='source/RenderingEngine.html#RenderingEngine-method-registerClickEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RenderingEngine-method-registerClickEvent' class='name expandable'>registerClickEvent</a>( <span class='pre'>id, func</span> ) : void</div><div class='description'><div class='short'>It register the event to id property and to further manipulate those\nregistered behaviors. ...</div><div class='long'><p>It register the event to id property and to further manipulate those\nregistered behaviors.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its a string value,html element classname or id.\n</code></pre>\n</div></li><li><span class='pre'>func</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its a function to be binded with the click event.\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-showBusy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RenderingEngine'>RenderingEngine</span><br/><a href='source/RenderingEngine.html#RenderingEngine-method-showBusy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RenderingEngine-method-showBusy' class='name expandable'>showBusy</a>( <span class='pre'></span> ) : void</div><div class='description'><div class='short'>It shows busy icon on the menu bar ...</div><div class='long'><p>It shows busy icon on the menu bar</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-showFailure' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RenderingEngine'>RenderingEngine</span><br/><a href='source/RenderingEngine.html#RenderingEngine-method-showFailure' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RenderingEngine-method-showFailure' class='name expandable'>showFailure</a>( <span class='pre'></span> ) : void</div><div class='description'><div class='short'>It shows failure icon on the menu bar ...</div><div class='long'><p>It shows failure icon on the menu bar</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-showIdle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RenderingEngine'>RenderingEngine</span><br/><a href='source/RenderingEngine.html#RenderingEngine-method-showIdle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/RenderingEngine-method-showIdle' class='name expandable'>showIdle</a>( <span class='pre'></span> ) : void</div><div class='description'><div class='short'>It shows idle icon on the menu bar ...</div><div class='long'><p>It shows idle icon on the menu bar</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});