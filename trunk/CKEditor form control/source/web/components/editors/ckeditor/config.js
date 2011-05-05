CKEDITOR.editorConfig = function( config )
{
		config.filebrowserImageBrowseUrl='/share/page/ckeditor-listimages?site='+Alfresco.constants.SITE;
		config.toolbar=[
		        ['Source','NewPage','Preview'],
		        ['Cut','Copy','Paste','PasteText','PasteFromWord','-','Scayt'],
		        ['Undo','Redo','-','Find','Replace','-','SelectAll','RemoveFormat'],
		        ['Image','Table','HorizontalRule','Smiley','SpecialChar','PageBreak'],
		        '/',
		        ['Styles','Format'],
		        ['Bold','Italic','Strike','-','Subscript','Superscript'],
		        ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
		        ['Link','Unlink','Anchor'],
		        ['Maximize','-','About']
		        ];
};
