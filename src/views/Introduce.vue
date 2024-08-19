<template>
    <div class="personal-intro-container">
        <div class="left-side">
            <div class="profile">
                <img src="../assets/a_ji.jpg" alt="个人头像" class="avatar" />
                <div class="sections">
                    <div class="section" @click="activeSection = 'profile'">
                        <h3>个人资料</h3>
                        <hr v-if="activeSection === 'profile'" />
                    </div>
                    <div class="section" @click="activeSection = 'skills'">
                        <h3>掌握技能</h3>
                        <hr v-if="activeSection === 'skills'" />
                    </div>
                </div>
            </div>
        </div>
        <div class="right-side">
            <div v-if="activeSection === 'profile'">
                <h2>{{ name }}</h2>
                <p style="color: rgb(184, 188, 190);"><strong>年龄：</strong> {{ age }}</p>
                <p style="color: rgb(184, 188, 190);"><strong>学校：</strong> {{ school }}</p>
                <p style="color: rgb(184, 188, 190);"><strong>邮箱：</strong> {{ email }}</p>
                <p style="color: rgb(184, 188, 190);"><strong>电话：</strong> {{ phone }}</p>
                <p style="color: rgb(184, 188, 190);"><strong>简介：</strong> {{ introduction }}</p>
            </div>
            <div v-else>
                <h3>技能列表</h3>
                <ul>
                    <li v-for="skill in skills" :key="skill" style="color: rgb(184, 188, 190);">{{ skill }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'PersonalIntro',
    data() {
        return {
            name: '张京生',
            age: '',
            school: '中国石油大学（北京）',
            email: '499342513@qq.com',
            phone: '15984098235',
            introduction: '有一说一，这个介绍我都没想好要填什么内容，填太正式的过于严肃了，但是到了这个年纪了也没啥太多的想法',
            profilePicture: 'url_to_your_profile_picture.jpg',
            skills: ['python（水1）', '前端+vue（水2）', '待开发'],
            activeSection: 'profile' // 默认显示个人资料
        };
    },
    mounted() {
        this.age = new Date().getFullYear() - 2005
    }
};
</script>

<style>
html {
    height: 100vh;
}

body {
    padding: 0;
    margin: 0;
    height: 100%;
    background-color: rgb(51, 53, 58);
}

.personal-intro-container {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: rgb(51, 53, 58);
    color: rgb(211, 211, 213);
}

.left-side {
    flex: 1;
    padding-right: 20px;
}

.right-side {
    flex: 2;
}

.profile {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 20px;
}

.sections {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.section {
    cursor: pointer;
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.section:hover {
    background-color: #e9e9e9;
    color: black;

}

.section h3 {
    margin: 0;
}

.section h3:hover {
    color: black;
}

.right-side h2,
.right-side h3 {
    margin-top: 0;
}

.right-side ul {
    list-style: none;
    padding: 0;
}

.right-side li {
    margin-bottom: 5px;
}

/* 可以添加更多的CSS来美化你的个人简介区块 */
</style>