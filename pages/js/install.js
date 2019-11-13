function openInstallURL() {
    var url = 'itms-services://?action=download-manifest&url=https://raw.githubusercontent.com/anotherCPL/appDownloadTest/master/pages/install.plist';
  window.self.location = url;
}
