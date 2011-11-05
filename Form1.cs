using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using DynamicSugar;
using System.IO;
using System.Reflection;

namespace JavaScriptDemoer
{
    public partial class Form1 : Form
    {
        private Options               _options;
        
        private string                _fileName;
        
        private string                _lastUrl;

        private bool                  _fullScreenMode;
        private bool                  _drawCodeOnly;

        private JavaScriptDemoRunTime _javaScriptDemo;
        private DateTime              _startTime = DateTime.Now;

        /// <summary>
        /// 
        /// </summary>
        public string FileName {
            get{
                return this._fileName;
            }
            set {
                this._fileName = value;
                if(this._options!=null)
                    this._options["FileName"] = this._fileName;
            }
        }
        /// <summary>
        /// 
        /// </summary>
        public Form1()
        {
            this.FileName = @"{0}\demo.js".format(System.IO.Path.GetDirectoryName(Application.ExecutablePath));
            InitializeComponent();
        }
        private void quicToolStripMenuItem_Click(object sender, EventArgs e)
        {
            
            this.Close();
        }
        public void RefreshUI(bool selectFirstPage = true)
        {
            SetTitle();
            comboBoxItems.Items.Clear();
            foreach (var i in this._javaScriptDemo.Items) {
                comboBoxItems.Items.Add(i);
            }
            if(comboBoxItems.Items.Count>0){
                if(selectFirstPage)
                    comboBoxItems.SelectedIndex = 0;
                _startTime = DateTime.Now;
            }
        }
        public void SetTitle() {

            this.Text = "JavaScript Demoer - [{0}]".format(this.FileName);            
        }
        private void txtMD_TextChanged(object sender, EventArgs e)
        {
        }
        private string MarkDownHtmlFile {
            get
            {
                return Path.ChangeExtension(this.FileName, "html");
            }
        }
        private void Form1_Load(object sender, EventArgs e)
        {
            _options = new Options();
            _options.Load();
                        
            LoadMainFormPositionAndSize();

            this.Show();
            Application.DoEvents();

            this.SetTitle();
            this.Status("Ready...");

            if (this._options["FileName"] != null)
                this.FileName = this._options["FileName"].ToString();

            this.OpenFile(this.FileName);

            LoadMainFormPositionAndSize();
            Form1_Resize(null, null);

            this.RefreshUI();

            this.tmrTrackFileUpdate.Enabled = true;
        }
        private void ReloadDemoFile(string fileName = null) {

            if(fileName!=null)
                this.FileName = fileName;

            try
            {
                _javaScriptDemo = new JavaScriptDemoRunTime(this.FileName);
            }
            catch (System.Exception ex) {
                UTILS.MsgBoxError(ex.Message);
            }
        }
        private void LoadMainFormPositionAndSize() {

            foreach (var k in ReflectionHelper.GetDictionary(this, DS.List("Left", "Top", "Width", "Height")))
                ReflectionHelper.SetProperty(this, k.Key, _options ["{0}.{1}".format(this.Name, k.Key)]);
        }
        private void Form1_Resize(object sender, EventArgs e)
        {
            int top    = 50;
            int height = this.Height - 105;

            if (this._fullScreenMode)
            {
                this.OUTPUT.Visible     = false;
                int width               = (this.Width - 15);
                int widthSourceCode     = width * 100 / 100;                
                this.webBrowser1.Left   = 5;
                this.webBrowser1.Top    = top;
                this.webBrowser1.Width  = widthSourceCode;
                this.webBrowser1.Height = height;
            }
            else
            {
                this.OUTPUT.Visible     = true;
                int width               = (this.Width - 15);
                int widthSourceCode     = width * _options.SplitterPercent / 100;
                int widthExecution      = width * (100 - _options.SplitterPercent) / 100;
                this.comboBoxItems.Left = 5;

                this.webBrowser1.Left   = 5;
                this.webBrowser1.Top    = top;
                this.webBrowser1.Width  = widthSourceCode;
                this.webBrowser1.Height = height;

                this.OUTPUT.Left        = this.webBrowser1.Left + this.webBrowser1.Width;
                this.OUTPUT.Top         = top;
                this.OUTPUT.Width       = widthExecution;
                this.OUTPUT.Height      = height;
            }
        }
        public void Status(string m) {

            toolStripStatusLabel1.Text = m;
            toolStripStatusLabel1.GetCurrentParent().Refresh();
            System.Windows.Forms.Application.DoEvents();
        }
      
