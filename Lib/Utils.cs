using System;
using System.IO;
using System.Collections;
using System.ComponentModel;
using System.Windows.Forms;
using System.Data;
using System.Text;
using System.Reflection;
using System.Diagnostics;
using System.Runtime.InteropServices;
using System.Configuration;
using System.Collections.Specialized;
using Microsoft.Win32;
using System.Collections.Generic;

namespace JavaScriptDemoer
{

    public class UTILS
    {

        public const string INVALID_CHARS_FOR_FILENAME = @"\/:*?<>|";
        static UTILS()
        {
        }

        public class Person{

            public string   LastName  { get; set; }
            public string   FirstName { get; set; }
            public DateTime BirthDate { get; set; }

            public Person(){

            }    
            public Person(string lastName, string firstName): this(lastName, firstName, new DateTime(1900,1,1)){

            }
            public Person(string lastName, string firstName, DateTime birthDate){

                this.LastName  = lastName;
                this.FirstName = firstName;
                this.BirthDate = birthDate;
            }
            public virtual void Run(){
    
            Console.WriteLine(this.LastName + " is running...");
            }
        }

        // create custom attribute to be assigned to class members
        [AttributeUsage(AttributeTargets.Method, AllowMultiple = true)]
        public class SuperMethod : System.Attribute
        {
        }
        public class MyClass {    
            [SuperMethod]
            public void Run(){

            }
        }            
        /// <summary>
        /// Do something with the object
        /// </summary>
        /// <param name="o">The object to do something important</param>
        /// <returns>Return null</returns>
        public static string DoSomthing(object o){
                        
            var p = new Person("Torres", "Frederic");
            foreach(var propertyInfo in p.GetType().GetProperties()){
                Console.WriteLine(propertyInfo.Name + " = "+ propertyInfo.GetValue(p, null).ToString());
            }
            return null;
        }

