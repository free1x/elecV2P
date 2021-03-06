// 在 Docker 环境中安装 python。

$exec('apk add python3', {
  call: true, timeout: 0,
  cb(data, error, finish){
    if (finish) {
      // 安装一些 python 库。（具体需要的库以脚本为准，如无必要，可直接注释掉）
      // $exec('pip3 install you-get youtube-dl numpy requests')

      // 安装完以后可以直接在 JS 中调用。（pyhton 和库安装完成可在其他脚本中直接调用，不需要再次安装。）
      $exec('python3 -u test.py', {
        cwd: './script/Shell',            // test.py 文件所在的目录
        cb(data, error){
          error ? console.error(error) : console.log(data)
        }
      })
    } else {
      error ? console.error(error) : console.log(data)
    }
  }
})