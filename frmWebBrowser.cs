using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace JavaScriptDemoer
{
    public partial class frmWebBrowser : Form
    {
        public int ScrollTop = -1;

        public frmWebBrowser()
        {
            InitializeComponent();
        }

        private void webBrowser_DocumentCompleted(object sender, WebBrowserDocumentCompletedEventArgs e)
        {
            if (ScrollTop != -1)
            {
                var d = this.webBrowser.Document;
                this.webBrowser.Document.Body.ScrollTop = ScrollTop;
            }
        }
    }
}
