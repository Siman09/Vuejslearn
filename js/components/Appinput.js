import buttons from "./AppButton.js";
export default {

template:`
          <input v-model="enterdata" class="text-black px-2 py-1"></input>
           <AppButton v-on:click="go" :processing="true">ADD File</AppButton>
           
`,
data(){
    return{
        
        enterdata:'',
       
    }
},
components: {
          
    AppButton: buttons,
},
methods: {
    go(){
         this.$emit('inherited',this.enterdata);
    }
},
}