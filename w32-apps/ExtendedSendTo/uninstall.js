var WshShell = WScript.CreateObject("WScript.Shell");
var objFSO = WScript.CreateObject("Scripting.FileSystemObject");
var strSendTo = WshShell.SpecialFolders("SendTo");
try { objFSO.DeleteFile(strSendTo + "\\waifu_n1.lnk"); } catch(e) {}
try { objFSO.DeleteFile(strSendTo + "\\waifu_n2.lnk"); } catch(e) {}
try { objFSO.DeleteFile(strSendTo + "\\waifu2x_n0.lnk"); } catch(e) {}
try { objFSO.DeleteFile(strSendTo + "\\waifu2x_n1.lnk"); } catch(e) {}
try { objFSO.DeleteFile(strSendTo + "\\waifu2x_n2.lnk"); } catch(e) {}
try { objFSO.DeleteFile(strSendTo + "\\waifuCustomizable.lnk"); } catch(e) {}
WScript.echo("Scripts have been removed from \"Send To\" menu.\n\nСкрипты были удалены из меню \"Отправить\"\n\nスクリプトは送るメニューから削除されました。");
