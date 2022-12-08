using System.IO;
using Puerts;

namespace TS
{
    public class TSLoader : ILoader, IModuleChecker
    {
        private readonly string _root;
        public TSLoader(string root)
        {
            _root = root;
        }
        
        public bool FileExists(string filepath)
        {
            return File.Exists(Path.Combine(_root, filepath));
        }

        private string PathToUse(string filepath)
        {
            return filepath.EndsWith(".cjs") || filepath.EndsWith(".mjs") ? filepath.Substring(0, filepath.Length - 4) : filepath;
        }

        public string ReadFile(string filepath, out string debugpath)
        {
            debugpath = Path.Combine(_root, filepath);
            return File.ReadAllText(debugpath);
        }

        public bool IsESM(string filepath)
        {
            return filepath.Length >= 4 && filepath.EndsWith(".mjs");
        }
    }
}