        public static bool IsInteger(string strText)
        {
            try
            {
                int.Parse(strText);
                return true;
            }
            catch
            {
                return false;
            }
        }
        public static bool IsDouble(string strText)
        {
            try
            {
                double.Parse(strText);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public static bool ExecProgram(string strProgram, string strParameter)
        {

            int intExitCode = 0;
            return ExecProgram(strProgram, strParameter, false, ref intExitCode);
        }
        public static bool ExecProgram(string strProgram, string strParameter, bool booWait, ref int intExitCode)
        {

            return ExecProgram(strProgram, strParameter, booWait, ref intExitCode, false, false);
        }
        public static bool ExecProgram(string strProgram, string strParameter, bool booWait, ref int intExitCode, bool booSameProcess, bool booHidden)
        {
            try
            {
                System.Diagnostics.Process proc;

                if (booSameProcess)
                {
                    proc = System.Diagnostics.Process.GetCurrentProcess();
                }
                else
                {
                    proc = new System.Diagnostics.Process();
                }
                proc.EnableRaisingEvents = false;
                proc.StartInfo.FileName = strProgram;
                proc.StartInfo.Arguments = strParameter;

                if (booHidden)
                {
                    proc.StartInfo.WindowStyle = System.Diagnostics.ProcessWindowStyle.Hidden;
                }

                proc.Start();


                if (booWait)
                {
                    proc.WaitForExit();
                    intExitCode = proc.ExitCode;
                }
                return true;
            }
            catch
            {
                return false;
            }
        }
        public static bool MsgBoxYesNo(string strText)
        {
            return System.Windows.Forms.MessageBox.Show(strText, Application.ProductName, System.Windows.Forms.MessageBoxButtons.YesNo) == System.Windows.Forms.DialogResult.Yes;
        }

        public static bool MsgBoxOkCancel(string strText, string strCaption)
        {
            return System.Windows.Forms.MessageBox.Show(strText, strCaption, System.Windows.Forms.MessageBoxButtons.OKCancel) == System.Windows.Forms.DialogResult.OK;
        }
        public static System.Windows.Forms.DialogResult MsgBox(string strText, string strCaption, System.Windows.Forms.MessageBoxButtons Buttons)
        {
            return System.Windows.Forms.MessageBox.Show(strText, strCaption, Buttons);
        }
        public static void MsgBox(string strText)
        {
            System.Windows.Forms.MessageBox.Show(strText, Application.ProductName);
        }

        public static void MsgBoxError(string strText)
        {
            System.Windows.Forms.MessageBox.Show(strText, Application.ProductName, System.Windows.Forms.MessageBoxButtons.OK, System.Windows.Forms.MessageBoxIcon.Error);
        }

        public static string GetUserOpenFile(string strTitle, string strMask)
        {
            return GetUserOpenFile(strTitle, strMask, "");
        }
        public static string GetUserOpenFile(string strTitle, string strMask, string strPath)
        {

            OpenFileDialog openFileDialog   = new OpenFileDialog();
            openFileDialog.CheckPathExists  = true;
            openFileDialog.InitialDirectory = strPath;
            openFileDialog.AddExtension     = true;
            openFileDialog.Filter           = strMask;
            openFileDialog.Title            = strTitle;
            openFileDialog.FilterIndex      = 1;
            openFileDialog.RestoreDirectory = true;

            if (openFileDialog.ShowDialog() != DialogResult.OK) return null;

            return openFileDialog.FileName;
        }

        public static string GetUserSaveAsFile(string strTitle, string strMask, string strPath)
        {

            SaveFileDialog openFileDialog   = new SaveFileDialog();
            openFileDialog.CheckPathExists  = true;
            openFileDialog.AddExtension     = true;
            openFileDialog.Filter           = strMask;
            openFileDialog.Title            = strTitle;
            openFileDialog.FilterIndex      = 1;
            openFileDialog.RestoreDirectory = true;

            if (openFileDialog.ShowDialog() != DialogResult.OK) return null;

            return openFileDialog.FileName;
        }


        [DllImport("shell32.dll")]
        private static extern uint ShellExecute(int hwnd, string lpszOp, string lpszFile, string lpszParams, string lpszDir, int FsShowCmd);

        public static bool ExecFile(string strFile)
        {

            //ShellExecute(0,"Open",strFile,"","",1);

            try
            {
                System.Diagnostics.Process proc;

                //if(booSameProcess){
                //proc	=	System.Diagnostics.Process.GetCurrentProcess();
                //}
                //else{
                proc = new System.Diagnostics.Process();
                //}
                proc.EnableRaisingEvents = false;
                proc.StartInfo.FileName = strFile;
                proc.StartInfo.Arguments = "";
                proc.StartInfo.UseShellExecute = true;
                proc.Start();
                //if(wait){
                //proc.WaitForExit();
                //}
                return true;
            }
            catch
            {
                return false;
            }
        }


        public class CWaitCursor : IDisposable
        {

            private Cursor cursor;
            private System.Windows.Forms.Form aForm;

            private void Init()
            {
                cursor = null;
                aForm = null;
            }
            public CWaitCursor(System.Windows.Forms.Form f)
            {
                Init();
                Wait(f);
            }
            public CWaitCursor()
            {
                Init();
                Wait(null);
            }
            private void Wait(System.Windows.Forms.Form f)
            {
                cursor = Cursor.Current;
                Cursor.Current = Cursors.WaitCursor;
                if (f != null)
                {
                    aForm = f;
                    aForm.Cursor = System.Windows.Forms.Cursors.WaitCursor;
                }
            }
            public void Dispose()
            {

                if (aForm != null)
                {
                    aForm.Cursor = System.Windows.Forms.Cursors.Default;
                    aForm = null;
                }
                if (cursor != null)
                {
                    Cursor.Current = cursor;
                    cursor = null;
                }
            }
        }



        public class CClipBoard
        {

            public bool Clear()
            {

                Clipboard.SetDataObject(new DataObject());
                return true;
            }
            public bool SetText(string strText)
            {
                this.Clear();
                System.Windows.Forms.Clipboard.SetDataObject(strText);
                return true;
            }
            public bool DataPresent()
            {

                IDataObject iData = Clipboard.GetDataObject();

                if (iData != null)
                {
                    return iData.GetDataPresent(DataFormats.Text);
                }
                return false;
            }
            public string GetText()
            {
                IDataObject iData = Clipboard.GetDataObject();
                if (iData.GetDataPresent(DataFormats.Text))
                {
                    return (String)iData.GetData(DataFormats.Text);
                }
                return null;
            }
        }


        public class CommandLine
        {

            private ArrayList m_strArgs = new ArrayList();

            public CommandLine()
            {
            }
            public CommandLine(string[] args)
            {
                Initialize(args);
            }

            public bool Initialize(string[] args)
            {
                if (args != null)
                {
                    for (int i = 0; i < args.Length; i++)
                    {
                        m_strArgs.Add(args[i]);
                    }
                }
                return true;
            }
            public int Count
            {
                get { return m_strArgs.Count; }
            }
            public string this[int i]
            {
                get { return (string)m_strArgs[i]; }
            }
            //		public string Item(int i){
            //			return (string)m_strArgs[i];
            //		}
            public int GetIndex(string strName)
            {
                for (int i = 0; i < this.Count; i++)
                {
                    if (this[i].ToLower() == strName.ToLower()) return i;
                }
                return -1;
            }
            public bool Exist(string strName)
            {
                return GetIndex(strName) != -1;
            }
            public string Arguments(int index)
            {
                return (string)m_strArgs[index];
            }
            public string Arguments(string strName)
            {
                return Arguments(strName, null);
            }
            public bool Arguments(string strName, bool booDefaultValue)
            {
                string s = this.Arguments(strName, booDefaultValue.ToString());
                return s.ToLower() == "true";
            }
            public int Arguments(string strName, int intDefaultValue)
            {
                string s = this.Arguments(strName, intDefaultValue.ToString());
                return int.Parse(s);
            }
            public string Arguments(string strName, string strDefaultValue)
            {
                int lngIndex = GetIndex(strName);
                if (lngIndex != -1)
                {
                    return this[lngIndex + 1];
                }
                else
                {
                    return strDefaultValue;
                }
            }
        }
    }
}


