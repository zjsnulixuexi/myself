<template>
    <div class="all">
        <div class="margin"></div>
        <div class="login-form">
            <div class="img">
                <img src="../assets/a_ji.jpg" alt="">
            </div>
            <div class="form-group">
                <label for="visitorName">访客名:</label>
                <input type="text" id="visitorName" v-model="visitorName" required />
            </div>
            <div class="form-group">
                <label for="password">密码:</label>
                <input type="password" id="password" v-model="password" @keyup.enter="register" required />
            </div>
            <button type="submit" @click="register">登录</button>
        </div>
    </div>

</template>

<script scoped>
export default {
    name: 'LoginForm',
    data() {
        return {
            visitorName: '',
            password: '',
            num: 0,
            password_true: 'aji'
        };
    },
    methods: {
        register() {
            if (!this.password) {
                if (this.num == 0) {
                    alert('填写密码，求求了')
                    this.num++
                }
                else if (this.num == 1) {
                    alert('快快填写')
                    this.num++
                }
                else {
                    alert('不填不给看!')
                }

            }
            else if (this.password == this.password_true) {
                console.log('访客名:', this.visitorName);
                console.log('密码:', this.password);
                this.$router.push("/home");

            }
            else {
                alert('牢底，不知道密码看什么看')
            }
        }
    },
};
</script>

<style>
body {
    margin: 0px;
}

.margin {
    width: 100%;
    height: 200px;
}

.all {
    width: 100%;
    height: 100%;
    user-select: none;
    background-image: url('../assets/home_bgi.jpg');
    /* 移除默认的外边距 */
    background-size: cover;
    /* 背景图覆盖整个元素 */
    background-repeat: no-repeat;
    /* 防止背景图重复 */
    height: 100vh;
    /* 设置body高度为视口的100% */
    font-family: Arial, sans-serif;
    /* 设置默认字体 */
}

.login-form {
    max-width: 300px;
    margin: 0 auto;
    /* 水平居中 */
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.8);
    /* 设置背景色并添加透明度 */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    /* 添加阴影 */
}

.img {
    width: 80px;
    /* 根据图片大小调整 */
    height: 80px;
    /* 根据图片大小调整 */
    overflow: hidden;
    border-radius: 50%;
    position: relative;
    margin: 0 auto 20px;
    /* 居中并添加底部外边距 */
    border: 2px solid #fff;
}

.img img {
    width: 100%;
    height: auto;
    border-radius: 50%;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
}

.form-group input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    opacity: 0.8;
    /* 按钮透明度 */
}

button:hover {
    background-color: #0056b3;
}
</style>