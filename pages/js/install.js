function openInstallURL() {
    var url = 'itms-services://?action=download-manifest&url=https://192.168.0.158:1234/app/install.plist';
  window.self.location = url;
}
