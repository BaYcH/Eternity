Ext.data.JsonP.HIN_EnrollmentPage({"tagname":"class","name":"HIN.EnrollmentPage","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-HIN.EnrollmentPage","members":{"cfg":[],"property":[{"name":"processDefinition","tagname":"property","owner":"HIN.EnrollmentPage","meta":{},"id":"property-processDefinition"},{"name":"selectedStep","tagname":"property","owner":"HIN.EnrollmentPage","meta":{},"id":"property-selectedStep"}],"method":[{"name":"addCompleteHandler","tagname":"method","owner":"HIN.EnrollmentPage","meta":{},"id":"method-addCompleteHandler"},{"name":"addInitialHandler","tagname":"method","owner":"HIN.EnrollmentPage","meta":{},"id":"method-addInitialHandler"},{"name":"init","tagname":"method","owner":"HIN.EnrollmentPage","meta":{},"id":"method-init"},{"name":"pageBeforeLoad","tagname":"method","owner":"HIN.EnrollmentPage","meta":{},"id":"method-pageBeforeLoad"},{"name":"removeCompleteHandler","tagname":"method","owner":"HIN.EnrollmentPage","meta":{},"id":"method-removeCompleteHandler"},{"name":"taskHandler","tagname":"method","owner":"HIN.EnrollmentPage","meta":{},"id":"method-taskHandler"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":4,"files":[{"filename":"EnrollmentPage.js","href":"EnrollmentPage.html#HIN-EnrollmentPage"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/EnrollmentPage.html#HIN-EnrollmentPage' target='_blank'>EnrollmentPage.js</a></div></pre><div class='doc-contents'><p>EnrollmentPage is sub class of page which is the entry point of the step,\nwhich knows the current process definition, selected step etc.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-processDefinition' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HIN.EnrollmentPage'>HIN.EnrollmentPage</span><br/><a href='source/EnrollmentPage.html#HIN-EnrollmentPage-property-processDefinition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HIN.EnrollmentPage-property-processDefinition' class='name expandable'>processDefinition</a><span> : Object</span></div><div class='description'><div class='short'>processDefinition holds the current selected process definition. ...</div><div class='long'><p>processDefinition holds the current selected process definition. Its an\nobject of processdefinition.</p>\n</div></div></div><div id='property-selectedStep' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HIN.EnrollmentPage'>HIN.EnrollmentPage</span><br/><a href='source/EnrollmentPage.html#HIN-EnrollmentPage-property-selectedStep' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HIN.EnrollmentPage-property-selectedStep' class='name expandable'>selectedStep</a><span> : Object</span></div><div class='description'><div class='short'>selectedStep holds the current selected step. ...</div><div class='long'><p>selectedStep holds the current selected step. Its an object of step</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addCompleteHandler' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HIN.EnrollmentPage'>HIN.EnrollmentPage</span><br/><a href='source/EnrollmentPage.html#HIN-EnrollmentPage-method-addCompleteHandler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HIN.EnrollmentPage-method-addCompleteHandler' class='name expandable'>addCompleteHandler</a>( <span class='pre'>addNew, messageType, uiGenerator</span> ) : void</div><div class='description'><div class='short'>addCompleteHandler method will trigger from the UI form.E.g. ...</div><div class='long'><p>addCompleteHandler method will trigger from the UI form.E.g. Add a new form\nby clicking on the add icon from the UI or load an existing form and it will\ndifferentiate by the property addNew, true means newly added.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>addNew</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its a boolean value.\n</code></pre>\n</div></li><li><span class='pre'>messageType</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its an object of messageType.\n</code></pre>\n</div></li><li><span class='pre'>uiGenerator</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its an object of uiGenerator.\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addInitialHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HIN.EnrollmentPage'>HIN.EnrollmentPage</span><br/><a href='source/EnrollmentPage.html#HIN-EnrollmentPage-method-addInitialHandler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HIN.EnrollmentPage-method-addInitialHandler' class='name expandable'>addInitialHandler</a>( <span class='pre'>uiGenerator</span> ) : void</div><div class='description'><div class='short'>addCompleteHandler method will trigger from the UI form.E.g. ...</div><div class='long'><p>addCompleteHandler method will trigger from the UI form.E.g. Add a new form\nby clicking on the add icon from the UI or load an existing form and it will\ndifferentiate by the property addNew, true means newly added.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>uiGenerator</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its an object of uiGenerator.\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HIN.EnrollmentPage'>HIN.EnrollmentPage</span><br/><a href='source/EnrollmentPage.html#HIN-EnrollmentPage-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HIN.EnrollmentPage-method-init' class='name expandable'>init</a>( <span class='pre'>callback, page</span> ) : void</div><div class='description'><div class='short'>init method will trigger from base class.Here in init method have the\nfollowing business logic. ...</div><div class='long'><p>init method will trigger from base class.Here in init method have the\nfollowing business logic. It retrieves the relevant data from the context and\nit loads and execute the initialize script as per the process definition\nusing the process script API. The callback will be triggered from process\nscript API and execute the business or ui logic which is implemented.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its a function which will be called after the init.\n</code></pre>\n</div></li><li><span class='pre'>page</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its an object of page.\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-pageBeforeLoad' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HIN.EnrollmentPage'>HIN.EnrollmentPage</span><br/><a href='source/EnrollmentPage.html#HIN-EnrollmentPage-method-pageBeforeLoad' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HIN.EnrollmentPage-method-pageBeforeLoad' class='name expandable'>pageBeforeLoad</a>( <span class='pre'>messageType, uiGenerator</span> ) : void</div><div class='description'><div class='short'>pageBeforeLoad method will trigger from the base class and customize the code\nas per the business logic. ...</div><div class='long'><p>pageBeforeLoad method will trigger from the base class and customize the code\nas per the business logic.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>messageType</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its an object of messageType.\n</code></pre>\n</div></li><li><span class='pre'>uiGenerator</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its an object of uiGenerator.\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeCompleteHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HIN.EnrollmentPage'>HIN.EnrollmentPage</span><br/><a href='source/EnrollmentPage.html#HIN-EnrollmentPage-method-removeCompleteHandler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HIN.EnrollmentPage-method-removeCompleteHandler' class='name expandable'>removeCompleteHandler</a>( <span class='pre'>messageTypeName, message</span> ) : void</div><div class='description'><div class='short'>removeCompleteHandler method will trigger from the UI form.E.g. ...</div><div class='long'><p>removeCompleteHandler method will trigger from the UI form.E.g. Delete a form\nby clicking on the delete icon from the UI. *</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>messageTypeName</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its a string value.\n</code></pre>\n</div></li><li><span class='pre'>message</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its an object of message.\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-taskHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='HIN.EnrollmentPage'>HIN.EnrollmentPage</span><br/><a href='source/EnrollmentPage.html#HIN-EnrollmentPage-method-taskHandler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/HIN.EnrollmentPage-method-taskHandler' class='name expandable'>taskHandler</a>( <span class='pre'>message, taskVO, instance</span> ) : void</div><div class='description'><div class='short'>taskHandler method will trigger by clicking on the finish button from the UI. ...</div><div class='long'><p>taskHandler method will trigger by clicking on the finish button from the UI.\nCustomize the code as per the business logic.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its an object of message.\n</code></pre>\n</div></li><li><span class='pre'>taskVO</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its an object of taskVO.\n</code></pre>\n</div></li><li><span class='pre'>instance</span> : Object<div class='sub-desc'><p>:</p>\n\n<pre><code>       Its an object of uigenerator.\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});