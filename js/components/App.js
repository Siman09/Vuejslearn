import AppButton from "./AppButton.js";
import inputs from "./Appinput.js";

export default
    {

        // <button class="rounded mx-2 my-2 py-1 px-2 bg-red-400 hover:bg-red-500"  v-on:click="go">Add</button>
        template:
            `
            <AppInput @inherited="go"> </AppInput><br><br>
            
        <AppButton v-for="tag in tags" v-on:click="runn(tag)" type='secondary'>{{tag}}</AppButton>
        <h3 class="font-bold py-2">In Progress</h3>
        <ul>
            <li class="border px-2 py-2" v-for="assignment in tagfilter" :key="assignment.id">{{ assignment.name }}<input v-model="assignment.Complete" class="mx-2" type="checkbox"></input></li>
        </ul>
        <h3 class="font-bold pt-2" v-show="assignments.filter(a=>a.Complete).length>0"> Completed assignments<h3>
        <ul>
            <li v-for="assignment in inCompleted">{{assignment.id}})
                {{assignment.name}}
            </li>
        <ul>
    `,
        components: {

      
            AppInput: inputs,
            AppButton: AppButton,
        },
        computed: {
            inprogress() {
                return this.assignments.filter(a => !a.Complete);
            },
            inCompleted() {
                return this.assignments.filter(a => a.Complete);
            },
            tagfilter(){
                if(this.settag==='all')
                {
                    return this.assignments;
                }
                else{
                    return this.assignments.filter(a=>a.tag===this.settag);
                }
            }
        },

        data() {
            return {
                assignments: [
                    { name: 'Read Chapter 1', Complete: false, id: 1,tag:'Math' },
                    { name: 'Read Chapter 2', Complete: false, id: 2,tag:'Math' },
                    { name: 'Read Chapter 3', Complete: false, id: 3,tag:'English' },
                    { name: 'Read Chapter 4', Complete: false, id: 4,tag:'English' },
                    { name: 'Read Chapter 5', Complete: false, id: 5,tag:'Computer' },
                   
                ],
                enterdata: '',
                settag:'',
                tags:[
                    'all','Math','English','Computer'
                ],
            };
        },

        methods: {

            go(obj) {
                setTimeout(() => {

                
                        this.assignments.push({ name: obj, complete: false, id: this.assignments.length + 1 });
                        // this.obj = '';
                        // alert('Enter Sucessfully');
                    
                }, 1);

            },
            runn(tag){
                this.settag=tag;
            }


        },

    }