        private void SaveOptions()
        {
            foreach (var k in ReflectionHelper.GetDictionary(this, DS.List("Left", "Top", "Width", "Height")))
                _options["{0}.{1}".format(this.Name, k.Key)] = k.Value;

            _options.Save();
        }
        private void SaveFile() {

            SaveAsFile(this.FileName);            
        }
        private void SaveAsFile(string fileName)
        {            
            this.FileName = fileName;
            this.RefreshUI();
        }

        private void openToolStripMenuItem_Click(object sender, EventArgs e)
        {
            var fileName = UTILS.GetUserOpenFile("Select MarkDown File", "js (*.js)|*.js", System.IO.Path.GetDirectoryName(Application.ExecutablePath));
            if (System.IO.File.Exists(fileName))
                this.OpenFile(fileName);
        }
        private void OpenFile(string fileName)
        {            
            this.comboBoxItems.SelectedIndex = -1;
            ReloadDemoFile(fileName);
            RefreshUI();
            if(this.comboBoxItems.Items.Count>0)
                this.comboBoxItems.SelectedIndex = 0;
        }
        private void vertialToolStripMenuItem_Click(object sender, EventArgs e) {

            int w                      = (Screen.PrimaryScreen.Bounds.Width-5) / 2;
            int h                      = Screen.PrimaryScreen.Bounds.Height - 32;
            this.Top                   = 0;
            this.Left                  = 0;
            this.Width                 = w;
            this.Height                = h;
    
        }
        private void horizontalToolStripMenuItem_Click(object sender, EventArgs e) {

            int w                      = (Screen.PrimaryScreen.Bounds.Width-10);
            int h                      = (Screen.PrimaryScreen.Bounds.Height-32)/2;
            this.Top                   = 0;
            this.Left                  = 0;
            this.Width                 = w;
            this.Height                = h;
   
        }
        private void markDownWebSiteToolStripMenuItem_Click(object sender, EventArgs e) {

            UTILS.MsgBox("JavaScript Demoer\r\nFrederic Torres 2011");
        }

        private void comboBoxItems_SelectedIndexChanged(object sender, EventArgs e)
        {
            DrawSlide();
        }

