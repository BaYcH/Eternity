<#include "../../../include/alfresco-macros.lib.ftl" />
<#macro toolbarTemplate>
<#nested>
<#assign id=args.htmlid?html>
<div id="${id}-body" class="toolbar no-check-bg">

   <div id="${id}-headerBar" class="header-bar flat-button theme-bg-2">
      <div class="left">
         <div class="hideable toolbar-hidden DocListTree">
            <div class="create-content">
               <span id="${id}-createContent-button" class="yui-button yui-push-button">
                  <span class="first-child">
                     <button name="createContent">${msg("button.create-content")}</button>
                  </span>
               </span>
               <div id="${id}-createContent-menu" class="yuimenu">
                  <div class="bd">
                     <ul>
                     <#list createContent as content>
                        <#assign href>create-content?destination={nodeRef}&amp;itemId=${content.itemid}<#if (content.mimetype!"") != "">&amp;mimeType=${content.mimetype?html}</#if><#if (content.formid!"") != "">&amp;formId=${content.formid?html}</#if></#assign>
                        <li><a href="${siteURL(href)}" rel="${content.permission!""}"><span style="background-image:url(${url.context}/res/components/images/filetypes/${content.icon}-file-16.png)" class="${content.icon}-file">${msg(content.label!"")}</span></a></li>
                     </#list>
                     </ul>
                     <#if createContentByTemplateEnabled>
                     <ul>
                        <li>
                           <span>${msg("menu.create-content.by-template-node")}</span>
                           <div class="yuimenu"><div class="bd"><ul></ul></div></div>
                        </li>
                     </ul>
                     </#if>
                  </div>
               </div>
            </div>
         </div>
         <div class="hideable toolbar-hidden DocListTree">
            <div class="new-folder">
               <span id="${id}-newFolder-button" class="yui-button yui-push-button">
                  <span class="first-child">
                     <button name="newFolder">${msg("button.new-folder")}</button>
                  </span>
               </span>
            </div>
         </div>
         <div class="hideable toolbar-hidden DocListTree">
            <div class="file-upload">
               <span id="${id}-fileUpload-button" class="yui-button yui-push-button">
                  <span class="first-child">
                     <button name="fileUpload">${msg("button.upload")}</button>
                  </span>
               </span>
            </div>
         </div>
         <div class="selected-items hideable toolbar-hidden DocListTree DocListFilter TagFilter DocListCategories">
            <button class="no-access-check" id="${id}-selectedItems-button" name="doclist-selectedItems-button">${msg("menu.selected-items")}</button>
            <div id="${id}-selectedItems-menu" class="yuimenu">
               <div class="bd">
                  <ul>
                  <#list actionSet as action>
                     <li><a type="${action.asset!""}" rel="${action.permission!""}" href="${action.href}"><span class="${action.id}">${msg(action.label)}</span></a></li>
                  </#list>
                     <li><a href="#"><hr /></a></li>
                     <li><a href="#"><span class="onActionDeselectAll">${msg("menu.selected-items.deselect-all")}</span></a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
      <div class="right">
         <div class="hide-navbar">
            <span id="${id}-hideNavBar-button" class="yui-button yui-checkbox-button">
               <span class="first-child">
                  <button name="hideNavBar"></button>
               </span>
            </span>
         </div>
      </div>
   </div>

   <div id="${id}-navBar" class="nav-bar flat-button theme-bg-2">
      <div class="hideable toolbar-hidden DocListTree DocListCategories">
         <div class="folder-up">
            <span id="${id}-folderUp-button" class="yui-button yui-push-button">
               <span class="first-child">
                  <button class="no-access-check" name="folderUp"></button>
               </span>
            </span>
         </div>
         <div class="separator">&nbsp;</div>
      </div>
      <div id="${id}-breadcrumb" class="breadcrumb hideable toolbar-hidden DocListTree DocListCategories"></div>
      <div id="${id}-description" class="description hideable toolbar-hidden DocListFilter TagFilter"></div>
   </div>

</div>
</#macro>