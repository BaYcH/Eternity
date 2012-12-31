Ext.data.JsonP.DataLayer({"tagname":"class","name":"DataLayer","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-DataLayer","members":{"cfg":[],"property":[{"name":"cache","tagname":"property","owner":"DataLayer","meta":{},"id":"property-cache"},{"name":"processDefinitionJsonMap","tagname":"property","owner":"DataLayer","meta":{},"id":"property-processDefinitionJsonMap"},{"name":"userProcessMap","tagname":"property","owner":"DataLayer","meta":{},"id":"property-userProcessMap"}],"method":[{"name":"authenticate","tagname":"method","owner":"DataLayer","meta":{},"id":"method-authenticate"},{"name":"createOrUpdateTask","tagname":"method","owner":"DataLayer","meta":{},"id":"method-createOrUpdateTask"},{"name":"createOrUpdateTasks","tagname":"method","owner":"DataLayer","meta":{},"id":"method-createOrUpdateTasks"},{"name":"eventHandler","tagname":"method","owner":"DataLayer","meta":{},"id":"method-eventHandler"},{"name":"getMessageInternal","tagname":"method","owner":"DataLayer","meta":{},"id":"method-getMessageInternal"},{"name":"getMessages","tagname":"method","owner":"DataLayer","meta":{},"id":"method-getMessages"},{"name":"getNewProcessDefinitionInstance","tagname":"method","owner":"DataLayer","meta":{},"id":"method-getNewProcessDefinitionInstance"},{"name":"getProcessDefinitionInstance","tagname":"method","owner":"DataLayer","meta":{},"id":"method-getProcessDefinitionInstance"},{"name":"getProcessDefinitions","tagname":"method","owner":"DataLayer","meta":{},"id":"method-getProcessDefinitions"},{"name":"getUserProcesses","tagname":"method","owner":"DataLayer","meta":{},"id":"method-getUserProcesses"},{"name":"loadAllConceptServices","tagname":"method","owner":"DataLayer","meta":{},"id":"method-loadAllConceptServices"},{"name":"loadConcepts","tagname":"method","owner":"DataLayer","meta":{},"id":"method-loadConcepts"},{"name":"loadConfig","tagname":"method","owner":"DataLayer","meta":{},"id":"method-loadConfig"},{"name":"loadData","tagname":"method","owner":"DataLayer","meta":{},"id":"method-loadData"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"DataLayer.js","href":"DataLayer.html#DataLayer"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/DataLayer.html#DataLayer' target='_blank'>DataLayer.js</a></div></pre><div class='doc-contents'><p>DataLayer is a child component of Application Controller.It catches the\nevents from other components and broadcasts the same events to all components\nexcept from which that event triggers and which broadcasts that event. If\nrequired it handles the events here itself.This layer will be decided to work\nas offline or online.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-cache' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataLayer'>DataLayer</span><br/><a href='source/DataLayer.html#DataLayer-property-cache' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataLayer-property-cache' class='name expandable'>cache</a><span> : Boolean</span></div><div class='description'><div class='short'>cache holds the true or false value , based on this it acts as offline or\nonline. ...</div><div class='long'><p>cache holds the true or false value , based on this it acts as offline or\nonline.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-processDefinitionJsonMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataLayer'>DataLayer</span><br/><a href='source/DataLayer.html#DataLayer-property-processDefinitionJsonMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataLayer-property-processDefinitionJsonMap' class='name not-expandable'>processDefinitionJsonMap</a><span> : Object</span></div><div class='description'><div class='short'><p>processDefinitionJsonMap holds all process definitions in json format</p>\n</div><div class='long'><p>processDefinitionJsonMap holds all process definitions in json format</p>\n</div></div></div><div id='property-userProcessMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataLayer'>DataLayer</span><br/><a href='source/DataLayer.html#DataLayer-property-userProcessMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataLayer-property-userProcessMap' class='name not-expandable'>userProcessMap</a><span> : Object</span></div><div class='description'><div class='short'><p>userProcessMap holds all process definitions against the user</p>\n</div><div class='long'><p>userProcessMap holds all process definitions against the user</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-authenticate' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataLayer'>DataLayer</span><br/><a href='source/DataLayer.html#DataLayer-method-authenticate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataLayer-method-authenticate' class='name expandable'>authenticate</a>( <span class='pre'>user</span> ) : void</div><div class='description'><div class='short'>Authenticate the user. ...</div><div class='long'><p>Authenticate the user.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>user</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its an object of user.\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createOrUpdateTask' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataLayer'>DataLayer</span><br/><a href='source/DataLayer.html#DataLayer-method-createOrUpdateTask' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataLayer-method-createOrUpdateTask' class='name expandable'>createOrUpdateTask</a>( <span class='pre'>taskVo, message, processObjects</span> ) : void</div><div class='description'><div class='short'>It persist the single message and process objects. ...</div><div class='long'><p>It persist the single message and process objects. *</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>taskVo</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its an object of taskVo.\n</code></pre>\n</div></li><li><span class='pre'>message</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its an object of message.\n</code></pre>\n</div></li><li><span class='pre'>processObjects</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its an array of process definition objects.\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createOrUpdateTasks' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataLayer'>DataLayer</span><br/><a href='source/DataLayer.html#DataLayer-method-createOrUpdateTasks' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataLayer-method-createOrUpdateTasks' class='name expandable'>createOrUpdateTasks</a>( <span class='pre'>parameters</span> ) : void</div><div class='description'><div class='short'>It persist multiple messages and process objects. ...</div><div class='long'><p>It persist multiple messages and process objects.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parameters</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its an array of message and process definition objects.\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-eventHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataLayer'>DataLayer</span><br/><a href='source/DataLayer.html#DataLayer-method-eventHandler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataLayer-method-eventHandler' class='name expandable'>eventHandler</a>( <span class='pre'>event</span> )</div><div class='description'><div class='short'>Handles event from Datalayer ...</div><div class='long'><p>Handles event from Datalayer</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMessageInternal' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataLayer'>DataLayer</span><br/><a href='source/DataLayer.html#DataLayer-method-getMessageInternal' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataLayer-method-getMessageInternal' class='name expandable'>getMessageInternal</a>( <span class='pre'>message, UIcallback, cache</span> ) : void</div><div class='description'><div class='short'>Get msg document object based on message type ...</div><div class='long'><p>Get msg document object based on message type</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its an object of message.\n</code></pre>\n</div></li><li><span class='pre'>UIcallback</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its a function which will be called after the completion of\n       the method,it set msg object to message object.\n</code></pre>\n</div></li><li><span class='pre'>cache</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its a boolean value,based on the value it will be decided to\n       retrieve from online or offline.\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMessages' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataLayer'>DataLayer</span><br/><a href='source/DataLayer.html#DataLayer-method-getMessages' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataLayer-method-getMessages' class='name expandable'>getMessages</a>( <span class='pre'>id, queryHashMap, callback, messageRequired</span> ) : void</div><div class='description'><div class='short'>Get messages based on the participant id and query string ...</div><div class='long'><p>Get messages based on the participant id and query string</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       its a string value , hold the participant id\n</code></pre>\n</div></li><li><span class='pre'>queryHashMap</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       its an object of hashmap which holds the queries\n</code></pre>\n</div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its a function which will be called after the completion of\n       the method.\n</code></pre>\n</div></li><li><span class='pre'>messageRequired</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its a boolean value , based it will be act as offline or\n       online\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getNewProcessDefinitionInstance' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataLayer'>DataLayer</span><br/><a href='source/DataLayer.html#DataLayer-method-getNewProcessDefinitionInstance' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataLayer-method-getNewProcessDefinitionInstance' class='name expandable'>getNewProcessDefinitionInstance</a>( <span class='pre'>processName</span> ) : ProcessDefinition</div><div class='description'><div class='short'>Provides the new process definition instance based on the process name. ...</div><div class='long'><p>Provides the new process definition instance based on the process name.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>processName</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its a string value , name of the process\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>ProcessDefinition</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getProcessDefinitionInstance' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataLayer'>DataLayer</span><br/><a href='source/DataLayer.html#DataLayer-method-getProcessDefinitionInstance' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataLayer-method-getProcessDefinitionInstance' class='name expandable'>getProcessDefinitionInstance</a>( <span class='pre'>processId, callback</span> ) : void</div><div class='description'><div class='short'>Provides the process definition instance based on the process id through\ncallback. ...</div><div class='long'><p>Provides the process definition instance based on the process id through\ncallback. *</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>processId</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its a string value , id of the process\n</code></pre>\n</div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its a function which will be called after the completion of\n       the method,it provides processdefintion object as parameter to\n       call back.\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getProcessDefinitions' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataLayer'>DataLayer</span><br/><a href='source/DataLayer.html#DataLayer-method-getProcessDefinitions' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataLayer-method-getProcessDefinitions' class='name expandable'>getProcessDefinitions</a>( <span class='pre'>callback</span> )</div><div class='description'><div class='short'>Provides the all process definition instances through callback method. ...</div><div class='long'><p>Provides the all process definition instances through callback method. *</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its a function which will be called after the completion of\n       this method.\n</code></pre>\n</div></li></ul></div></div></div><div id='method-getUserProcesses' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataLayer'>DataLayer</span><br/><a href='source/DataLayer.html#DataLayer-method-getUserProcesses' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataLayer-method-getUserProcesses' class='name expandable'>getUserProcesses</a>( <span class='pre'>userId</span> ) : UserProcess []</div><div class='description'><div class='short'>Provides all process id's against the user ...</div><div class='long'><p>Provides all process id's against the user</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>userId</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its a string value.\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>UserProcess []</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-loadAllConceptServices' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataLayer'>DataLayer</span><br/><a href='source/DataLayer.html#DataLayer-method-loadAllConceptServices' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataLayer-method-loadAllConceptServices' class='name expandable'>loadAllConceptServices</a>( <span class='pre'>conceptClassName, callback, instance</span> ) : void</div><div class='description'><div class='short'>Load all concepts based on the class name. ...</div><div class='long'><p>Load all concepts based on the class name.</p>\n\n<p>@params conceptClassName: Its a string value name of the concept class</p>\n\n<p>@params callback: Its a function which will be called after the complete.\n@params instance: Its an object which can act any type of object which is</p>\n\n<pre><code>    return back to the call back method.\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>conceptClassName</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>instance</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-loadConcepts' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataLayer'>DataLayer</span><br/><a href='source/DataLayer.html#DataLayer-method-loadConcepts' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataLayer-method-loadConcepts' class='name expandable'>loadConcepts</a>( <span class='pre'>searchCriteria, callback, instance</span> ) : void</div><div class='description'><div class='short'>Load all concepts based on the search criteria. ...</div><div class='long'><p>Load all concepts based on the search criteria.</p>\n\n<p>@params searchCriteria: Its an object of searchcriteria</p>\n\n<p>@params callback: Its a function which will be called after the</p>\n\n<pre><code>    completion of the method.\n</code></pre>\n\n<p>@params instance: Its an object which can act any type of object which is</p>\n\n<pre><code>    return back to the call back method.\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>searchCriteria</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>instance</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-loadConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataLayer'>DataLayer</span><br/><a href='source/DataLayer.html#DataLayer-method-loadConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataLayer-method-loadConfig' class='name expandable'>loadConfig</a>( <span class='pre'>messageType, callBackFunction</span> ) : void</div><div class='description'><div class='short'>Get config object based on message type ...</div><div class='long'><p>Get config object based on message type</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>messageType</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its a string value hold the type of message.\n</code></pre>\n</div></li><li><span class='pre'>callBackFunction</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its a function which will be called after the completion of\n       the method and return the config object as parameter to the\n       callback method.\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-loadData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DataLayer'>DataLayer</span><br/><a href='source/DataLayer.html#DataLayer-method-loadData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/DataLayer-method-loadData' class='name expandable'>loadData</a>( <span class='pre'>key, paramData, callBack</span> )</div><div class='description'><div class='short'>Load the data based on the key, prefix with 'JS' (MessagScript), 'FS'\n(FormScript), 'FM_' (FormHtml) etc. ...</div><div class='long'><p>Load the data based on the key, prefix with 'JS<em>' (MessagScript), 'FS</em>'\n(FormScript), 'FM_' (FormHtml) etc. based on the key it retrievs the data\nfrom the cache or server.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its a string value.\n</code></pre>\n</div></li><li><span class='pre'>paramData</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its a json array.(Optional)\n</code></pre>\n</div></li><li><span class='pre'>callBack</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its a function which will be called after the completion of\n       the method , it returns a data through callback method.\n</code></pre>\n</div></li></ul></div></div></div></div></div></div></div>"});