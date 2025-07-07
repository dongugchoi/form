<template>
    <div class="container">
        <div v-if="authenticated">
            <div class="header">
                <div class="customer-admin">
                    <div style="cursor: pointer;">Master Admin</div>
                </div>
                <div class="customer-nav">
                    <div class="customer-nav-item">기본정보관리</div>
                    <div class="customer-nav-item">주문관리</div>
                    <div class="customer-nav-item">상품관리</div>
                    <div class="customer-nav-item">혜택관리</div>
                    <div class="customer-nav-item">포탈관리</div>
                    <div class="customer-nav-item">정산 및 리포팅</div>
                </div>
                <div class="customer-info">
                    <div class="customer-info-item" style="padding-right: 4px; font-size: 13px;">phone</div>
                    <select style="color: #989898;">
                        <option v-for="(item, idx) in userList" :key="idx" >{{item.name}} 님</option>
                    </select>
                    <div style="color: #989898;">&nbsp; | &nbsp;</div>
                    <div class="customer-info-item">로그아웃</div>
                    <div style="color: #989898;">&nbsp; | &nbsp;</div>
                    <div class="customer-info-item">업무지원 <span class="dropdown-icon">▼</span></div>
                </div>
            </div>
            <div class="body">
                <div class="d-flex" style="width: 100%;">
                    <div class="left-menu">
                        <div class="d-flex flex-column">
                            <h2 class="left-menu-header">기본정보관리</h2>
                            <div class="left-side-title" @click="onClickLeftMenuOne">
                                <span style="margin-right: 4px; margin-bottom: 4px; display: flex; transform: scaleX(0.7); font-size: 14px; color: gray;">▶</span>
                                고객사관리
                            </div>
                        </div>
                        <div class="d-flex flex-column mt-1" style="border-top: 1px solid #bebebe;" :class="oneState ? 'bc' : 'bc-none'">
                            <div v-if="oneState">
                                <div class="left-side-subTitle mb-1 pt-2">고객사총정보관리</div>
                                <div class="left-side-subTitle pb-2">고객사회원정보항목관리</div>
                            </div>
                        </div>
                        <div class="left-side-title" @click="onClickLeftMenuTwo">
                            <span style="margin-right: 4px; margin-bottom: 4px; display: flex; transform: scaleX(0.7); font-size: 14px; color: gray;">▶</span>
                            복지카드관리
                        </div>
                        <div class="d-flex flex-column mt-1" style="border-top: 1px solid #bebebe;" :class="twoState ? 'bc' : 'bc-none'">
                            <div v-if="twoState">
                                <div class="left-side-subTitle mb-1 pt-2">복지카드사관리</div>
                                <div class="left-side-subTitle mb-1">복지카드차감신청기준</div>
                                <div class="left-side-subTitle mb-1">복지카드이용고객사현황</div>
                                <div class="left-side-subTitle pb-2">복지카드사용내역조회</div>
                            </div>
                        </div>
                        <div class="left-side-title" @click="onClickLeftMenuThird">
                            <span style="margin-right: 4px; margin-bottom: 4px; display: flex; transform: scaleX(0.7); font-size: 14px; color: gray;">▶</span>
                            복지카드 거래 모니터링
                        </div>
                        <div class="d-flex flex-column mt-1" style="border-top: 1px solid #bebebe;" :class="thirdState ? 'bc' : 'bc-none'">
                            <div v-if="thirdState">
                                <div class="left-side-subTitle mb-1 pt-2">정상매출</div>
                                <div class="left-side-subTitle mb-1">취소매출</div>
                                <div class="left-side-subTitle mb-1">복지카드 승인업무 현황</div>
                                <div class="left-side-subTitle mb-1">복지카드 지급요청 현황</div>
                                <div class="left-side-subTitle pb-2">복지카드 지급확정 현황</div>
                            </div>
                        </div>
                        <div class="left-bottom-title" style="border-bottom: 1px solid #bebebe;">
                            <span style="margin-right: 4px; margin-bottom: 4px; display: flex; transform: scaleX(0.7); font-size: 14px; color: gray;">▶</span>
                            회원정보관리
                        </div>
                        <!-- <div class="mt-2 mb-2" style="border: 1px solid #bebebe;"></div> -->
                        <div class="left-bottom-title" style="border-bottom: 1px solid #bebebe;">
                            <span style="margin-right: 4px; margin-bottom: 4px; display: flex; transform: scaleX(0.7); font-size: 14px; color: gray;">▶</span>
                            더케이회원정보
                        </div>
                    </div>
                    <div class="d-flex flex-column pa-4 content-area" style="flex: 1;">
                        <div class="d-flex" style="font-weight: bold; padding: 0 10px 9px 10px; font-size: 17px;">회원정보현황</div>
                        <div class="d-flex" style="border-bottom: 1px dotted #22a597; width: 100;"></div>
                        <div class="d-flex mt-3 mb-4 pa-4" style="height: 55px; background-color: #ebebeb;">
                            <div class="d-flex justify-center align-center">
                                <select class="custom-select">
                                    <option>검색필드 선택</option>
                                    <option>이름</option>
                                    <option>사번</option>
                                    <option>부서</option>
                                    <option>직급</option>
                                    <option>직책</option>
                                    <option>직군</option>
                                    <option>회원 KEY</option>
                                </select>
                            </div>
                            <div class="d-flex justify-center align-center mr-1">
                                <input type="text" placeholder="검색어 입력" class="search-input" />
                            </div>
                            <div class="d-flex justify-center align-center mr-2">
                                <button class="search-btn">검 색</button>
                            </div>
                            <div class="d-flex justify-center align-center">
                                <input type="checkbox" checked/>
                                <div class="ml-1" style="font-size: 12px;">검색초기화</div>
                            </div>
                        </div>
                        <div class="d-flex mb-2 justify-space-between align-center">
                            <!-- <div class="d-flex">
                                <div class="d-flex mr-1 center-text" style="color: #22a597; font-weight: bold;">전체(505)</div>
                                <div class="mr-1" style="color: #989898;">|</div>
                                <div class="d-flex mr-1 center-text">재직(499)</div>
                                <div class="mr-1" style="color: #989898;">|</div>
                                <div class="d-flex mr-1 center-text">휴직(0)</div>
                                <div class="mr-1" style="color: #989898;">|</div>
                                <div class="d-flex mr-1 center-text">퇴직(6)</div>
                            </div> -->
                            <v-spacer></v-spacer>
                            <div v-if="infoList?.length < 1" class="d-flex">
                                <div class="d-flex justify-center align-center" @click="onClickInfoOpen">
                                    <button class="search-btn" style="width: 96px; height: 28px;">신규개별등록</button>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex" style="width: 100%;">
                            <table border="0" cellspacing="0" cellpadding="0" class="table-page">
                                <thead>
                                    <tr>
                                        <th style="height: 100%; border-right: 1px solid #e3e3e3;">회원 KEY</th>
                                        <th style="height: 100%; border-right: 1px solid #e3e3e3;">고객사</th>
                                        <th style="height: 100%; border-right: 1px solid #e3e3e3;">이름</th>
                                        <th style="height: 100%; border-right: 1px solid #e3e3e3;">생년월일</th>
                                        <th style="height: 100%; border-right: 1px solid #e3e3e3;">로그인<br/>가능여부</th>
                                        <th style="height: 100%; border-right: 1px solid #e3e3e3;">E-mail<br/>수신동의여부</th>
                                        <th style="height: 100%; border-right: 1px solid #e3e3e3;">SMS<br/>수신동의여부</th>
                                        <th style="height: 100%; border-right: 1px solid #e3e3e3;">등록일</th>
                                        <th style="height: 100%; border-right: 1px solid #e3e3e3;">가입일</th>
                                    </tr>
                                </thead>
                                <tbody style="border: 1px solid #3e3e3e;">
                                    <tr v-for="(item, idx) in infoList" :key="idx">
                                        <td>{{ item.key }}</td>
                                        <td>{{ item.customer }}</td>
                                        <td>{{ item.name }}</td>
                                        <td>{{ formatDate(item.birth) }}</td>
                                        <td>{{ item.login == 1 ? 'Y' : 'N' }}</td>
                                        <td>{{ item.email == 1 ? 'Y' : 'N' }}</td>
                                        <td>{{ item.sms == 1 ? 'Y' : 'N' }}</td>
                                        <td>{{ formatDate(item.registDate) }}</td>
                                        <td>{{ formatDate(item.date) }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="d-flex justify-space-between mb-5">
                            <div class="d-flex justify-center align-center">
                                <button class="search-btn" style="width: 123px; height: 28px;">조회결과 다운로드</button>
                            </div>
                            <!-- <div class="d-flex justify-center align-center">
                                <button class="search-btn mr-2" style="width: 96px; height: 28px; font-size: 12px;">일괄등록양식</button>
                                <button class="search-btn mr-2" style="width: 96px; height: 28px; font-size: 12px;">일괄수정양식</button>
                                <button class="search-btn" style="width: 96px; height: 28px; font-size: 12px;">일괄등록</button>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        <!-- <div class="footer pa-2" style="padding: 0;">
            <div class="d-flex align-center">
                <div class="d-flex mr-1" style="background-image: url('/icon.png'); background-size: cover; width: 16px; height: 16px;"></div>
                <div class="d-flex" style="font-size: 14px; color: #22a597;">이용Tip</div>
            </div>
            <div class="d-flex flex-column mt-1">
                <div style="font-size: 11px; padding-left: 18px;">· 조직 구성원의 정보를 조회, 확인하거나 정보를 등록, 수정할 수 있습니다.</div>
                <div style="font-size: 11px; color: red; padding-left: 18px;">· · 사번, 재직, 부서 등 일괄수정 때 이름도 전체 기재바랍니다. 마스킹 된 상태(ex. 김**, 박**)로 엑셀 입력 시 이름이 수정됩니다.</div>
            </div>
        </div> -->
        </div>
        <infoDialog  :show="infoState" v-if="infoState" @close="onClickClose" @click-done="onClickDone"/> 
        <div v-if="!authenticated" class="auth-modal">
            <div class="auth-box">
                <h3>접속을 위해 비밀번호를 입력하세요</h3>
                <input type="password" v-model="passwordInput" placeholder="비밀번호" @keyup.enter="checkPassword"/>
                <div class="d-flex justify-center mt-2">
                    <button @click="checkPassword">확인</button>
                </div>
                <div v-if="authFailed" style="color: red; margin-top: 5px;">비밀번호가 올바르지 않습니다.</div>
            </div>
        </div>
    </div>
</template>

<script>
import infoDialog from '@/dialog/infoDialog.vue'

    export default{
        components:{infoDialog},
        data(){
            return{
                infoState: false,
                oneState: true,
                twoState: true,
                thirdState: true,
                foruState: false,
                userList: [],
                infoList: [],
                authenticated: false,
                passwordInput: '',
                authFailed: false,
            }
        },
        mounted(){
            this.userList =[
                {name: 'q224040'},
                {name: 'q224041'},
                {name: 'q220065'},
                {name: 'q223047'},
                {name: 'q223048'},
            ]
        },
        
        methods:{
            onClickLeftMenuOne(){
                this.oneState  = !this.oneState
            },

            onClickLeftMenuTwo(){
                this.twoState = !this.twoState
                console.log("this.two",this.twoState)
            },

            onClickLeftMenuThird(){
                this.thirdState =!this.thirdState
            },

            onClickInfoOpen(){
                this.infoState = true
                console.log("열린다")
            },

            onClickClose(){
                this.infoState = false
            },

            // <td>{{ item.key }}</td>
            // <td>{{ item.customer }}</td>
            // <td>{{ item.name }}</td>
            // <td>{{ item.birth }}</td>
            // <td>{{ item.login }}</td>
            // <td>{{ item.email }}</td>
            // <td>{{ item.sms }}</td>
            // <td>{{ item.date }}</td>
            formatDate(yyMMdd) {
                if (!/^\d{6}$/.test(yyMMdd)) return '다시 입력하세요. \nex) 920101';

                const yy = parseInt(yyMMdd.slice(0, 2), 10);
                const mm = yyMMdd.slice(2, 4);
                const dd = yyMMdd.slice(4, 6);

                // 기준 연도: 00~24는 2000년대, 나머지는 1900년대
                const year = yy < 26 ? 2000 + yy : 1900 + yy;

                return `${year}-${mm}-${dd}`;
            },
            

            onClickDone(obj){
                this.infoList.push({
                    key: obj.key,
                    customer: obj.customer,
                    name: obj.name,
                    birth: obj.birth,
                    login: obj.login,
                    email: obj.email,
                    sms: obj.sms,
                    registDate: obj.registDate,
                    date: obj.date
                });
                console.log('obj',obj)
                this.infoState = false
            },

            checkPassword() {
                const correctPassword = 'ict1004'; // 원하는 비밀번호로 설정
                if (this.passwordInput === correctPassword) {
                    this.authenticated = true;
                    console.log(this.authenticated)
                } else {
                    this.authFailed = true;
                    this.passwordInput = '';
                }
            },
            
        },
    }
</script>

<style lang="scss" scoped>
    *{
        padding: 0;
        margin: 0;
        font-family: "맑은고딕", Malgun Gothic, MalgunGothic, "나눔고딕", NanumGothic, "돋움", Dotum, AppleGothic, sans-serif, arial;
    }
    .container{
        width: 100%;
        height: 100vh;
        float: left;
        min-width: 1240px;
    }

    .header{
        position: fixed;
        top: 0;
        left: 0;
        display: inline-block;
        background-color: #313131;
        width: 100%;
        height: 44px;
        z-index:1;
        white-space: nowrap;
    }

    .customer-admin{
        background: #555555;
        color: #ffffff;
        height: 44px;
        width:219px;
        padding: 2px 0 0 15px;
        font-weight: bold;
        line-height: 38px;
        float: left;
        font-size: 20px;
    }

    .customer-nav{
        position: relative;
        display: flex;
        padding: 0 0 0 18px;
        align-items: center;
        line-height: 44px;
    }

    .customer-nav-item{
        height: 44px;
        line-height: 44px;
        margin-right: 40px;
        color: #989898;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
    }

    .customer-info{
        display: flex;
        height: 44px;
        font-size: 12px;
        padding-right: 17px;
        position: absolute;
        line-height: 44px;
        z-index: 20;
        right: 0;
        top: 0;
    }

    .customer-info-item{
        display: flex;
        color: #989898;
        &:not(:first-child):hover {
            color: #fff;
            cursor: pointer;
        }
    }

    .dropdown-icon{
        font-size: 10px;
        padding-left: 2px;
    }

    
    .left-menu-header{
        position: sticky;
        top: 0;
        font-size: 17px;
        font-weight: bold;
        padding: 17px 10px 17px 15px;
        color: #313131;

    }

    .left-side-title{
        display: flex;
        font-size: 12px;
        font-weight: bold;
        padding: 2px 10px 0px 15px;
        color: #313131;
        align-items: center;
        cursor: pointer;

        &:hover{
            color: #22a597;
        }
    }

      .left-bottom-title{
        display: flex;
        font-size: 12px;
        font-weight: bold;
        padding: 2px 10px 0px 15px;
        color: #313131;
        align-items: center;
        cursor: pointer;

        &:hover{
            color: #22a597;
        }
    }

    .left-side-subTitle{
        display: flex; 
        padding: 0px 5px 0px 37px;
        font-size: 12px;
        cursor: pointer;

         &:hover{
            color: #22a597;
        }
    }
    
    .custom-select {
        min-width: 115px;
        appearance: none; /* 브라우저 기본 스타일 제거 */
        -webkit-appearance: none;
        -moz-appearance: none;
        background: url('@/assets/arrow.png') no-repeat right 5px center;
        background-size: 10px;
        padding-right: 0px; /* 오른쪽 여백 확보 */
        border: 1px solid #ccc;
        font-size: 12px;
        padding: 4px 4px 4px 8px;
        display: flex;
        background-color: #fff;
        margin-right: 16px;
    }

    .search-input{
        width: 265px;
        border: 1px solid #e0e0e0;
        height: 28px;
        padding-left: 6px;
        background-color: #fff;
        font-size: 12px;
        
         &::placeholder {
            font-size: 12px; // placeholder 글자 크기
            color: #999;     // (선택) placeholder 색상도 변경 가능
        }
    }

    .search-btn{
        background-color:#22a597;
        color: #fff;
        width: 73px;
        height: 25px;
        border-radius: 2px;
        font-size: 12px;
        font-weight: bold;
        cursor: pointer;
    }

    .center-text{
        font-size: 12px;
        cursor: pointer;

        &:hover{
            color: #22a597;
        }
    }

    .table-page{
        width: 100%;
        border-left: 1px solid #e3e3e3;
        border-top: 1px solid #e3e3e3;
        
        margin: 0 0 7px 0;
        text-align: center;
        font-size: 12px;
    }

    .table-page th{
       background-color: #f7f7f7;
       border-bottom: 1px solid #e3e3e3;
       border-right: 1px solid #e3e3e3; 
       padding: 3px;
    }

     .table-page td{
        border-bottom: 1px solid #e3e3e3;
        border-right: 1px solid #e3e3e3;
        padding: 5px 3px;
     }

     .body{
        display: flex;
        margin-top: 44px;

     }

     .left-menu {
        width: 219px;
        background-color: #f4f4f4;
        border-right: 1px solid #ccc;
        position: fixed;
        top: 44px;
        left: 0;
        height: calc(100vh - 44px);
        overflow-y: auto;
        z-index: 100;
    }

    .content-area {
        flex: 1;
        overflow-y: auto;
        scrollbar-width: none;
        margin-left: 219px;
    }

    .bc{
        background-color: #fff;
        border-bottom: 1px solid #bebebe;
    }

    .bc-none{
        background-color: none;
    }

    .footer{
        width: 100%;
        margin-left: 219px;
        padding: 10px 0 10px 230px;
        background-color: #F4F4F4;
    }

    .footer-content{
        padding: 4px;
    }

    .auth-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .auth-box {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    }
    .auth-box input {
    padding: 8px;
    font-size: 14px;
    width: 200px;
    }
    .auth-box button {
    background-color: #22a597;
    color: white;
    padding: 6px 12px;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    }
</style>