        private void DrawSlide()
        {
            if (comboBoxItems.SelectedIndex == -1)
            {
                webBrowser1.Navigate("about:blank");
            }
            else
            {
                JavaScriptItemDemo i = comboBoxItems.Items[comboBoxItems.SelectedIndex] as JavaScriptItemDemo;
                if (i != null)
                {
                    this.Status("Rendering JavaScript source code");
                    this._lastUrl = i.GenerateHTMLFile(sourceCodeOnly:this._drawCodeOnly);
                    runToolStripMenuItem_Click(null, null);
                    webBrowser1.Navigate(this._lastUrl);
                }
            }            
        }
        private void UpdateUserInfo() {

            var diff = DateTime.Now.Subtract(_startTime);
            this.Status(
                "Slide {0}/{1} - [{2}, {3}, Dur:{4}]".format(
                comboBoxItems.SelectedIndex+1, 
                comboBoxItems.Items.Count, 
                _startTime.ToString("hh:mm:ss"), 
                DateTime.Now.ToString("hh:mm:ss"), 
                diff.Seconds)
            );
        }
        private void copyURLToolStripMenuItem_Click(object sender, EventArgs e) {

            Clipboard.Clear();
            Clipboard.SetText(this._lastUrl);
        }
        private void runToolStripMenuItem_Click(object sender, EventArgs e) {

            using (var c = new UTILS.CWaitCursor(this))
            {
                JavaScriptItemDemo i = comboBoxItems.Items[comboBoxItems.SelectedIndex] as JavaScriptItemDemo;
                this.OUTPUT.Text = "";           
                
                if (i.AnyCSharpToCompile())
                {
                    this.Status("Compiling and running the C# code");
                    this.OUTPUT.Text += "C#:\r\n---\r\n";
                    var eee = i.ExecuteCSharp();
                    if (eee.Succeeded)
                        this.OUTPUT.Text += "{0}".format(eee.Output);
                    else
                        this.OUTPUT.Text += "\r\nC# Compilation Error:\r\n{0}".format(eee.ErrorOutput);
                }                           
                
                if (i != null)
                {
                    this.Status("Compiling and running the JavaScript code");                    
                    var ee = i.ExecuteJavaScript();
                    if (!String.IsNullOrEmpty(ee.Output)) {
                        this.OUTPUT.Text += "\r\nJavaScript:\r\n-----------\r\n";
                        this.OUTPUT.Text += "{0}".format(ee.Output);
                    }
                    if (!ee.ErrorOutput.IsNullOrEmpty())
                    this.OUTPUT.Text += "\r\nJavaScript Error:\r\n{0}".format(ee.ErrorOutput);
                    
                    this.Status("");
                }
                this.UpdateUserInfo();
            }
        }
        private void webBrowser1_DocumentCompleted(object sender, WebBrowserDocumentCompletedEventArgs e) {

            this.Status("");
            //+++runToolStripMenuItem_Click(null, null);
        }
        private void reloadToolStripMenuItem_Click(object sender, EventArgs e) {

            var selected = this.comboBoxItems.SelectedIndex;
            this.comboBoxItems.SelectedIndex = -1;
            ReloadDemoFile();
            RefreshUI(false);
            if(selected!=-1)
                this.comboBoxItems.SelectedIndex = selected;            
        }
        private void nextToolStripMenuItem_Click(object sender, EventArgs e) {

            ResetView();
            
            if(this.comboBoxItems.SelectedIndex<this.comboBoxItems.Items.Count-1)
                this.comboBoxItems.SelectedIndex++;
        }

        private void ResetView()
        {
            if (this._fullScreenMode)
            {
                this._fullScreenMode = false;
                this.Form1_Resize(null, null);
            }
            this._drawCodeOnly = false;
        }
        private void previousToolStripMenuItem_Click(object sender, EventArgs e) {
            ResetView();
            
            if(this.comboBoxItems.SelectedIndex>0)
                this.comboBoxItems.SelectedIndex--;

        }
        private void tmrTrackFileUpdate_Tick(object sender, EventArgs e){

            if(this._javaScriptDemo.NeedReload()){

                reloadToolStripMenuItem_Click(sender, e);
            }
        }
        private void Form1_FormClosing(object sender, FormClosingEventArgs e) {

            this.SaveOptions();
        }

        private void generatePresentationToolStripMenuItem_Click_1(object sender, EventArgs e) {
            this._javaScriptDemo.GeneratePresentation();
        }

        private void fullScreenToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this._fullScreenMode = !this._fullScreenMode;
            this.Form1_Resize(null, null);
            //this.DrawSlide();
        }

        private void sourceCodeOnlyToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this._drawCodeOnly = !this._drawCodeOnly;           
            this.DrawSlide();
        }

        private void timer1_Tick(object sender, EventArgs e) {

            this.UpdateUserInfo();
        }

        private void Form1_KeyUp(object sender, KeyEventArgs e)
        {
            switch (e.KeyCode) {
                case Keys.PageUp: 
                    previousToolStripMenuItem_Click(sender, e);
                    break;
                case Keys.PageDown: 
                    nextToolStripMenuItem_Click(sender, e);
                    break;
            }
        }

        private void generatePresentationSummaryToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this._javaScriptDemo.GeneratePresentationSummary();
        }

    }
}

