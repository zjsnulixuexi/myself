<template>
    <div class="work-showcase">
        <div class="sidebar">
            <div class="category" @click="toggleCategory('python')"
                :class="{ 'expanded': selectedCategory === 'python' }">
                Python <i class="icon-expand" :class="{ 'open': isCategoryExpanded('python') }">&#9660;</i>
            </div>
            <div v-show="isCategoryExpanded('python')" class="works-list">
                <div class="work-item" :class="{ 'selected': selectedWorkId === work.id }" @click="selectWork(work.id)"
                    v-for="work in pythonWorks" :key="work.id">
                    {{ work.name }}
                </div>
            </div>

            <div class="category" @click="toggleCategory('frontend')"
                :class="{ 'expanded': selectedCategory === 'frontend' }">
                前端 <i class="icon-expand" :class="{ 'open': isCategoryExpanded('frontend') }">&#9660;</i>
            </div>
            <div v-show="isCategoryExpanded('frontend')" class="works-list">
                <div class="work-item" :class="{ 'selected': selectedWorkId === work.id }" @click="selectWork(work.id)"
                    v-for="work in frontendWorks" :key="work.id">
                    {{ work.name }}
                </div>
            </div>
        </div>
        <div class="work-detail" v-if="selectedWork">
            <h2>{{ selectedWork.name }}</h2>
            <p>{{ selectedWork.description }}</p>
            <img :src="selectedWork.imgurl" :alt="selectedWork.name" style="width: 100%; height: auto;">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCategory: 'python',
            selectedWorkId: 1,
            pythonWorks: [
                { id: 1, name: '经典贪吃蛇', description: '贪吃蛇是一款经典的电子游戏，其基本规则是玩家控制一条蛇在屏幕上移动，吃下随机出现的食物来增长蛇的身体。当蛇头撞到自己的身体或屏幕边缘时，游戏结束。', imgurl: 'src\\assets\\snack.png' },
                { id: 2, name: '模型预测、可视化及打包', description: '建模预测，dash可视化，pyinstaller打包成独立exe', imgurl: 'src\\assets\\dash.png' },
                { id: 3, name: '建模', description: '基于 ARIMA 模型和模拟退火算法的货量预测与人员排班策略', imgurl: 'src\\assets\\model.png' },

            ],
            frontendWorks: [
                // 填充前端作品数据
                { id: 1, name: '织网筑梦-构建高校中外学子交流新经纬', description: '页面搭建-小挑', imgurl: 'src\\assets\\global.png' },
                { id: 2, name: '数据分析应用系统', description: '页面搭建-数据库', imgurl: 'src\\assets\\sql.png' },
                { id: 3, name: 'idea_flow', description: '在大佬指导下做的半成品，遇到一个解决不了的东西（可惜，一开始大佬计划搞专利的，呜呜,好像涉及到版权，这个就不展示图片了', imgurl: '' },
            ],
        };
    },
    methods: {
        toggleCategory(category) {
            this.selectedCategory = category;
        },
        isCategoryExpanded(category) {
            return this.selectedCategory === category;
        },
        selectWork(workId) {
            this.selectedWorkId = workId;
        }
    },
    computed: {
        selectedWork() {
            const works = this.selectedCategory === 'python' ? this.pythonWorks : this.frontendWorks;
            return works.find(work => work.id === this.selectedWorkId) || {};
        }
    }
};
</script>

<style scoped>
.work-showcase {
    display: flex;
}

.sidebar {
    width: 250px;
    padding: 20px;
    background-color: #f4f4f4;
    border-right: 1px solid #ccc;
}

.category {
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
}

.icon-expand {
    float: right;
    transition: transform 0.3s ease;
}

.icon-expand.open {
    transform: rotate(90deg);
}

.works-list {
    margin-top: 10px;
}

.work-item {
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    margin-left: 40px;
}

.work-item.selected {
    background-color: #42b983;
    color: white;
}

.work-detail {
    flex-grow: 1;
    padding: 20px;
    background-color: white;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .work-showcase {
        flex-direction: column;
    }

    .sidebar {
        width: 100%;
        border-right: none;
        border-bottom: 1px solid #ccc;
    }

    .work-detail {
        padding: 10px;
    }
}
</style>