using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DynamicSugar;
using System.Diagnostics;
using System.Windows.Forms;
using System.IO;

namespace JavaScriptDemoer {

    /// <summary>
    /// 
    /// </summary>
    class JavaScriptDemoRunTime {

        public JavaScriptItemDemos Items = new JavaScriptItemDemos();
        private long _fileSize = -1;
        private string _fileName;

        public JavaScriptDemoRunTime(string fileName) {

            LoadFile(fileName);
        }
        public bool NeedReload() { 

            return this._fileSize != -1 && this._fileSize != new System.IO.FileInfo(this._fileName).Length;
        }
        public void LoadFile(string fileName) {

            if(!System.IO.File.Exists(fileName))
                return;

            this._fileName               = fileName;
            this._fileSize               = new System.IO.FileInfo(fileName).Length;
            this.Items                   = new JavaScriptItemDemos();
            this.Items                   = new JavaScriptItemDemos();
            JavaScriptItemDemo item      = null;            
            var lines                    = System.IO.File.ReadAllText(fileName).Replace(Environment.NewLine, "\n").Split('\n');
            var i                        = 0;
            var csMode                   = false;

            while (i < lines.Length) {

                if (lines[i].Trim().StartsWith(JavaScriptItemDemo.CODE_TAG)) {

                    csMode = false; // C# mode is false
                    item = Items.Add(new JavaScriptItemDemo(lines[i]));
                }
                else if (lines[i].Trim().StartsWith(JavaScriptItemDemo.BLOCK_CSHARP_START_TAG)){
                    csMode = true;
                }
                else if (lines[i].Trim().StartsWith(JavaScriptItemDemo.SLIDE_ID_TAG))
                {
                    item.SetSlideID(lines[i]);
                }
                else if (lines[i].Trim().StartsWith(JavaScriptItemDemo.INCLUDE_SLIDE_TAG))
                {
                    item.IncludeSlide(lines[i], Items);
                }
                else if (lines[i].Trim().StartsWith(JavaScriptItemDemo.BLOCK_COMMENT_START_TAG))
                {
                    i++;
                    while (!lines[i].StartsWith(JavaScriptItemDemo.BLOCK_COMMENT_END_TAG))
                    {
                        item.AddComment(lines[i]);
                        i++;
                    }
                }
                else if (lines[i].Trim().StartsWith(JavaScriptItemDemo.JAVASCRIPT_INCLUDE_TAG))
                {                    
                    item.IncludeCode(lines[i]);                    
                }
                else if (lines[i].Trim().StartsWith(JavaScriptItemDemo.JAVASCRIPT_BLOCK_LIB_START_TAG))
                {
                    i++;
                    while (!lines[i].StartsWith(JavaScriptItemDemo.JAVASCRIPT_BLOCK_LIB_END_TAG))
                    {
                        item.AddJavaScriptLibSourceCodeLine(lines[i]);
                        i++;
                    }
                }
                else if (lines[i].Trim().StartsWith(JavaScriptItemDemo.CSHARP_BLOCK_LIB_START_TAG))
                {
                    i++;
                    while (!lines[i].StartsWith(JavaScriptItemDemo.CSHARP_BLOCK_LIB_END_TAG))
                    {                        
                        item.AddCSharptLibSourceCodeLine(lines[i]);
                        i++;
                    }
                }
                else
                {
                    if(csMode)
                        item.AddCSharpSourceCodeLine(lines[i]);
                    else
                        item.AddJavaScriptSourceCodeLine(lines[i]);
                }
                i++;
            }
            foreach (var it in this.Items)
                it.CleanData();
        }

        internal void GeneratePresentation() {
            
            var htmlFile = @"{0}\node\{1}.html".format(System.IO.Path.GetDirectoryName(Application.ExecutablePath), System.IO.Path.GetFileNameWithoutExtension(this._fileName));

            StringBuilder b = new StringBuilder(1024);

            for(var i=0; i<this.Items.Count; i++){
                var it = this.Items[i];
                b.Append(System.IO.File.ReadAllText(it.GenerateHTMLFile(i==0, i==this.Items.Count-1))).AppendLine();
            }
            System.IO.File.WriteAllText(htmlFile, b.ToString());
            UTILS.ExecFile(htmlFile);
        }
        internal void GeneratePresentationSummary() {
            
            var htmlFile = @"{0}\node\{1}.html".format(System.IO.Path.GetDirectoryName(Application.ExecutablePath), System.IO.Path.GetFileNameWithoutExtension(this._fileName));

            StringBuilder b = new StringBuilder(1024);

            b.AppendFormat("<H1>{0}</H1>", System.IO.Path.GetFileNameWithoutExtension(_fileName));
            b.Append("<UL>").AppendLine();

            var previousTitle = "";
            var index = 1;

            for(var i=0; i<this.Items.Count; i++){

                var it = this.Items[i];
                var newTitle = it.GetGeneratedSummary();
                if(previousTitle!=newTitle) {
                    b.AppendFormat("<LI>{0}</LI>", newTitle).AppendLine();
                    index++;
                }

                previousTitle = newTitle;
                
            }
            b.Append("</UL>").AppendLine();
            System.IO.File.WriteAllText(htmlFile, b.ToString());
            UTILS.ExecFile(htmlFile);
        }
    }
}
