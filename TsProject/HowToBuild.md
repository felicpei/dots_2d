1. 安装nodejs
2. npm install typescript
3. npm init -y
4. npm install -D webpack-cli
5. npm run bundle:dev



问题：
    tsc : 无法加载文件 C:\Users\FelicPei\AppData\Roaming\npm\tsc.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。

解决方法：
    管理员运行 powershell
    set-ExecutionPolicy RemoteSigned

