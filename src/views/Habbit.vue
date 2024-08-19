<template>
    <div class="all">
        <div class="hobbies-container">
            <h1 style="color: rgb(211, 211, 213);">我的爱好：</h1>
            <div v-for="hobby in hobbies" :key="hobby.id" class="hobby-item">
                <h3 @click="toggleHobby(hobby.id)" style="color: rgb(184, 188, 190);">
                    {{ hobby.name }}
                    <i class="fas fa-chevron-down" v-if="hobby.showDetails" style="color: rgb(184, 188, 190);"></i>
                    <i class="fas fa-chevron-right" v-else style="color: rgb(184, 188, 190);"></i>
                </h3>
                <div v-if="hobby.showDetails" class="hobby-details" style="color: rgb(184, 188, 190);">
                    <p>{{ hobby.description }}</p>
                    <!-- 使用v-bind指令正确绑定图片的src属性 -->
                    <img v-bind:src="hobby.imgurl" v-bind:alt="hobby.name" style="width: 100%; height: auto;">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            hobbies: [
                {
                    id: 1,
                    name: '运动',
                    description: '享受跑步带来的每一次心跳加速和汗水淋漓，这是我与自己对话，挑战自我极限的方式',
                    showDetails: true,
                    imgurl: 'src\\assets\\run.jpg'
                },
                {
                    id: 2,
                    name: '旅行',
                    description: '从雄伟的山脉到宁静的海滩，每个地方都有它独特的故事等待我去发现',
                    showDetails: false,
                    imgurl: 'src\\assets\\travel.jpg'
                },
                {
                    id: 3,
                    name: '吉他',
                    description: '无论是弹奏经典的老歌还是流行的音乐，吉他都是我与世界沟通的桥梁',
                    showDetails: false,
                    imgurl: 'src\\assets\\guitar.png'
                },
                {
                    id: 4,
                    name: '游戏',
                    description: '在虚拟世界中，我可以体验不同的角色和故事，享受探索未知的快感',
                    showDetails: false,
                    imgurl: 'src\\assets\\game.png'
                },
                {
                    id: 5,
                    name: '编程',
                    description: '在编写代码的过程中，能将抽象的想法转化为具体的解决方案，创造出有用的软件和工具',
                    showDetails: false,
                    imgurl: 'src\\assets\\program.png'
                },
            ]
        };
    },
    methods: {
        toggleHobby(hobbyId) {
            this.hobbies.forEach(hobby => {
                if (hobby.id === hobbyId) {
                    hobby.showDetails = !hobby.showDetails;
                } else {
                    hobby.showDetails = false;
                }
            });
        }
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

.all {
    width: 100%;
    height: 100%;
}

.hobbies-container {

    max-width: 800px;
    margin: 0 auto;
    padding: 20px;

}

.hobby-item {
    margin-bottom: 10px;
    cursor: pointer;
}

.hobby-item h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.hobby-details {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>