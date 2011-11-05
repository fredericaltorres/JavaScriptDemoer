//Code by John Rusk.
//Provided 'as-is', without any express or implied warranty.
//You may use this source code in any manner you wish.  I can make no promises about the
//performance of this code, or its suitability for your purposes.
//While the resulting assembly resides in memory, the .NET classes called
//do create (and delete) some temporary files on the file system.  
//(See CompilerResults.TempFileCollection)

using System;
using System.CodeDom.Compiler;
using System.Reflection;
using Microsoft.CSharp;
using DynamicSugar;
using System.IO;
using System.Diagnostics;

namespace JavaScriptDemoer
{
	
	
	/// <summary>
	/// Compiles C# source code on the fly, then allows you to use the newly-complied classes.
	/// </summary>
    class CSOnTheFlyCompiler
	{
        const string CSharpCompiler = @"C:\Windows\Microsoft.NET\Framework\v4.0.30319\csc.exe";
        private string _sourceFileName;

        public CSOnTheFlyCompiler(string code){

            this._sourceFileName = @"{0}\CSOnTheFlyCompiler.cs".format(Environment.GetEnvironmentVariable("TEMP"));            
            System.IO.File.WriteAllText(_sourceFileName, code);
            
        }
        public ExecutionInfo Compile() {

            var s1 = "/define:DEBUG /target:library \"{0}\" ".format(_sourceFileName);
            var s2 = "/define:DEBUG \"{0}\" ".format(_sourceFileName);
            var ei = Execute(CSharpCompiler, s2);
            if(ei.Succeeded){
                return Execute("CSOnTheFlyCompiler.exe","");
            }
            else{
                return ei;
            }
        }
        public ExecutionInfo Execute(string program, string commandLine) {

            ExecutionInfo e = new ExecutionInfo();
            e.CommandLine = program+" "+commandLine;
            e.Time                    = Environment.TickCount;
            e.ErrorLevel              = -1;
            StreamReader outputReader = null;
            StreamReader errorReader  = null;
            try {
                ProcessStartInfo processStartInfo       = new ProcessStartInfo(program, commandLine);
                processStartInfo.ErrorDialog            = false;
                processStartInfo.UseShellExecute        = false;
                processStartInfo.RedirectStandardError  = true;
                processStartInfo.RedirectStandardInput  = false;
                processStartInfo.RedirectStandardOutput = true;
                processStartInfo.CreateNoWindow         = true;
                processStartInfo.WindowStyle = ProcessWindowStyle.Normal;

                Process process                         = new Process();

                process.StartInfo                       = processStartInfo;
                bool processStarted                     = process.Start();

                if (processStarted) {
                    outputReader = process.StandardOutput;
                    errorReader  = process.StandardError;
                    process.WaitForExit();
                    e.ErrorLevel = process.ExitCode;
                    e.Output     = outputReader.ReadToEnd();
                    e.ErrorOutput= errorReader.ReadToEnd();
                }
            }
            catch (Exception ex) {
                e.ErrorOutput += "Error lanching the {0} = {1}".format(e.CommandLine, ex.ToString());
            }
            finally {
                if (outputReader != null) 
                    outputReader.Close();
                if (errorReader != null)
                    errorReader.Close();

                if (e.ErrorLevel != 0) {
                    e.ErrorOutput = e.Output;
                    e.Output = "";
                }
            }
            e.Time = Environment.TickCount - e.Time;
            return e;
        }
	}
}
