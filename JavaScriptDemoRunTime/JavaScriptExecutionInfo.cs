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
    class JavaScriptExecutionInfo {

        public string Output;
        public string ErrorOutput;
        public int Time;
        public string CommandLine;
        public int ErrorLevel;

        public JavaScriptExecutionInfo(){

            Output      = "";
            ErrorOutput = "";
            Time        = -1;
            CommandLine = "";
            ErrorLevel  = -1;
        }
    }
    class ExecutionInfo {

        public string Output;
        public string ErrorOutput;
        public int Time;
        public string CommandLine;
        public int ErrorLevel;

        public bool Succeeded {
            get{
                return this.ErrorLevel == 0;
            }
        }

        public ExecutionInfo(){

            Output      = "";
            ErrorOutput = "";
            Time        = -1;
            CommandLine = "";
            ErrorLevel  = -1;
        }
    }
   
}