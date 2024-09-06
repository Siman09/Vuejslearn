import method from "./methods.js";
import buttons from "./AppButton.js";
export default
    {

        template:
            `
        
        <method></method>
         <AppButton>ADD File</AppButton>
        <input v-model="enterdata" class="text-black px-2 py-1"></input>
        <button class="rounded mx-2 my-2 py-1 px-2 bg-red-400 hover:bg-red-500"  v-on:click="go">Add</button>
        
        <h3 class="font-bold py-2">In Progress</h3>
        <ul>
            <li class="border px-2 py-2" v-for="assignment in inprogress" :key="assignment.id">{{ assignment.name }}<input v-model="assignment.Complete" class="mx-2" type="checkbox"></input></li>
        </ul>
        <h3 class="font-bold pt-2" v-show="assignments.filter(a=>a.Complete).length>0"> Completed assignments<h3>
        <ul>
            <li v-for="assignment in inCompleted">{{assignment.id}})
                {{assignment.name}}
            </li>
        <ul>
    `,
        components: { method,
            AppButton:buttons },
        computed: {
            inprogress() {
                return this.assignments.filter(a => !a.Complete);
            },
            inCompleted() {
                return this.assignments.filter(a => a.Complete);
            }
        },

        data() {
            return {
                assignments: [
                    { name: 'Finish Project', Complete: false, id: 1 },
                    { name: 'Read Chapter 4', Complete: false, id: 2 },
                    { name: 'turn in Home work', Complete: false, id: 3 }
                ],
                enterdata: '',
            };
        },

        methods: {

            go() {
                this.buttonClick = false;
                setTimeout(() => {

                    if (this.enterdata.trim() !== '') {
                        this.assignments.push({ name: this.enterdata, complete: false, id: this.assignments.length + 1 });
                        this.enterdata = '';
                        alert('Enter Sucessfully');
                    } else {

                        alert('Please Enter Assignment Name');
                    }
                }, 2000);

            }


        },

    }