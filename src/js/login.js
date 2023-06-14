function login() {
    // 获取用户名和密码
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // 创建包含用户名和密码的JavaScript对象
    let user = {
        name: username,
        password: password
    };

    // 发送POST请求到登录API端点
    $.ajax({
        url: 'http://localhost:1145/service/user/login',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(user),
        success: function (response) {
            console.log('登录成功:', response);
            alert("登录成功，请检查用户名和密码是否正确");
            // 跳转到首页
            window.location.href = 'index.html';
        },
        error: function (error) {
            // 登录失败，可以进行相关操作，如显示错误消息
            console.log('登录失败:', error);
            //弹窗登录失败
            alert("登录失败，请检查用户名和密码是否正确");
        }
    });
}
