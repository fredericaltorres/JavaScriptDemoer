using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DynamicSugar;
using System.Diagnostics;
using System.Windows.Forms;
using System.IO;
using System.Reflection;

//<script src='http://www.FredericTorres.net/syntaxhighlighter_3.0.83/scripts/shCore.js' type='text/javascript'></script> 
//<script src='http://www.FredericTorres.net/syntaxhighlighter_3.0.83/scripts/shBrushJScript.js' type='text/javascript'></script> 
//<script src='http://www.FredericTorres.net/syntaxhighlighter_3.0.83/scripts/shBrushPython.js' type='text/javascript'></script>
//<script src='http://www.FredericTorres.net/syntaxhighlighter_3.0.83/scripts/shBrushRuby.js' type='text/javascript'></script> 
//<script src='http://www.FredericTorres.net/syntaxhighlighter_3.0.83/scripts/shBrushCSharp.js' type='text/javascript'></script> 
//<link href='http://www.FredericTorres.net/syntaxhighlighter_3.0.83/styles/shCoreDefault.css' rel='stylesheet' type='text/css'/> 


namespace JavaScriptDemoer {


    /// <summary>
    /// 
    /// </summary>
    class JavaScriptItemDemo {

        const string HTML_HEADER = @"
<!doctype html>
<head>
    <meta charset=""utf-8"">    
    <title>..\JavaScript For C# Developper.md</title>
    <style>
        .Red           { background-color:Red;                                                                          }
        .SmallFontBold { font:12px/1.231 sans-serif;font-weight:bold;                                                   }        
        body           { font:20px/1.231 sans-serif;                                                                    }
        #TopBar        { font:12px/1.231 sans-serif;                                                                    }
        hr             { display: block; height: 1px; border: 0; border-top: 1px solid #ccc; margin: 1em 0; padding: 0; }
    </style>
<script src='SyntaxHighlighter/shCore.js' type='text/javascript'></script> 
<script src='SyntaxHighlighter/shBrushJScript.js' type='text/javascript'></script> 
<script src='SyntaxHighlighter/shBrushPython.js' type='text/javascript'></script>
<script src='SyntaxHighlighter/shBrushRuby.js' type='text/javascript'></script> 
<script src='SyntaxHighlighter/shBrushCSharp.js' type='text/javascript'></script> 
<link href='SyntaxHighlighter/shCoreDefault.css' rel='stylesheet' type='text/css'/> 
<script type='text/javascript'>SyntaxHighlighter.all();</script>

<script src='jquery/jQuery.1.6.4.js' type='text/javascript'></script>
<link rel='stylesheet' href='jquery/styles.css' />
<!--
<link rel='stylesheet' href='jquery.mobile/jquery.mobile-1.0rc1.min.css' />
<script src='jquery.mobile/jquery.mobile-1.0rc1.min.js' type='text/javascript'></script>
-->
<script type='text/javascript'>

    var _secondCounter = 60;
    var _timerExecuteEverySecond = 10;
    var _timerDuration = _timerExecuteEverySecond * 1000;
    var timerHandle;

    function OnSecond(){

        var topBar      = $('#TopBar');        
        _secondCounter -= _timerExecuteEverySecond;
        topBar.html(_secondCounter);
        timerHandle     = setTimeout(OnSecond,_timerDuration);        
    }
    $(document).ready(function () {

       // timerHandle = setTimeout(OnSecond,_timerDuration);
    });
    function SelectNextLineOfCode() {

        var selector = 'div.line number1 index0 alt2';
        var selector = 'div.number1';
        var line = $(selector);
        alert(line.length);
        line[1].className = 'line number1 index0 Red';
        alert(line[1].className);
        //line.css('background-color','red');        
    }
</script>
</head>
<body>
<!--
  <div id=""TopBar"" align=""right"">__</div>
    <button OnClick=""SelectNextLineOfCode();"" id=""NextLineOfCode""><< Previous Line</button>
    <button id=""NextLineOfCode"">Next Line >></button>
-->
  <div id=""container"">
";
        const string HTML_FOOTER = @"
    </div>
</body>
";

        public string Title;
        public string Comment;
        public string JavaScriptSourceCode;
        public string CSharpSourceCode;
        public string JavaScriptLibSourceCode;
        public string CSharpLibSourceCode;
        public int Index;
        public string SlideID;

        public const string JAVASCRIPT_BLOCK_LIB_START_TAG = "/*lib";
        public const string JAVASCRIPT_BLOCK_LIB_END_TAG = "lib*/";

        public const string CSHARP_BLOCK_LIB_START_TAG = "/*C#lib";
        public const string CSHARP_BLOCK_LIB_END_TAG = "C#lib*/";

        //#include person.js
        public const string JAVASCRIPT_INCLUDE_TAG = "//#include";
        public const string BLOCK_CSHARP_START_TAG = "//C#";

        public const string BLOCK_COMMENT_START_TAG = "/**";
        public const string BLOCK_COMMENT_END_TAG = "**/";
        public const string CODE_TAG = "//code";
        public const string COMMENT_TAG = "//comment";
        public const string SLIDE_ID_TAG = "//slideid";
        public const string INCLUDE_SLIDE_TAG = "//includeslide";

        public const string MAIN_TAG = "//main";

        private static string _demoLibJsSourceCode = null;

        private static string DemoLibJsSourceCode {
            get {
                if (_demoLibJsSourceCode == null) {

                    _demoLibJsSourceCode = DynamicSugar.DS.Resources.GetTextResource("Demo.Lib.js", Assembly.GetExecutingAssembly());
                }
                return _demoLibJsSourceCode;
            }
        }
        //private string GetSyntaxHighlighterJavaScriptCode(){

        //    StringBuilder b = new StringBuilder(1024);
        //    b.Append(DS.Resources.GetTextResource("shCore.js", Assembly.GetExecutingAssembly()));
        //    b.Append(DS.Resources.GetTextResource("shBrushJScript.js", Assembly.GetExecutingAssembly()));
        //    b.Append(DS.Resources.GetTextResource("shBrushPython.js", Assembly.GetExecutingAssembly()));
        //    b.Append(DS.Resources.GetTextResource("shBrushRuby.js", Assembly.GetExecutingAssembly()));
        //    b.Append(DS.Resources.GetTextResource("shBrushCSharp.js", Assembly.GetExecutingAssembly()));
        //    b.Append(DS.Resources.GetTextResource("shCoreDefault.css", Assembly.GetExecutingAssembly()));
        //    return b.ToString();
        //}

        public JavaScriptItemDemo(string title) {

            title = title.Trim();
            if (title.Trim().StartsWith(CODE_TAG)) {

                this.Title = title.Substring(CODE_TAG.Length);
            }
        }
        public void AddCSharptLibSourceCodeLine(string l) {

            this.CSharpLibSourceCode += l + Environment.NewLine;
        }
        public void IncludeCode(string fileName) {

            fileName = fileName.Substring(JavaScriptItemDemo.JAVASCRIPT_INCLUDE_TAG.Length).Trim().ToLower();

            if (System.IO.File.Exists(fileName)) {
                var source = System.IO.File.ReadAllText(fileName);
                if (fileName.EndsWith(".js")) {
                    this.JavaScriptLibSourceCode += source + Environment.NewLine;
                }
                else if (fileName.EndsWith(".cs")) {
                    this.CSharpLibSourceCode += source + Environment.NewLine;
                }
            }
            else {
                throw new ApplicationException("Cannot include file {0}".format(fileName));
            }
        }
        public void AddJavaScriptLibSourceCodeLine(string l) {

            this.JavaScriptLibSourceCode += l + Environment.NewLine;
        }
        public void AddCSharpSourceCodeLine(string l) {

            this.CSharpSourceCode += l + Environment.NewLine;
        }
        public void AddJavaScriptSourceCodeLine(string l) {

            this.JavaScriptSourceCode += l + Environment.NewLine;
        }
        public void AddComment(string l) {

            this.Comment += l + Environment.NewLine;
        }
        public override string ToString() {

            if (this.GetFirstCommentLine().IsNullOrEmpty()) {
                return DynamicSugar.ExtendedFormat.Format(this, "{Index:000} - {Title}");
            }
            else {
                return DynamicSugar.ExtendedFormat.Format(this, "{Index:000} - {Title} - {GetFirstCommentLine()}");
            }
        }
        private string ToHTML(string s, bool processCRLF = true) {
            if (s == null)
                return "";
            s = s.Replace("&", "&amp;");
            s = s.Replace(">", "&gt;");
            s = s.Replace("<", "&lt;");
            
            if(processCRLF)
                s = s.Replace(Environment.NewLine, "<BR/>");
            return s;
        }
        private string ToMarkDown(string s) {
            return (new MarkdownSharp.Markdown()).Transform(s);
        }
        public string GetFirstCommentLine() {

            if (this.Comment == null)
                return "";
            var p = this.Comment.IndexOf(Environment.NewLine);
            if (p == -1)
                return this.Comment.Trim();
            return this.Comment.Substring(0, p);
        }
        public string GetGeneratedSummary() {

            StringBuilder b = new StringBuilder(1111);
            b.AppendFormat("{0}", ToHTML("{0}".format(this.Title))).AppendLine();
            return b.ToString();
        }
        public string GenerateHTMLFile(bool includeHeader = true, bool includeFooter = true, bool sourceCodeOnly = false) {

            var f = @"{0}\node\JavaScriptDemo.html".format(System.IO.Path.GetDirectoryName(Application.ExecutablePath));

            StringBuilder b = new StringBuilder(1111);

            if (includeHeader)
                b.Append(HTML_HEADER).AppendLine();

            if (!sourceCodeOnly) {

                b.AppendFormat("<h2>{0}</h2><br/>", ToHTML("{0}".format(this.Title))).AppendLine();
                b.AppendFormat("<p>{0}</p>", ToMarkDown(this.Comment)).AppendLine();
                //b.AppendFormat("<hr>", ToHTML(this.Title)).AppendLine();
            }

            if (!this.CSharpSourceCode.IsNullOrEmpty()) {

                b.Append("<div class=\"SmallFontBold\">C#</div>").AppendLine();
                b.Append("<pre id=\"CSharpSourceCode\" class=\"brush:csharp;\">").AppendLine();
                
                b.Append(ToHTML(this.CSharpSourceCode, false)).AppendLine();
                
                //b.Append(this.CSharpSourceCode).AppendLine();

                b.Append("</pre>").AppendLine();
                b.Append("<div class=\"SmallFontBold\">JavaScript</div>").AppendLine();
            }

            if (!this.JavaScriptSourceCode.IsNullOrEmpty()) {

                b.Append("<pre id=\"JavaScriptSourceCode\" class=\"brush:javascript;\">").AppendLine();
                b.Append(this.JavaScriptSourceCode).AppendLine();
                b.Append("</pre>").AppendLine();
            }
            if (includeFooter)
                b.Append(HTML_FOOTER).AppendLine();

            System.IO.File.WriteAllText(f, b.ToString());
            return f;
        }
        private string GenerateJSFile() {

            var fileNameOnly = "JavaScriptDemo.js";
            var f = @"{0}\{1}".format(NodePath, fileNameOnly);
            StringBuilder b = new StringBuilder(1024);
            b.Append(DemoLibJsSourceCode).AppendLine();

            if (!this.JavaScriptLibSourceCode.IsNullOrEmpty())
                b.Append(this.JavaScriptLibSourceCode).AppendLine();

            b.Append(this.JavaScriptSourceCode).AppendLine();
            System.IO.File.WriteAllText(f, b.ToString());
            return fileNameOnly;
        }
        private string GenerateCSharpCode() {

            StringBuilder b = new StringBuilder(1024);

            if (!this.CSharpLibSourceCode.IsNullOrEmpty())
                b.Append(this.CSharpLibSourceCode).AppendLine();

            if (!this.CSharpSourceCode.IsNullOrEmpty())
                b.Append(this.CSharpSourceCode).AppendLine();
            
            return b.ToString();
        }
        private string NodeJsExec {
            get {
                return @"{0}\node.exe".format(NodePath, System.IO.Path.GetDirectoryName(Application.ExecutablePath));
            }
        }
        private string NodePath {
            get {
                return @"{0}\node".format(System.IO.Path.GetDirectoryName(Application.ExecutablePath));
            }
        }

        const string CSHARP_NAMESPACE_FOR_SNIPPET_FOR_CLASS = @"
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Execution {{

{0}

}}
";


        const string CSHARP_MAIN_DECLARATION = @"static void Main";

        const string CSHARP_NAMESPACE_FOR_SNIPPET_FOR_LINE_OF_CODE = @"
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Execution {{

    public class Program{{
    
        static void Main(string[] args){{
            {0}
        }}
    }}

}}
";

        public bool AnyCSharpToCompile() {

            return !this.CSharpSourceCode.IsNullOrEmpty();
        }
        public ExecutionInfo ExecuteCSharp() {

            var r = new ExecutionInfo();
            var cs = "";

            if (this.CSharpSourceCode.Contains(CSHARP_MAIN_DECLARATION)) {
                cs = CSHARP_NAMESPACE_FOR_SNIPPET_FOR_CLASS.format(this.GenerateCSharpCode());
            }
            else {
                cs = CSHARP_NAMESPACE_FOR_SNIPPET_FOR_LINE_OF_CODE.format(this.GenerateCSharpCode());
            }
            try {
                var compilerResults = new CSOnTheFlyCompiler(cs).Compile();
                return compilerResults;
            }
            catch (System.Exception ex) {

                r.ErrorLevel = -1;
                var s = ex.Message;
                r.ErrorOutput = "C# Compilation Error:\r\n{0}".format(s);
                this.EditCompiledCSharpCode(cs);
            }
            return r;
        }
        private void EditCompiledCSharpCode(string cs) {

            var f = @"{0}\JavaScriptDemoer.cs".format(Environment.GetEnvironmentVariable("TEMP"));
            System.IO.File.WriteAllText(f, cs);

            Process process = new Process();
            process.StartInfo = new ProcessStartInfo("notepad.exe", "\"{0}\"".format(f));
            bool processStarted = process.Start();
        }
        public JavaScriptExecutionInfo ExecuteJavaScript() {

            var e = new JavaScriptExecutionInfo();
            e.Time = Environment.TickCount;
            e.ErrorLevel = -1;
            StreamReader outputReader = null;
            StreamReader errorReader = null;
            try {
                var commandLineParameters = "\"{0}\"".format(GenerateJSFile());
                e.CommandLine = "nodejs.exe {1}".format(NodeJsExec, commandLineParameters);
                
                ProcessStartInfo processStartInfo = new ProcessStartInfo(NodeJsExec, commandLineParameters);
                processStartInfo.ErrorDialog = false;
                processStartInfo.UseShellExecute = false;
                processStartInfo.RedirectStandardError = true;
                processStartInfo.RedirectStandardInput = false;
                processStartInfo.RedirectStandardOutput = true;
                processStartInfo.CreateNoWindow = true;
                processStartInfo.WindowStyle = ProcessWindowStyle.Hidden;
                processStartInfo.WorkingDirectory = this.NodePath;

                Process process = new Process();

                process.StartInfo = processStartInfo;
                bool processStarted = process.Start();

                if (processStarted) {
                    outputReader = process.StandardOutput;
                    errorReader = process.StandardError;
                    process.WaitForExit();
                    e.Output = outputReader.ReadToEnd();
                    e.ErrorOutput = errorReader.ReadToEnd();
                }
            }
            catch (Exception ex) {
                e.ErrorOutput += "Error lanching the nodejs.exe = {0}".format(ex.ToString());
            }
            finally {
                if (outputReader != null)
                    outputReader.Close();
                if (errorReader != null)
                    errorReader.Close();

                e.Output = e.Output.Replace("\n", "\r\n");
                e.ErrorOutput = e.ErrorOutput.Replace("\n", "\r\n");
            }
            e.Time = Environment.TickCount - e.Time;
            return e;
        }
        internal void CleanData() {
            if (this.JavaScriptSourceCode == null)
                return;
            if (this.JavaScriptSourceCode.EndsWith(Environment.NewLine))
                this.JavaScriptSourceCode = this.JavaScriptSourceCode.Substring(0, this.JavaScriptSourceCode.Length - 2);
            if (this.JavaScriptSourceCode.StartsWith(Environment.NewLine))
                this.JavaScriptSourceCode = this.JavaScriptSourceCode.Substring(2);

        }
        internal void SetSlideID(string line) {

            line = line.Trim();

            if (line.Trim().StartsWith(SLIDE_ID_TAG)) {

                this.SlideID = line.Substring(SLIDE_ID_TAG.Length).Trim();
            }
        }

        internal void IncludeSlide(string line, JavaScriptItemDemos slides) {

            line = line.Trim();

            if (line.Trim().StartsWith(INCLUDE_SLIDE_TAG)) {

                var slideID = line.Substring(INCLUDE_SLIDE_TAG.Length).Trim();

                if (slides.Exists(slideID)) {

                    this.JavaScriptLibSourceCode = slides[slideID].JavaScriptSourceCode;

                    // Remove the main part of the source we are including
                    var p = this.JavaScriptLibSourceCode.IndexOf(MAIN_TAG);
                    if (p >= 0)
                        this.JavaScriptLibSourceCode = this.JavaScriptLibSourceCode.Substring(0, p - 1);
                }
                else {
                    UTILS.MsgBoxError("Cannot include slide '{0}'".format(slideID));
                }
            }
        }
    }

    /// <summary>
    /// 
    /// </summary>
    class JavaScriptItemDemos : List<JavaScriptItemDemo> {

        public bool Exists(string slideID) {

            return this[slideID] != null;
        }
        public JavaScriptItemDemo this[string slideID] {
            get {
                foreach (var i in this)
                    if (i.SlideID == slideID)
                        return i;
                return null;
            }
        }
        public JavaScriptItemDemo Add(JavaScriptItemDemo i) {

            base.Add(i);
            i.Index = this.Count;
            return i;
        }
    }

}
/*
 <script type='text/javascript'>
    
    $(document).ready(function () {
        var javaScriptSourceCode = $('#JavaScriptSourceCode');
        if(javaScriptSourceCode.length==1){
            alert(javaScriptSourceCode.height());
            javaScriptSourceCode.height(300);
        }
    });
  </script>
 */