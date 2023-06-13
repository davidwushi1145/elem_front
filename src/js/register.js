function register() {
    // 获取用户输入的表单数据
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // 创建包含用户名和密码的JavaScript对象
    let user = {
        name: username,
        password: password
    };

    // 发送POST请求到注册API端点
    $.ajax({
        url: 'http://localhost:1145/service/user/register',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(user),
        success: function (response) {
            // 注册成功，可以进行相关操作，如跳转页面或显示成功消息
            console.log('注册成功:', response);
            alert("注册成功");
        },
        error: function (error) {
            // 注册失败，可以进行相关操作，如显示错误消息
            alert("注册失败");
        }
    });
}
