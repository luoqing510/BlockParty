<script setup lang="ts">
import infoClose from './svg/info-close.vue';
import infoRestart from './svg/info-restart.vue';
import infoSwitch from './svg/info-switch.vue';
import rectangle1 from '../../assets/svg/rectangle1.vue';
</script>
<template>
    <div class="Serverinfo">
        <div class="min">
            <div main1 class="msg">
                <rectangle1 content="信息概况" class-name="title" />
                <div class="msgInfo"><img src="./svg/info-name.svg" alt=""><span>名称: {{ name }}</span></div>
                <div class="msgInfo"><img src="./svg/info-state.svg" alt=""><span :sta="state">状态:</span></div>
                <div class="msgInfo"><img src="./svg/info-type.svg" alt=""><span>类型: {{ type }}</span></div>
            </div>
            <div main1 class="stateCL">
                <rectangle1 content="状态控制" class-name="title" />
                <button class="switch">
                    <infoSwitch :width="iconW" />
                    <p>{{ "关闭" }}</p>
                </button>
                <button class="restart">
                    <infoRestart :width="iconW" />
                    <p>重启</p>
                </button>
                <button class="Fclose">
                    <infoClose color="#EC959D" :width="iconW" />
                    <p>强制关闭</p>
                </button>
                <button class="Dprocess">
                    <infoClose color="#fff" :width="iconW" />
                    <p>守护进程</p>
                </button>
            </div>
            <div main1 class="feature">
                <rectangle1 content="功能" class-name="title" />
                <button class="Config">
                    <infoSwitch />
                    <p>服务器配置文件</p>
                </button>
                <button class="CLset">
                    <infoSwitch />
                    <p>控制台设置</p>
                </button>
                <button class="File">
                    <infoSwitch />
                    <p>文件管理</p>
                </button>
                <button class="CLregular">
                    <infoSwitch />
                    <p>控制台正则触发</p>
                </button>
            </div>
        </div>
        <div class="logCL">
            <rectangle1 content="控制台窗口" class-name="logTitle" />
            <div class="InfoPanel"></div>
            <div class="logInput">
                <input type="text" @focus="sendhidden = false" @blur="setSendhidden()" class="input">
                <button :hidden="sendhidden" @click="console.log(1)" class="send">发送</button>
            </div>

        </div>
    </div>
</template>
<script lang="ts">
export default {
    data() {
        return {
            sendhidden: true,
            state: "运行中",
            name: "生存服",
            type: "MC基岩版服务器",
            iconW: 20
        }
    },
    methods: {
        setSendhidden() {
            setTimeout(() => { this.sendhidden = true }, 60)
        }
    },
    mixins: [

    ]
}
</script>
<style lang="scss" scoped>
.Serverinfo {
    display: flex;

    .min {
        display: flex;
        flex-direction: column;

        div[main1] {
            width: 20vw;
            background-color: #fff;
            margin-top: 1vw;
            margin-left: 2vw;
            border-radius: 7px;
            box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
        }

        .feature {
            height: 26vh;

            &>button {
                display: inline-flex;
                align-items: center;
                background-color: #fff;

                p {
                    font-size: 50%;
                    margin-left: 10%;
                }

                justify-content: center;
                width: 80%;
                height: 15%;
                border: 3px solid #B0b0b0;
                border-radius: 5px;
                margin-top: 1vh;
                margin-left: 2vw;

                &:nth-child(3) {
                    width: 40%;
                }

                &:nth-child(4) {
                    margin-left: 1vw;
                    width: 7vw;
                }
            }
        }

        .stateCL {
            height: 30vh;

            .Fclose {
                background-color: #F4CCCC;
            }

            .Dprocess {
                background-color: #5BB56D;
            }

            &>button {
                display: inline-flex;
                background-color: #fff;
                align-items: center;
                justify-content: center;
                font-size: 70%;
                width: 15vw;
                height: 4vh;
                margin-top: 1vh;

                p {
                    margin-left: 1vw;
                }

                &:nth-child(4) {
                    color: #FC6B79;
                }

                &:nth-child(5) {
                    color: #fff;
                }

                margin-left: 2.5vw;
                border: 1px solid #B0b0b0;
                border-radius: 5px;
            }
        }

        .msg {
            height: 25vh;

            &>.msgInfo {
                img {
                    width: 15%;
                }

                margin-left: 1.5vw;
                display: flex;
                text-align: center;
                align-items: center;

                span {
                    font-weight: 500;
                    font-size: 80%;
                    color: #4e4e4e;
                    margin-left: 1vw;
                }

                &:nth-child(2) {
                    margin-top: 1vh;
                }

                &:nth-child(3) {
                    margin-top: 1.5vh;

                    span::after {
                        content: attr(sta);
                        color: #84CD92;
                        font-weight: 600;
                        margin-left: 5px;
                    }
                }

                &:nth-child(4) {
                    margin-top: 2vh;
                }
            }
        }
    }

    .logCL {
        width: 50vw;
        height: 85vh;
        background-color: #fff;
        margin-top: 1vw;
        margin-left: 4vw;
        border-radius: 10px;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);

        .InfoPanel {
            width: 48vw;
            height: 70vh;
            margin-left: 1vw;
            border-radius: 5px;
            background-color: #1a1a1a;
            box-shadow: 0px 4px 10px 0px #7b6c6c;
        }

        .logInput {
            display: flex;
            margin-top: 1vh;

            .input {
                width: 47.9vw;
                height: 5vh;
                display: flex;
                margin-left: 1vw;
                box-sizing: border-box;
                border: #bfbfbf 2px solid;
                border-radius: 5px;

                &:focus {
                    border-right: #fff;
                    outline: none;
                    width: 40.9vw;
                }
            }

            .send {
                width: 7vw;
                height: 4.9vh;
                border: 1px #1a1a1a3a solid;
                border-radius: 0px 0px 5px 5px;
                background-color: #fff;
                color: #5BB56D;
                font-size: 50%;

                &:hover {
                    background-color: #5BB56D;
                    color: #fff;
                }
            }

        }


    }
}
</style>