Ext.data.JsonP.Process({"tagname":"class","name":"Process","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Process","members":{"cfg":[],"property":[{"name":"collapsed","tagname":"property","owner":"Process","meta":{},"id":"property-collapsed"},{"name":"iframe","tagname":"property","owner":"Process","meta":{},"id":"property-iframe"},{"name":"innerHeight","tagname":"property","owner":"Process","meta":{},"id":"property-innerHeight"},{"name":"left","tagname":"property","owner":"Process","meta":{},"id":"property-left"},{"name":"outerHeight","tagname":"property","owner":"Process","meta":{},"id":"property-outerHeight"},{"name":"processDefinition","tagname":"property","owner":"Process","meta":{},"id":"property-processDefinition"},{"name":"processDivisions","tagname":"property","owner":"Process","meta":{},"id":"property-processDivisions"},{"name":"right","tagname":"property","owner":"Process","meta":{},"id":"property-right"},{"name":"steps","tagname":"property","owner":"Process","meta":{},"id":"property-steps"}],"method":[{"name":"eventHandler","tagname":"method","owner":"Process","meta":{},"id":"method-eventHandler"},{"name":"getProcessDefinition","tagname":"method","owner":"Process","meta":{},"id":"method-getProcessDefinition"},{"name":"loadProcess","tagname":"method","owner":"Process","meta":{},"id":"method-loadProcess"},{"name":"loadUI","tagname":"method","owner":"Process","meta":{},"id":"method-loadUI"},{"name":"mCustomScrollbars","tagname":"method","owner":"Process","meta":{},"id":"method-mCustomScrollbars"},{"name":"setProcessDefinition","tagname":"method","owner":"Process","meta":{},"id":"method-setProcessDefinition"},{"name":"toggleStepPage","tagname":"method","owner":"Process","meta":{},"id":"method-toggleStepPage"},{"name":"updateProcess","tagname":"method","owner":"Process","meta":{},"id":"method-updateProcess"},{"name":"updateProcessView","tagname":"method","owner":"Process","meta":{},"id":"method-updateProcessView"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Process.js","href":"Process.html#Process"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Process.html#Process' target='_blank'>Process.js</a></div></pre><div class='doc-contents'><p>Process is a child component of Rendering Engine which displays the process\npage to user as per the process definition and sends same information to\nrendering engine for further processing.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-collapsed' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Process'>Process</span><br/><a href='source/Process.html#Process-property-collapsed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Process-property-collapsed' class='name expandable'>collapsed</a><span> : Boolean</span></div><div class='description'><div class='short'>collapsed holds true or false value, based on that UI will be rendered. ...</div><div class='long'><p>collapsed holds true or false value, based on that UI will be rendered.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-iframe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Process'>Process</span><br/><a href='source/Process.html#Process-property-iframe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Process-property-iframe' class='name expandable'>iframe</a><span> : Boolean</span></div><div class='description'><div class='short'>iframe holds true or false value, based on that UI will be decided to\nrender using iframe or not . ...</div><div class='long'><p>iframe holds true or false value, based on that UI will be decided to\nrender using iframe or not .</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-innerHeight' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Process'>Process</span><br/><a href='source/Process.html#Process-property-innerHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Process-property-innerHeight' class='name expandable'>innerHeight</a><span> : String</span></div><div class='description'><div class='short'>innerHeight holds the ui innerHeight value ...</div><div class='long'><p>innerHeight holds the ui innerHeight value</p>\n<p>Defaults to: <code>&quot;auto&quot;</code></p></div></div></div><div id='property-left' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Process'>Process</span><br/><a href='source/Process.html#Process-property-left' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Process-property-left' class='name expandable'>left</a><span> : Number</span></div><div class='description'><div class='short'>left holds the ui left position value ...</div><div class='long'><p>left holds the ui left position value</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-outerHeight' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Process'>Process</span><br/><a href='source/Process.html#Process-property-outerHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Process-property-outerHeight' class='name expandable'>outerHeight</a><span> : String</span></div><div class='description'><div class='short'>outerHeight holds the ui outerHeight value ...</div><div class='long'><p>outerHeight holds the ui outerHeight value</p>\n<p>Defaults to: <code>&quot;auto&quot;</code></p></div></div></div><div id='property-processDefinition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Process'>Process</span><br/><a href='source/Process.html#Process-property-processDefinition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Process-property-processDefinition' class='name not-expandable'>processDefinition</a><span> : Object</span></div><div class='description'><div class='short'><p>processDefinition holds the current selected process definition.</p>\n</div><div class='long'><p>processDefinition holds the current selected process definition.</p>\n</div></div></div><div id='property-processDivisions' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Process'>Process</span><br/><a href='source/Process.html#Process-property-processDivisions' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Process-property-processDivisions' class='name expandable'>processDivisions</a><span> : Array</span></div><div class='description'><div class='short'>processDivisions holds the divisions based on the steps ...</div><div class='long'><p>processDivisions holds the divisions based on the steps</p>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='property-right' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Process'>Process</span><br/><a href='source/Process.html#Process-property-right' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Process-property-right' class='name expandable'>right</a><span> : Number</span></div><div class='description'><div class='short'>right holds the ui right position value ...</div><div class='long'><p>right holds the ui right position value</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-steps' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Process'>Process</span><br/><a href='source/Process.html#Process-property-steps' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Process-property-steps' class='name expandable'>steps</a><span> : Array</span></div><div class='description'><div class='short'>steps holds the steps of current selected process definition. ...</div><div class='long'><p>steps holds the steps of current selected process definition.</p>\n<p>Defaults to: <code>[]</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-eventHandler' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Process'>Process</span><br/><a href='source/Process.html#Process-method-eventHandler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Process-method-eventHandler' class='name expandable'>eventHandler</a>( <span class='pre'>event</span> ) : void</div><div class='description'><div class='short'>Handles the events from components ...</div><div class='long'><p>Handles the events from components</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getProcessDefinition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Process'>Process</span><br/><a href='source/Process.html#Process-method-getProcessDefinition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Process-method-getProcessDefinition' class='name expandable'>getProcessDefinition</a>( <span class='pre'></span> ) : ProcessDefinition</div><div class='description'><div class='short'>Return selected process definition. ...</div><div class='long'><p>Return selected process definition.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>ProcessDefinition</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-loadProcess' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Process'>Process</span><br/><a href='source/Process.html#Process-method-loadProcess' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Process-method-loadProcess' class='name expandable'>loadProcess</a>( <span class='pre'></span> ) : void</div><div class='description'><div class='short'>Load the process. ...</div><div class='long'><p>Load the process.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-loadUI' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Process'>Process</span><br/><a href='source/Process.html#Process-method-loadUI' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Process-method-loadUI' class='name expandable'>loadUI</a>( <span class='pre'></span> ) : void</div><div class='description'><div class='short'>Load the html page and bind the ui events. ...</div><div class='long'><p>Load the html page and bind the ui events.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-mCustomScrollbars' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Process'>Process</span><br/><a href='source/Process.html#Process-method-mCustomScrollbars' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Process-method-mCustomScrollbars' class='name expandable'>mCustomScrollbars</a>( <span class='pre'></span> ) : void</div><div class='description'><div class='short'>Custom scrollbar for extra results. ...</div><div class='long'><p>Custom scrollbar for extra results.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setProcessDefinition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Process'>Process</span><br/><a href='source/Process.html#Process-method-setProcessDefinition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Process-method-setProcessDefinition' class='name expandable'>setProcessDefinition</a>( <span class='pre'>processDefinition</span> ) : void</div><div class='description'><div class='short'>Set the selected process definition. ...</div><div class='long'><p>Set the selected process definition.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>processDefinition</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its a processDefinition object.\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toggleStepPage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Process'>Process</span><br/><a href='source/Process.html#Process-method-toggleStepPage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Process-method-toggleStepPage' class='name expandable'>toggleStepPage</a>( <span class='pre'>event</span> ) : void</div><div class='description'><div class='short'>Toggle the ui by clicking on the left side navigation menu. ...</div><div class='long'><p>Toggle the ui by clicking on the left side navigation menu.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its an event, hold the click event.\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateProcess' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Process'>Process</span><br/><a href='source/Process.html#Process-method-updateProcess' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Process-method-updateProcess' class='name expandable'>updateProcess</a>( <span class='pre'></span> ) : void</div><div class='description'><div class='short'>Which update process view whenever modify the selected the process\ndefinition ...</div><div class='long'><p>Which update process view whenever modify the selected the process\ndefinition</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateProcessView' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Process'>Process</span><br/><a href='source/Process.html#Process-method-updateProcessView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Process-method-updateProcessView' class='name expandable'>updateProcessView</a>( <span class='pre'></span> ) : void</div><div class='description'><div class='short'>Generate or update the process UI ...</div><div class='long'><p>Generate or update the process UI</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});