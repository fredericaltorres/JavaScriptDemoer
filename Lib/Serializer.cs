using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using System.Runtime.Serialization;

namespace JavaScriptDemoer
{
    
    public class XmlSerializer { 

        /// <summary>
        /// 
        /// </summary>
        /// <param name="fileName"></param>
        /// <param name="t"></param>
        /// <returns></returns>
        public static object Load ( string fileName, Type t ){

            System.Xml.Serialization.XmlSerializer s = new System.Xml.Serialization.XmlSerializer( t );
            //TextReader r = new StreamReader( fileName );
            TextReader r = new StreamReader(System.IO.File.OpenRead(fileName));
            object o = s.Deserialize( r );
            r.Close();
            return o;
        } 
        /// <summary>
        /// 
        /// </summary>
        /// <param name="fileName"></param>
        public static void Save ( string fileName, Type t , object o ){
            
            System.Xml.Serialization.XmlSerializer s = new System.Xml.Serialization.XmlSerializer( t );
            //TextWriter w = new StreamWriter( fileName );
            TextWriter w = new StreamWriter( System.IO.File.Create(fileName) );
            s.Serialize( w, o );
            w.Close();
        } 
    }

}


