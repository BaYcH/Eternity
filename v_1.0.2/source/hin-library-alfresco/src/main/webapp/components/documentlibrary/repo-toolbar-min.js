(function() {
	var f = YAHOO.util.Dom, c = YAHOO.util.Event, d = YAHOO.util.Element;
	var b = Alfresco.util.encodeHTML, g = Alfresco.util.combinePaths;
	Alfresco.RepositoryDocListToolbar = function(i) {
		return Alfresco.RepositoryDocListToolbar.superclass.constructor.call(
				this, i)
	};
	YAHOO.extend(Alfresco.RepositoryDocListToolbar, Alfresco.DocListToolbar);
	YAHOO.lang
			.augmentObject(
					Alfresco.RepositoryDocListToolbar.prototype,
					{
						onFileUpload : function h(j, k) {
							if (this.fileUpload === null) {
								this.fileUpload = Alfresco
										.getFileUploadInstance()
							}
							var i = {
								destination : this.modules.docList.doclistMetadata.parent.nodeRef,
								filter : [],
								mode : this.fileUpload.MODE_MULTI_UPLOAD,
								thumbnails : "doclib",
								onFileUploadComplete : {
									fn : this.onFileUploadComplete,
									scope : this
								}
							};
							this.fileUpload.show(i)
						},
						onFileUploadComplete : function e(i) {
						},
						_generateRSSFeedUrl : function a() {
							if (this.widgets.rssFeed && this.modules.docList) {
								var i = YAHOO.lang
										.substitute(
												"{type}/node/alfresco/company/home{path}",
												{
													type : this.modules.docList.options.showFolders ? "all"
															: "documents",
													path : Alfresco.util
															.encodeURIPath(this.currentPath)
												});
								i += "?filter="
										+ encodeURIComponent(this.currentFilter.filterId);
								if (this.currentFilter.filterData) {
									i += "&filterData="
											+ encodeURIComponent(this.currentFilter.filterData)
								}
								i += "&libraryRoot="
										+ this.options.rootNode.toString();
								i += "&format=rss";
								
							}
						}
					}, true)
})();