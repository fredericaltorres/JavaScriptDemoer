namespace JavaScriptDemoer
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.menuStrip1 = new System.Windows.Forms.MenuStrip();
            this.fileToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.newToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.openToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.toolStripMenuItem1 = new System.Windows.Forms.ToolStripSeparator();
            this.quicToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.viewToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.fullScreenToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.sourceCodeOnlyToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.debugToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.runToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.reloadToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.previousToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.nextToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.toolsToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.copyURLToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.generatePresentationToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.generatePresentationSummaryToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.helpToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.markDownWebSiteToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.statusStrip1 = new System.Windows.Forms.StatusStrip();
            this.toolStripStatusLabel1 = new System.Windows.Forms.ToolStripStatusLabel();
            this.comboBoxItems = new System.Windows.Forms.ComboBox();
            this.webBrowser1 = new System.Windows.Forms.WebBrowser();
            this.OUTPUT = new System.Windows.Forms.TextBox();
            this.tmrTrackFileUpdate = new System.Windows.Forms.Timer(this.components);
            this.timer1 = new System.Windows.Forms.Timer(this.components);
            this.menuStrip1.SuspendLayout();
            this.statusStrip1.SuspendLayout();
            this.SuspendLayout();
            // 
            // menuStrip1
            // 
            this.menuStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.fileToolStripMenuItem,
            this.viewToolStripMenuItem,
            this.debugToolStripMenuItem,
            this.toolsToolStripMenuItem,
            this.helpToolStripMenuItem});
            this.menuStrip1.Location = new System.Drawing.Point(0, 0);
            this.menuStrip1.Name = "menuStrip1";
            this.menuStrip1.Size = new System.Drawing.Size(779, 27);
            this.menuStrip1.TabIndex = 2;
            this.menuStrip1.Text = "menuStrip1";
            // 
            // fileToolStripMenuItem
            // 
            this.fileToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.newToolStripMenuItem,
            this.openToolStripMenuItem,
            this.toolStripMenuItem1,
            this.quicToolStripMenuItem});
            this.fileToolStripMenuItem.Name = "fileToolStripMenuItem";
            this.fileToolStripMenuItem.Size = new System.Drawing.Size(45, 23);
            this.fileToolStripMenuItem.Text = "File";
            // 
            // newToolStripMenuItem
            // 
            this.newToolStripMenuItem.Name = "newToolStripMenuItem";
            this.newToolStripMenuItem.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.N)));
            this.newToolStripMenuItem.Size = new System.Drawing.Size(190, 24);
            this.newToolStripMenuItem.Text = "New";
            // 
            // openToolStripMenuItem
            // 
            this.openToolStripMenuItem.Name = "openToolStripMenuItem";
            this.openToolStripMenuItem.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.O)));
            this.openToolStripMenuItem.Size = new System.Drawing.Size(190, 24);
            this.openToolStripMenuItem.Text = "Open";
            this.openToolStripMenuItem.Click += new System.EventHandler(this.openToolStripMenuItem_Click);
            // 
            // toolStripMenuItem1
            // 
            this.toolStripMenuItem1.Name = "toolStripMenuItem1";
            this.toolStripMenuItem1.Size = new System.Drawing.Size(187, 6);
            // 
            // quicToolStripMenuItem
            // 
            this.quicToolStripMenuItem.Name = "quicToolStripMenuItem";
            this.quicToolStripMenuItem.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.Q)));
            this.quicToolStripMenuItem.Size = new System.Drawing.Size(190, 24);
            this.quicToolStripMenuItem.Text = "Quit";
            this.quicToolStripMenuItem.Click += new System.EventHandler(this.quicToolStripMenuItem_Click);
            // 
            // viewToolStripMenuItem
            // 
            this.viewToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.fullScreenToolStripMenuItem,
            this.sourceCodeOnlyToolStripMenuItem});
            this.viewToolStripMenuItem.Name = "viewToolStripMenuItem";
            this.viewToolStripMenuItem.Size = new System.Drawing.Size(55, 23);
            this.viewToolStripMenuItem.Text = "View";
            // 
            // fullScreenToolStripMenuItem
            // 
            this.fullScreenToolStripMenuItem.Name = "fullScreenToolStripMenuItem";
            this.fullScreenToolStripMenuItem.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.F12)));
            this.fullScreenToolStripMenuItem.Size = new System.Drawing.Size(293, 24);
            this.fullScreenToolStripMenuItem.Text = "Full Screen";
            this.fullScreenToolStripMenuItem.Click += new System.EventHandler(this.fullScreenToolStripMenuItem_Click);
            // 
            // sourceCodeOnlyToolStripMenuItem
            // 
            this.sourceCodeOnlyToolStripMenuItem.Name = "sourceCodeOnlyToolStripMenuItem";
            this.sourceCodeOnlyToolStripMenuItem.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.F11)));
            this.sourceCodeOnlyToolStripMenuItem.Size = new System.Drawing.Size(293, 24);
            this.sourceCodeOnlyToolStripMenuItem.Text = "Source Code Only";
            this.sourceCodeOnlyToolStripMenuItem.Click += new System.EventHandler(this.sourceCodeOnlyToolStripMenuItem_Click);
            // 
            // debugToolStripMenuItem
            // 
            this.debugToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.runToolStripMenuItem,
            this.reloadToolStripMenuItem,
            this.previousToolStripMenuItem,
            this.nextToolStripMenuItem});
            this.debugToolStripMenuItem.Name = "debugToolStripMenuItem";
            this.debugToolStripMenuItem.Size = new System.Drawing.Size(67, 23);
            this.debugToolStripMenuItem.Text = "Debug";
            // 
            // runToolStripMenuItem
            // 
            this.runToolStripMenuItem.Name = "runToolStripMenuItem";
            this.runToolStripMenuItem.Size = new System.Drawing.Size(189, 24);
            this.runToolStripMenuItem.Text = "Run";
            this.runToolStripMenuItem.Click += new System.EventHandler(this.runToolStripMenuItem_Click);
            // 
            // reloadToolStripMenuItem
            // 
            this.reloadToolStripMenuItem.Name = "reloadToolStripMenuItem";
            this.reloadToolStripMenuItem.ShortcutKeys = System.Windows.Forms.Keys.F5;
            this.reloadToolStripMenuItem.Size = new System.Drawing.Size(189, 24);
            this.reloadToolStripMenuItem.Text = "Reload";
            this.reloadToolStripMenuItem.Click += new System.EventHandler(this.reloadToolStripMenuItem_Click);
            // 
            // previousToolStripMenuItem
            // 
            this.previousToolStripMenuItem.Name = "previousToolStripMenuItem";
            this.previousToolStripMenuItem.ShortcutKeys = System.Windows.Forms.Keys.F11;
            this.previousToolStripMenuItem.Size = new System.Drawing.Size(189, 24);
            this.previousToolStripMenuItem.Text = "Previous";
            this.previousToolStripMenuItem.Click += new System.EventHandler(this.previousToolStripMenuItem_Click);
            // 
            // nextToolStripMenuItem
            // 
            this.nextToolStripMenuItem.Name = "nextToolStripMenuItem";
            this.nextToolStripMenuItem.ShortcutKeys = System.Windows.Forms.Keys.F12;
            this.nextToolStripMenuItem.Size = new System.Drawing.Size(189, 24);
            this.nextToolStripMenuItem.Text = "Next";
            this.nextToolStripMenuItem.Click += new System.EventHandler(this.nextToolStripMenuItem_Click);
            // 
            // toolsToolStripMenuItem
            // 
            this.toolsToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.copyURLToolStripMenuItem,
            this.generatePresentationToolStripMenuItem,
            this.generatePresentationSummaryToolStripMenuItem});
            this.toolsToolStripMenuItem.Name = "toolsToolStripMenuItem";
            this.toolsToolStripMenuItem.Size = new System.Drawing.Size(60, 23);
            this.toolsToolStripMenuItem.Text = "Tools";
            // 
            // copyURLToolStripMenuItem
            // 
            this.copyURLToolStripMenuItem.Name = "copyURLToolStripMenuItem";
            this.copyURLToolStripMenuItem.Size = new System.Drawing.Size(348, 24);
            this.copyURLToolStripMenuItem.Text = "Copy URL";
            this.copyURLToolStripMenuItem.Click += new System.EventHandler(this.copyURLToolStripMenuItem_Click);
            // 
            // generatePresentationToolStripMenuItem
            // 
            this.generatePresentationToolStripMenuItem.Name = "generatePresentationToolStripMenuItem";
            this.generatePresentationToolStripMenuItem.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.F7)));
            this.generatePresentationToolStripMenuItem.Size = new System.Drawing.Size(348, 24);
            this.generatePresentationToolStripMenuItem.Text = "Generate Presentation";
            this.generatePresentationToolStripMenuItem.Click += new System.EventHandler(this.generatePresentationToolStripMenuItem_Click_1);
            // 
            // generatePresentationSummaryToolStripMenuItem
            // 
            this.generatePresentationSummaryToolStripMenuItem.Name = "generatePresentationSummaryToolStripMenuItem";
            this.generatePresentationSummaryToolStripMenuItem.ShortcutKeys = System.Windows.Forms.Keys.F7;
            this.generatePresentationSummaryToolStripMenuItem.Size = new System.Drawing.Size(348, 24);
            this.generatePresentationSummaryToolStripMenuItem.Text = "Generate Presentation Summary";
            this.generatePresentationSummaryToolStripMenuItem.Click += new System.EventHandler(this.generatePresentationSummaryToolStripMenuItem_Click);
            // 
            // helpToolStripMenuItem
            // 
            this.helpToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.markDownWebSiteToolStripMenuItem});
            this.helpToolStripMenuItem.Name = "helpToolStripMenuItem";
            this.helpToolStripMenuItem.Size = new System.Drawing.Size(53, 23);
            this.helpToolStripMenuItem.Text = "Help";
            // 
            // markDownWebSiteToolStripMenuItem
            // 
            this.markDownWebSiteToolStripMenuItem.Name = "markDownWebSiteToolStripMenuItem";
            this.markDownWebSiteToolStripMenuItem.Size = new System.Drawing.Size(226, 24);
            this.markDownWebSiteToolStripMenuItem.Text = "JavaScript Demoer";
            this.markDownWebSiteToolStripMenuItem.Click += new System.EventHandler(this.markDownWebSiteToolStripMenuItem_Click);
            // 
            // statusStrip1
            // 
            this.statusStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.toolStripStatusLabel1});
            this.statusStrip1.Location = new System.Drawing.Point(0, 532);
            this.statusStrip1.Name = "statusStrip1";
            this.statusStrip1.Size = new System.Drawing.Size(779, 24);
            this.statusStrip1.TabIndex = 3;
            this.statusStrip1.Text = "statusStrip1";
            // 
            // toolStripStatusLabel1
            // 
            this.toolStripStatusLabel1.Name = "toolStripStatusLabel1";
            this.toolStripStatusLabel1.Size = new System.Drawing.Size(158, 19);
            this.toolStripStatusLabel1.Text = "toolStripStatusLabel1";
            // 
            // comboBoxItems
            // 
            this.comboBoxItems.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.comboBoxItems.FormattingEnabled = true;
            this.comboBoxItems.Location = new System.Drawing.Point(12, 30);
            this.comboBoxItems.Name = "comboBoxItems";
            this.comboBoxItems.Size = new System.Drawing.Size(754, 21);
            this.comboBoxItems.TabIndex = 4;
            this.comboBoxItems.SelectedIndexChanged += new System.EventHandler(this.comboBoxItems_SelectedIndexChanged);
            // 
            // webBrowser1
            // 
            this.webBrowser1.Location = new System.Drawing.Point(36, 196);
            this.webBrowser1.MinimumSize = new System.Drawing.Size(20, 20);
            this.webBrowser1.Name = "webBrowser1";
            this.webBrowser1.Size = new System.Drawing.Size(345, 236);
            this.webBrowser1.TabIndex = 5;
            this.webBrowser1.DocumentCompleted += new System.Windows.Forms.WebBrowserDocumentCompletedEventHandler(this.webBrowser1_DocumentCompleted);
            // 
            // OUTPUT
            // 
            this.OUTPUT.BackColor = System.Drawing.Color.Black;
            this.OUTPUT.Font = new System.Drawing.Font("Courier New", 15.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.OUTPUT.ForeColor = System.Drawing.Color.Lime;
            this.OUTPUT.Location = new System.Drawing.Point(375, 67);
            this.OUTPUT.Multiline = true;
            this.OUTPUT.Name = "OUTPUT";
            this.OUTPUT.ScrollBars = System.Windows.Forms.ScrollBars.Vertical;
            this.OUTPUT.Size = new System.Drawing.Size(327, 212);
            this.OUTPUT.TabIndex = 6;
            // 
            // tmrTrackFileUpdate
            // 
            this.tmrTrackFileUpdate.Interval = 2000;
            this.tmrTrackFileUpdate.Tick += new System.EventHandler(this.tmrTrackFileUpdate_Tick);
            // 
            // timer1
            // 
            this.timer1.Enabled = true;
            this.timer1.Interval = 5000;
            this.timer1.Tick += new System.EventHandler(this.timer1_Tick);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(779, 556);
            this.Controls.Add(this.OUTPUT);
            this.Controls.Add(this.webBrowser1);
            this.Controls.Add(this.comboBoxItems);
            this.Controls.Add(this.statusStrip1);
            this.Controls.Add(this.menuStrip1);
            this.MainMenuStrip = this.menuStrip1;
            this.Name = "Form1";
            this.Text = "Form1";
            
            this.FormClosing += new System.Windows.Forms.FormClosingEventHandler(this.Form1_FormClosing);
            this.Load += new System.EventHandler(this.Form1_Load);
            this.KeyUp += new System.Windows.Forms.KeyEventHandler(this.Form1_KeyUp);
            this.Resize += new System.EventHandler(this.Form1_Resize);
            this.menuStrip1.ResumeLayout(false);
            this.menuStrip1.PerformLayout();
            this.statusStrip1.ResumeLayout(false);
            this.statusStrip1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.MenuStrip menuStrip1;
        private System.Windows.Forms.ToolStripMenuItem fileToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem newToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem openToolStripMenuItem;
        private System.Windows.Forms.ToolStripSeparator toolStripMenuItem1;
        private System.Windows.Forms.ToolStripMenuItem quicToolStripMenuItem;
        private System.Windows.Forms.StatusStrip statusStrip1;
        private System.Windows.Forms.ToolStripStatusLabel toolStripStatusLabel1;
        private System.Windows.Forms.ToolStripMenuItem toolsToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem helpToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem markDownWebSiteToolStripMenuItem;
        private System.Windows.Forms.ComboBox comboBoxItems;
        private System.Windows.Forms.WebBrowser webBrowser1;
        private System.Windows.Forms.ToolStripMenuItem copyURLToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem debugToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem runToolStripMenuItem;
        private System.Windows.Forms.TextBox OUTPUT;
        private System.Windows.Forms.ToolStripMenuItem reloadToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem nextToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem previousToolStripMenuItem;
        private System.Windows.Forms.Timer tmrTrackFileUpdate;
        private System.Windows.Forms.ToolStripMenuItem generatePresentationToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem viewToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem fullScreenToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem sourceCodeOnlyToolStripMenuItem;
        private System.Windows.Forms.Timer timer1;
        private System.Windows.Forms.ToolStripMenuItem generatePresentationSummaryToolStripMenuItem;
    }
}

