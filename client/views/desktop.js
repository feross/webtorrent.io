var arch = window.arch = require('arch')

module.exports = function () {
  /**
   * If the OS is 64-bit, replace the download links with their 64-bit versions.
   *
   * This checks the operating system CPU architecture itself, as opposed to
   * merely the architecture of the browser, unlike os.arch() in Node.js.
   *
   * If there is no affirmitive indication that the architecture is 64-bit,
   * then arch() assumes 32-bit. This is perfect for determining what installer
   * exectuable to offer to desktop app users. If there is ambiguity, then the
   * user will get the 32-bit installer, which will work fine even on a 64-bit OS.
   *
   * We do the detection client-side because JavaScript provides additional
   * information above and beyong the user agent that is helpful for making an
   * accurate determination.
   */
  if (arch() === 'x64') {
    document.querySelectorAll('.download-linux').forEach(function ($link) {
      $link.href = $link.href.replace(/i386\.deb$/, 'amd64.deb')
    })
  }
}
