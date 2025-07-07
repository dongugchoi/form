<template>
  <v-dialog v-model="propsShow" :persistent="true">
    <div class="d-flex flex-column">
        <div class="d-flex flex-column" style="flex: 1;">
            <div class="d-flex justfy-space-between pa-4">
                <div class="d-flex" style="flex: 0.5;"></div>
                <div class="d-flex align-center justify-center" style="flex: 1; position: sticky; top: 0;">유저정보입력</div>
                <div class="d-flex justify-end" style="flex: 0.5;">
                    <div @click="onClickClose" style="background-image: url('/close.png'); background-size: 24px 24px; background-repeat: no-repeat; background-position: center; width: 32px; height: 32px; cursor: pointer;"></div>
                </div>
            </div>
            <div class="d-flex flex-column pa-4" style="flex: 1;">
                <div class="d-flex flex-column mb-2" style="flex: 1;">
                    <div class="d-flex">KEY</div>
                    <input type="text" v-model="infoObj.key" placeholder="KEY" style="border: 1px solid #989898; border-radius: 8px; padding: 4px;"/>
                </div>
                <div class="d-flex flex-column mb-2" style="flex: 1;">
                    <div class="d-flex">고객사</div>
                    <input type="text" v-model="infoObj.customer" placeholder="고객사" style="border: 1px solid #989898; border-radius: 8px; padding: 4px;" readonly/>
                </div>
                <div class="d-flex flex-column mb-2" style="flex: 1;">
                    <div class="d-flex">이름</div>
                    <input type="text" v-model="infoObj.name" placeholder="이름" style="border: 1px solid #989898; border-radius: 8px; padding: 4px;"/>
                </div>
                <div class="d-flex flex-column mb-2" style="flex: 1;">
                    <div class="d-flex">생년월일</div>
                    <input type="text" v-model="infoObj.birth" placeholder="생년월일 ex) 920101" style="border: 1px solid #989898; border-radius: 8px; padding: 4px;"/>
                </div>
                <div class="d-flex flex-column mb-2" style="flex: 1;">
                  <div class="d-flex space-between" style="flex: 1;">
                    <div class="d-flex" style="flex: 1;">로그인 가능여부</div>
                    <div class="d-flex" style="color: blue;">1 = Y /&nbsp;<span style="color: red;">2 = N</span></div>
                  </div>
                    <input type="text" v-model="infoObj.login" placeholder="로그인 가능여부" style="border: 1px solid #989898; border-radius: 8px; padding: 4px;"/>
                </div>
                <div class="d-flex flex-column mb-2" style="flex: 1;">
                  <div class="d-flex space-between" style="flex: 1;">
                    <div class="d-flex" style="flex: 1;">E-mail 수신동의여부</div>
                    <div class="d-flex" style="color: blue;">1 = Y /&nbsp;<span style="color: red;">2 = N</span></div>
                  </div>
                  <input type="text" v-model="infoObj.email" placeholder="E-mail 수신동의여부" style="border: 1px solid #989898; border-radius: 8px; padding: 4px;"/>
                </div>
                  <div class="d-flex flex-column mb-2" style="flex: 1;">
                  <div class="d-flex space-between" style="flex: 1;">
                    <div class="d-flex" style="flex: 1;">SMS 수신동의여부</div>
                    <div class="d-flex" style="color: blue;">1 = Y /&nbsp;<span style="color: red;">2 = N</span></div>
                  </div>
                    <input type="text" v-model="infoObj.sms" placeholder="SMS 수신동의여부" style="border: 1px solid #989898; border-radius: 8px; padding: 4px;"/>
                </div>
                <div class="d-flex flex-column mb-2" style="flex: 1;">
                    <div class="d-flex">등록일</div>
                    <input type="text" v-model="infoObj.registDate" placeholder="등록일 ex) 230101" style="border: 1px solid #989898; border-radius: 8px; padding: 4px;"/>
                </div>
                <div class="d-flex flex-column mb-2" style="flex: 1;">
                    <div class="d-flex">가입일</div>
                    <input type="text" v-model="infoObj.date" placeholder="가입일 ex) 220101" style="border: 1px solid #989898; border-radius: 8px; padding: 4px;" @keyup.enter="onClickDone"/>
                </div>                   
            </div>
            <div class="d-flex justify-center align-center" style="flex: 1;">
                <div class="d-flex" style="padding: 16px 50px 16px 50px; border-radius: 8px; background-color: #22a597; color: #fff; cursor: pointer;" @click="onClickDone">확인</div>
            </div>
        </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  props: ['show'],
  data() {
    return {
      propsShow: this.show,
      infoObj: {key: '',customer: '우리WON마켓', name:'', birth:'', login:'', email: '', sms: '',registDate: '', date:''},
        

            // <td>{{ item.key }}</td>
            // <td>{{ item.customer }}</td>
            // <td>{{ item.name }}</td>
            // <td>{{ item.birth }}</td>
            // <td>{{ item.login }}</td>
            // <td>{{ item.email }}</td>
            // <td>{{ item.sms }}</td>
            // <td>{{ item.date }}</td>

    }
  },
  methods:{
    onClickDone(){
        this.$emit('click-done',this.infoObj)
    },

    onClickClose(){
        this.$emit('close')
    }
  },    
  watch: {
    show(val) {
      this.propsShow = val;
    },
    propsShow(val) {
      this.$emit('update:show', val);
    }
    
  }
}
</script>

<style lang="scss" scoped>
    ::v-deep .v-dialog{
        background-color: #fff;
        max-width: 600px;
        height: 780px;
    }

</style>
