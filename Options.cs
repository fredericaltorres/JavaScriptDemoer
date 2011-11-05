using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DynamicSugar;

namespace JavaScriptDemoer
{
    [Serializable]
    public class Options
    {                
        const string SPLITTERPERCENT = "SplitterPercent";

        internal int SplitterPercent{
            get{
                if(!this.Values.ContainsKey(SPLITTERPERCENT))
                    this.Values[SPLITTERPERCENT] = 80;
                return (int)this.Values[SPLITTERPERCENT];
            }
            set{
                this.Values[SPLITTERPERCENT] = value;
                
            }
        }

        private Dictionary<string, object> Values = new Dictionary<string, object>();

        public List<string> ListValues = new List<string>();

        public string Bla = "ok";

        public object this[string name]{
            get
            {
                if (this.Values.ContainsKey(name))
                    return this.Values[name];
                return null;
            }
            set {
                if (this.Values.ContainsKey(name))
                    this.Values.Remove(name);
                this.Values[name] = value;
            }
        }
        public string FileName {
            get {
                return System.Windows.Forms.Application.ExecutablePath + ".options.xml";
            }
        }
        public void Save() {
            ListValues.Clear();
            foreach (KeyValuePair<string, object> k in this.Values)
                ListValues.Add("{0}={1}".format(k.Key, k.Value.ToString()));

            XmlSerializer.Save(this.FileName, typeof(Options), this);
        }
        public void Load()
        {
            if (System.IO.File.Exists(this.FileName))
            {
                var o = XmlSerializer.Load(this.FileName, typeof(Options)) as Options;
                this.ListValues = o.ListValues;
                foreach (var v in this.ListValues) { 
                    var p = v.Split('=');
                    object val = p[1];
                    if (UTILS.IsInteger(val.ToString())) val = int.Parse(val.ToString());
                    else if (UTILS.IsDouble(val.ToString())) val = double.Parse(val.ToString());
                    this.Values.Add(p[0], val);
                }
            }            
        }
    }
}
